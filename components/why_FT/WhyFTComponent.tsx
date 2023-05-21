import axios, { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import CarouselComponent from "@/components/carousel";
import RecommendationalProductComponent from "../recommendational_product";
import ImageVideoOrTextSection from "../promotional_text";
import ImageVideoAndTextSection from "../homepage_section";

function WhyFTComponent() {

    const [whyFTData, SetWhyFTData] = useState<any>();

    function fetchWhyFTDetails() {
        return axios.get(
            // `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/why-ft/&expand=*`,
            'https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/generic/why-ft/&expand=*',
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
    return (
        <React.Fragment>
            {whyFTData?.contentArea.expandedValue.map((item: any, index: number) => (<>
                <React.Fragment key={index}>
                    {item?.contentType[1] === "CarouselBlock" ? <CarouselComponent sectionData={filteredData("CarouselBlock")} /> :
                        item?.contentType[1] === 'TwoCloumnBlock' ? <><ImageVideoAndTextSection sectionData={whyFTData.contentArea.expandedValue[index]} /></> :
                            item?.contentType[1] === 'OneColumnBlock' ? <ImageVideoOrTextSection sectionData={whyFTData.contentArea.expandedValue[index]} textAlignment={'text-left'} /> :
                                item?.contentType[1] === 'RecommendedProductBlock' ? <RecommendationalProductComponent sectionData={filteredData("RecommendedProductBlock")} /> : null}
                </React.Fragment>
            </>
            ))}
        </React.Fragment>

    );

}
export default WhyFTComponent;