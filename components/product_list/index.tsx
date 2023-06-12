import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import ProductFilter from "@/components/productFilter";
import ActiveProductFilter from "@/components/activeProductFilter";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import ProductCard from "../../components/health_needs/ProductCard";
import RecommendationalProductComponent from "../recommendational_product";
import HealthNeedFilter from "../health_needs/HealthNeedFilter";
import { useHeaderStore } from "../navbar/Store/useNavBarStore";

import axiosInstance from "@/utils/axiosInstance";

let sectionData: any = [];
let selectedRecommendedProduct: any = [];
function ProductListComponent() {
  const router = useRouter();
  const [productListData, SetProductListData] = useState<any>();
  /**
   * @description you can use the state here as well eventho it is called by diff component
   * 
   * @access `Suharika`
   */
  const productItemName = useHeaderStore(state => state.selectedCategory)
  /**
   * @end
   */
  const [activeFilter, setActiveFilter] = useState<any>([]);
  const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state variable
  const [recommendedProduct, setRecommendedProduct] = useState<any>();
  const [productName, setProductName] = useState<any>()
  const [productSum , setProductSum] = useState<any>()
  const [filterClicked, setFilterClicked] = useState(false);
  const productSearchCard = true
  let selectedCategoryName: any = [];
  // Right section product carousel data
  function fetchProductList(filter: any) {
    setIsLoading(true);
    let queryParameter = "";
    if (filter === "") {
      queryParameter = `(productType/value/name eq '${router.query.filter}') and`;
    } else if (filter === "NA") {
      queryParameter = "";
    } else {
      queryParameter = `${filter} and`;
    }
    const promise = axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(${queryParameter} ContentType/any(t:t eq 'ProductDetailsPage'))`);
    promise
      .then((res) => {
        if(res.data.results.length === 0){
          setProductSum(res.data.totalMatching)
          // setProductName(res.data.results[0]?.productType?.value[0].name)
          SetProductListData( [
            {item: {name: "" }},
            {data: {results: ""}},
          ])
        }
        setFilterClicked(true);
        setProductName(res.data.results[0]?.productType?.value[0].name)
        setProductSum(res.data.totalMatching)
        SetProductListData( [
          {item: {name: res.data.results[0]?.productType?.value[0].name }},
          {data: {results: res.data.results}},
        ])
      })
      .catch((e: Error | AxiosError) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setActiveFilter([]);
    fetchData();
  }, [router]);
  
  useEffect(() => {
    createQueryParameters();
    console.log("in useffect")
  }, [activeFilter]);



  const createQueryParameters = () => {
    let queryParams = "";

    if (selectedFilterItems.length > 0) {
      
      let lastCatId = 0;
      let minCategoryCnt = 0;
      let minSubCategoryCnt = 0;
      let tempId = false
      selectedFilterItems.map((category: any, catId: any) => {
        
        if (!category.isCategoryChecked && category.items.length > 0) {
          console.log("in if")
          // if (!mainCatId.includes(catId)) {
          //   mainCatId.push(catId);
          // }
          const categoryName = selectedFilterItems[catId].categoryName;
          selectedCategoryName.push(categoryName);
          if(lastCatId >= 0 && !category.isBusinessVerticalCategory){
            tempId = true
          }
          if (lastCatId > 0 && lastCatId != catId) {
            queryParams += tempId ? " and " : " or " 
            if(tempId && category.isBusinessVerticalCategory) { tempId = false}
          }

          queryParams += "(";
          category.items.map((item: any, index: any) => {
            const itemName = item.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            const concatStr =
              category.items.length === index + 1
                ? ""
                :category.isBusinessVerticalCategory ? " or " : " and ";
            queryParams += `${
              category.isBusinessVerticalCategory
                ? category?.productType
                : category?.productType.toLowerCase()
            }/value/name eq '${encodeItemName}' ${concatStr}`;
          });
          minSubCategoryCnt += category.items.length;
          queryParams += `)`;
          lastCatId = catId;
        }
         else {
          console.log("in else")
          minSubCategoryCnt += category.items.length;
          if (category.isCategoryChecked) {
            if(lastCatId >= 0 && !category.isBusinessVerticalCategory){
              tempId = true
            }
            if (lastCatId > 0 && lastCatId != catId) {
              // queryParams += " and ";
              queryParams += tempId ? " and " : " or " 
            if(tempId && category.isBusinessVerticalCategory) { tempId = false}
            }
            queryParams += "(";
          category.items.map((item: any, index: any) => { 
            const itemName = item.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            const concatStr =
              category.items.length === index + 1 ? "" : " or ";;
            queryParams += `${(category?.isBusinessVerticalCategory ? (category?.productType) : (category?.productType).toLowerCase())}/value/name eq '${encodeItemName}' ${concatStr}`;
          });
          queryParams += `)`;
          lastCatId = catId;
        }
        }
      });

      if (minCategoryCnt === 0 && minSubCategoryCnt == 0) {
        // queryParams = "";
        fetchProductList('')
      }
    }
    fetchProductList(queryParams);
  };

  // -------- Health needs page data fetch starts -------- //
  const [healthNeedData, setHealthNeedData] = useState<any>();
  const [activeFiltersData, setactiveFiltersData] = useState<any>();
  const [productCategoryData, setproductCategoryData] = useState<any>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Product Category setting - Filters data
    const activeFiltersData = await axiosInstance(
      `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`
    );
    const activeFiltersDataList = activeFiltersData?.data[0];
    // console.log("activeFilters --- ", activeFiltersDataList);
    setactiveFiltersData(activeFiltersDataList);

    // Product Category Helath needs - Left side category lists
    // const productCategoryData = await axios(
    //   // `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`
    //   `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/landing-page/&expand=*`
    // );
    // const productCategoryDataList =
    //   productCategoryData?.data[0]?.categoryFilter?.expandedValue;
    // // setRecommendedProduct(productCategoryData?.data[0].contentArea);
    // // console.log("MAIN productCategoryDataList --- ", productCategoryDataList);
    // //console.log("maincategorydata?.categoryImage?.expandedValue?.url--- ",productCategoryDataList[0]?.categoryImage?.expandedValue?.url);
    // setproductCategoryData(productCategoryDataList);
    // createTempFilterArr(productCategoryDataList);
  };


  const fetchRecommandedProductData = async () => {
    const tempName = productItemName?.length>0 ? productItemName : productName
    const correctedName = tempName?.replace(/ /g, "-")
    const recommendedCategoryData = await axiosInstance(
      `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/${correctedName}/&expand=*`
    );
    const response = recommendedCategoryData?.data[0]?.contentArea
    setRecommendedProduct(response)
    const productCategoryDataList =
    recommendedCategoryData?.data?.[0]?.categoryFilter?.expandedValue;
  setproductCategoryData(productCategoryDataList);
  createTempFilterArr(productCategoryDataList);
  }
  useEffect(() => {
    fetchRecommandedProductData()
  }, [router,productName]) 


  const createTempFilterArr = (results: any) => {
    console.log("in createTempFilterArr")
    let tempArr: any = [];
    results?.map((leftfiltermaindata: any) => {
      tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id] = [];
      tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id]["items"] = [];
      tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][
        leftfiltermaindata?.subCategory?.value[0]?.id
      ] = [];
      tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id]["categoryName"] =
        leftfiltermaindata?.mainCategory?.value[0]?.name;
      tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][
        "isBusinessVerticalCategory"
      ] = leftfiltermaindata?.isBusinessVerticalCategory?.value;
      tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id]["productType"] =
        leftfiltermaindata?.isBusinessVerticalCategory?.value
          ? "productType"
          : leftfiltermaindata?.name;
      tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][
        "isCategoryChecked"
      ] = false;
      leftfiltermaindata?.subCategory?.value.map((subItem: any) => {
        tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][subItem.id] = [];
        tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][subItem.id][
          "checked"
        ] = false;
        tempArr[leftfiltermaindata?.mainCategory?.value[0]?.id][subItem.id][
          "name"
        ] = subItem.name;
      });
    });
    // setSelectedFilterItems(tempArr)

    let selectedFilterData: any[] = [];
    selectedFilterData = tempArr;
    selectedFilterData.map((category: any) => {
      category.map((sub_category: any) => {
        if (router.query.filter === sub_category.name) {
          sub_category.checked = true;
          if (category["items"] && category["items"].indexOf(router.query.filter) === -1) {
            category["items"].push(router.query.filter);
            setActiveFilter([router.query.filter]);
          }
        } else {
          if (category["items"] && category["items"].indexOf(sub_category.name) > -1) {
            category["items"].splice(category["items"].indexOf(sub_category.name), 1);
          }
          category.checked = false;
        }
      });
    });

    setSelectedFilterItems(selectedFilterData);

  };


  useEffect(() => {
    recommendedProduct?.expandedValue?.map((id: any) => {
      return recommendedProduct?.expandedValue[1]?.contentBlockArea.expandedValue.map(
        (item: any) => {
          if (
            id?.recommendedProductCategory?.value
            // &&
            // id.recommendedProductCategory.value[0].id ===
            //   item.productCategoryType.value[0].id
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



  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
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

<div className="mck-Product-Listing-page container w-full mx-auto grid grid-cols-1">
<HealthNeedFilter
          activeFiltersData={activeFiltersData}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          productCategoryData={productCategoryData}
          selectedFilterItems={selectedFilterItems}
          selectedProduct={productListData}
          setSelectedFilterItems={setSelectedFilterItems}
          selectedViewAllCateory={selectedViewAllCateory}
          fetchProductList={fetchProductList}
          recommendedProduct={recommendedProduct}
          sectionData={sectionData}
          selectedRecommendedProduct={selectedRecommendedProduct}
          filterClicked={filterClicked}
          productSum={productSum}
          productSearchCard={productSearchCard}
        />
        
        
            </div>
    
    </>
  );
}
export default ProductListComponent;
