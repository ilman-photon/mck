import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

function ServiceUnavailableCoumponent() {
    const [serviceErrorData, SetServiceErrorData] = useState<any>();

    function fetchServiceUnavailableDetails() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/server-error/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchServiceUnavailableDetails()
            .then((res) => {
                console.log(res)
                SetServiceErrorData(res);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    return (
        <>
            <div className="four-oh-four 503-error-page container flex flex-row mx-auto">
                <div className="lg:width-416 w-full">
                <div className="lg:heading pb-3 text-54 text-gtl-med font-medium text-mckblue" id="err-404-label-001">{serviceErrorData?.data[0]?.title.value}</div>
                <div className="lg:text error-msg pb-6 font-medium text-2xl text-mckblue text-gtl-med" id="err-404-label-002" dangerouslySetInnerHTML={{ __html: serviceErrorData?.data[0]?.description.value}}></div>
                </div>
                <div className="bg-logo-right overflow-hidden lg:relative absolute"><img src={serviceErrorData?.data[0]?.backgroundImage?.expandedValueurl} alt="oops" id="err-404-img-005"/></div>
            </div>
            
        </>
    );
}

export default ServiceUnavailableCoumponent;
