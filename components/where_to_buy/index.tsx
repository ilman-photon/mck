import React from "react";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import {
  InfoWindow,
  GoogleMap,
  Marker,
  useLoadScript,
  TransitLayer,
} from "@react-google-maps/api";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import { useWhereToBuyStore } from "./Store/useWhereToBuyStore";
import { mapConfigOptions } from "@/utils/MapConfig";

function WhereComponent() {
  const [responseValue, setResponseValue] = useState<any>();
  const [latitude, setLatitude] = useState(33.2411354);
  const [isCustomSearch, setIsCustomSearch] = useState(false);
  const [longitude, setLongitude] = useState(-111.7256936);
  const [loading, setLoading] = useState(true); // Tambahkan state loading
  const [selectedStore, setSelectedStore] = useState(-1);
  // let textInput: any;
  let [textInput, setTextInput] = useState<any>('')
  /**
   * @state creds key
   */
  const mapKey = useWhereToBuyStore((state: any) => state.mapsApiKey);
  const healthApiKey = useWhereToBuyStore(
    (state: any) => state.healthMartApiKey
  );

  /**
   * @state initial zoom level of Map onRender
   */
  const initialZoomLevelMap = useWhereToBuyStore(
    (state: any) => state.zoomLevel
  );

  /**
   * @state USA Coords
   */
  const usaLon = useWhereToBuyStore((state: any) => state.usaLon);
  const usaLat = useWhereToBuyStore((state: any) => state.usaLat);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapKey,
  });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [showTransit] = useState<boolean>();

  const showMapClicked = (lat: any, long: any, store: any) => {
    window.open("https://maps.google.com?q=" + lat + "," + long);
  };

  const showOnline = (url: any) => {
    window.open(url, "_blank");
  };

  function fectchLatandLongDetails() {
    return axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${mapKey}&${
        !isNaN(textInput)
          ? `components=postal_code:${Number(textInput)}`
          : `address=${textInput}`
      }`,
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
    fetchLocationDetails();
  }, [latitude]);
  useEffect(() => {
    // textInput = 75201;
    if(!isCustomSearch){
      setTextInput(75201)
    }
    // setTextInput('75201')
    fectchLatandLongDetails()
      .then((res) => {
        setLatitude(res?.data?.results[0]?.geometry.location["lat"]);
        setLongitude(res?.data?.results[0]?.geometry.location["lng"]);
      })
      .catch((e: Error | AxiosError) => console.log(e));
  }, [isCustomSearch]);
  const fetchLocationDetails = () => {
    setLoading(true);
    fetchPDPLoctionDetails()
      .then((res) => {
        setResponseValue(res?.data);
        setLoading(false);
      })
      .catch((e: Error | AxiosError) => {
        setLoading(false);
      });
  };

  const handleLocationClick = (i: any, data: any) => {
    setSelectedMarker(null);
    setSelectedMarker(data);
    setSelectedStore(i);
  };
  const style = {
    width: "100%",
    height: "100%",
  };
  const handleMapClick = (value: any, i: any) => {
    setSelectedMarker(value);
    setSelectedStore(i);
    const element = document.getElementById(
      "store-item" + i
    ) as HTMLElement | null;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };
  const handleKey = () => {
      fectchLatandLongDetails()
        .then((res) => {
          setLatitude(res?.data?.results[0]?.geometry.location['lat']);
          setLongitude(res?.data?.results[0]?.geometry.location['lng']);
          setIsCustomSearch(true)
        })
        .catch((e: Error | AxiosError) => console.log(e));
  };

  return (
    <>
      {loading ? ( // Tampilkan elemen loading jika loading = true
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div
            className="relative"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Image
              src={gifImage}
              alt="coba-image"
              width={400}
              height={400}
              loading="eager"
            />
          </div>
        </div>
      ) : (
      <div className="container pl-0 pr-0 flex lg:flex-row px-4 flex-col-reverse mx-auto lg:h-854 lg:pt-0 where-to-buy" id="carouselExampleCaptions">
          <div>
          <div className="absolute lg:relative top-[81px] z-[1] left-4 right-4 p-4 lg:p-0 flex lg:flex-row flex-col rounded-lg lg:m-6 lg:top-0 lg:left-0 bg-[#FFFDFB] shadow-[6px_10px_20px_rgba(0, 26, 113, 0.15)]">
              <input
                type="text"
                id="fname"
                name="fname"
                role="search"
                onChange={(e) => setTextInput(e.target.value)}
                value={!isCustomSearch ? undefined : textInput}
                onKeyDown={(e) => e.key === 'Enter' ? handleKey() : null}
                placeholder="City, State or Zip code"
                className="border-mckblue bg-[#F8F9FB] w-full pl-3 py-3 pr-10 pt-[11px] pb-[11px] border rounded colors-[#4D5F9C] text-base font-normal text-sofia-reg text-mckblue70 relative wheretwobuy"
              />
              <div onClick={handleKey} className="cursor-pointer">
              <Image
                src="images/Vector-nw.svg"
                alt="location"
                // className="cursor-pointer text-mckgreyborder absolute lg:top-7 top-[63px] right-8"
                // width={24}
                // height={25}
                className="text-mckgreyborder absolute top-[29px] right-[28px] lg:top-[12px] lg:right-5"
                width={15}
                height={20}
              />
              </div>
            </div>
            <div
              className="lg:w-598 max-w-[498px] w-full p-6 mr-6 text-mcknormalgrey text-sm font-normal text-sofia-reg lg:pt-0 mt-2 lg:mt-6"
              aria-label="Disclaimer"
              id="wb-label-001"
            >
              Disclaimer: Products are subject to availability
            </div>
            <div className="pb-6 pl-6 lg:pr-4 pr-4 lg:max-w-[498px] lg:w-598 w-full overflow-y-scroll lg:h-760 mr-6 location-box">
              {responseValue?.map((value: any, index: Number) => {
                return (
                  <div
                    className={
                      index === selectedStore
                        ? "text-mckthingrey border rounded-lg p-4 mb-4 bg-shadesblue"
                        : "text-mckthingrey border rounded-lg p-4 mb-4"
                    }
                    key={value.id}
                    onClick={() => handleLocationClick(index, value)}
                    id={"store-item" + index}
                  >
                    <div className="pb-2 cursor-pointer">
                      <Image
                        src="/images/health-mart.png"
                        alt="Health Mart"
                        id={`wb-label-02${index}`}
                        width={150}
                        height={39}
                      />
                    </div>
                    <div className="flex flex-row justify-between pb-2">
                      <div className="text-sofia-reg text-mcknormalgrey text-lg font-normal">
                        <p
                          className="font-extrabold"
                          aria-label="ABC Pharmacy"
                          id={`wb-label-03${index}`}
                        >
                          {value.StoreName}
                        </p>
                        <p
                          aria-label="1230 Lindon Ave"
                          id={`wb-label-04${index}`}
                        >
                          {value.Address},{" "}
                        </p>
                        <p
                          aria-label="DENVER, CO. 80202"
                          id={`wb-label-05_0${index}`}
                        >
                          {value.City} {value.Zip}
                        </p>
                        <p
                          className="text-mckblue"
                          aria-label="303-571-5314"
                          id={`wb-label-06_0${index}`}
                        >
                          {value.Phone}
                        </p>
                      </div>
                      <div
                        className="lg:text-lg leading-8 font-extrabold text-mcknormalgrey"
                        aria-label=".3 mi"
                        id={`wb-label-07_0${index}`}
                      >
                        {Number(value.Distance).toFixed(1)} mi
                      </div>
                    </div>
                    <div className="flex flex-row justify-between">
                      {value?.StoreUrl ? (
                        <div
                          className="text-lg font-extrabold text-mckblue text-sofia-bold cursor-pointer"
                          id={`wb-label-08_0${index}`}
                          onClick={() => showOnline(value.StoreUrl)}
                        >
                          View Online
                        </div>
                      ) : (
                        <div className="text-lg font-extrabold text-mckblue text-sofia-bold cursor-pointer"></div>
                      )}
                      <div className="text-lg font-extrabold text-mckblue text-sofia-bold">
                        <Image
                          src="/images/directions_car_filled.svg"
                          alt="direction"
                          className="inline-block"
                          id={`wb-label-09_0${index}`}
                          width={24}
                          height={25}
                        />
                        <button
                          className="inline-block relative top-1 cursor-pointer"
                          id={`wb-label-10_0${index}`}
                          onClick={() =>
                            showMapClicked(
                              value.Lat,
                              value.Lon,
                              value.StoreName
                            )
                          }
                        >
                          Get Directions
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-842 w-full relative h-782 lg:h-854">
            <GoogleMap
              mapContainerClassName="map-container"
              mapContainerStyle={style}
              options={mapConfigOptions}
              zoom={isCustomSearch ? 15 : initialZoomLevelMap}
              center={{
                lat:
                  responseValue?.length > 0 || isCustomSearch
                    ? responseValue[0]?.Lat
                    : usaLat,
                lng:
                  responseValue?.length > 0 || isCustomSearch
                    ? responseValue[0]?.Lon
                    : usaLon,
              }}
            >
              <TransitLayer />
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
                        onCloseClick={() => {
                          setSelectedMarker(null);
                          setSelectedStore(-1);
                        }}
                      >
                        <div
                          className=""
                          key={value.id}
                          onClick={() => handleLocationClick(index, value)}
                        >
                          <div className="pb-2 cursor-pointer">
                            <Image
                              src="/images/health-mart.png"
                              alt="Health Mart"
                              id={`wb-img-002_0${index}`}
                              width={150}
                              height={39}
                            />
                          </div>
                          <div className="flex">
                            <span className="text-mcknormalgrey mb-2.5">
                              <p className="text-sofia-reg lg:text-lg text-base font-extrabold lg:mb-2 lg:leading-5" id={`wb-label-003${index}`} >
                                {value.StoreName}
                              </p>
                              <p className="text-sofia-reg lg:text-lg text-base font-normal lg:mb-2 lg:leading-5">
                                {value.Address},{" "}
                              </p>
                              <p className="text-sofia-reg lg:text-lg text-base font-normal lg:leading-5 lg:mb-2">
                                {" "}
                                {value.City} {value.Zip}
                              </p>
                              <p className="text-sofia-reg text-mckblue lg:text-lg text-base font-normal lg:leading-5 lg:mb-2">
                                {value.Phone}
                              </p>
                            </span>
                            <h2 className="text-sofia-reg text-mckblue lg:text-20 text-base font-extrabold ml-auto">
                              {Number(value.Distance).toFixed(1)} mi
                            </h2>
                          </div>

                          <div className="flex mt-2 mb-4">
                            {value?.StoreUrl ? (
                              <button
                                className="text-sofia-bold font-extrabold text-mckblue cursor-pointer lg:mr-7 text-lg leading-5"
                                onClick={() => showOnline(value.StoreUrl)}
                              >
                                View Online
                              </button>
                            ) : null}

                            <button
                              className="text-sofia-bold font-extrabold text-mckblue ml-auto lg:ml-0 cursor-pointer text-lg leading-5"
                              onClick={() =>
                                showMapClicked(
                                  value.Lat,
                                  value.Lon,
                                  value.StoreName
                                )
                              }
                            >
                              Get Directions
                            </button>
                          </div>
                        </div>
                      </InfoWindow>
                    )}
                  </Marker>
                );
              })}
            </GoogleMap>

            <div className="flex gap-2 divider-x lg:flex-row left-1/2 absolute bottom-2 ml-145 lg:ml-auto lg:left-0 rounded-tl rounded-bl lg:rounded-tl-none lg:rounded-bl-none rounded-tr rounded-br bg-[#FFFDFB] shadow-[6px_10px_20px_rgba(0, 26, 113, 0.15)]">
              <div className="p-2">
                <h2 className="text-sm text-gray-900 dark:text-white">
                  Transit
                </h2>
                <h1 className="text-xs text-gray-600 dark:text-white">
                  Click on stations for more information
                </h1>
              </div>
              <div className="w-[1px] bg-gray-200" />
              <div className="p-2">
                <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] 
                  bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 
                  before:rounded-full before:bg-transparent before:content-[''] 
                  after:absolute after:z-[2] 
                  after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none 
                  after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
                  after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
                  checked:bg-blue-200 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] 
                  checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full 
                  checked:after:border-none checked:after:bg-primary 
                  checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
                  checked:after:bg-blue-600
                  checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] 
                  hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12
                  dark:checked:bg-primary dark:checked:after:bg-primary 
                  dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] 
                  dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  type="checkbox"
                  role="switch"
                  checked={showTransit}
                />
              </div>
            </div>
            {/* <div className="flex lg:flex-row flex-col absolute top-2 left-2 right-2 rounded-lg p-4 bg-[#FFFDFB] shadow-[6px_10px_20px_rgba(0, 26, 113, 0.15)]">
              <label
                htmlFor="fname"
                className="flex items-center lg:justify-center justify-start text-[20px] font-extrabold text-sofia-bold text-mckblue lg:mr-3 mb-3 lg:mb-0 leading-[24px]"
                id="wb-label-012"
              >
                Where to buy
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={!isCustomSearch ? undefined : textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' ? handleKey() : null}
                placeholder="City, State or Zip code"
                className="lg:w-83 bg-white pl-3 py-3 pr-10 border border-[#001A71] rounded colors-[#4D5F9C] text-base font-normal text-sofia-reg text-mckblue70 relative wheretwobuy"
              />
              <div onClick={handleKey} className="cursor-pointer">
              <img
                src="images/location_on.svg"
                alt="location"
                className="text-mckgreyborder absolute lg:top-7 top-16 right-8"
              />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}
export default WhereComponent;
