import React, { useEffect, useState } from "react";
import useAxios from "@/hooks/useApi";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import CarouselComponent from "@/components/carousel";
import ProductListComponent from "@/components/product_list";
import GoogleTagManager from "@/components/google_tag_manager";
import { useHeaderStore } from "@/components/navbar/Store/useNavBarStore";
import axiosInstance from "@/utils/axiosInstance";

function ProductListPage() {
  const selectedCategory = useHeaderStore((state) => state.selectedCategory);
  const categoryName = selectedCategory?.replace(/ /g, "-");
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  let [response , setResponse] =useState<any>()

  const fetchData = async () => {
    const data = await axiosInstance(
      `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category/${categoryName}/&expand=*`
    );
    setResponse(data)

  }
  useEffect(() => {
    fetchData()
  }, [categoryName]) 


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
    if (
      response &&
      response.data &&
      response.data.length > 0 &&
      response.data[0].title &&
      response.data[0].title.value
    ) {
      document.title = response.data[0].title.value;
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
      <GoogleTagManager />
      <HeaderComponent
        isCarusolAvaible={
          response?.data[0]?.contentArea?.expandedValue[0]?.name ==
            "Carousel" && true
        }
      />
      {/* {error && <p>{error.message}</p>} */}
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div
            className="relative"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            {/* Add your spinner component here */}
          </div>
        </div>
      ) : (
        response && (
          <>
            <CarouselComponent sectionData={filteredData("CarouselBlock")} />
            <ProductListComponent />
          </>
        )
      )}
      <FooterComponent />
    </>
  );
}

export default ProductListPage;
