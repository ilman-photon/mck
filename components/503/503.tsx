import axiosInstance from "@/utils/axiosInstance";
import { useState, useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";

function ServiceUnavailableCoumponent() {
    const [serviceErrorData, SetServiceErrorData] = useState<any>();

    function fetchServiceUnavailableDetails() {
        return axiosInstance.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/server-error/&expand=*`);
    }

    useEffect(() => {
        fetchServiceUnavailableDetails()
            .then((res:any) => {
                SetServiceErrorData(res);               
            })
            .catch((e: Error) => {
                return
            });
    }, []);

    const sanitizedTitle = DOMPurify.sanitize(serviceErrorData?.data[0]?.title?.value)
    const sanitizedDescription = DOMPurify.sanitize(serviceErrorData?.data[0]?.description?.value);
    const sanitizedAltText = DOMPurify.sanitize("");

    return (
        <>
             

            <div className="container err-page-503 flex flex-row mx-auto mx-auto lg:pl-18 pl-4 pr-4 lg:pr-0 lg:pb-72 pt-[24px] lg:pt-0">
                <div className="lg:width-416 w-full lg:pt-72">
                <div className="heading pb-3 text-[54px] leading-[61px] text-gtl-med font-medium text-mckblue" id="err-503-label-001">{sanitizedTitle}</div>
                <div className="mobile:pb-[145px] error-msg pb-6 font-medium lg:text-4xl text-xl text-2xl text-mckblue text-gtl-med" id="err-503-label-002" dangerouslySetInnerHTML={{ __html:sanitizedDescription}}></div>
               
                </div>
                <div className="bg-logo-right overflow-hidden lg:relative absolute top-[54px] lg:top-0 right-[0] w-[239px] lg:w-full z-[-1] lg:h-[530px]">
                <img alt={sanitizedAltText} id="err-503-img-005" src={"https://mcco02mstrub73kprep.dxcloud.episerver.net/globalassets/oops.svg"}  />
                </div>
            </div>
        </>
    );
}

export default ServiceUnavailableCoumponent;
