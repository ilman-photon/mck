import axios, { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import CarouselComponent from "@/components/carousel";
import ImageVideoAndTextSection from "../homepage_section";
import ImageVideoOrTextSection from "../promotional_text";

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
    const rearrangedData = [...whyFTData?.contentArea.expandedValue].sort((a, b) => {
      const aIndex = whyFTData?.contentArea.expandedValue.indexOf(a);
      const bIndex = whyFTData?.contentArea.expandedValue.indexOf(b);
      if (shouldRearrange(aIndex) && !shouldRearrange(bIndex)) {
        return -1; 
      } else if (!shouldRearrange(aIndex) && shouldRearrange(bIndex)) {
        return 1; 
      }
      return 0; 
    });
    return rearrangedData
  }

  return (
    <div className="four-oh-four why-FT container flex flex-col mx-auto px-0 lg:pt-0 lg:px-0">
      <React.Fragment>
        {whyFTData && rearrangedData1().map((item: any, index: number) => (<>
          <React.Fragment key={index}>
            {item?.contentType[1] === "CarouselBlock" ? <div className="mb-76 mb-6"><CarouselComponent sectionData={filteredData("CarouselBlock")} /> </div> :
              item?.contentType[1] === 'TwoCloumnBlock' ? <ImageVideoAndTextSection sectionData={whyFTData.contentArea.expandedValue[index]} /> :
                item?.contentType[1] === 'OneColumnBlock' ? <ImageVideoOrTextSection sectionData={whyFTData.contentArea.expandedValue[index]} textAlignment={'text-left'} />
                  : null}
            {/* item?.contentType[1] === 'RecommendedProductBlock' ? <RecommendationalProductComponent sectionData={filteredData("RecommendedProductBlock")} /> : null} */}
          </React.Fragment>
        </>
        ))}
      </React.Fragment>
    </div>
  );
}
export default WhyFTComponent;
