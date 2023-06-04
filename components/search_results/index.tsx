import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import ActiveProductFilter from "../activeProductFilter";
import ProductFilter from "../productFilter";
import Image from "next/image";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import ProductCard from "../../components/health_needs/ProductCard";
import { ImageComponent } from "../global/ImageComponent";

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

  function FetchProductFilter() {
    return axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  // Right section product filter data
  function fetchProductList(filter: any) {
    setSearchLoading(true)
    let queryParameter = "";
    if (filter !== "") {
      queryParameter = `(${filter}) and `;
    } 
    const StringParam = router.query.search?.toString().toLowerCase();
    const promise = axios.get(
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
        SetProductListData(res);
        setSearchLoading(false);
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
    let filterItems : any[] = [];
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
      if(filterItems[categoryId]["items"] && filterItems[categoryId]["items"].length <= 0){
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

    let selectedFilterData : any[] = [];
    selectedFilterData = selectedFilterItems;    

    selectedFilterData[categoryId].isCategoryChecked = isCategoryChecked;

    selectedFilterData[categoryId].map((sub_category: any) => {
      sub_category.checked = subCategoryChecked;
      if (subCategoryChecked) {
        if(selectedFilterData[categoryId]["items"].indexOf(sub_category.name) === -1){
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

      let businessVerticalCategory :string[];
      businessVerticalCategory = [];
      let notBusinessVerticalCategory :string[];
      notBusinessVerticalCategory = [];
      
      selectedFilterItems.map((category: any, catId: any) => {
        category.items.map((item: any, index: any) => {
          let itemName = item.replace(/[^a-zA-Z ]/g, "");
          let encodeItemName = encodeURI(itemName);
          let categoryProductType = category.productType.toLowerCase();
          let queryParam = `${categoryProductType}/value/name eq '${encodeItemName}'`;
          if(category.isBusinessVerticalCategory){
            businessVerticalCategory.push(queryParam);
          }else{
            notBusinessVerticalCategory.push(queryParam);
          }
        });
    });

    let businessQueryParams : string = '';
    let notBusinessQueryParams : string = '';
    businessQueryParams = businessVerticalCategory.join(' or '); 
    notBusinessQueryParams = notBusinessVerticalCategory.join(' and ');

    if(businessQueryParams !== ''){
      if(notBusinessQueryParams !== ''){
        queryParams = `(${businessQueryParams}) and (${notBusinessQueryParams})`;
      }else{
        queryParams = businessQueryParams;
      }
    }else{
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

      // Product Category setting - Filters data
      const activeFiltersData = await axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`
      );
      const activeFiltersDataList = activeFiltersData?.data[0];

      setactiveFiltersData(activeFiltersDataList);

      // Product Category Helath needs - Left side category lists
      const productCategoryData = await axios(
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
    let selectedFilterData : any[] =[];
    selectedFilterData = selectedFilterItems;
    selectedFilterData.map((category: any) => {
      category.isCategoryChecked = false;
      category.map((sub_category: any) => {
        if (item == sub_category.name) {
          sub_category.checked = false;
        }
        if(category["items"] && category["items"].indexOf(item) > -1){
          category["items"].splice(category["items"].indexOf(item), 1);
        }
      });
    });
    setSelectedFilterItems(()=>selectedFilterData);

  }

  const handleClearAll = () => {
    setActiveFilter([]);
    let selectedFilterData : any[] = []; 
    selectedFilterData = selectedFilterItems;
    selectedFilterData.map((category: any) => {
      category.isCategoryChecked = false;
      category.map((sub_category: any) => {
        sub_category.checked = false;
        if(category["items"] && category["items"].indexOf(sub_category.name) > -1){
          category["items"].splice(category["items"].indexOf(sub_category.name), 1);
        }
      });
    });
    setSelectedFilterItems(()=>selectedFilterData);
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
        
        document.documentElement.lang = "en";
    }, []);
        
    const [ApiRespond, setApiRespond] = useState<any>();
    useEffect(() => {
        document.title = ApiRespond?.data[0]?.title.value || "Default Title";
    }, [ApiRespond]);

  return (
    <>
      <div className="search-results lg:p-72 lg:px-0 p-4 pt-6 pb-0 container mx-auto lg:mt-[170px] lg:pt-[72px]">
        <div className="desktop:px-6 mobile:px-0">
         {searchLoading && 
          <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-30"></div>
          <div className="relative">
            <Image src={gifImage} alt="coba-image" />{" "}
            </div>
          </div>
         }
         {!searchLoading &&
          <div
            className="text-54 font-medium text-gtl-med text-mckblue lg:pb-12 pb-1"
            
            id="sr_label_001"
          >
            
            {productCount + " results found for “" + productSearch + "”"}
          </div>
          }
          <div
            className="lg:text-lg text-base text-sofia-reg text-black pb-1 font-normal"
            
            id="sr_label_002"
          >
            Showing results for
            <span className="text-mckblue italic"> {productSearch}</span>
          </div>
          <div
            className="lg:text-base text-sm text-sofia-reg text-black lg:pb-5 pb-3 font-normal"
            
            id="sr_label_003"
          >
            Search for
            <span className="text-mckred italic"> {productSearch}</span>
          </div>
          <div
            className="lg:text-lg text-base pb-1.5 text-sofia-reg font-normal textmcknormalgrey lg:pb-11 border-b-[#CCD1E3]"
            
            id="sr_label_004"
          >
            Showing {productCount} results
          </div>
        </div>
        <div className="mck-product-filter">
          <div className="container lg:mt-8 mt-6 md:px-6 lg:px-6 xl:px-0">
            {/* Health needs - Top Active Filter section starts */}
            <section>
              <ActiveProductFilter
                activeFiltersData={activeFiltersData}
                activeFilter={activeFilter}
                handleClearOne={handleClearOne}
                handleClearAll={handleClearAll}
              />
            </section>
            {/* Health needs - Top Active Filter section starts */}

            {/* Health needs - Left coloumn Filter section starts */}
            <div className="lg:flex  lg:mt-8 mt-6">
              <div className="flex-none h-max lg:w-1/6 xl:w-1/6 w-full">
                <ProductFilter
                  productCategoryData={productCategoryData}
                  handleViewAllChange={handleViewAllChange}
                  selectedFilterItems={selectedFilterItems}
                  handleCheckBox={handleCheckBox}
                />
              </div>

              <div className="flex-auto lg:w-10/12 xl:w-10/12 w-full">
                {/* Health needs - Right coloumn starts */}
                <div>
                  {/* {healthNeedData?.map((healthcategorytitle: any) => ( */}
                  <>
                    {/* Health needs categories title & product carousel items starts */}
                    <section>
                      {/* Product items */}
                      <div className="grid mobile:grid-cols-2 md:grid-cols-3 desktop:grid-cols-4 lg:grid-cols-5 pt-4 lg:pt-0 lg:pl-6 break-words">
                        {productListData?.data?.results.map((item: any, idx: number) => {
                          return (
                              <div
                              className="rounded-lg border border-[#CCD1E3] mr-1 p-4 lg:mb-6 mb-4"
                              key={item?.contentLink?.id}
                              onClick={() => handleProductClick(item)}
                              >
                              <div className="lg:h-60 h-28 flex items-center justify-center">
                              <ImageComponent
                                src={item?.image?.value?.url} 
                                alt={item?.image?.value?.url} 
                                className="mx-auto border-0 lg:max-h-60 max-h-28 cursor-pointer"
                                id={"sr-prod-img-001"+idx}
                              />
                              </div>
                              <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey mt-2 text-sofia-bold text-mckblue text-xs font-extrabold leading-[18px] h-[22px]">
                                {item?.form?.value[1]?.name}
                              </div>
                              <div className="text-mckblue mt-3 text-sofia-bold font-extrabold text-xl truncate">
                                {item?.name}
                              </div>
                              <div
                                className="text-mcknormalgrey mt-1 text-sofia-reg text-base font-normal para-ellipsis-3"
                                dangerouslySetInnerHTML={{
                                  __html: item?.highlightDescription?.value,
                                }}
                              ></div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ResultComponent;
