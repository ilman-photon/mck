import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { InfoWindow, GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

function PdpLocation(props: any) {

    const [responseValue, setResponseValue] = useState<any>();
    const [latitude, setLatitude] = useState(33.2411354)
    const [longitude, setLongitude] = useState(-111.7256936)
    const [selectedStore, setSelectedStore] = useState(-1)
    let textInput: any
    // const [textInput , setTextInput] = useState<any>()
    const apiKey = "180A0FF6-6659-44EA-8E03-2BE22C2B27A3"
    const googleApiKey = "AIzaSyCZy8PsqiP202lhDapwxE8r1qUgZtC-Vjk"
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCZy8PsqiP202lhDapwxE8r1qUgZtC-Vjk",
    });
    const [selectedMarker, setSelectedMarker] = useState(null);

    function fectchLatandLongDetails() {
        return axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?key=${googleApiKey}&${!isNaN(textInput) ? `components=postal_code:${Number(textInput)}` : `address=${textInput}`}`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );

    }

    function fetchPDPLoctionDetails() {
        return axios.get(
            `https://native.healthmart.com/HmNativeSvc/SearchByGpsAllNoState/${latitude}/${longitude}?apikey=${apiKey}`,
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
    const handleKey = (e: any) => {
        if (e.key === 'Enter') {
            textInput = e.target.value
            // setTextInput(e.target.value)
            fectchLatandLongDetails()
                .then((res) => {
                    setLatitude(res.data.results[0].geometry.location['lat'])
                    setLongitude(res.data.results[0].geometry.location['lng'])

                })
                .catch((e: Error | AxiosError) => console.log(e));
        }

    }

    return isLoaded ? (
        <div className="row-span-2">
            <input type="text" value={textInput}
                //  onChange={(e)=>setTextInput(e.target.value) }
                placeholder="City, State or Zip code"
                onKeyDown={(e) => handleKey(e)}
                className="flex flex-row rounded border border-solid border-mcklggrey items-center gap-2 w-full h-12 bg-mcklightyellow "  title="Search" role="combobox" />
            <div className="pb-6 pt-6 text-mcknormalgrey text-sm font-normal text-sofia-reg" tabIndex={0} aria-label="Disclaimer" id="wb-label-001">Disclaimer: Products are subject to availability</div>
            <div className="mb-6" style={{ position: "relative", height: "40vh" }}>
                <GoogleMap
                    mapContainerClassName="map-container"
                    mapContainerStyle={style}
                    zoom={8}
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
                                        <div className="" key={value.id} onClick={() => handleLocationClick(index, value)}>
                                            <div className="pb-2"><img src="images/health-mart.png" alt="Health Mart" tabIndex={0} id="wb-img-002" /></div>
                                            <div className="flex">
                                                <span className="text-sofia-reg text-mcknormalgrey" >
                                                    <span >{value.Address}, </span>
                                                    <div> {value.City} {value.Zip}</div>
                                                    <div className=" text-mckblue">{value.Phone}</div>
                                                </span>
                                                <h2 className="text-sofia-reg text-mckblue text-27 font-bold ml-auto">{Number(value.Distance).toFixed(1)} mi</h2>
                                            </div>

                                            <div className="flex mt-2">
                                                <button className="text-sofia-bold font-extrabold text-mckblue">View Online</button>

                                                <button className="text-sofia-bold font-extrabold text-mckblue ml-auto">Get Directions</button>
                                            </div>
                                        </div>
                                    </InfoWindow>
                                )}
                            </Marker>
                        );
                    })}
                </GoogleMap>
            </div>

            <div className="max-h-96 overflow-y-auto scrollbar-thin">
            {responseValue?.map((value: any, index: Number) => {
                        return <div className={index === selectedStore ? "text-mckthingrey border rounded-lg p-4 mb-4 bg-shadesblue " : "text-mckthingrey border rounded-lg p-4 mb-4"} key={value.id} onClick={() => handleLocationClick(index, value)} id={"store-item" + index}>
                        <div className="pb-2"><img src="images/health-mart.png" alt="Health Mart" tabIndex={0} id="wb-img-002" /></div>
                        <div className="flex flex-row justify-between pb-2">
                            <div className="text-sofia-reg text-mcknormalgrey text-lg font-normal" >
                                <p tabIndex={0} aria-label="1230 Lindon Ave" id="wb-label-004">{value.Address}, </p>
                                <p tabIndex={0} aria-label="DENVER, CO. 80202" id="wb-label-005">{value.City} {value.Zip}</p>
                                <p tabIndex={0} aria-label="303-571-5314" id="wb-label-006">{value.Phone}</p>
                            </div>
                            <div className="text-2xl font-extrabold text-mcknormalgrey" tabIndex={0} aria-label=".3 mi" id="wb-label-007">{Number(value.Distance).toFixed(1)} mi</div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="text-lg font-extrabold text-mckblue text-sofia-bold" tabIndex={0} role="link" id="wb-label-008">View Online</div>
                            <div className="text-lg font-extrabold text-mckblue text-sofia-bold">
                                <img src="images/directions_car_filled.svg" alt="direction" className="inline-block" tabIndex={0} id="wb-img-009" />
                                <p className="inline-block relative top-1" tabIndex={0} role="link" id="wb-label-010">Get Directions</p>
                            </div>
                        </div>
                    </div>
                    })}
            </div>
        </div>
    ) : <></>
}
export default PdpLocation;