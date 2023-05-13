import React from "react";
import useAxios from "@/hooks/useApi";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import CarouselComponent from "@/components/carousel";
import axios, { AxiosError } from "axios";
import HealthNeedsComponent from "@/components/health_needs";
import GoogleTagManager from "@/components/google_tag_manager";

function HealthNeedsPage() {
  
  // Loading
  const { response, error, loading } = useAxios({
    method: "GET",
    url: `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/home/&expand=*&Select=blockArea`,
    headers: {
      "Accept-Language": "en",
    },
  });

  // filter data to share as props
  function filteredData(valueType: string) {
    return response?.data[0]?.blockArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }

  function FetchProductFilter() {
    return axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category-setting/?expand=*`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  return (
    <>
      <GoogleTagManager/>
      <HeaderComponent />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && response && (
        <CarouselComponent sectionData={filteredData("CarouselBlock")} />
      )}
      <HealthNeedsComponent />

      <FooterComponent />
    </>
  );
}

export default HealthNeedsPage;
