import axiosInstance from "@/utils/axiosInstance";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import DOMPurify from 'isomorphic-dompurify';

function FourOhFourCoumponent() {
    const [notFoundData, SetNotFoundData] = useState<any>();

    function fetchNotFoundDetails() {
        return axiosInstance.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/page-not-found/&expand=*`);
    }
    useEffect(() => {
        fetchNotFoundDetails()
            .then((res:any) => {
                SetNotFoundData(res);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    return (
        <>
            <div className="four-oh-four err-page-404 container flex flex-row mx-auto mx-auto lg:pl-18 pl-4 pr-4 lg:pr-0 lg:pb-72">
                <div className="lg:width-416 w-full lg:pt-72">
                <div className="heading pb-3 text-[54px] leading-[61px] text-gtl-med font-medium text-mckblue" id="err-404-label-001"  aria-label={DOMPurify.sanitize(notFoundData?.data[0]?.title?.value)}>{DOMPurify.sanitize(notFoundData?.data[0]?.title?.value)}</div>
                <div className="error-msg pb-6 font-medium lg:text-4xl text-xl text-2xl text-mckblue text-gtl-med" id="err-404-label-002" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(notFoundData?.data[0]?.description?.value)}}  aria-label={DOMPurify.sanitize(notFoundData?.data[0]?.description?.value)}></div>
                <div className="table-container rounded-lg lg:w-[416px]">
                    <div className="text-base table-heading lg:text-lg text-mckblue font-extrabold text-sofia-bold" id="err-404-label-003"  aria-label={DOMPurify.sanitize(notFoundData?.data[0]?.contentArea?.expandedValue[0].title?.value)}>{DOMPurify.sanitize(notFoundData?.data[0]?.contentArea?.expandedValue[0]?.title?.value)}</div>
                    <div className="text-mcknormalgrey p-4 lg:p-6 text-sofia-reg font-normal lg:text-lg text-base" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(notFoundData?.data[0]?.contentArea?.expandedValue[0]?.description?.value)}}  aria-label={DOMPurify.sanitize(notFoundData?.data[0]?.contentArea?.expandedValue[0]?.description?.value)}></div>
                </div>
                </div>
                <div className="bg-logo-right overflow-hidden lg:relative absolute top-[54px] lg:top-0 right-[0] w-[239px] lg:w-full z-[-1]">
                    {notFoundData && 
                        <img src={DOMPurify.sanitize(notFoundData?.data[0]?.backgroundImage?.expandedValue?.url)} alt={DOMPurify.sanitize(notFoundData?.data[0]?.backgroundImage?.expandedValue?.url)} id="err-404-img-005"/>
                    }
                </div>
            </div>
            
        </>
    );
}

export default FourOhFourCoumponent;
