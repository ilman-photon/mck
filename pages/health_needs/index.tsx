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

function HealthNeedsPage() {
  // Loading
  const [token, setToken] = useState(null);
  const [loadingTemp, setLoadingTemp] = useState(true);
  const { response, error, loading } = useAxios({
    method: "GET",
    url: `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`,
    headers: {
      "Accept-Language": "en",
      //  "Authorization":`Bearer ${localStorage.getItem("token")}`
    },
  });

  // filter data to share as props
  function filteredData(valueType: string) {
    return response?.data[0]?.contentArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }

  function FetchProductFilter() {
    return axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category-setting/?expand=*`
    );
  }

  useEffect(() => {
    // Set the lang attribute to "en" on the <html> element
    document.documentElement.lang = "en";
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      false;
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    // Set the title of the document dynamically
    if (
      response &&
      response.data &&
      response.data.length > 0 &&
      response.data[0].title &&
      response.data[0].title.value
    ) {
      document.title = response.data[0].title.value;
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
      <GoogleTagManager />
      <HeaderComponent
        isCarusolAvaible={
          response?.data[0].contentArea.expandedValue[0].name == "Carousel"
            ? true
            : false
        }
      />
      {error && <p>{error.message}</p>}
      {loadingTemp ||
        (!loading && !error && response && (
          <CarouselComponent sectionData={filteredData("CarouselBlock")} />
        ))}
      <HealthNeedsComponent isCarusolAvaibleProps={setisCarusonAvible} />
      <FooterComponent />
    </>
  );
}

export default HealthNeedsPage;
