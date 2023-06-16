import CarouselComponent from "@/components/carousel";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import { useEffect, useState } from "react";
import CategoryComponent from "@/components/category";
import GoogleTagManager from "@/components/google_tag_manager";
import HealthNeedFilter from "@/components/health_needs/HealthNeedFilter";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import Head from "next/head";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from "isomorphic-dompurify";
import { useRouter } from "next/router";
import { useAllProductCategory } from "@/components/global/Store/useAllProductCategory";

let sectionData: any = [];
let selectedRecommendedProduct: any = [];
let mainCatId: any = [];
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
  const router = useRouter();
  // const [activeFilter, setActiveFilter] = useState<any>([]);
  const activeFilter = useAllProductCategory(state => state.activeFilters)
  const setActiveFilter = useAllProductCategory(state => state.setActiveFilters)
  
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);
  const [filterClicked, setFilterClicked] = useState(false);
  const productSearchCard = false;
  let selectedCategoryName: any = [];
  // let productName: any = [];

  function fetchProductList(filter: any) {
    setIsLoadingTrue();
    let queryParameter = "";
    if (filter === "") {
      // queryParameter = `(productType/value/name eq 'Acute Care')`;
    } else {
      queryParameter = filter;
    }

    const query = filter;
    const regex = /'([^']+)'/g;
    const matches = [...query.matchAll(regex)];
    const values = matches.map((match) => match[1]);
    const promise = axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(${queryParameter} and ContentType/any(t:t eq 'ProductDetailsPage'))`
    );
    promise
      .then((res: any) => {
        let tempResults: any = {};
        if (res.data.results.length === 0) {
          mainCatId.map((id: any) => {
            tempResults[selectedFilterItems[id].categoryName] = [];
          });
          setFilterClicked(true);
          setSelectedProduct( [
            {item: {name: "" }},
            {data: {results: ""}},
          ])
          return;
        }

        res.data.results.map((item: any) => {
          setProductSum(res.data.totalMatching);
          let name = item.productType.value[0].name;
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
        setSelectedProduct(transformedArray);
      })
      .catch((e: Error) => console.log(e))
      .finally(() => {
        setIsLoadingFalse();
      });
  }

  /**
   * @description business logic wired here
   */
  const getData = useAllProductCategory(state => state.getProductCategorySettings)
  const healthNeedData = useAllProductCategory(state => state.healthNeedData);
  const activeFiltersData = useAllProductCategory(state => state.activeFilterData)
  const productCategoryData = useAllProductCategory(state => state.productCategoryData)
  const productCategory = useAllProductCategory(state => state.productCategory)
  const carouselData = useAllProductCategory(state => state.carouselData)
  const categoryProduct = useAllProductCategory(state => state.categoryProduct)
  const selectedProduct = useAllProductCategory(state => state.selectedProduct)
  const setSelectedProduct = useAllProductCategory(state => state.setSelectedProduct)
  const selectedFilterItems = useAllProductCategory(state => state.selectedFilterItems)
  const allProductCategoryList = useAllProductCategory(state => state.allProductCategoryList)
  const setIsLoadingTrue = useAllProductCategory(state => state.setIsLoadingTrue)
  const setIsLoadingFalse = useAllProductCategory(state => state.setIsLoadingFalse)
  const isLoading = useAllProductCategory(state => state.isLoading)
  const recommendedProduct = useAllProductCategory(state => state.recommendProduct)
  const productSum = useAllProductCategory(state => state.productSum)
  const setProductSum = useAllProductCategory(state => state.setProductSum)
  const setSelectedFilterItems = useAllProductCategory(state => state.setSelectedFilterItems)

  useEffect(() => {
    if(healthNeedData === null){
      getData()
    }
  },[healthNeedData])


  useEffect(() => {
    if(activeFilter){
      createQueryParameters();
    }
  }, [activeFilter]);

  const createQueryParameters = () => {
    let queryParams = "";
    if (selectedFilterItems.length > 0) {
      let lastCatId = 0;
      let minCategoryCnt = 0;
      let minSubCategoryCnt = 0;
      let tempId = false;
      selectedFilterItems.map((category: any, catId: any) => {
        if (!category.isCategoryChecked && category.items.length > 0) {
          if (!mainCatId.includes(catId)) {
            mainCatId.push(catId);
          }
          const categoryName = selectedFilterItems[catId].categoryName;
          selectedCategoryName.push(categoryName);
          if (lastCatId >= 0 && !category.isBusinessVerticalCategory) {
            tempId = true;
          }
          if (lastCatId > 0 && lastCatId != catId) {
            queryParams += tempId ? " and " : " or ";
            if (tempId && category.isBusinessVerticalCategory) {
              tempId = false;
            }
          }

          queryParams += "(";
          category.items.map((item: any, index: any) => {
            const itemName = item.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            // const concatStr = category.isBusinessVerticalCategory ? " or " : " and ";
            const concatStr =
              category.items.length === index + 1
                ? ""
                : category.isBusinessVerticalCategory
                ? " or "
                : " and ";
            queryParams += `${
              category.isBusinessVerticalCategory
                ? category.productType
                : category.productType.toLowerCase()
            }/value/name eq '${encodeItemName}' ${concatStr}`;
          });
          minSubCategoryCnt += category.items.length;
          queryParams += `)`;
          // selectedCategoryName.map((item: any, index: any) => {
          //   queryParams += "(";
          //   if (queryParams.includes(item)) {
          //     const concatStr =
          //       selectedCategoryName.length === index + 1 ? "" : " or ";
          //     queryParams = `(${category.productType}/value/name eq '${item}' ) ${concatStr}`;
          //   } else {
          //     const concatStr =
          //       selectedCategoryName.length === index + 1 ? "" : " or ";
          //     queryParams += `${category.productType}/value/name eq '${item}') ${concatStr}`;
          //   }
          // });

          // minSubCategoryCnt += category.items.length;
          lastCatId = catId;
        } else {
          // minCategoryCnt += category.isCategoryChecked;
          minSubCategoryCnt += category.items.length;
          if (category.isCategoryChecked) {
            if (lastCatId >= 0 && !category.isBusinessVerticalCategory) {
              tempId = true;
            }
            if (lastCatId > 0 && lastCatId != catId) {
              // queryParams += " and ";
              queryParams += tempId ? " and " : " or ";
              if (tempId && category.isBusinessVerticalCategory) {
                tempId = false;
              }
            }
            queryParams += "(";
            const itemName = category.categoryName.replace(/[^a-zA-Z ]/g, "");
            // category.items.map((item: any, index: any) => {
              const encodeItemName = encodeURI(itemName);
              const concatStr =
                // category.items.length === index + 1 ? "" :
                 " or ";
              queryParams += `${
                category?.isBusinessVerticalCategory
                  ? category?.productType
                  : (category?.productType).toLowerCase()
              }/value/name eq '${encodeItemName}'`
              //  ${concatStr}`;
            // });
            queryParams += `)`;
            lastCatId = catId;
          }
        }
      });

      if (minCategoryCnt === 0 && minSubCategoryCnt == 0) {
        const currentURL = window.location.href;
        const updatedURL = currentURL.split("?")[0];
        router.push(updatedURL, undefined, { scroll: false });
      }
    }
    if (queryParams) fetchProductList(queryParams);
  };

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
            document.title = DOMPurify.sanitize(data[0].title.value)
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingFalse();
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Head>
        <title>McKesson</title>
      </Head>
      <GoogleTagManager />
      <div className="wrapper">
      <HeaderComponent isCarusolAvaible={carouselData ? true : false} />
      {!carouselData && isLoading && (
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
      {carouselData && (
        <CarouselComponent
          isCarouselAvaible={carouselData ? true : false}
          sectionData={carouselData}
        />
      )}
      {categoryProduct && <CategoryComponent sectionData={categoryProduct} />}

      <div className="allproductlist-page container w-full mx-auto grid grid-cols-1 border-t border-[#CCD1E3]">
        <HealthNeedFilter
          activeFiltersData={activeFiltersData}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          productCategoryData={productCategoryData}
          allProductCategoryList={allProductCategoryList}
          selectedFilterItems={selectedFilterItems}
          selectedProduct={selectedProduct}
          setSelectedFilterItems={setSelectedFilterItems}
          selectedViewAllCateory={selectedViewAllCateory}
          fetchProductList={fetchProductList}
          recommendedProduct={recommendedProduct}
          sectionData={sectionData}
          selectedRecommendedProduct={selectedRecommendedProduct}
          productSum={productSum}
          productSearchCard={productSearchCard}
          filterClicked={filterClicked}
        />
      </div>
      <FooterComponent />
      </div>
    </>
  );
}

export default AllProductCategoryPage;