
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
function PdpCarousel(prodViewData: any) {

    const [prodResponse, setProdResponse] = useState<any>();

    function fetchPDPCarouselDetails() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/pdp/vitamin-d3-50-mcg-2000/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchPDPCarouselDetails()
            .then((res) => {
                setProdResponse(res.data[0]);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    return (
        <div className="flex mx-auto">
            <div className="flex mx-auto">
                <div className="">
                    <div className="_2mLllQ">
                        <ul className="_3GnUWp">
                            {prodResponse?.productImages?.value?.slice(0, 5).map((imgdata: any) => (
                                <li className="w-24 h-24 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3" id={"pdp_carousel_"+imgdata?.id}  key={imgdata?.id}>
                                    <img className="max-w-xl w-10" src={imgdata?.url}  />
                                </li>
                            )
                            )}
                        </ul>
                    </div>
                </div>
                <div className="w-[526px] h-[636px] box-border flex flex-row justify-center items-center p-2 bg-white rounded border border-solid border-mckblue ml-14">
                    <img alt="" id={"pdp_carousel_"+prodResponse?.productImages?.value?.imgdata?.id} src={prodResponse?.productImages?.value[1]?.url} />
                </div>
            </div>
        </div>
    );
}

export default PdpCarousel;
