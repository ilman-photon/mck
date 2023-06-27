import React from "react";
import useAxios from "@/hooks/useApi";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import CarouselComponent from "@/components/carousel";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import HealthNeedsComponent from "@/components/health_needs";
import GoogleTagManager from "@/components/google_tag_manager";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from "isomorphic-dompurify";
import Head from "next/head";
import HealthNeeds from "@/components/health_needs/components/healthneeds";

function HealthNeedsPage() {
  const [loadingTemp, setLoadingTemp] = useState(true);
  const [tempStatus, setTempStatus] = useState(false);
  const { response, error, loading } = useAxios({
    method: "GET",
    url: `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`,
    headers: {
      "Accept-Language": "en",
    },
  });

  function filteredData(valueType: string) {
    return response?.data[0]?.contentArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle === valueType;
      });
    });
  }

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      false;
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (
      response &&
      response.data &&
      response.data.length > 0 &&
      response.data[0].title &&
      response.data[0].title.value
    ) {
      const sanitizedTitle = DOMPurify.sanitize(response.data[0].title.value);
      document.title = sanitizedTitle;
    } else {
      document.title = "Health Needs";
    }
  }, [JSON.stringify(response)]);

  const [isCarusonAvible, setisCarusonAvible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingTemp(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>McKesson</title>
        <link rel="icon" href="/favicon_mck.ico" />
      </Head>
      <GoogleTagManager />
      <div className="wrapper">
        <HeaderComponent
          isCarusolAvaible={
            response?.data?.[0]?.contentArea?.expandedValue?.[0]?.contentType?.includes(
              "CarouselBlock"
            )
              ? true
              : false
          }
        />
        {error && <p>{error.message}</p>}
        {!loading && !error && response && (
          <CarouselComponent sectionData={filteredData("CarouselBlock")} />
        )}
        {/* <HealthNeedsComponent isCarusolAvaibleProps={setisCarusonAvible} /> */}
        <HealthNeeds/>
        <FooterComponent />
      </div>
    </>
  );
}

export default HealthNeedsPage;
