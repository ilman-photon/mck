import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

function FourOhFourCoumponent() {
    const [notFoundData, SetNotFoundData] = useState<any>();

    function fetchNotFoundDetails() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/page-not-found/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchNotFoundDetails()
            .then((res) => {
                SetNotFoundData(res);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    return (
        <>
            <div className="four-oh-four container flex flex-row mx-auto">
                <div className="lg:width-416 w-full">
                <div className="lg:heading pb-3 text-32 text-gtl-med font-medium" id="err-404-label-001">{notFoundData?.data[0]?.title.value}</div>
                <div className="lg:text pb-6 font-medium text-2xl text-mckblue text-gtl-med" id="err-404-label-002" dangerouslySetInnerHTML={{ __html: notFoundData?.data[0]?.description.value}}></div>
                <div className="table-container">
                    <div className="table-heading font-extrabold text-sofia-bold" id="err-404-label-003">{notFoundData?.data[0]?.contentArea.expandedValue[0].title.value}</div>
                    <div className="normal-text p-6 text-sofia-reg font-normal lg:text-lg text-base" dangerouslySetInnerHTML={{ __html: notFoundData?.data[0]?.contentArea.expandedValue[0].description.value}}></div>
                </div>
                </div>
                <div className="bg-logo-right overflow-hidden lg:relative absolute"><img src={notFoundData?.data[0]?.backgroundImage?.expandedValue.url} alt="oops" id="err-404-img-005"/></div>
            </div>
            
        </>
    );
}

export default FourOhFourCoumponent;
