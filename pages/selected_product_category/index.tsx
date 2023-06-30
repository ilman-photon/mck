import React, { useEffect, useState } from "react";
import useAxios from "@/hooks/useApi";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import CarouselComponent from "@/components/carousel";
import ProductListComponent from "@/components/product_list";
import GoogleTagManager from "@/components/google_tag_manager";
import { useHeaderStore } from "@/components/navbar/Store/useNavBarStore";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from "isomorphic-dompurify";
import Head from "next/head";
import ProductList from "@/components/product_list/productlists";
import CategoryComponent from "@/components/category";
import { getQueryString } from "@/utils/URLUtils";

function ProductListPage() {
  const selectedCategory = useHeaderStore((state) => state.selectedCategory);
  const categoryName = selectedCategory?.replace(/ /g, "-");
  const [isLoading, setIsLoading] = useState(true);
  let [response, setResponse] = useState<any>();
  const [productCategoryBlock, setProductCategoryBlock] = useState<any>([]);

  const { filter, categoryOf } = getQueryString();

  const recognizedRoute =
    categoryOf?.length > 0
      ? categoryOf.replace(/\+/g, "-")
      : filter?.length > 0 && categoryOf === undefined
      ? filter.replace(/\+/g, "-")
      : categoryName;

  const fetchData = async () => {
    const data = await axiosInstance(
      `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category/${recognizedRoute}/&expand=*`
    );
    setResponse(data);
  };
  useEffect(() => {
    fetchData();
  }, [recognizedRoute]);

  useEffect(() => {
    categoryData();
  }, [response]);

  const categoryData = () => {
    setProductCategoryBlock([]);
    response?.data?.[0]?.contentArea?.expandedValue?.filter((ele: any) => {
      if (ele?.contentType.includes("ProductCategoryBlock")) {
        setProductCategoryBlock((prev: any) => [...prev, ele]);
      }
    });
  };

  function filteredData(valueType: string) {
    return response?.data[0]?.contentArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    if (
      response &&
      response.data &&
      response.data.length > 0 &&
      response.data[0].title &&
      response.data[0].title.value
    ) {
      document.title = DOMPurify.sanitize(response.data[0].title.value);
    } else {
      document.title = "Selected Product Page";
    }
  }, [JSON.stringify(response)]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
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
            response?.data[0]?.contentArea?.expandedValue[0]?.name.includes(
              "Carousel"
            ) && true
          }
        />
        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-75"></div>
            <div
              className="relative"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            ></div>
          </div>
        ) : (
          response && (
            <>
              <CarouselComponent sectionData={filteredData("CarouselBlock")} />
              {productCategoryBlock?.length > 0 ? (
                <CategoryComponent sectionData={productCategoryBlock} />
              ) : null}
              {/* <ProductListComponent /> */}
              <ProductList />
            </>
          )
        )}
        <FooterComponent />
      </div>
    </>
  );
}

export default ProductListPage;
