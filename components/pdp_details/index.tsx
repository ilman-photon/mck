import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from 'isomorphic-dompurify';

function PdpDetail(pdpViewData: any) {
  const router = useRouter();
  const { data } = router.query;
    const [responceValue, setResponceValue] = useState<any>();
    const [selectedIngredient, setSelectedIngredient] = useState<boolean>(false)
    const [selectedDirections, setSelectedDirections] = useState<boolean>(false)
    const [selectedWarnings, setSelectedWarnings] = useState<boolean>(false)
    
    function fetchPDPDetails() {
        return axiosInstance.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/pdp/${data?.length ? data : "vitamin-d3-50-mcg-2000"}/&expand=*`);
    }

    const onClickDropDown = (e: string, key: string) => {
        if(e == "Enter" || e === 'click') {
            if(key == "ingredient") {
                setSelectedIngredient(!selectedIngredient)
            } else if(key == "directions") {
                setSelectedDirections(!selectedDirections)
            } else if(key == "warnings") {
                setSelectedWarnings(!selectedWarnings)
            }
        }
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
            <h1 className="text-gtl-med text-mckblue text-32 lg:text-54 lg:leading-61 font-medium mb-6 mx-4 lg:mx-0 mt-3 lg:mt-0" id="pdp_details_001"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(responceValue?.title?.value), }}></h1>
            <h2 className="text-gtl-med text-mcknormalgrey text-2xl lg:text-4xl font-medium mb-2 mx-4 lg:mx-0" id="pdp_details_002"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(responceValue?.subTitle?.value), }}></h2>
            <div className="text-gtl-med text-mcknormalgrey text-2xl lg:text-4xl font-medium mb-6 mx-4 lg:mx-0 inline-flex" id="pdp_details_003">
                <p className="pr-1" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(responceValue?.volume?.value),  }}></p>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(responceValue?.uom?.value),  }}></p> 
                </div>
            
            <div  className="border-y-2 py-6 mb-6">
                <div className="text-gtl-med text-mcknormalgrey text-2xl lg:leading-27 font-medium mb-3 mx-4 lg:mx-0 " id="pdp_details_004">Description</div>
                <p className="pdp-detail-description text-sofia-reg text-mcknormalgrey text-lg font-normal list-disc pl-6 mx-4 lg:mx-0"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(responceValue?.description?.value), }} id="pdp_details_005">
                </p>
            </div>

            
            <div  className="tab lg:w-full overflow-hidden text-lg font-medium text-lg text-sofia-reg border-b relative mx-4 lg:mx-0">
                <input type="checkbox" id="pdp_details_chck2" checked={selectedIngredient}/>
                <label 
                    className="tab-label py-3 px-4 flex justify-between cursor-pointer lg:text-lg text-base" 
                    htmlFor="pdp_details_chck2"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => onClickDropDown('click', "ingredient")}
                    onKeyUp={(e) => onClickDropDown(e.key, "ingredient")}
                    >Ingredients</label>
                <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey w-full bg-[#F8F9FB]">
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(responceValue?.ingredients?.value), }} id="pdp_details_006" className="p-3"></p>
                </div>
            </div>
            <div  className="tab lg:w-full overflow-hidden text-lg font-medium text-lg text-sofia-reg border-y relative mx-4 lg:mx-0">
                <input type="checkbox" id="pdp_details_chck3" checked={selectedDirections}/>
                <label className="tab-label py-3 px-4 flex justify-between border-y cursor-pointer lg:text-lg text-base" 
                    htmlFor="pdp_details_chck3"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => onClickDropDown('click', "directions")}
                    onKeyUp={(e) => onClickDropDown(e.key, "directions")}>Directions</label>
                <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey w-full bg-[#F8F9FB]">
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(responceValue?.directions?.value), }} id="pdp_details_007" className="p-3"></p>
                </div>
            </div>
            <div  className="tab lg:w-full overflow-hidden font-medium text-lg text-sofia-reg border-y relative mx-4 lg:mx-0">
                <input type="checkbox" id="pdp_details_chck4" checked={selectedWarnings}/>
                <label className="tab-label py-3 px-4 flex justify-between border-y cursor-pointer lg:text-lg text-base" 
                htmlFor="pdp_details_chck4"
                    role="button"
                    tabIndex={0}
                    onClick={(e) => onClickDropDown('click', "warnings")}
                    onKeyUp={(e) => onClickDropDown(e.key, "warnings")}>Warnings</label>
                <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey w-full bg-[#F8F9FB]">
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(responceValue?.warnings?.value), }} id="pdp_details_008" className="p-3"></p>
                </div>
            </div>

        </div>
    );
}
export default PdpDetail;
