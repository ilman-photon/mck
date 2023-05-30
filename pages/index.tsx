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
      "Accept-Language": "en",
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
  const [showComponent, setShowComponent] = useState(true);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [isCookiesShow, setCookiesShow] = useState(true);
  const [isCookiesManageShow, setCookiesManageShow] = useState(false);

  const handleCookieManageShow = () => {
    setCookiesManageShow(false);
  };

  const handleCookieManageShowAccept = () => {
    setCookiesManageShow(true);
  };

  const handleCookieShowCookies = () => {
    setCookiesShow(false);
  };

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
  };

  const handleAcceptCookiesSetting = () => {
    setCookiesManageShow(false);
  };

  const handleManageSettings = () => {
    // Logic to manage cookie settings
    console.log("alert");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

      <div className={`hidden lg:flex md:flex ${isCookiesShow ? 'show-cookies' : ''}`}>
        {isCookiesShow && <CookieSetting
          onAccept={handleCookieManageShowAccept}
          onReject={handleCookieShowCookies}
        />}
        {isCookiesManageShow && <CookiesComponent
          onAccept={handleAcceptCookiesSetting}
          onManageSettings={handleCookieManageShow}
        />}
      </div>

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

      <HeaderComponent />

      {!isLoading && (
        <>
          {response?.data[0]?.blockArea?.expandedValue?.map(
            (item: any, index: number) => (
              <React.Fragment key={index}>
                {item?.contentType[1] === "CarouselBlock" ? (
                  <CarouselComponent
                    sectionData={filteredData("CarouselBlock")}
                  />
                ) : item?.contentType[1] === "FourColumnBlock" ? (
                  <CategoryComponent
                    sectionData={filteredData("FourColumnBlock")}
                  />
                ) : item?.contentType[1] === "TwoCloumnBlock" ? (
                  <ImageVideoAndTextSection
                    sectionData={
                      response.data[0].blockArea?.expandedValue[index]
                    }
                  />
                ) : item?.contentType[1] === "OneColumnBlock" ? (
                  <ImageVideoOrTextSection
                    sectionData={
                      response.data[0].blockArea?.expandedValue[index]
                    }
                    textAlignment={"text-center"}
                  />
                ) : item?.contentType[1] === "RecommendedProductBlock" ? (
                  <RecommendationalProductComponent
                    indexs={index}
                    sectionData={filteredData("RecommendedProductBlock")}
                  />
                ) : null}
              </React.Fragment>
            )
          )}

          <FooterComponent />
        </>
      )}
    </>
  );
}
