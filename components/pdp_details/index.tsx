import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

function PdpDetail(pdpViewData: any) {
  const router = useRouter();
  const { data } = router.query;
    const [responceValue, setResponceValue] = useState<any>();

    function fetchPDPDetails() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/pdp/${data?.length >0 ? data : "vitamin-d3-50-mcg-2000"}/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchPDPDetails()
            .then((res) => {
                setResponceValue(res.data[0]);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    return (

        <div className="lg:row-span-3 lg:ml-[72px] pdp-details-heading">
            <p className="text-gtl-med text-mckblue font-medium mb-6" id="pdp_details_001"
                dangerouslySetInnerHTML={{ __html: responceValue?.title.value, }}></p>
            <h2 className="text-gtl-med text-mcknormalgrey text-4xl font-medium mb-2" id="pdp_details_002"
                dangerouslySetInnerHTML={{ __html: responceValue?.subTitle?.value, }}></h2>
            <p className="text-gtl-med text-mcknormalgrey text-4xl font-medium mb-2" id="pdp_details_003"
                dangerouslySetInnerHTML={{ __html: responceValue?.volume?.value, }}></p>
            {/* <p className="text-gtl-med text-mcknormalgrey text-4xl font-medium mb-6">100 SOFTGELS</p> */}
            <div tabIndex={0} className="border-y-2 py-6">
                <h6 className="text-gtl-med text-mcknormalgrey text-2xl font-medium" id="pdp_details_004">Description</h6>
                <ul className="pdp-detail-description text-sofia-reg text-mcknormalgrey text-lg font-normal list-disc pl-9">
                    <div dangerouslySetInnerHTML={{ __html: responceValue?.description?.value, }} id="pdp_details_005"></div>
                </ul>
            </div>
            <div tabIndex={0} className="tab w-full overflow-hidden text-lg font-medium text-lg text-sofia-reg border-y">
                <input type="checkbox" id="pdp_details_chck2" />
                <label className="tab-label py-3 px-4 flex justify-between border-y cursor-pointer lg:text-lg text-base" htmlFor="pdp_details_chck2">Ingredients</label>
                <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey w-full">
                    <p dangerouslySetInnerHTML={{ __html: responceValue?.ingredients?.value, }} id="pdp_details_006"></p>
                </div>
            </div>
            <div tabIndex={0} className="tab w-full overflow-hidden text-lg font-medium text-lg text-sofia-reg border-y">
                <input type="checkbox" id="pdp_details_chck3" />
                <label className="tab-label py-3 px-4 flex justify-between border-y cursor-pointer lg:text-lg text-base" htmlFor="pdp_details_chck3">Directions</label>
                <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey w-full">
                    <p dangerouslySetInnerHTML={{ __html: responceValue?.ingredients?.value, }} id="pdp_details_007"></p>
                </div>
            </div>
            <div tabIndex={0} className="tab w-full overflow-hidden text-lg font-medium text-lg text-sofia-reg border-y">
                <input type="checkbox" id="pdp_details_chck4" />
                <label className="tab-label py-3 px-4 flex justify-between border-y cursor-pointer lg:text-lg text-base" htmlFor="pdp_details_chck4">Warnings</label>
                <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey w-full">
                    <p dangerouslySetInnerHTML={{ __html: responceValue?.warnings?.value, }} id="pdp_details_008"></p>
                </div>
            </div>

        </div>
    );
}
export default PdpDetail;
