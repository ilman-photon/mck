import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { InfoWindow, GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useWhereToBuyStore } from "../where_to_buy/Store/useWhereToBuyStore";
import { mapConfigOptions } from "@/utils/MapConfig";

function PdpLocation(props: any) {

    const [responseValue, setResponseValue] = useState<any>();
    const [latitude, setLatitude] = useState(33.2411354)
    const [longitude, setLongitude] = useState(-111.7256936)
    const [selectedStore, setSelectedStore] = useState(-1)
    // let textInput: any
    const [textInput,setTextInput] = useState<any>('')
    const mapKey = useWhereToBuyStore((state: any) => state.mapsApiKey)
    const healthApiKey = useWhereToBuyStore((state: any) => state.healthMartApiKey)
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: mapKey
    });

    const [selectedMarker, setSelectedMarker] = useState(null);

    const showMapClicked = (lat: any, long: any) => {
        window.open("https://maps.google.com?q=" + lat + "," + long);
    };

    const showOnline = (url: any) => {
        window.open(url, '_blank');
    }
    function fectchLatandLongDetails() {
        return axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?key=${mapKey}&${!isNaN(textInput) ? `components=postal_code:${Number(textInput)}` : `address=${textInput}`}`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );

    }

    function fetchPDPLoctionDetails() {
        return axios.get(
            `https://native.healthmart.com/HmNativeSvc/SearchByGpsAllNoState/${latitude}/${longitude}?apikey=${healthApiKey}`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {

        fetchLocationDetails()

    }, [latitude])

    const fetchLocationDetails = () => {
        fetchPDPLoctionDetails()
            .then((res) => {
                setResponseValue(res.data);
            })
            .catch((e: Error | AxiosError) => console.log(e));

    }

    const handleLocationClick = (i: any, data: any) => {
        setSelectedMarker(null)
        setSelectedMarker(data)
        setSelectedStore(i)
    }
    const style = {
        width: "100%",
        height: "100%",
    };
    const handleMapClick = (value: any, i: any) => {
        setSelectedMarker(value)
        setSelectedStore(i)
        const element = document.getElementById('store-item' + i) as HTMLElement | null;
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
    const handleKey = () => {
        // if (e.key === 'Enter') {
            // textInput = e.target.value
            // setTextInput(e.target.value)
            fectchLatandLongDetails()
                .then((res) => {
                    setLatitude(res.data.results[0].geometry.location['lat'])
                    setLongitude(res.data.results[0].geometry.location['lng'])

                })
                .catch((e: Error | AxiosError) => console.log(e));
        // }
    }

    return isLoaded ? (
        <div className="row-span-2 lg:pt-[72px]">
            <div className="relative mx-4 lg:mx-0 mt-6 lg:mt-0">
                <input type="text" 
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="City, State or Zip code"
                    onKeyDown={(e) => e.key === 'Enter' ? handleKey() : null}
                    className="pl-[46px] flex flex-row rounded-full lg:rounded border border-solid border-mcklggrey items-center gap-2 w-full h-12 bg-blue text-mckgreyborder bg-[#F8F9FB] pl-9" title="Search" />
                <div onClick={handleKey} className="cursor-pointer">
                <img src="images\search_btn.png" alt="img" className="absolute left-4 top-4" />
                </div>
            </div>

            <div className="pb-6 pt-6 text-mcknormalgrey text-sm font-normal text-sofia-reg mx-4 lg:mx-0" aria-label="Disclaimer" id={`wd-lb-${props.index}-01`}  >Disclaimer: Products are subject to availability</div>
            <div className="mb-6 h-[300px] mx-4 lg:mx-0" style={{ position: "relative" }}>
                <GoogleMap
                    mapContainerClassName="map-container product-detail-map box-border border border-solid border-mckblue"
                    mapContainerStyle={style}
                    zoom={10}
                    options={mapConfigOptions}
                    center={{
                        lat: responseValue?.length > 0 ? responseValue[0]?.Lat : 33.2411354,
                        lng: responseValue?.length > 0 ? responseValue[0]?.Lon : -111.7256936,
                    }}
                >
                    {responseValue?.map((value: any, index: any) => {
                        return (
                            <Marker
                                key={index}
                                position={{
                                    lat: value.Lat,
                                    lng: value.Lon,
                                }}
                                onClick={() => {
                                    handleMapClick(value, index);
                                }}

                            >

                                {selectedMarker === value && (
                                    <InfoWindow
                                        position={{
                                            lat: value.Lat,
                                            lng: value.Lon,
                                        }}

                                        onCloseClick={() => { setSelectedMarker(null); setSelectedStore(-1) }}
                                    >
                                        <div className="container" key={value.id} onClick={() => handleLocationClick(index, value)}>
                                            <div className="pb-2 cursor-pointer">
                                                <img src="images/health-mart.png" alt="Health Mart" id={`pdp-img-00` + index} /></div>
                                            <div className="flex">
                                                <span className="text-sofia-reg text-mcknormalgrey mb-1">
                                                    <div className="text-sofia-reg lg:text-lg text-base font-extrabold lg:mb-2 lg:leading-5">{value.Address}, </div>
                                                    <div className="text-sofia-reg lg:text-lg text-base font-normal lg:leading-5 lg:mb-2"> {value.City} {value.Zip}</div>
                                                    <div className="text-sofia-reg text-mckblue lg:text-lg text-base font-normal lg:leading-5 leading-[20px]">{value.Phone}</div>
                                                </span>
                                                <h2 className="text-sofia-reg lg:text-20 text-base font-extrabold ml-auto">{Number(value.Distance).toFixed(1)} mi</h2>
                                            </div>

                                            <div className="flex mt-2 flex-row justify-between">
                                                <button className="text-sofia-bold font-extrabold text-mckblue cursor-pointer lg:mr-7 text-lg leading-5" aria-pressed="true" onClick={() => showOnline(value.StoreUrl)}>View Online</button>

                                                <button className="text-sofia-bold font-extrabold text-mckblue ml-auto lg:ml-0 text-lg leading-5 cursor-pointer" aria-pressed="true" onClick={() => showMapClicked(value.Lat, value.Lon)}>Get Directions</button>
                                            </div>
                                        </div>
                                    </InfoWindow>
                                )}
                            </Marker>
                        );
                    })}
                </GoogleMap>
            </div>

            <div className="h-[500px] overflow-y-scroll scrollbar-thick scrollbar-thumb-blue-500 scrollbar-track-blue-100 mx-4 lg:mx-0 location-box lg:pr-4 pr-4">
                {responseValue?.map((value: any, index: Number) => {
                    return <div className={index === selectedStore ? "text-mckthingrey border rounded-lg p-3 mb-4 bg-shadesblue " : "text-mckthingrey border rounded-lg p-3 mb-3"} key={value.id} onClick={() => handleLocationClick(index, value)} id={"store-item" + index}>
                        <div className="pb-2 cursor-pointer"><img src="images/health-mart.png" alt="Health Mart" id={`pdp-img_${props.index}-${index}`} /></div>
                        <div className="flex flex-row justify-between pb-2">
                            <div className="text-sofia-reg text-mcknormalgrey text-lg font-normal" >
                                <p aria-label="MEDMETRICS PHARMACY" className="font-extrabold leading-5 mb-2" id={`pdp-address_${props.index}-${index}`}>{value.StoreName}</p>
                                <p aria-label="1230 Lindon Ave" className="font-extrabold leading-5 mb-2" id={`pdp-address_${props.index}-${index}`}>{value.Address}, </p>
                                <p aria-label="DENVER, CO. 80202" id={`pdp-address_${props.index}-00${index}`} className="leading-5 mb-2">{value.City} {value.Zip}</p>
                                <p aria-label="303-571-5314" id={`pdp-address_${props.index}-000${index}`} className="text-mckblue leading-5">{value.Phone}</p>
                            </div>
                            <div className="lg:text-lg leading-8 font-extrabold text-mcknormalgrey" aria-label=".3 mi" id={`pdp-distance_${props.index}-${index}`}>{Number(value.Distance).toFixed(1)} mi</div>
                        </div>
                        <div className="flex flex-row justify-between mt-1">
                            <div className="text-lg font-extrabold text-mckblue text-sofia-bold leading-5 cursor-pointer"  role="link" id={`pdp-view_${props.index}-${index}`} onClick={() => showOnline(value.StoreUrl)} >View Online</div>
                            <div className="text-lg font-extrabold text-mckblue text-sofia-bold leading-5">
                                <img src="images/directions_car_filled.svg" alt="direction" className="inline-block" id={`pdp-directionimg_${props.index}-${index}`} />
                                <p className="inline-block relative top-1 cursor-pointer"  role="link" id={`pdp-location_${props.index}-${index}`} onClick={() => showMapClicked(value.Lat, value.Lon)}>Get Directions</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    ) : <></>
}
export default PdpLocation;