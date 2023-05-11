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
    return (
        <div className="terms container flex flex-col lg:p-72 p-4 pt-6 pb-0 mx-auto">
            <div dangerouslySetInnerHTML={{ __html: ApiRespond?.data[0]?.description.value }}></div>
        </div>
    )

}
export default TermsComponent;