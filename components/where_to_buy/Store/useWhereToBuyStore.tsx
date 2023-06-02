import { create } from "zustand";
import { WhereToBuy } from "../Model/WhereToBuyModel";
import { callAPI } from "@/utils/Fetchers";
import { GoogleAPI } from "@/constants/APIUrls";

export const useWhereToBuyStore = create<WhereToBuy.Controller>((set,get) => ({
    /**
     * @description input Location Search Box Map
     */
    inputLocation:'',
    /**
     * @description loading state to be shown
     */
    isLoading:false,
    /**
     * @description setter loading to be false, DONT use Bang Operator!!
     */
    onLoadEnd:() => set({isLoading:false}),
     /**
     * @description setter loading to be true, DONT use Bang Operator!!
     */
    onLoadStart:() => set({isLoading:true}),
    /**
     * @description maps key 
     */
    mapsApiKey:'AIzaSyCZy8PsqiP202lhDapwxE8r1qUgZtC-Vjk',
    /**
     * @description health mart key 
    */
    healthMartApiKey:'180A0FF6-6659-44EA-8E03-2BE22C2B27A3',
    /**
     * @description fetchers to set Longitude and Latitude on initial load
    */
    getLatAndLongDetails:async (params) => {
        const { mapsApiKey } = get()
        const response = await callAPI<null,WhereToBuy.MapResponse>(GoogleAPI.GET_LOCATION_MAPS + `?key=${mapsApiKey}&${!isNaN(params) ? `components=postal_code:${Number(params)}` : `address=${params}`}`,null)
        if(response?.status === 200 && response.data?.data){
            set({
                longitude:response?.data?.data[0]?.results?.geometry?.location?.long,
                latitude:response?.data?.data[0]?.results?.geometry?.location?.lat,
            })
        }
    },
    /**
     * @description MARKS : TO BE REFACTORED from map functionality
    */
    getLocationDetails:() => null,
    /**
     * @description MARKS : TO BE REFACTORED from map functionality
    */
    getPDPLoctionDetails:() => null,
    /**
     * @description MARKS : TO BE REFACTORED from map functionality
    */
    selectedMarker:null,
    /**
     * @description MARKS : TO BE REFACTORED from map functionality
    */
    onSelectedMarker:() => null,
    /**
     * @description longitude initial load
     */
    longitude:-111.7256936,
     /**
     * @description latitude initial load
     */
    latitude:33.2411354,
     /**
     * @description on initial Map instance set zoom level of the Map, beware since it is async
     */
    onInitialLoad:() => {
        set({zoomLevel:10})
    },
    /**
     * @state initial zoom level of Map onRender
     */
    zoomLevel:4,
    /**
     * @description USA coords 
     */
    usaLat:39,
    usaLon:-95
})) 