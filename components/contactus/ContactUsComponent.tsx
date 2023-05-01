import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import Image from 'next/image';

function ContactUsComponent() {

    const [contactUsData, SetContactUsData] = useState<any>();

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

    return (
        <>
            <div className="four-oh-four container flex mx-auto px-0">
                <div className="heading pb-6">{contactUsData?.data[0]?.title.value}</div>
                <div className="grid lg:grid-cols-2 lg:gap-4">
                    <div className="overflow-hidden rounded-lg text-mckthingrey border contact-container mb-12">
                        <div className="text-mckblue py-3 px-4 text-lg font-extrabold shade-blue-bg text-sofia-bold">{contactUsData?.data[0]?.contentArea.expandedValue[0].contactInformationHeading.value}</div>
                        <div className="p-6 contact-body">
                            <p className="text-base font-normal text-mcknormalgrey pb-3 inquiry-text text-sofia-reg" dangerouslySetInnerHTML={{ __html: contactUsData?.data[0]?.contentArea.expandedValue[0].contactInformationDetail.value, }}></p>
                            <div className="flex flex-col lg:flex-row pb-3">
                                <span className="contact-number font-extrabold text-lg text-mckblue text-sofia-bold mr-3 flex">
                                    <img src={contactUsData?.data[0]?.contentArea.expandedValue[0].phoneImage.expandedValue.url} alt="Cell Icon" /> {contactUsData?.data[0]?.contentArea.expandedValue[0].phoneNumber.value}</span>
                                <p className="text-base font-normal text-mcknormalgrey text-sofia-reg">{contactUsData?.data[0]?.contentArea.expandedValue[0].phoneTitle.value}</p>
                            </div>
                            <div className="flex flex-col lg:flex-row pb-3">
                                <span className="contact-number font-extrabold text-lg text-mckblue text-sofia-bold mr-3 flex">
                                    <img src={contactUsData?.data[0]?.contentArea.expandedValue[0].operationHourImage.expandedValue.url} alt="timer icon" />{contactUsData?.data[0]?.contentArea.expandedValue[0].operationHourTitle.value}</span>
                                <p className="text-base font-normal text-mcknormalgrey text-sofia-reg">{contactUsData?.data[0]?.contentArea.expandedValue[0].operationHourValue.value}</p>
                            </div>
                            <div className="flex flex-col lg:flex-row pb-3">
                                <span className="contact-number font-extrabold text-lg text-mckblue text-sofia-bold mr-3 flex">
                                    <img src={contactUsData?.data[0]?.contentArea.expandedValue[0].emailImage.expandedValue.url} alt="email icon" />{contactUsData?.data[0]?.contentArea.expandedValue[0].emailTitle.value}</span>
                            </div>
                            <div className="flex flex-col lg:flex-row pb-3">
                                <span className="contact-number font-extrabold text-lg mr-3 text-mckblue text-sofia-bold flex">
                                    <img src={contactUsData?.data[0]?.contentArea.expandedValue[0].locationIcon.expandedValue.url} alt="location icon" />{contactUsData?.data[0]?.contentArea.expandedValue[0].locationTitle.value}</span>
                                <p className="text-base font-normal text-mcknormalgrey text-sofia-reg">{contactUsData?.data[0]?.contentArea.expandedValue[0].locationValue.value}</p>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-lg text-mckthingrey border contact-container mb-12">
                        <div className="text-mckblue py-3 px-4 text-lg font-extrabold shade-blue-bg text-sofia-bold">{contactUsData?.data[0]?.contentArea.expandedValue[0].whatWeCandoHeading.value}</div>
                        <div className="p-6 contact-body" dangerouslySetInnerHTML={{ __html: contactUsData?.data[0]?.contentArea.expandedValue[0].whatWeCandoDetail.value, }}>
                            {/* TODO Coordinate with CMS team to fix this */}
                            {/* <a href="" className="block pb-1 underline text-lg font-normal text-mckblue text-sofia-reg">Home</a> */}
                            {/* TODO Coordinate with CMS team to fix this */}
                            {/* <a href="" className="block pb-1 underline text-lg font-normal text-mckblue text-sofia-reg">Where to Buy</a> */}
                            {/* TODO Coordinate with CMS team to fix this */}
                            {/* <a href="" className="block pb-1 underline text-lg font-normal text-mckblue text-sofia-reg">FAQ</a> */}
                            {/* TODO Coordinate with CMS team to fix this */}
                            {/* <a href="" className="block underline text-lg font-normal text-mckblue text-sofia-reg">Privacy Notice</a> */}
                        </div>
                    </div>
                </div>
                <p className="text-sofia-reg text-mcknormalgrey font-normal text-base" dangerouslySetInnerHTML={{ __html: contactUsData?.data[0]?.contentArea.expandedValue[0].disclaimer.value, }}></p>
            </div>
        </>
    );
}
export default ContactUsComponent;