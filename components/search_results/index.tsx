import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import ActiveProductFilter from "../activeProductFilter";
import ProductFilter from "../productFilter";
import Image from "next/image";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import ProductCard from "../../components/health_needs/ProductCard";
import { ImageComponent } from "../global/ImageComponent";
import { fetchBlogSetting } from "../blog/BlogAPI";
import axiosInstance from "@/utils/axiosInstance";
import HealthNeedFilter from "../health_needs/HealthNeedFilter";

function ResultComponent() {
  const router = useRouter();
  const [productListData, SetProductListData] = useState<any>();
  const [activeFilter, setActiveFilter] = useState<any>([]);
  const [productFilter, setProductFilter] = useState<any>();
  const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);
  const [productCount, setProductCount] = useState<any>(0);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const [productSearch, setProductSearch] = useState<any>(router.query.search);
  const [placeHolders, setSearchplaceHolders] = useState<any>();
  const productSearchCard = true
  const [productSum , setProductSum] = useState<any>()

  function FetchProductFilter() {
    return axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`);
  }

  // Right section product filter data
  function fetchProductList(filter: any) {
    setSearchLoading(true)
    let queryParameter = "";
    if (filter !== "") {
      queryParameter = `(${filter}) and `;
    } 
    const StringParam = router.query.search?.toString().toLowerCase();
    const promise = axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=${queryParameter}ContentType/any(t:t eq 'ProductDetailsPage') and (contains(tolower(productType/value/name), '${StringParam}') or contains(tolower(description/value), '${StringParam}') or contains(tolower(title/value), '${StringParam}') or contains(tolower(name), '${StringParam}') or contains(tolower(highlightDescription/value), '${StringParam}'))`,

      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    promise
      .then((res) => {
        setProductCount(res?.data?.totalMatching);
        setProductSearch(router.query.search);
        setSearchLoading(false);
        setProductSum(res.data.totalMatching)
        SetProductListData( [
          {item: {name: res.data.results[0].productType?.value[0].name }},
          {data: {results: res.data.results}},
        ])
      })
      .catch((e: Error | AxiosError) => console.log(e));
  }

  useEffect(() => {
    FetchProductFilter()
      .then((res) => {
        setProductFilter(res);
      })
      .catch((e) => console.log(e));

    fetchProductList("");
  }, [router.query.search]);

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: "",
    });
  };

  const handleCheckBox = (
    e: any,
    filter: any,
    categoryId: any,
    subCategoryId: any
  ) => {
    let filterItems: any[] = [];
    filterItems = selectedFilterItems;
    if (e.target.checked) {
      if (filterItems[categoryId]["items"].indexOf(filter) === -1) {
        filterItems[categoryId]["items"].push(filter);
      }
      //existing code
      setActiveFilter([...activeFilter, filter]);
      filterItems[categoryId][subCategoryId].checked = true;
    } else {
      const index = filterItems[categoryId]["items"].indexOf(filter);
      filterItems[categoryId]["items"].splice(index, 1);
      //existing code
      setActiveFilter(
        activeFilter.filter((item: any) => {
          return item !== filter;
        })
      );
      filterItems[categoryId][subCategoryId].checked = false;
      if (filterItems[categoryId]["items"] && filterItems[categoryId]["items"].length <= 0) {
        filterItems[categoryId].isCategoryChecked = false;
      }
    }
    setSelectedFilterItems(() => filterItems);
  };

  const handleViewAllChange = (e: any, categoryId: any) => {
    let isCategoryChecked = false;
    let subCategoryChecked = false;
    if (e.target.checked) {
      if (selectedViewAllCateory.indexOf(categoryId) === -1) {
        selectedViewAllCateory.push(categoryId);
      }
      isCategoryChecked = true;
      subCategoryChecked = true;
    } else {
      const index = selectedViewAllCateory.indexOf(categoryId);
      selectedViewAllCateory.splice(index, 1);
      isCategoryChecked = false;
      subCategoryChecked = false;
    }

    let selectedFilterData: any[] = [];
    selectedFilterData = selectedFilterItems;

    selectedFilterData[categoryId].isCategoryChecked = isCategoryChecked;

    selectedFilterData[categoryId].map((sub_category: any) => {
      sub_category.checked = subCategoryChecked;
      if (subCategoryChecked) {
        if (selectedFilterData[categoryId]["items"].indexOf(sub_category.name) === -1) {
          selectedFilterData[categoryId]["items"].push(sub_category.name);
        }
      } else {
        const index = selectedFilterData[categoryId]["items"].indexOf(
          sub_category.name
        );
        selectedFilterData[categoryId]["items"].splice(index, 1);
      }
    });

    let selectedSubCat: any = [];
    selectedFilterData.map((category: any) => {
      category.items.map((name: any) => {
        if (selectedSubCat.indexOf(name) === -1) {
          selectedSubCat.push(name);
        }
      });
    });
    setActiveFilter(() => selectedSubCat);
    setSelectedFilterItems(() => selectedFilterData);
  };

  useEffect(() => {
    createQueryParameters();
  }, [activeFilter]);

  const createQueryParameters = () => {
    let queryParams = "";
    if (selectedFilterItems.length > 0) {

      let businessVerticalCategory: string[];
      businessVerticalCategory = [];
      let notBusinessVerticalCategory: string[];
      notBusinessVerticalCategory = [];

      selectedFilterItems.map((category: any, catId: any) => {
        category.items.map((item: any, index: any) => {
          let itemName = item.replace(/[^a-zA-Z ]/g, "");
          let encodeItemName = encodeURI(itemName);
          let categoryProductType = category.productType.toLowerCase();
          let queryParam = `${categoryProductType}/value/name eq '${encodeItemName}'`;
          if (category.isBusinessVerticalCategory) {
            businessVerticalCategory.push(queryParam);
          } else {
            notBusinessVerticalCategory.push(queryParam);
          }
        });
      });

      let businessQueryParams: string = '';
      let notBusinessQueryParams: string = '';
      businessQueryParams = businessVerticalCategory.join(' or ');
      notBusinessQueryParams = notBusinessVerticalCategory.join(' and ');

      if (businessQueryParams !== '') {
        if (notBusinessQueryParams !== '') {
          queryParams = `(${businessQueryParams}) and (${notBusinessQueryParams})`;
        } else {
          queryParams = businessQueryParams;
        }
      } else {
        queryParams = notBusinessQueryParams;
      }
    }
    fetchProductList(queryParams);
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
      setHealthNeedData(healthNeedsCategoriesListData);

      // Product Category setting - Filters data
      const activeFiltersData = await axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`
      );
      const activeFiltersDataList = activeFiltersData?.data[0];

      setactiveFiltersData(activeFiltersDataList);

      // Product Category Helath needs - Left side category lists
      const productCategoryData = await axiosInstance(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-search-result/&expand=*`
      );
      const productCategoryDataList =
        productCategoryData?.data[0]?.categoryFilter?.expandedValue;
      setproductCategoryData(productCategoryDataList);
      createTempFilterArr(productCategoryDataList);
    };

    fetchData();
  }, []);

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
        leftfiltermaindata?.isBusinessVerticalCategory?.value
          ? "productType"
          : leftfiltermaindata?.name;
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

  function handleClearOne(item: any) {
    setActiveFilter(
      activeFilter.filter((filterItem: any) => filterItem !== item)
    );
    let selectedFilterData: any[] = [];
    selectedFilterData = selectedFilterItems;
    selectedFilterData.map((category: any) => {
      category.isCategoryChecked = false;
      category.map((sub_category: any) => {
        if (item == sub_category.name) {
          sub_category.checked = false;
        }
        if (category["items"] && category["items"].indexOf(item) > -1) {
          category["items"].splice(category["items"].indexOf(item), 1);
        }
      });
    });
    setSelectedFilterItems(() => selectedFilterData);

  }

  const handleClearAll = () => {
    setActiveFilter([]);
    let selectedFilterData: any[] = [];
    selectedFilterData = selectedFilterItems;
    selectedFilterData.map((category: any) => {
      category.isCategoryChecked = false;
      category.map((sub_category: any) => {
        sub_category.checked = false;
        if (category["items"] && category["items"].indexOf(sub_category.name) > -1) {
          category["items"].splice(category["items"].indexOf(sub_category.name), 1);
        }
      });
    });
    setSelectedFilterItems(() => selectedFilterData);
    fetchProductList("");
  };
  const handleProductClick = (data: any) => {
    const title = data.routeSegment;
    router.push({
      pathname: "/product_detail",
      query: { data: title },
    });
  };

  useEffect(() => {
    fetchBlogSetting()
      .then((res) => {
        setSearchplaceHolders(res.data[0])

      })
      .catch((e: Error | AxiosError) => {
        // console.log(e);
      })
    document.documentElement.lang = "en";
  }, []);

  const [ApiRespond, setApiRespond] = useState<any>();
  useEffect(() => {
    document.title = ApiRespond?.data[0]?.title.value || "Default Title";
  }, [ApiRespond]);

  return (
    <>
      <div className="search-results lg:p-72 lg:px-0 p-4 pt-6 pb-0 container mx-auto lg:pt-[72px] lg:pb-0">
        <div className="desktop:px-6 mobile:px-0">
          {searchLoading &&
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 bg-black opacity-30"></div>
              <div className="relative">
                <Image src={gifImage} alt="coba-image" />{" "}
              </div>
            </div>
          }
          {productCount===0 ? <div className='lg:col-span-2 col-start-1 col-end-7'>
            < div className='w-full lg:pb-11 pb-5' >
              <h1 className='lg:text-32 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-left' id='blog-link-001' >{`${placeHolders?.noMatchFoundText.value} “${productSearch}”`} </h1>
              <div className="text-base text-sofia-reg text-mckback font-normal lg:pb-px pb-3" id="srnf-label-001">{placeHolders?.searchForText.value} <strong className='text-mckred'><i>{productSearch}</i></strong></div>
              <div className='text-lg text-sofia-reg text-mcknormalgrey font-normal' id="srnf-label-003">{placeHolders?.showResultsText.value.replace(/#/g, 0)}</div>
            </div >
          </div > :
            <>
              <h1 className='lg:text-32 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-left' id='blog-link-001' >{`${productCount} ${placeHolders?.showingResultsText.value} “${productSearch}”`} </h1>
              {/* <div className="text-lg text-sofia-reg text-mckback font-normal lg:pb-px pb-1" id="srnf-label-002">{placeHolders?.showingResultsText.value} <strong className='text-mckblue'><i>{productSearch}</i></strong></div> */}
              {/* <div className='text-lg text-sofia-reg text-mcknormalgrey font-normal' id="srnf-label-003">{placeHolders?.showResultsText.value.replace(/#/g, productCount)}</div> */}
              <br />
            </>}

        </div>
        <div className="mck-product-filter">
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
          productSum={productSum}
          productSearchCard={productSearchCard}
        />
        </div>
      </div>
    </>
  );
}
export default ResultComponent;
