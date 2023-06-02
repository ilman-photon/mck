import useAxios from "../../hooks/useApi";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import HealthNeedCategory from "./healthNeedCategory";
import HealthNeedFilter from "./HealthNeedFilter";
import HealthNeedCategoryMobile from "./healthNeedCategoryMobile";
import Image from "next/image";

import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
let sectionData: any = []
let selectedRecommendedProduct: any = []
let _temparray :any = []
const HealthNeedsComponent = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<any>([]);
  const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>([]);
  const [selectedHealthNeed, setSelectedHealthNeed] = useState<any>([]);
  const [healthData, setHealthData] = useState(false);
  const [isLoading, setIsLoading] = useState(true); //
  const [loadingProgress, setLoadingProgress] = useState(0); // State untuk mengatur kemajuan loading progress
  const [recommendedProduct , setRecommendedProduct] = useState<any>()
  const [data , setData] = useState(false)

  function FetchProductFilter() {
    return axios.get(
      //`${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category-setting/?expand=*`,
      `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function fetchRecommandedProduct() {
    return axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Acute care' or  productType/value/name eq 'Preventative Care') and ContentType/any(t:t eq 'ProductDetailsPage') and (recommendedProduct/value eq true))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

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

    let categoryArrayList =_temparray

    let queryParameter = "";
    if (filter === "") {
      // queryParameter = `(productType/value/name eq 'Acute Care')`;
      // queryParameter = `(healthNeeds/value/name eq 'Bone')`;
    } else {
      if (filter.includes("healthNeeds")) {
        queryParameter = filter;
      } 
      else {
        queryParameter = filter 
          // + " and ContentType/any(t:t eq 'ProductDetailsPage')";
      }
    }

    const promise = axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(${queryParameter} and ContentType/any(t:t eq 'ProductDetailsPage'))`,
      // `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(${queryParameter} or ContentType/any(t:t eq 'ProductDetailsPage'))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    promise
      .then((res) => {
        console.log("FetchProductList----- ", res);
        let tempObj: any = {};
        if (filter.includes("Health%20Needs")) {
          setHealthData(!healthData);
        } else {
        let catArray :any =[]
          res.data.results.map((item: any) => {

            let temp = item.healthNeeds.value
            temp.shift()

            temp.map((value : any) => {
              let key = value.name 
              if(!catArray.includes(key)){
              catArray.push(key)
              }

              if(categoryArrayList.length>0 && !categoryArrayList.includes(key)){
                key =''

              }

              let tempArray = item.healthNeeds.value.filter(
                (healthNeeds: any) => healthNeeds.name === key
              );

              if (tempArray.length === 1) {
                if (tempObj[key]) {
                  let categoryArray: any = tempObj[key];
                  categoryArray.push(item);
                  tempObj[key] = categoryArray;
                } else {
                  tempObj[key] = [item];
                }
              }
            });
          });
          let productArray: any = [];
        const mapArray =  categoryArrayList.length > 0 ? categoryArrayList : catArray 
        mapArray.map((key :any) => {
            productArray.push({
              item: { name: key },
              data: { results: tempObj[key] },
            });
          });
          setSelectedProduct(productArray);
        }
      })
      .catch((e: Error | AxiosError) => console.log(e))
      .finally(() => {
        // Mengatur state isLoading menjadi false setelah selesai memuat data atau terjadi kesalahan
        setIsLoading(false);
      });
  }

  useEffect(() => {
    FetchProductFilter()
      .then((res) => {})
      .catch((e) => console.log(e));

    fetchRecommandedProduct()
      .then((res) => {})
      .catch((e: Error | AxiosError) => console.log(e));

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

  // Get & display checkbox value - From Sub category list
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputElement = event.target;
    const inputValue = (inputElement as HTMLInputElement).value;

    if (inputValue) {
      if (checkedValues.includes(inputValue)) {
        // Remove the value if it's already checked
        setCheckedValues(checkedValues.filter((val) => val !== inputValue));
      } else {
        // Add the value if it's not checked
        setCheckedValues([...checkedValues, inputValue]);
      }
    }
  }

  useEffect(() => {
    createQueryParameters();
  }, [activeFilter]);

  const createQueryParameters = () => {
    let queryParams = "";
    if (selectedFilterItems.length > 0) {
      let lastCatId = 0;
      let minCategoryCnt = 0;
      let minSubCategoryCnt = 0;
      selectedFilterItems.map((category: any, catId: any) => {
        _temparray=[]
        if (!category.isCategoryChecked && category.items.length > 0) {
          if (lastCatId > 0 && lastCatId != catId) {
            queryParams += " and ";
          }
          queryParams += "(";
          category.items.map((item: any, index: any) => {
            if(category.productType === "healthNeeds"){
            if (!_temparray.includes(item)) {
              _temparray.push(item);
            }
            }
            const itemName = item.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            const concatStr =
              category.items.length === index + 1 ? "" :  category.isBusinessVerticalCategory ? " or " : " and ";;
            queryParams += `${(category?.isBusinessVerticalCategory ? (category?.productType) : (category?.productType).toLowerCase())}/value/name eq '${encodeItemName}' ${concatStr}`;
          });

          minSubCategoryCnt += category.items.length;
          queryParams += `)`;
          lastCatId = catId;
        } else {
          minCategoryCnt += category.isCategoryChecked;
          // minSubCategoryCnt += category.items.length;
          if (category.isCategoryChecked) {
            if (lastCatId > 0 && lastCatId != catId) {
              queryParams += " and ";
            }
            queryParams += "(";
          category.items.map((item: any, index: any) => {
            if(category.productType === "healthNeeds"){
            if (!_temparray.includes(item)) {   
              _temparray.push(item);
            }
            }
            const itemName = item.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            const concatStr =
              category.items.length === index + 1 ? "" :  category.isBusinessVerticalCategory ? " or " : " and ";;
            queryParams += `${(category?.isBusinessVerticalCategory ? (category?.productType) : (category?.productType).toLowerCase())}/value/name eq '${encodeItemName}' ${concatStr}`;
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
  const updatedURL = currentURL.split('?')[0]; 
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
      const healthNeedsCategories = await axios.get(
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
      setHealthNeedData(healthNeedsCategoriesListData);
      setRecommendedProduct(healthNeedsCategories?.data[0].contentArea)

      // Product Category setting - Filters data
      const activeFiltersData = await axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`
      );
      const activeFiltersDataList = activeFiltersData?.data[0];
      setactiveFiltersData(activeFiltersDataList);

      // Product Category Helath needs - Left side category lists
      const productCategoryData = await axios.get(
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
  

  useEffect(()=>{

    recommendedProduct?.expandedValue?.map((id: any) => {
    return recommendedProduct?.expandedValue[1].healthNeedItem.expandedValue.map((item: any) => {
      if (id?.recommendedProductCategory?.value &&
        id.recommendedProductCategory.value[0].id === item.healthNeedCategory.value[0].id) {

        const productName = id.recommendedProductCategory.value[0].name
        if (!selectedRecommendedProduct.includes(productName)) {
          selectedRecommendedProduct.push(productName);
        }

        const isDuplicate = sectionData.some((item :any) => item.name === id.name);

        if (!isDuplicate) {
          sectionData.push(id);
        }
      }
    });
  });
  },[recommendedProduct])

  useEffect(() => {
    const fetchData = async () => {
      const healthNeedsCategories = await axios.get(
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

      healthNeedsCategoriesListData?.map((item: any) => {
        const text = item.name;
        const correctText = text.replace(/&/g, "");
        axios
          .get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(healthNeeds/value/name eq '${correctText}')`,
            {
              headers: {
                "Accept-Language": "en",
              },
            }
          )
          .then((res) => {
            setSelectedProduct((prevSelectedProducts :any) => {
              const isDuplicate = prevSelectedProducts.some(
                (selectedItem :any) => selectedItem.item.name === item.name
              );
              if (isDuplicate) {
                return prevSelectedProducts;
              }
            
              const updatedProducts = [
                ...prevSelectedProducts.filter(
                  (selectedItem : any) => selectedItem.item !== item
                ),
                { item, data: res.data }
              ];
              updatedProducts.sort((a: any, b: any) => {
                const propertyName = 'name';
                return a.item[propertyName].localeCompare(b.item[propertyName]);
              });

              return updatedProducts
            });
          });
      });
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
      leftfiltermaindata?.name
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
          // recommendedProduct={recommendedProduct}
          sectionData={sectionData}
          selectedRecommendedProduct={selectedRecommendedProduct}
        />
      </div>
    </>
  );
};

export default HealthNeedsComponent;
