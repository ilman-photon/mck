import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

function TermsComponent() {
    const [ApiRespond, setApiRespond] = useState<any>();

    function fetchTermsandCondition() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/Terms-of-Use/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchTermsandCondition()
            .then((res) => {
                setApiRespond(res);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    useEffect(() => {
        // Set the lang attribute to "en" on the <html> element
        document.documentElement.lang = "en";
    }, []);

    useEffect(() => {
        // Set the title of the document dynamically
        document.title = ApiRespond?.data[0]?.title.value || "Default Title";
    }, [ApiRespond]);
    
    return (
        <div className="terms container flex flex-col lg:p-72 p-4 pt-6 pb-0 mx-auto lg:mt-36 mt-16">
            <h1 className="lg:text-54 text-27 text-gtl-med text-mckblue pb-3 text-center">{ApiRespond?.data[0]?.title.value}</h1>
            <div dangerouslySetInnerHTML={{ __html: ApiRespond?.data[0]?.description.value }}></div>
        </div>
    )

}
export default TermsComponent;