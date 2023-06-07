import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import Image from 'next/image';
import { ImageComponent } from "../global/ImageComponent";

function ContactUsComponent() {

    const [contactUsData, SetContactUsData] = useState<any>();
    const [ApiRespond, setApiRespond] = useState<any>();

    function fetchContactUsDetails() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/contact-us/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchContactUsDetails()
            .then((res) => {
                SetContactUsData(res);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    useEffect(() => {
        document.documentElement.lang = "en";
    }, []);
        
    useEffect(() => {
        document.title = ApiRespond?.data[0]?.title.value || "Contact Us";
    }, [ApiRespond]);
    return (
        <>
            <div className="lg:pt-72 pt-6 px-4 container flex flex-col mx-auto ">
                <h1  className="text-gtl-med pb-6 font-medium text-[27px] lg:leading-61 text-mckblue lg:text-[54px] leading-30" id="cu_label_001">{contactUsData?.data[0]?.title?.value}</h1>
                <div className="grid lg:grid-cols-2 lg:gap-6">
                    <div className="overflow-hidden rounded-lg text-mckthingrey border contact-container lg:mb-12 mb-6">
                        <h3  className="text-mckblue lg:py-3 lg:px-4 p-3 lg:text-lg text-base font-extrabold shade-blue-bg text-sofia-bold" id="cu_label_002">{contactUsData?.data[0]?.contentArea?.expandedValue[0]?.contactInformationHeading?.value}</h3>
                        <div  className="lg:p-6 p-4 contact-bodylg:p-6 p-4 contact-body lg:text-lg text-base font-normal text-mckblue text-sofia-reg para">
                            <p className="text-base font-normal text-mcknormalgrey pb-3 inquiry-text text-sofia-reg" id="cu_label_003" dangerouslySetInnerHTML={{ __html: contactUsData?.data[0]?.contentArea?.expandedValue[0]?.contactInformationDetail?.value, }}></p>
                            <div className="flex flex-col lg:flex-row lg:pb-3 pb-4">
                                <span className="contact-number font-extrabold lg:text-lg text-base text-mckblue text-sofia-bold lg:mr-3 flex mb-1 lg:mb-0" id="cu_label_004">
                                    <div className="w-18 mr-4" aria-hidden={true}>
                                    {<ImageComponent 
                                        src={contactUsData?.data[0]?.contentArea?.expandedValue[0]?.phoneImage?.expandedValue?.url} 
                                        alt={contactUsData?.data[0]?.contentArea?.expandedValue[0]?.phoneImage?.expandedValue?.altText?.value || "Cell Icon"} 
                                        id="cu_img_005"
                                        className="w-fit mx-auto my-0"/> }
                                    </div>
                                {contactUsData?.data[0]?.contentArea?.expandedValue[0]?.phoneNumber?.value}</span>
                                <p className="lg:text-base text-sm font-normal text-mcknormalgrey text-sofia-reg contact-number-desc" id="cu_label_006">{contactUsData?.data[0]?.contentArea?.expandedValue[0]?.phoneTitle?.value}</p>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:pb-3 pb-4">
                                <span className="contact-number font-extrabold lg:text-lg text-base text-mckblue text-sofia-bold lg:mr-3 flex mb-1 lg:mb-0" id="cu_label_007">
                                <div className="w-18 mr-4" aria-hidden={true}>
                                {<ImageComponent 
                                    src={contactUsData?.data[0]?.contentArea?.expandedValue[0]?.operationHourImage?.expandedValue?.url} 
                                    alt={contactUsData?.data[0]?.contentArea?.expandedValue[0]?.operationHourImage?.expandedValue?.altText?.value || "timer icon"} 
                                    id="cu_img_008"
                                    className="w-fit mx-auto my-0" />}
                                </div>
                                {contactUsData?.data[0]?.contentArea?.expandedValue[0]?.operationHourTitle?.value}</span>
                                <p className="lg:text-base text-sm font-normal text-mcknormalgrey text-sofia-reg contact-number-desc" id="cu_label_009">{contactUsData?.data[0]?.contentArea?.expandedValue[0]?.operationHourValue?.value}</p>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:pb-3 pb-4">
                                <span className="contact-number font-extrabold lg:text-lg text-base text-mckblue text-sofia-bold lg:mr-3 flex" id="cu_label_010">
                                <a className="flex" href = "mailto: #"> 
                                <div className="w-18 mr-4" aria-hidden={true}>
                                    {<ImageComponent 
                                    src={contactUsData?.data[0]?.contentArea?.expandedValue[0]?.emailImage?.expandedValue?.url} 
                                    alt={contactUsData?.data[0]?.contentArea?.expandedValue[0]?.emailImage?.expandedValue?.altText?.value || "email icon"} 
                                    id="cu_img_011"
                                    className="w-fit mx-auto my-0" />}
                                </div>
                                    {contactUsData?.data[0]?.contentArea?.expandedValue[0]?.emailTitle?.value}</a></span>
                            </div>
                            <div className="flex flex-col lg:flex-row">
                                <span className="contact-number font-extrabold lg:text-lg text-base lg:mr-3 text-mckblue text-sofia-bold flex mb-1 lg:mb-0" id="cu_label_012">
                                <div className="w-18 mr-4" aria-hidden={true}>
                                {<ImageComponent 
                                    src={contactUsData?.data[0]?.contentArea?.expandedValue[0]?.locationIcon?.expandedValue?.url} 
                                    alt={contactUsData?.data[0]?.contentArea?.expandedValue[0]?.locationIcon?.expandedValue?.altText?.value || 'alt="location icon"'} 
                                    id="cu_img_013"
                                    className="w-fit mx-auto my-0"/>}
                                </div>
                                {contactUsData?.data[0]?.contentArea?.expandedValue[0]?.locationTitle?.value}</span>
                                <p className="lg:text-base text-sm font-normal text-mcknormalgrey text-sofia-reg contact-number-desc" id="cu_label_014">{contactUsData?.data[0]?.contentArea?.expandedValue[0]?.locationValue?.value}</p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg text-mckthingrey border contact-container lg:mb-12 mb-6">
                        <h3 className="text-mckblue lg:py-3 lg:px-4 p-3 lg:text-lg text-base font-extrabold shade-blue-bg text-sofia-bold" id="cu_label_015">{contactUsData?.data[0]?.contentArea?.expandedValue[0]?.whatWeCandoHeading?.value}</h3>
                        <div className="lg:p-6 p-4 contact-body lg:text-lg text-base font-normal text-mckblue text-sofia-reg mck-contact" id="cu_link_016" dangerouslySetInnerHTML={{ __html: contactUsData?.data[0]?.contentArea?.expandedValue[0]?.whatWeCandoDetail?.value, }}>
                        </div>
                    </div>
                </div>
                <p  className="text-sofia-reg text-mcknormalgrey font-normal lg:text-base text-sm disclaimer" id="cu_label_017" dangerouslySetInnerHTML={{ __html: contactUsData?.data[0]?.contentArea?.expandedValue[0]?.disclaimer?.value, }}></p>
            </div>
        </>
    );
}
export default ContactUsComponent;