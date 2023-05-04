import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";


function WhyFTComponent() {

    const [whyFTData, SetWhyFTData] = useState<any>();

    function fetchWhyFTDetails() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/why-ft/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchWhyFTDetails()
            .then((res) => {
                SetWhyFTData(res.data[0]);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    console.log(whyFTData, "why");

    return (
        <>
            <div className="four-oh-four container flex mx-auto px-0">
                <div className="mb-76 sm:mb-6">
                    <img src="images/why F and T header banner.png" alt={whyFTData?.contentArea?.expandedValue[0]?.name} id="wft_img_001" />
                </div>
                <div className="heading lg:pb-7 pb-4 text-center">{whyFTData?.contentArea?.expandedValue[1]?.name}</div>
                <div className="grey-txt lg:pb-12 pb-6 text-sofia-reg lg:text-lg text-base font-normal">
                    <div className="pb-4" dangerouslySetInnerHTML={{__html: whyFTData?.contentArea?.expandedValue[1]?.description?.value,}}></div>
                </div>
                <div className="relative lg:mb-12 mb-6">
                    <img src="images/health_journey.png" alt={whyFTData?.contentArea?.expandedValue[2]?.name}/>
                    <div className="lg:absolute top-0 left-0 right-0 bottom-0 bg-transparent-left lg:pr-11 lg:pl-6 w-540 flex flex-col justify-center lg:items-end pt-8">
                        <h2 className="text-mckblue text-gtl-med heading font-medium lg:pb-6 pb-4">{whyFTData?.contentArea?.expandedValue[2]?.name}</h2>
                        <p className="lg:pb-6 pb-4 text-sofia-reg text-lg font-normal text-mcknormalgrey" dangerouslySetInnerHTML={{__html: whyFTData?.contentArea?.expandedValue[2]?.description?.value,}}></p>
                        <button className="p-3 uppercase rounded-lg blue-bg text-white text-sofia-bold font-extrabold text-base float-right lg:block hidden">{whyFTData?.contentArea?.expandedValue[2]?.buttonText?.value}</button>
                    </div>
                </div>
                <div className="lg:mb-12 mb-6">
                    <img src="images/With you for life image.png" alt={whyFTData?.contentArea?.expandedValue[3]?.name} />
                </div>
                <div className="relative lg:mb-12 mb-6">
                    <img src="images/heal and thrive.png" />
                    <div className="lg:absolute top-0 right-0 bottom-0 bg-transparent-right lg:pr-11 lg:pl-6 w-540 float-right flex flex-col justify-center lg:items-end pt-8">
                        <h2 className="text-mckblue text-gtl-med heading font-medium lg:pb-6 pb-4">{whyFTData?.contentArea?.expandedValue[4]?.name}</h2>
                        <p className="pb-6 text-sofia-reg lg:text-lg font-normal text-mcknormalgrey text-base" dangerouslySetInnerHTML={{__html: whyFTData?.contentArea?.expandedValue[4]?.description?.value,}}></p>
                        <button className="p-3 uppercase rounded-lg blue-bg text-white text-sofia-bold font-extrabold text-base float-right lg:block hidden">{whyFTData?.contentArea?.expandedValue[4]?.buttonText?.value}</button>
                    </div>
                </div>
                <div className="w-full grid lg:flex items-center lg:mb-12 mb-6">
                    <div className="lg:w-3/6 lg:pl-18 lg:pr-12">
                        <h2 className="text-mckblue text-gtl-med heading font-medium lg:pb-6 pb-4 lg:text-left text-center">{whyFTData?.contentArea?.expandedValue[5]?.name}</h2>
                        <p className="lg:pb-6 pb-4 text-sofia-reg lg:text-lg text-base font-normal text-mcknormalgrey" dangerouslySetInnerHTML={{__html: whyFTData?.contentArea?.expandedValue[5]?.description?.value,}}></p>
                    </div>
                    <div className="lg:w-3/6 rounded-lg overflow-hidden"><img src={whyFTData?.contentArea?.expandedValue[5]?.image?.expandedValue.url} alt={whyFTData?.contentArea?.expandedValue[5]?.name} /></div>
                </div>

                <div className="w-full grid lg:flex items-center">
                    <div className="lg:w-3/6 rounded-lg overflow-hidden"><img src={whyFTData?.contentArea?.expandedValue[6]?.image?.expandedValue.url} alt={whyFTData?.contentArea?.expandedValue[6]?.name} /></div>
                    <div className="lg:w-3/6 lg:pl-18 lg:pr-12 lg:pt-0 pt-4">
                        <h2 className="text-mckblue text-gtl-med heading font-medium lg:pb-6 pb-4 lg:text-left text-center">{whyFTData?.contentArea?.expandedValue[6]?.name}</h2>
                        <p className="lg:pb-6 pb-4 text-sofia-reg lg:text-lg text-base font-normal text-mcknormalgrey"  dangerouslySetInnerHTML={{__html: whyFTData?.contentArea?.expandedValue[5]?.description?.value,}}></p>
                        <button className="p-3 uppercase rounded-lg blue-bg text-white text-sofia-bold font-extrabold text-base float-right lg:block hidden">{whyFTData?.contentArea?.expandedValue[6]?.buttonText?.value}</button>
                    </div>
                </div>
            </div>
        </>
    );

}
export default WhyFTComponent;