import Head from "next/head";
import { useEffect } from "react";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import CarouselComponent from "@/components/carousel";
import CategoryComponent from "@/components/category";
import LearningSectionComponent from "@/components/learning_section/index1.js";
import CookiesComponent from "@/components/cookies";
import useAxios from "@/hooks/useApi";

export default function Home() {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/home/&expand=*",
    headers: {
      "Accept-Language": "en",
    },
  });

  useEffect(() => {
    console.log(response?.data[0]?.blockArea?.expandedValue, error, loading);
  });
  return (
    <>
      <Head>
        <title>McKession</title>
        <meta name="description" content="Created by Mckession" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <CookiesComponent /> */}
      <HeaderComponent />
      {/* <CarouselComponent /> */}
      {/* <CategoryComponent /> */}
      <LearningSectionComponent />
      <FooterComponent />
    </>
  );
}
