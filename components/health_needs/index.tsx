import useAxios from "../../hooks/useApi";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import HealthNeedCategory from "./healthNeedCategory";
import HealthNeedFilter from "./HealthNeedFilter";
import HealthNeedCategoryMobile from "./healthNeedCategoryMobile";
import Image from "next/image";

import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import axiosInstance from "@/utils/axiosInstance";
let sectionData: any = [];
let selectedRecommendedProduct: any = [];
let _temparray: any = [];

type HealthNeedsComponentType = {
  isCarusolAvaibleProps?: any;
};
const HealthNeedsComponent = ({
  isCarusolAvaibleProps,
}: HealthNeedsComponentType) => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<any>([]);
  const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>([]);
  const [selectedHealthNeed, setSelectedHealthNeed] = useState<any>([]);
  const [healthData, setHealthData] = useState(false);
  const [isLoading, setIsLoading] = useState(true); //
  const [loadingProgress, setLoadingProgress] = useState(0); // State untuk mengatur kemajuan loading progress
  const [recommendedProduct, setRecommendedProduct] = useState<any>();
  const [filterClicked, setFilterClicked] = useState(false);
  const [customerBackgroundColorCode, setCustomerBackgroundColorCode] =
    useState();
  const [productSum, setProductSum] = useState<any>();

  // Right section product carousel data
  function fetchProductList(filter: any) {
    setIsLoading(true);
    if (filter.length > 0) {
      const query = filter.match(/eq '(.*)'/);
      const queryParams = { filter: query[1] };
      router.push({
        pathname: "/health_needs",
        query: queryParams,
      });
    } else {
      router.push({
        pathname: "/health_needs",
      });
    }

    const query = filter;
    const regex = /'([^']+)'/g;
    const matches = [...query.matchAll(regex)];
    const values = matches.map((match) => match[1]);

    let categoryArrayList = _temparray;

    let queryParameter = "";
    if (filter === "") {
      // queryParameter = `(productType/value/name eq 'Acute Care')`;
      // queryParameter = `(healthNeeds/value/name eq 'Bone')`;
    } else {
      if (filter.includes("healthNeeds")) {
        queryParameter = filter;
      } else {
        queryParameter = filter;
        // + " and ContentType/any(t:t eq 'ProductDetailsPage')";
      }
    }

    const promise = axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(${queryParameter} and ContentType/any(t:t eq 'ProductDetailsPage'))`);
    promise
      .then((res) => {
        console.log("FetchProductList----- ", res);
        setFilterClicked(true);
        let tempObj: any = {};
        // if (filter.includes("Health%20Needs")) {
        //   setHealthData(!healthData);
        // } else {
          let catArray: any = [];
          let tempResults :any =[]
          setProductSum(res.data.totalMatching)
          res.data.results.map((item: any) => {

            item?.healthNeeds?.value.forEach((value :any) => {
              if (value.name !== "Health Needs" && 
              categoryArrayList.some((element : any) => value.name.includes(element))) { 
                
                if (!tempResults[value.name]) {
                  tempResults[value.name] = [];
                }
                tempResults[value.name].push(item);
              }
              else if (value.name !== "Health Needs" && categoryArrayList.length == 0)
              {
                if (!tempResults[value.name]) {
                  tempResults[value.name] = [];
                }
                tempResults[value.name].push(item);
              }
            });
        });
        
        const transformedArray = Object.entries(tempResults).map(([key, value]) => {
          return {
            item: { name: key },
            data: { results: value }
          };
        });
        setSelectedProduct(transformedArray)
      })
      .catch((e: Error | AxiosError) => console.log(e))
      .finally(() => {
        // Mengatur state isLoading menjadi false setelah selesai memuat data atau terjadi kesalahan
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchProductList("");
  }, []);

  useEffect(() => {
    // Mengatur loading progress secara berkala
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        if (newProgress === 100) {
          clearInterval(interval);
        }
        return newProgress;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // {console.log(productSum,"sum")}
  useEffect(() => {
    createQueryParameters();
  }, [activeFilter]);

  const createQueryParameters = () => {
    let queryParams = "";
    let tempId = false;
    if (selectedFilterItems.length > 0) {
      let lastCatId = 0;
      let minCategoryCnt = 0;
      let minSubCategoryCnt = 0;
      selectedFilterItems.map((category: any, catId: any) => {
        _temparray = [];
        if (!category.isCategoryChecked && category.items.length > 0) {
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
            if (category.productType === "healthNeeds") {
              if (!_temparray.includes(item)) {
                _temparray.push(item);
              }
            }
            const itemName = item.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            const concatStr = category.items.length === index + 1 ? "" : " or ";
            queryParams += `${
              category?.isBusinessVerticalCategory
                ? category?.productType
                : (category?.productType).toLowerCase()
            }/value/name eq '${encodeItemName}' ${concatStr}`;
          });

          minSubCategoryCnt += category.items.length;
          queryParams += `)`;
          lastCatId = catId;
        } else {
          minCategoryCnt += category.isCategoryChecked;
          // minSubCategoryCnt += category.items.length;
          if (category.isCategoryChecked) {
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
              if (category.productType === "healthNeeds") {
                if (!_temparray.includes(item)) {
                  _temparray.push(item);
                }
              }
              const itemName = item.replace(/[^a-zA-Z ]/g, "");
              const encodeItemName = encodeURI(itemName);
              const concatStr =
                category.items.length === index + 1 ? "" : " or ";
              queryParams += `${
                category?.isBusinessVerticalCategory
                  ? category?.productType
                  : (category?.productType).toLowerCase()
              }/value/name eq '${encodeItemName}' ${concatStr}`;
            });
            queryParams += `)`;
            lastCatId = catId;
            // const categoryName = selectedFilterItems[catId].categoryName;
            // const itemName = categoryName.replace(/[^a-zA-Z ]/g, "");
            // const encodeItemName = encodeURI(itemName);
            // const joinedCond =
            //   selectedViewAllCateory.length === minCategoryCnt ? "" : "and ";
            // const beforeCond = minSubCategoryCnt > 0 ? " and " : "";
            // console.log(categoryName,"categoryName",itemName,"itemName",joinedCond,"joinedCond",beforeCond,"beforeCond")
            // queryParams += ` ${beforeCond} (${selectedFilterItems[catId].productType}/value/name eq '${encodeItemName}') ${joinedCond} `;
          }
        }
      });

      if (minCategoryCnt === 0 && minSubCategoryCnt == 0) {
        // queryParams = "";
        const currentURL = window.location.href;
        const updatedURL = currentURL.split("?")[0];
        window.location.href = updatedURL;
      }
    }

    if (queryParams) fetchProductList(queryParams);
    else {
      router.push({
        pathname: "/health_needs",
      });
    }
  };

  // -------- Health needs page data fetch starts -------- //
  const [healthNeedData, setHealthNeedData] = useState<any>();
  const [activeFiltersData, setactiveFiltersData] = useState<any>();
  const [productCategoryData, setproductCategoryData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      // Health needs Categories List
      const healthNeedsCategories = await axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`
      );
      const healthNeedsCategoriesList =
        healthNeedsCategories?.data[0].contentArea?.expandedValue?.filter(
          (categoryList: any) => categoryList.name === "Health Need Highlights"
        );

      const healthNeedsCategoriesListData =
        healthNeedsCategoriesList.length > 0
          ? healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue
          : [];
      setCustomerBackgroundColorCode(
        healthNeedsCategoriesList[0].backgroundColorCode?.value
      );
      setHealthNeedData(healthNeedsCategoriesListData);
      setRecommendedProduct(healthNeedsCategories?.data[0].contentArea);

      // Product Category setting - Filters data
      const activeFiltersData = await axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`
      );
      const activeFiltersDataList = activeFiltersData?.data[0];
      setactiveFiltersData(activeFiltersDataList);

      // Product Category Helath needs - Left side category lists
      const productCategoryData = await axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`
      );
      const productCategoryDataList =
        productCategoryData?.data[0]?.categoryFilter?.expandedValue;
      setproductCategoryData(productCategoryDataList);
      createTempFilterArr(productCategoryDataList);
      const subCategories = productCategoryDataList[0].subCategory.value;
      const mainCategory = productCategoryDataList[0].mainCategory.value[0];

      subCategories.forEach((subCat: any) => {
        const name = subCat.name;
        const catId = mainCategory.id;
        const subCatId = subCat.id;

        selectedHealthNeed[name] = { cat_id: catId, sub_cat_id: subCatId };
      });

      setSelectedHealthNeed(selectedHealthNeed);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let tempRecommendedProduct = recommendedProduct?.expandedValue?.filter
      ((item :any) => {
        if (item && item?.title && item?.title?.value === "Health Needs Highlights") {
          return item
        }
      });
    recommendedProduct?.expandedValue?.map((id: any) => {
      return tempRecommendedProduct[0].healthNeedItem?.expandedValue.map(
        (item: any) => {
          if (
            id?.recommendedProductCategory?.value &&
            id.recommendedProductCategory.value[0].id ===
              item.healthNeedCategory.value[0].id
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
    const fetchData = async () => {
      const healthNeedsCategories = await axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`
      );
      const healthNeedsCategoriesList =
        healthNeedsCategories?.data[0].contentArea?.expandedValue?.filter(
          (categoryList: any) => categoryList.name === "Health Need Highlights"
        );

      const healthNeedsCategoriesListData =
        healthNeedsCategoriesList.length > 0
          ? healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue
          : [];

      axiosInstance
        .get(
          // `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(healthNeeds/value/name eq '${correctText}')`,
          `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(ContentType/any(t:t eq 'ProductDetailsPage'))&expand=*&orderby=changed desc`)
        .then((res) => {
          setProductSum(res.data.totalMatching);
          let tempResults: any = [];
          res.data.results.map((item: any) => {
            item?.healthNeeds?.value.forEach((value: any) => {
              if (value.name !== "Health Needs") {
                if (!tempResults[value.name]) {
                  tempResults[value.name] = [];
                }
                tempResults[value.name].push(item);
              }
            });
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
        });
      // });
    };

    fetchData();
  }, [healthData]);

  const createTempFilterArr = (results: any) => {
    let tempArr: any = [];
    results?.map((leftfiltermaindata: any) => {
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id] = [];
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id]["items"] = [];
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id][
        leftfiltermaindata?.subCategory?.value[0].id
      ] = [];
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id]["categoryName"] =
        leftfiltermaindata?.mainCategory?.value[0].name;
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id][
        "isBusinessVerticalCategory"
      ] = leftfiltermaindata?.isBusinessVerticalCategory?.value;
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id]["productType"] =
        leftfiltermaindata?.name;
      // leftfiltermaindata?.isBusinessVerticalCategory?.value
      //   ? leftfiltermaindata?.name
      //   : leftfiltermaindata?.name;
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id][
        "isCategoryChecked"
      ] = false;
      leftfiltermaindata?.subCategory?.value.map((subItem: any) => {
        tempArr[leftfiltermaindata?.mainCategory?.value[0].id][subItem.id] = [];
        tempArr[leftfiltermaindata?.mainCategory?.value[0].id][subItem.id][
          "checked"
        ] = false;
        tempArr[leftfiltermaindata?.mainCategory?.value[0].id][subItem.id][
          "name"
        ] = subItem.name;
      });
    });
    setSelectedFilterItems(tempArr);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-30"></div>
          <div className="relative">
            <Image src={gifImage} alt="coba-image" />{" "}
          </div>
        </div>
      )}
      <div className="mck-health-needs-page container w-full mx-auto grid grid-cols-1">
        <HealthNeedCategory
          healthNeedData={healthNeedData}
          selectedFilterItems={selectedFilterItems}
          selectedHealthNeed={selectedHealthNeed}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          productCategoryData={
            productCategoryData?.length && productCategoryData[0]
          }
          customerBackgroundColorCode={customerBackgroundColorCode}
        />
        <HealthNeedCategoryMobile
          healthNeedData={healthNeedData}
          selectedFilterItems={selectedFilterItems}
          selectedHealthNeed={selectedHealthNeed}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          productCategoryData={
            productCategoryData?.length && productCategoryData[0]
          }
          customerBackgroundColorCode={customerBackgroundColorCode}
        />

        <HealthNeedFilter
          activeFiltersData={activeFiltersData}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          productCategoryData={productCategoryData}
          selectedFilterItems={selectedFilterItems}
          selectedProduct={selectedProduct}
          setSelectedFilterItems={setSelectedFilterItems}
          selectedViewAllCateory={selectedViewAllCateory}
          fetchProductList={fetchProductList}
          recommendedProduct={recommendedProduct}
          sectionData={sectionData}
          selectedRecommendedProduct={selectedRecommendedProduct}
          filterClicked={filterClicked}
          productSum={productSum}
        />
      </div>
    </>
  );
};

export default HealthNeedsComponent;
