import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

function PrivacyComponent() {
    const [ApiRespond, setApiRespond] = useState<any>();

    function fetchprivacyNotice() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/privacy-notice/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchprivacyNotice()
            .then((res) => {
                console.info("Get in" + res)
                setApiRespond(res);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);
    return (
        <div className="privacypolicy container flex flex-col lg:p-72 lg:pb-0 p-4 pt-6 pb-0 mx-auto">
            <h1 className="lg:text-54 text-27 text-gtl-med text-mckblue pb-3 text-center">{ApiRespond?.data[0]?.title.value}</h1>
            <div className="text pb-6 font-medium text-2xl text-mckblue text-gtl-med" dangerouslySetInnerHTML={{ __html: ApiRespond?.data[0]?.description.value }}></div>
        </div>
    )

}
export default PrivacyComponent;