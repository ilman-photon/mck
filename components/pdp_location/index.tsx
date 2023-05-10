import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

function PdpLocation() {

    const [responseValue, setResponseValue] = useState<any>();
    const apiKey = "180A0FF6-6659-44EA-8E03-2BE22C2B27A3"

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

    const handleLocationClick = (i: Number, data: any) => {
    }

    return (
        <div className="row-span-2">
            <input type="text" value="" className="flex flex-row rounded border border-solid border-mcklggrey items-center gap-2 w-full h-12 bg-mcklightyellow " placeholder="Search by keyword or item #" title="Search" role="combobox" />
            <p className="text-sofia-reg font-normal text-sm text-mcknormalgrey py-6">City, State or Zip code</p>
            <img className="mb-6" src="images/map.png" alt="map" />
            <div className="max-h-96 overflow-y-auto scrollbar-thin">
                {responseValue?.map((value: any, index: Number) => {
                    return <div className="mt-11 pr-5 " onClick={() => handleLocationClick(index, value)}>
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
    );
}
export default PdpLocation;
