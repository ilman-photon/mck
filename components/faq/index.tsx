import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";

function FaqComponent() {

    const [faqData, SetFaqData] = useState<any>();

    function fetchFAQDetails() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/faq/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchFAQDetails()
            .then((res) => {
                SetFaqData(res.data[0]?.contentArea.expandedValue[0]);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    console.log(faqData);
    return (
        <>
            <div className="four-oh-four container flex mx-auto px-0">
                <div className="heading pb-3 text-center">{faqData?.name}</div>
                <div className="text-center text-mckblue text-gtl-med pb-6 lg:text-27 text-xl"
                    dangerouslySetInnerHTML={{ __html: faqData?.description?.value, }}></div>
                    {faqData?.blockArea?.expandedValue?.map((bdata: any) => (
                        <div className="tab text-mckblue w-full overflow-hidden rounded-lg lg:mb-6 mb-4" key={faqData?.blockArea?.expandedValue?.contentLink?.id}>
                        <input type="checkbox" id={bdata?.contentLink?.id} />
                        <label className="tab-label shade-blue-bg py-3 px-4 flex justify-between cursor-pointer text-sofia-bold font-extrabold lg:text-lg text-base" htmlFor={bdata?.contentLink?.id}>
                            {bdata?.question?.value}</label>
                        <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
                            <ul dangerouslySetInnerHTML={{ __html: bdata?.answer?.value, }}>
                            </ul>
                        </div>
                    </div>
                    ))}               

                <div className="shade-blue-border w-full lg:mt-6 mt-4 rounded-lg overflow-hidden">
                    <div className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold lg:text-lg text-base py-3 px-4">{faqData?.differentQuestionHeading?.value}</div>
                    <div className="shade-blue-border-top lg:p-6 p-4">
                        <p className="lg:pb-4 pb-2 lg:text-27 text-base text-mckblue text-gtl-med font-medium">{faqData?.differentQuestionDetails?.value}</p>
                        <button className="lg:w-32 w-full rounded-lg blue-bg text-white p-3 text-sofia-bold font-extrabold lg:text-base text-sm uppercase">{faqData?.differentQuestionCTAText?.value}</button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 lg:gap-4 mt-6">
                    <div className="rounded-lg shade-blue-border overflow-hidden">
                        <div className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold lg:text-lg text-base py-3 px-4">{faqData?.whatYouCanDoHeading?.value}</div>
                        <div className="lg:p-6 p-4 text-mckblue shade-blue-border-top lg:text-lg text-base text-sofia-reg">
                        {faqData?.whatYouCanDoDeatils?.value}
                            {/* <a href="" className="underline block pb-1">Home</a>
                            <a href="" className="underline block pb-1">Where to Buy</a>
                            <a href="" className="underline block pb-1">Privacy Notice</a> */}
                        </div>
                    </div>
                    <div className="mt-6 lg:mt-0">
                        <div className="rounded-lg shade-blue-border overflow-hidden">
                            <div className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold lg:text-lg text-base py-3 px-4">{faqData?.speaktoAPharmacistHeading?.value}</div>
                            <div className="lg:p-6 p-4 text-mckblue shade-blue-border-top lg:text-lg text-base text-sofia-reg">
                                <a href="" className="underline block pb-1">{faqData?.speaktoAPharmacistDetail?.value}</a>
                            </div>
                        </div>
                        <div className="rounded-lg shade-blue-border overflow-hidden mt-6">
                            <div className="shade-blue-bg text-mckblue text-sofia-bold font-extrabold lg:text-lg text-base py-3 px-4">{faqData?.sendFeedBackHeading?.value}</div>
                            <div className="lg:p-6 p-4 text-mckblue shade-blue-border-top lg:text-lg text-base text-sofia-reg">
                                <p>{faqData?.sendFeedBackDetails?.value} <a href="" className="underline"></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FaqComponent;
