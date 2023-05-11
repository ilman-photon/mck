import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { InfoWindow, GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

function PdpLocation(props: any) {

    const [responseValue, setResponseValue] = useState<any>();
    const [selectedStore, setSelectedStore] = useState(-1)
    const apiKey = "180A0FF6-6659-44EA-8E03-2BE22C2B27A3"
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCZy8PsqiP202lhDapwxE8r1qUgZtC-Vjk",
    });
    const [selectedMarker, setSelectedMarker] = useState(null);

    function fetchPDPLoctionDetails() {
        return axios.get(
            `https://native.healthmart.com/HmNativeSvc/SearchByGpsAllNoState/33.2411354/-111.7256936?apikey=${apiKey}`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchPDPLoctionDetails()
            .then((res) => {
                setResponseValue(res.data);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

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

    return isLoaded ? (
        <div className="row-span-2">
            <input type="text" value="" className="flex flex-row rounded border border-solid border-mcklggrey items-center gap-2 w-full h-12 bg-mcklightyellow " placeholder="Search by keyword or item #" title="Search" role="combobox" />
            <p className="text-sofia-reg font-normal text-sm text-mcknormalgrey py-6">City, State or Zip code</p>
            {/* <img className="mb-6" src="images/map.png" alt="map" /> */}
            <div className="mb-6" style={{ position: "relative", height: "40vh" }}>
                <GoogleMap
                    mapContainerClassName="map-container"
                    mapContainerStyle={style}
                    zoom={8}
                    center={{
                        lat: 33.2331,
                        lng: -111.864,
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
                                        <div className="pr-5" key={value.id} onClick={() => handleLocationClick(index, value)}>
                                            <div>Image</div>
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
                    return <div className={index === selectedStore ? "mt-5 pr-5 bg-shadesblue " : "mt-5 pr-5"} key={value.id} onClick={() => handleLocationClick(index, value)} id={"store-item" + index}>
                        <div>Image</div>
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

                })}
            </div>
        </div>
    ) : <></>
}
export default PdpLocation;