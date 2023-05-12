import Head from "next/head";
import { useEffect, useState } from "react";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import CarouselComponent from "@/components/carousel";
import CategoryComponent from "@/components/category/index1.js";
import LearningSectionComponent from "@/components/learning_section/index1.js";
import CookiesComponent from "@/components/cookies";
import useAxios from "@/hooks/useApi";
import PromotionalTextComponent from "@/components/promotional_text";
import RecommendationalProductComponent from "@/components/recommendational_product";
import Script from 'next/script';

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

  console.log("environment", process.env.API_URL);

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=GTM-T7ZB56L"/>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-T7ZB56L', {
          page_path: window.location.pathname,
          }); `,
        }}
      />
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
          <LearningSectionComponent
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
