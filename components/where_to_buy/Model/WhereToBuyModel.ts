export interface MapViewComponent {
    /**
     * @description Map value of latitude
     */
    latitude:number
    /**
     * @description Map value of longitude
     */
    longitude:number
    /**
     * @description The initial Map zoom level. Required. Valid values: Integers between zero, and up to the supported maximum zoom level.
     */
    zoomLevel:number
}

/**
 * @description Health Mart Data Response
 */

interface MapData {
    Address: string
    City: string
    Distance: string
    Lat: number
    Lon: number
    Phone: string
    SearchType:string
    ShowAmazonHubIcon: number
    ShowCOVIDIcon: number
    ShowCOVIDVaccineIcon: number
    ShowHHSPrEPIcon: number
    ShowHmdpBasic: number
    ShowHmdpPremium: number
    ShowVaccineIcon: number
    ShowWebsite: number
    State: string
    StoreId: number
    StoreName: string
    StoreUrl: string
    Zip: string
}

export declare module WhereToBuy {
    interface Controller extends UnitedStatesMap {
        inputLocation:string
        isLoading:boolean
        onLoadStart:() => void
        onLoadEnd:() => void
        mapsApiKey:any
        healthMartApiKey:any
        getLatAndLongDetails: (params:any) => Promise<void>
        getPDPLoctionDetails: () => void
        getLocationDetails:() => void
        selectedMarker:MapData | null
        onSelectedMarker:() => void
        longitude:number
        latitude:number
        onInitialLoad:() => void
        zoomLevel:number
        onViewOnlineStore:(StoreId:string) => void
    }

    interface UnitedStatesMap {
        usaLon:number
        usaLat:number
    }

    interface MapRequest {
        key?:string
        components?:number | string
        address:string
    }

    interface MapCoords {
        geometry: {
            location:{
                lat:number
                long:number
            }
        }
    }

    interface MapResults {
        results:MapCoords
    }

    interface MapResponse {
        data:MapResults[]
    }
}