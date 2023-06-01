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
            <div className="err-page-503 lg:pt-72 lg:mt-169 container flex lg:flex-row  mx-auto lg:pl-18 lg:pb-54 pt-6 pl-4 pr-4 lg:pt-0 lg:pr-0">
                <div className="lg:w-9/12 w-full">
                <h2 className="lg:heading pb-3 text-54 text-gtl-med font-medium text-mckblue" id="err-503-label-001">{serviceErrorData?.data[0]?.title?.value}</h2>
                <div className="lg:text error-msg pb-6 font-medium text-mckblue text-gtl-med" id="err-503-label-002" dangerouslySetInnerHTML={{ __html: serviceErrorData?.data[0]?.description?.value}}></div>
                </div>
                <div className="lg:h-502 lg:mt-73 overflow-hidden bg-logo-right-503">
                <img alt="" id="err-503-img-005" src="https://mcco02mstrub73kprep.dxcloud.episerver.net/globalassets/oops.svg" />
                    {/* <img src={serviceErrorData?.data[0]?.backgroundImage?.expandedValue?.url} alt="" id="err-503-img-005"/> */}
                    </div>
            </div>  
        </>
    );
}

export default ServiceUnavailableCoumponent;
