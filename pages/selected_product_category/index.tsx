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
  useEffect(() => {
    // Set the lang attribute to "en" on the <html> element
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    // Set the title of the document dynamically
    if (response && response.data && response.data.length > 0 && response.data[0].title && response.data[0].title.value) {
        document.title = response.data[0].title.value;
    } else {
        document.title = "Selected Product Page";
    }
  }, [JSON.stringify(response)]);

  return (
    <>
      <GoogleTagManager />
      <HeaderComponent />

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
