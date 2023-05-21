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

  return (
    <>
      <GoogleTagManager />
      <Head>
        <title>McKesson</title>
        <meta name="description" content="Created by Mckesson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && response && (
        <>
          {/* <CookiesComponent /> */}
          <HeaderComponent />
          {response.data[0].blockArea?.expandedValue?.map((item: any, index: number) => (
            <React.Fragment key={index}>
              {item?.contentType[1] === "CarouselBlock" ? <CarouselComponent sectionData={filteredData("CarouselBlock")} /> :
                item?.contentType[1] === 'TwoCloumnBlock' ? <ImageVideoAndTextSection sectionData={response.data[0].blockArea?.expandedValue[index]} /> :
                  item?.contentType[1] === 'OneColumnBlock' ? <ImageVideoOrTextSection sectionData={response.data[0].blockArea?.expandedValue[index]} textAlignment={'text-center'} /> :
                    item?.contentType[1] === 'RecommendedProductBlock' ? <RecommendationalProductComponent sectionData={filteredData("RecommendedProductBlock")} /> : null}
            </React.Fragment>
          ))}
          <FooterComponent />
        </>
      )}
    </>
  );
}
