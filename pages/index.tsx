import Head from "next/head";
import React, { useEffect, useState } from "react";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import CarouselComponent from "@/components/carousel";
import CategoryComponent from "@/components/category";
import ImageVideoAndTextSection from "@/components/homepage_section";
import CookiesComponent from "@/components/cookies";
import useAxios from "@/hooks/useApi";
import ImageVideoOrTextSection from "@/components/promotional_text";
import RecommendationalProductComponent from "@/components/recommendational_product";
import GoogleTagManager from "@/components/google_tag_manager";
import CookieSetting from "@/components/cookieSetting";
import gifImage from "../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";

export default function Home() {
  
  const { response, error, loading } = useAxios({
    method: "GET",
    url: `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/home/&expand=*&Select=blockArea`,
    headers: {
      "Accept-Language": "en"
    },
  });

  function filteredData(valueType: string) {
    return response?.data[0]?.blockArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  return (
    <>
      <GoogleTagManager />
      <Head>
        <title>McKesson</title>
        <meta name="description" content="Created by Mckesson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div
            className="relative"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Image
              src={gifImage}
              alt="loading-image"
              width={400}
              height={400}
              loading="eager"
            />
          </div>
        </div>
      )}

      <HeaderComponent
        isCarusolAvaible={
          response?.data[0]?.blockArea?.expandedValue[0]?.contentType[1] ===
          "CarouselBlock"
            ? true
            : false
        }
      >
        <>
        {!isLoading && (
        <>
          {response?.data[0]?.blockArea?.expandedValue?.map(
            (item: any, index: number) => (
              <React.Fragment key={index}>
                {item?.contentType[1] === "CarouselBlock" ? (
                  <CarouselComponent
                    sectionData={filteredData("CarouselBlock")}
                  />
                ) : item?.contentType[1] === "ProductCategoryBlock" ? (
                  <CategoryComponent
                    sectionData={filteredData("ProductCategoryBlock")}
                  />
                ) : item?.contentType[1] === "TwoCloumnBlock" ? (
                  <div>
                    <ImageVideoAndTextSection
                      index={`hp_0${index}`}
                      customStyleClass={"lg:px-5"}
                      sectionData={
                        response.data[0].blockArea?.expandedValue[index]
                      }
                    />
                  </div>
                ) : item?.contentType[1] === "OneColumnBlock" ? (
                  <div className="p-6 lg:p-0 text-center mb-6 lg:mb-12">
                    <ImageVideoOrTextSection
                      sectionData={
                        response.data[0].blockArea?.expandedValue[index]
                      }
                      textAlignment={"text-center"}
                      index={`hp_0${index}`}
                    />
                  </div>
                ) : item?.contentType[1] === "RecommendedProductBlock" ? (
                  <div className="">
                    <div className="container mx-auto">
                      <RecommendationalProductComponent
                        indexs={`hp_0${index}`}
                        sectionData={filteredData("RecommendedProductBlock")}
                      />
                    </div>
                  </div>
                ) : null}
              </React.Fragment>
            )
          )}
          <FooterComponent />
        </>
      )}
        </>
      </HeaderComponent>

      
    </>
  );
}
