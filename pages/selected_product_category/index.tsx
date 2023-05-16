import React, { useEffect } from "react";
import useAxios from "@/hooks/useApi";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import CarouselComponent from "@/components/carousel";
import axios, { AxiosError } from "axios";
import ProductListComponent from "@/components/product_list";
import RecommendationalProductComponent from "@/components/recommendational_product";
import GoogleTagManager from "@/components/google_tag_manager";
import { useRouter } from "next/router";

function ProductListPage() {
  const router = useRouter();

  useEffect(() => {
    console.log("router", router.query);
  });

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
      <GoogleTagManager />
      <HeaderComponent />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && response && (
        <CarouselComponent sectionData={filteredData("CarouselBlock")} />
      )}
      <ProductListComponent />
      <FooterComponent />
    </>
  );
}

export default ProductListPage;
