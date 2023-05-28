import axios, { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import CarouselComponent from "@/components/carousel";
import ImageVideoAndTextSection from "../homepage_section";
import ImageVideoOrTextSection from "../promotional_text";

import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
function WhyFTComponent() {
  const [whyFTData, SetWhyFTData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
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
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    document.title =
      whyFTData?.contentArea?.expandedValue[0]?.title?.value || "Why F&T";
  }, [whyFTData]);

  useEffect(() => {
    const setPageNameAsClassName = () => {
      const pageName: string = "whyft-component";
      document.body.className = pageName;
    };
    setPageNameAsClassName();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchWhyFTDetails()
      .then((res) => {
        SetWhyFTData(res.data[0]);
        setIsLoading(false);
      })
      .catch((e: Error | AxiosError) => {
        console.log(e);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-75"></div>
        <div
          className="relative"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <Image
            src={gifImage}
            alt="coba-image"
            width={400}
            height={400}
            loading="eager"
          />
        </div>
      </div>
    );
  }

  function filteredData(valueType: string) {
    return whyFTData?.contentArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }
  const shouldRearrange = (index: number) => {
    return index % 2 === 0; // Rearrange even-indexed elements
  };
  const rearrangedData1 = () => {
    const rearrangedData = [...whyFTData?.contentArea.expandedValue].sort(
      (a, b) => {
        const aIndex = whyFTData?.contentArea.expandedValue.indexOf(a);
        const bIndex = whyFTData?.contentArea.expandedValue.indexOf(b);
        if (shouldRearrange(aIndex) && !shouldRearrange(bIndex)) {
          return -1;
        } else if (!shouldRearrange(aIndex) && shouldRearrange(bIndex)) {
          return 1;
        }
        return 0;
      }
    );
    return rearrangedData;
  };

  return (
    <>
    <div className="four-oh-four why-FT flex flex-col mx-auto px-0 lg:pt-0 lg:px-0">
      <React.Fragment>
        {whyFTData &&
          rearrangedData1().map((item: any, index: number) => (
            <>
              <React.Fragment key={index}>
                {item?.contentType[1] === "CarouselBlock" ? (
                  <div className="lg:mb-76 md:mb-24 sm:mb-24">
                    <CarouselComponent
                      sectionData={filteredData("CarouselBlock")}
                    />{" "}
                  </div>
                ) : null}
              </React.Fragment>
            </>
          ))}
      </React.Fragment>
    </div>
    <div className="four-oh-four why-FT flex flex-col px-0 lg:pt-0 lg:px-0">
      <React.Fragment>
        {whyFTData &&
          rearrangedData1().map((item: any, index: number) => (
            <>
              <React.Fragment key={index}>
                {item?.contentType[1] === "TwoCloumnBlock" ? (
                  <ImageVideoAndTextSection
                    sectionData={whyFTData.contentArea.expandedValue[index]}
                  />
                ) : item?.contentType[1] === "OneColumnBlock" ? (
                  <ImageVideoOrTextSection
                    sectionData={whyFTData.contentArea.expandedValue[index]}
                    textAlignment={"text-left"}
                  />
                ) : null}
                {/* item?.contentType[1] === 'RecommendedProductBlock' ? <RecommendationalProductComponent sectionData={filteredData("RecommendedProductBlock")} /> : null} */}
              </React.Fragment>
            </>
          ))}
      </React.Fragment>
    </div>
    </>
  );
}
export default WhyFTComponent;
