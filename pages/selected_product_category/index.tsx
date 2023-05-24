import React, { useEffect } from "react";
import useAxios from "@/hooks/useApi";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import CarouselComponent from "@/components/carousel";
import ProductListComponent from "@/components/product_list";
import GoogleTagManager from "@/components/google_tag_manager";

function ProductListPage() {
  // Loading
  const { response, error, loading } = useAxios({
    method: "GET",
    url: `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category/landing-page/&expand=*`,
    headers: {
      "Accept-Language": "en",
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
