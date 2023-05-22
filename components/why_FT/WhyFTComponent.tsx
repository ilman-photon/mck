import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import CarouselComponent from "@/components/carousel";

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

  function filteredCarouselData(valueType: string) {
    return whyFTData?.contentArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }

  return (
    <>
      <div className="four-oh-four why-FT container flex flex-col mx-auto px-0 lg:pt-0 lg:px-0">
        <div className="mb-76 mb-6">
          {whyFTData && (
            <CarouselComponent
              sectionData={filteredCarouselData("CarouselBlock")}
            />
          )}
        </div>
        <div
          className="heading lg:pb-7 pb-4 text-center"
          id="wft_label_002"
          tabIndex={0}
        >
          {whyFTData?.contentArea?.expandedValue[1]?.name}
        </div>
        <div className="grey-txt lg:pb-12 pb-6 text-sofia-reg lg:text-lg text-base font-normal">
          <div
            className="pb-4"
            dangerouslySetInnerHTML={{
              __html:
                whyFTData?.contentArea?.expandedValue[1]?.description?.value,
            }}
            id="wft_label_003"
            tabIndex={0}
          ></div>
        </div>
        <div className="relative lg:mb-12 mb-6">
          <img
            src="images/health_journey.png"
            alt={whyFTData?.contentArea?.expandedValue[2]?.name}
            id="wft_img_004"
            tabIndex={0}
            className="w-full"
          />
          <div className="lg:absolute top-0 left-0 right-0 bottom-0 bg-transparent-left lg:pr-11 lg:pl-6 w-540 flex flex-col justify-center lg:items-end pt-8 lg:pt-0">
            <h2
              className="text-mckblue text-gtl-med heading font-medium lg:pb-6 pb-4"
              id="wft_label_005"
              tabIndex={0}
            >
              {whyFTData?.contentArea?.expandedValue[2]?.name}
            </h2>
            <p
              className="lg:pb-6 pb-4 text-sofia-reg text-lg font-normal text-mcknormalgrey"
              dangerouslySetInnerHTML={{
                __html:
                  whyFTData?.contentArea?.expandedValue[2]?.description?.value,
              }}
              id="wft_label_006"
              tabIndex={0}
            ></p>
            <button
              className="p-3 uppercase rounded-lg blue-bg text-white text-sofia-bold font-extrabold text-base float-right lg:block hidden"
              id="wft_btn_007"
              aria-label={
                whyFTData?.contentArea?.expandedValue[2]?.buttonText?.value
              }
            >
              {whyFTData?.contentArea?.expandedValue[2]?.buttonText?.value}
            </button>
          </div>
        </div>
        <div className="lg:mb-12 mb-6">
          <img
            src="images/With you for life image.png"
            alt={whyFTData?.contentArea?.expandedValue[3]?.name}
            id="wft_img_008"
            tabIndex={0}
            className="w-full"
          />
        </div>
        <div className="relative lg:mb-12 mb-6">
          <img src="images/heal and thrive.png" id="wft_img_009" tabIndex={0} />
          <div className="lg:absolute top-0 right-0 bottom-0 bg-transparent-right lg:pr-11 lg:pl-6 w-540 float-right flex flex-col justify-center lg:items-end pt-8 lg:pt-0">
            <h2
              className="text-mckblue text-gtl-med heading font-medium lg:pb-6 pb-4"
              id="wft_label_010"
              tabIndex={0}
            >
              {whyFTData?.contentArea?.expandedValue[4]?.name}
            </h2>
            <p
              className="pb-6 text-sofia-reg lg:text-lg font-normal text-mcknormalgrey text-base"
              id="wft_label_011"
              tabIndex={0}
              dangerouslySetInnerHTML={{
                __html:
                  whyFTData?.contentArea?.expandedValue[4]?.description?.value,
              }}
            ></p>
            <button
              className="p-3 uppercase rounded-lg blue-bg text-white text-sofia-bold font-extrabold text-base float-right lg:block hidden"
              id="wft_btn_012"
              aria-label={
                whyFTData?.contentArea?.expandedValue[4]?.buttonText?.value
              }
            >
              {whyFTData?.contentArea?.expandedValue[4]?.buttonText?.value}
            </button>
          </div>
        </div>
        <div className="w-full grid lg:flex items-center lg:mb-12 mb-6">
          <div className="lg:w-3/6 lg:pl-18 lg:pr-12">
            <h2
              className="text-mckblue text-gtl-med heading font-medium lg:pb-6 pb-4 lg:text-left text-center"
              id="wft_label_013"
              tabIndex={0}
            >
              {whyFTData?.contentArea?.expandedValue[5]?.name}
            </h2>
            <p
              className="lg:pb-6 pb-4 text-sofia-reg lg:text-lg text-base font-normal text-mcknormalgrey"
              id="wft_label_014"
              tabIndex={0}
              dangerouslySetInnerHTML={{
                __html:
                  whyFTData?.contentArea?.expandedValue[5]?.description?.value,
              }}
            ></p>
          </div>
          <div className="lg:w-3/6 rounded-lg overflow-hidden">
            <img
              src={
                whyFTData?.contentArea?.expandedValue[5]?.image?.expandedValue
                  .url
              }
              alt={whyFTData?.contentArea?.expandedValue[5]?.name}
              id="wft_img_015"
              tabIndex={0}
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full grid lg:flex items-center">
          <div className="lg:w-3/6 rounded-lg overflow-hidden">
            <img
              src={
                whyFTData?.contentArea?.expandedValue[6]?.image?.expandedValue
                  ?.url
              }
              alt={whyFTData?.contentArea?.expandedValue[6]?.name}
              id="wft_img_016"
              tabIndex={0}
              className="w-full"
            />
          </div>
          <div className="lg:w-3/6 lg:pl-18 lg:pr-12 lg:pt-0 pt-4">
            <h2
              className="text-mckblue text-gtl-med heading font-medium lg:pb-6 pb-4 lg:text-left text-center"
              id="wft_label_017"
              tabIndex={0}
            >
              {whyFTData?.contentArea?.expandedValue[6]?.name}
            </h2>
            <p
              className="lg:pb-6 pb-4 text-sofia-reg lg:text-lg text-base font-normal text-mcknormalgrey"
              id="wft_label_018"
              tabIndex={0}
              dangerouslySetInnerHTML={{
                __html:
                  whyFTData?.contentArea?.expandedValue[5]?.description?.value,
              }}
            ></p>
            <button
              className="p-3 uppercase rounded-lg blue-bg text-white text-sofia-bold font-extrabold text-base float-right lg:block hidden"
              id="wft_btn_019"
              aria-label={
                whyFTData?.contentArea?.expandedValue[6]?.buttonText?.value
              }
            >
              {whyFTData?.contentArea?.expandedValue[6]?.buttonText?.value}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyFTComponent;
