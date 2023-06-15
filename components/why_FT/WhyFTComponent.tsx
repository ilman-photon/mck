import axios, { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import CarouselComponent from "@/components/carousel";
import ImageVideoAndTextSection from "../homepage_section";
import ImageVideoOrTextSection from "../promotional_text";
import DOMPurify from "isomorphic-dompurify";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import { WhyFTComponentType } from "./WhyFTComponent.type";
import WhyFTImageVideoAndTextSection from "./WhyFTImageVideoAndTextSection";
import axiosInstance from "@/utils/axiosInstance";
import { useWhyFTStore } from "../global/Store/useWhyFTStore";
function WhyFTComponent(
  { isCarusolAvaibleProps }: WhyFTComponentType = {
    isCarusolAvaibleProps: null,
  }
) {
  const whyFTData = useWhyFTStore(state => state.data)
  const getWhyFTDetails = useWhyFTStore(state => state.getData)
  const isLoading = useWhyFTStore(state => state.isLoading)
  const setLoadingTimeout = useWhyFTStore(state => state.setTimeoutLoader)

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    document.title =
      DOMPurify.sanitize(
        whyFTData?.contentArea?.expandedValue?.[0]?.title?.value
      ) || "Why F&T";
  }, [whyFTData]);

  useEffect(() => {
    const setPageNameAsClassName = () => {
      const pageName: string = "whyft-component";
      document.body.className = pageName;
    };
    setPageNameAsClassName();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingTimeout();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if(whyFTData === null){
      getWhyFTDetails()
    }
  }, [whyFTData]);

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
      return ele?.contentType?.some((arrEle: string) => {
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
        const aIndex = whyFTData?.contentArea?.expandedValue?.indexOf(a);
        const bIndex = whyFTData?.contentArea?.expandedValue?.indexOf(b);
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

  // whyFTData?.contentArea?.expandedValue?.map(
  //   (item: any) =>
  //     item?.name.toLowerCase() == "Carousel" && isCarusolAvaibleProps(true)
  // );
  whyFTData?.contentArea?.expandedValue?.map((item: any) => {
    if (
      item.contentType.includes("CarouselBlock") ||
      item.contentType.includes("Carousel") ||
      item.contentType.includes("carousel")
    ) {
      isCarusolAvaibleProps(true);
    }
  });
  return (
    <>
      <div
        className="why-FT flex flex-col mx-auto px-0 lg:pt-0 lg:px-0"
        role="main"
      >
        <React.Fragment>
          {whyFTData &&
            rearrangedData1().map((item: any, index: number) => (
              <>
                <React.Fragment key={index}>
                  {item?.contentType[1] === "CarouselBlock" ? (
                    <div className="lg:mb-12">
                      <CarouselComponent
                        sectionData={filteredData("CarouselBlock")}
                      />
                    </div>
                  ) : null}
                </React.Fragment>
              </>
            ))}
        </React.Fragment>
      </div>
      <div className="flex flex-col px-0 lg:pt-0 lg:px-0" role="main">
        <React.Fragment>
          {whyFTData &&
            whyFTData?.contentArea?.expandedValue.map(
              (item: any, index: number) => (
                <>
                  <React.Fragment key={index}>
                    {item?.contentType[1] === "TwoCloumnBlock" ? (
                      <WhyFTImageVideoAndTextSection
                        index={`wfnt_0${index}`}
                        sectionData={item}
                      />
                    ) : item?.contentType[1] === "OneColumnBlock" ? (
                      <div className="container mx-auto py-6 xtralarge:px-72 desktop:px-72 ipadlarge:px-72 mobile:px-15 text-center mb-6 lg:mb-12">
                        <ImageVideoOrTextSection
                          index={`wfnt_0${index}`}
                          sectionData={item}
                          textAlignment={"text-left"}
                        />
                      </div>
                    ) : null}
                    {/* item?.contentType[1] === 'RecommendedProductBlock' ? <RecommendationalProductComponent sectionData={filteredData("RecommendedProductBlock")} /> : null} */}
                  </React.Fragment>
                </>
              )
            )}
        </React.Fragment>
      </div>
    </>
  );
}
export default WhyFTComponent;
