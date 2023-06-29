import CarouselComponent from "@/components/carousel";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import React, { useEffect } from "react";
import CategoryComponent from "@/components/category";
import GoogleTagManager from "@/components/google_tag_manager";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import Head from "next/head";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from "isomorphic-dompurify";
import { useRouter } from "next/router";
import AllProductsFilter from "@/components/all_products_category/components/allproductsfilter";
import { useAllProductStore } from "@/components/all_products_category/Store/useAllProductsStore";
import { constructQuery } from "@/components/product_list/productlists";

let sectionData: any = [];
let selectedRecommendedProduct: any = [];
interface MyComponentProps {
  Response: {
    data: {
      title: {
        value: string;
      };
    }[];
  };
}

function AllProductCategoryPage({
  Response,
}: MyComponentProps): React.ReactElement {
  const recommendedProduct = useAllProductStore(state => state.recommendProductData)
  const isLoading = useAllProductStore(state => state.isLoading)
  const getProductCategoryList = useAllProductStore((state) => state.fetchRecommendedProductData)
  const fetchAllProductList = useAllProductStore((state) => state.fetchAllProductList)
  const bucket = useAllProductStore((state) => state.bucket)
  const productCategoryDataList = useAllProductStore((state) => state.productCategoryDataList)
  const productSum = useAllProductStore((state) => state.productSum)
  const productQueriedData = useAllProductStore((state) => state.productQueriedData)
  const selectedFilterItems = useAllProductStore((state) => state.selectedFilterItems)
  const getProductFilterList = useAllProductStore(state => state.fetchProductFilterList)
  const activeFilterDataList = useAllProductStore(state => state.activeFiltersData)
  const onProductQueried = useAllProductStore(state => state.onProductQueried)
  const setLoader = useAllProductStore(state => state.setLoader)
  const isProductFilterSelected = selectedFilterItems?.length > 0
  const isProductFilterSelectedEmpty = selectedFilterItems?.length === 0

  const handleFetchProductsSubCategories = async () => {
    setLoader(true)
    await axiosInstance.get(constructQuery(bucket)).then((res) => {
        const totalMatching = res?.data?.totalMatching
        let tempResults: any = [];
        res.data.results.map((item: any) => {
          let name = item?.productCategory?.value[0]?.name;
          if (tempResults[name]) {
            let tempArray = tempResults[name];
            tempArray.push(item);
            tempResults[name] = tempArray;
          } else {
            tempResults[name] = [item];
          }
        });
        const transformedArray = Object.entries(tempResults).map(
          ([key, value]) => {
            return {
              item: { name: key },
              data: { results: value },
            };
          }
        );
        onProductQueried(transformedArray,totalMatching)
        setLoader(false)
    }).catch(() => setLoader(false))
}

  React.useEffect(() => {
    if (isProductFilterSelected) {
        handleFetchProductsSubCategories()
    } else if (isProductFilterSelectedEmpty ) {
        fetchAllProductList()
    }
}, [selectedFilterItems])   


  React.useEffect(() => {
    getProductCategoryList()
    getProductFilterList()
  },[])

  function filteredData(valueType: string) {
    return recommendedProduct?.expandedValue?.filter((ele: any) => {
      return ele?.contentType?.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }
  

  useEffect(() => {
    recommendedProduct?.expandedValue?.map((id: any) => {
      return recommendedProduct?.expandedValue[1].contentBlockArea.expandedValue.map(
        (item: any) => {
          if (
            id?.recommendedProductCategory?.value &&
            id.recommendedProductCategory?.value[0].id ===
              item.productCategoryType?.value[0].id
          ) {
            const productName = id.recommendedProductCategory.value[0].name;
            if (!selectedRecommendedProduct.includes(productName)) {
              selectedRecommendedProduct.push(productName);
            }
            const isDuplicate = sectionData.some(
              (item: any) => item.name === id.name
            );

            if (!isDuplicate) {
              sectionData.push(id);
            }
          }
        }
      );
    });
  }, [recommendedProduct]);

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    if (
      Response &&
      Response.data &&
      Response.data.length > 0 &&
      Response.data[0].title &&
      Response.data[0].title.value
    ) {
      fetch("https://api.example.com/data")
        .then((response: Response) => {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then((data: any) => {
          if (data && data.length > 0 && data[0].title && data[0].title.value) {
            document.title = DOMPurify.sanitize(data[0].title.value);
          } else {
            document.title = "All Products";
          }
        })
        .catch(() => {
          document.title = "All Products";
        });
    } else {
      document.title = "All Product";
    }
  }, [JSON.stringify(Response)]);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoadingFalse();
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);
  
  return (
    <>
      <Head>
        <title>McKesson</title>
      </Head>
      <GoogleTagManager />
      <div className="wrapper">
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-30"></div>
            <div className="relative">
              <Image src={gifImage} alt="coba-image" />{" "}
            </div>
          </div>
        )}
        <HeaderComponent isCarusolAvaible={recommendedProduct?.expandedValue ? true : false} />
        {!recommendedProduct?.expandedValue && isLoading && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div
              className="relative"
              style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            >
              <Image
                src={gifImage}
                alt="coba-image"
                width={400}
                height={400}
                loading="eager"
              />
            </div>
          </div>
        )}
        {recommendedProduct?.expandedValue && (
          <CarouselComponent
            isCarouselAvaible={recommendedProduct?.expandedValue ? true : false}
            sectionData={filteredData("CarouselBlock")}
          />
        )}
        {recommendedProduct?.expandedValue[1] && <CategoryComponent sectionData={[recommendedProduct?.expandedValue[1]]} />}

        <div className="allproductlist-page container w-full mx-auto grid grid-cols-1 border-t border-[#CCD1E3]">
          <AllProductsFilter
            activeFilter={bucket}
            activeFiltersData={activeFilterDataList}
            productCategoryData={productCategoryDataList}
            productSum={productSum}
            selectedProduct={productQueriedData}
            recommendedProduct={recommendedProduct}
            selectedRecommendedProduct={selectedRecommendedProduct}
            sectionData={sectionData}
          />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}

export default AllProductCategoryPage;
