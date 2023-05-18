import Head from "next/head";
import { useEffect, useState } from "react";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import CarouselComponent from "@/components/carousel";
import CategoryComponent from "@/components/category/index1.js";
import HomePageSectionComponent from "@/components/homepage_section";
import CookiesComponent from "@/components/cookies";
import useAxios from "@/hooks/useApi";
import PromotionalTextComponent from "@/components/promotional_text";
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
          <CarouselComponent sectionData={filteredData("CarouselBlock")} />
          <CategoryComponent sectionData={filteredData("FourColumnBlock")} />
          <HomePageSectionComponent
            sectionData={filteredData("TwoCloumnBlock")}
          />
          <PromotionalTextComponent
            sectionData={filteredData("OneColumnBlock")}
          />
          <RecommendationalProductComponent
            sectionData={filteredData("RecommendedProductBlock")}
          />
          <FooterComponent />
        </>
      )}
    </>
  );
}
