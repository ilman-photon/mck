import useAxios from "@/hooks/useApi";
import CarouselComponent from "@/components/carousel";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryComponent from "@/components/category/index1";
import { useRouter } from "next/router";
import GoogleTagManager from "@/components/google_tag_manager";

function AllProductCategoryPage() {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState<any>();
  const [categoryError, setCategoryError] = useState<any>();
  const [categoryLoading, setCategoryLoding] = useState<any>(true);
  const [productFilter, setProductFilter] = useState<any>();
  const [productListData, SetProductListData] = useState<any>();
  const [activeFilter, setActiveFilter] = useState<any>([]);
  const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);
  const [acuteCareData, setAcuteCareData] = useState<any>();
  const [acuteCareError, setAcuteCareError] = useState<any>();
  const [acuteCareLoading, setAcuteCareLoding] = useState<any>(true);
  const [recommendedAcuteCare, setRecommendedAcuteCare] = useState<any>();
  const [recommendedAcuteCareLoading, setRecommendedAcuteCareLoading] =
    useState<any>(true);
  const [preventiveCareData, setPreventiveCareData] = useState<any>();
  const [recommendedPreventiveCare, setRecommendedPreventiveCare] =
    useState<any>();
  const [everyDayCareData, setEveryDayCareData] = useState<any>();
  const [recommendedEveryDayCare, setRecommendedEveryDayCare] = useState<any>();
  const [diagnosticCareData, setDiagnosticCareData] = useState<any>();
  const [recommendedDiagnosticCare, setRecommendedDiagnosticCare] =
    useState<any>();
  const [recommendedProductListData, SetRecommendedProductListData] = useState<any>();
  const [productCategory, setProductCategory] = useState<any>();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/home/&expand=*&Select=blockArea`,
    headers: {
      "Accept-Language": "en",
    },
  });

  function fetchProductList(filter: any) {
    let queryParameter = '';
    if (filter === '') {
      queryParameter = `(productType/value/name eq 'Acute Care')`;
    } else {
      queryParameter = filter;
    }
    const promise = axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(${queryParameter} or ContentType/any(t:t eq 'ProductDetailsPage'))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    promise
      .then((res) => {
        // console.log("FetchProductList----- ", res);
        SetProductListData(res);
      })
    //  .catch((e: Error | AxiosError) => console.log(e));
  }


  // -------- Health needs page data fetch starts -------- //
  const [healthNeedData, setHealthNeedData] = useState<any>();
  const [activeFiltersData, setactiveFiltersData] = useState<any>();
  const [productCategoryData, setproductCategoryData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {

      // Health needs Categories List
      const healthNeedsCategories = await axios(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`);
      const healthNeedsCategoriesList = healthNeedsCategories?.data[0].contentArea?.expandedValue?.filter((categoryList: any) => categoryList.name === "Health Need Highlights");

      // console.log("healthNeedsCategoriesList --- ", healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue);

      const healthNeedsCategoriesListData = healthNeedsCategoriesList.length > 0 ? healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue : [];
      setHealthNeedData(healthNeedsCategoriesListData);

      // Product Category setting - Filters data
      const activeFiltersData = await axios(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`);
      const activeFiltersDataList = activeFiltersData?.data[0];
      // console.log("activeFilters --- ", activeFiltersDataList);
      setactiveFiltersData(activeFiltersDataList);

      // Product Category Helath needs - Left side category lists
      const productCategoryData = await axios(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/landing-page/&expand=*`);
      const productCategoryDataList = productCategoryData?.data[0]?.categoryFilter?.expandedValue;
      // console.log("MAIN productCategoryDataList --- ", productCategoryDataList);
      //console.log("maincategorydata?.categoryImage?.expandedValue?.url--- ",productCategoryDataList[0]?.categoryImage?.expandedValue?.url);
      setproductCategoryData(productCategoryDataList);
      createTempFilterArr(productCategoryDataList)

      // Four column block area
      const productLandingPage = await axios(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/landing-page/&expand=*`);
      const productCategoryList = productLandingPage?.data[0].contentArea?.expandedValue[1]?.contentBlockArea?.expandedValue;
      setProductCategory(productCategoryList);
      
      // Recommended product area block 
      const recommendedAcuteCare = productLandingPage?.data[0].contentArea?.expandedValue[2]?.contentBlockArea?.expandedValue;
      const preventiveCareData = productLandingPage?.data[0].contentArea?.expandedValue[3]?.contentBlockArea?.expandedValue;
      const everyDayCareData = productLandingPage?.data[0].contentArea?.expandedValue[4]?.contentBlockArea?.expandedValue;
      const diagnosticCareData = productLandingPage?.data[0].contentArea?.expandedValue[5]?.contentBlockArea?.expandedValue;
      setRecommendedAcuteCare(recommendedAcuteCare);
      setRecommendedPreventiveCare(preventiveCareData);
      setRecommendedEveryDayCare(everyDayCareData);
      setRecommendedDiagnosticCare(diagnosticCareData);
      
    };

    fetchData();
  }, []);

  const createTempFilterArr = (results: any) => {
    let tempArr: any = [];
    results?.map((leftfiltermaindata: any) => {
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id] = [];
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id]['items'] = [];
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id][leftfiltermaindata?.subCategory?.value[0].id] = [];
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id]['categoryName'] = leftfiltermaindata?.mainCategory?.value[0].name;
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id]['isBusinessVerticalCategory'] = leftfiltermaindata?.isBusinessVerticalCategory?.value;
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id]['productType'] = leftfiltermaindata?.isBusinessVerticalCategory?.value ? 'productType' : leftfiltermaindata?.name;
      tempArr[leftfiltermaindata?.mainCategory?.value[0].id]['isCategoryChecked'] = false;
      leftfiltermaindata?.subCategory?.value.map((subItem: any) => {
        tempArr[leftfiltermaindata?.mainCategory?.value[0].id][subItem.id] = [];
        tempArr[leftfiltermaindata?.mainCategory?.value[0].id][subItem.id]['checked'] = false;
        tempArr[leftfiltermaindata?.mainCategory?.value[0].id][subItem.id]['name'] = subItem.name;
      });
    });
    setSelectedFilterItems(tempArr);
  }

  const handleClearAll = () => {
    setActiveFilter([]);
    selectedFilterItems.map((category: any) => {
      category.isCategoryChecked = false;
      category.map((sub_category: any) => {
        sub_category.checked = false;
      });
    });
    fetchProductList('');
  }

  // -------- Health needs page data fetch ends -------- //


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

  const handleCheckBox = (e: any, filter: any, categoryId: any, subCategoryId: any) => {
    if (e.target.checked) {
      if (selectedFilterItems[categoryId]['items'].indexOf(filter) === -1) {
        selectedFilterItems[categoryId]['items'].push(filter);
      }
      //existing code
      setActiveFilter([...activeFilter, filter]);
      selectedFilterItems[categoryId][subCategoryId].checked = true;
    } else {
      const index = selectedFilterItems[categoryId]['items'].indexOf(filter);
      selectedFilterItems[categoryId]['items'].splice(index, 1);
      //existing code
      setActiveFilter(
        activeFilter.filter((item: any) => {
          return item !== filter;
        })
      );
      selectedFilterItems[categoryId][subCategoryId].checked = false;
      selectedFilterItems[categoryId].isCategoryChecked = false;
    }
    setSelectedFilterItems(selectedFilterItems);
  }

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

    selectedFilterItems[categoryId].isCategoryChecked = isCategoryChecked;

    selectedFilterItems[categoryId].map((sub_category: any) => {
      sub_category.checked = subCategoryChecked;
      if (subCategoryChecked) {
        selectedFilterItems[categoryId]['items'].push(sub_category.name);
      } else {
        const index = selectedFilterItems[categoryId]['items'].indexOf(sub_category.name);
        selectedFilterItems[categoryId]['items'].splice(index, 1);
      }
      // console.log(sub_category)
    });

    let selectedSubCat: any = [];
    selectedFilterItems.map((category: any) => {
      category.items.map((name: any) => {
        if (selectedSubCat.indexOf(name) === -1) {
          selectedSubCat.push(name);
        }
      });
    });
    setActiveFilter([...selectedSubCat]);
    if (selectedViewAllCateory.length > 0) {
      // let queryParams = '';
      // selectedViewAllCateory.map((catId: any, index: any) => {
      //     if (selectedFilterItems[catId].isCategoryChecked) {
      //         const categoryName = selectedFilterItems[catId].categoryName;
      //         const itemName = categoryName.replace(/[^a-zA-Z ]/g, "");
      //         const encodeItemName = encodeURI(itemName);
      //         const joinedCond = (selectedViewAllCateory.length === index + 1) ? '' : 'and ';
      //         queryParams += `(${selectedFilterItems[catId].productType}/value/name eq '${encodeItemName}') ${joinedCond}`;
      //     }
      // })
      // console.log(queryParams);
      // fetchProductList(queryParams);
    } else {
      fetchProductList('');
    }
  }

  useEffect(() => {
    createQueryParameters();
  }, [activeFilter])

  const createQueryParameters = () => {
    let queryParams = "";
    if (selectedFilterItems.length > 0) {
      let lastCatId = 0;
      let minCategoryCnt = 0;
      let minSubCategoryCnt = 0;
      selectedFilterItems.map((category: any, catId: any) => {
        if (!category.isCategoryChecked && category.items.length > 0) {
          if (lastCatId > 0 && lastCatId != catId) {
            queryParams += ' or ';
          }
          queryParams += '(';
          category.items.map((item: any, index: any) => {
            const itemName = item.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            const concatStr = (category.items.length === (index + 1)) ? '' : ' or ';
            queryParams += `${category.productType}/value/name eq '${encodeItemName}' ${concatStr}`;
          });

          minSubCategoryCnt += category.items.length;
          queryParams += `)`;
          lastCatId = catId;
        } else {
          minCategoryCnt += category.isCategoryChecked;
          if (category.isCategoryChecked) {
            const categoryName = selectedFilterItems[catId].categoryName;
            const itemName = categoryName.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            //console.log(selectedViewAllCateory, minCategoryCnt)
            const joinedCond = (selectedViewAllCateory.length === minCategoryCnt) ? '' : 'and ';
            const beforeCond = (minSubCategoryCnt > 0) ? ' and ' : '';
            queryParams += ` ${beforeCond} (${selectedFilterItems[catId].productType}/value/name eq '${encodeItemName}') ${joinedCond} `;
          }
        }
      });

      // console.log(minCategoryCnt, minSubCategoryCnt, queryParams)
      if (minCategoryCnt === 0 && minSubCategoryCnt == 0) {
        queryParams = "";
      }
    }

    // console.log(queryParams);
    if (queryParams)
      fetchProductList(queryParams);
  }

  useEffect(() => {
    fetchCategoryId()
      .then((res) => {
        const id = res?.data[0]?.productCategory?.value[0]?.contentLink?.id;
        let categoryIds = axios.get(
          `${process.env.API_URL}/api/episerver/v3.0/content/${id}`,
          {
            headers: {
              "Accept-Language": "en",
            },
          }
        );

        categoryIds
          .then((res) => {
            setCategoryData(res.data);
            setCategoryLoding(false);
          })
          .catch((e) => {
            setCategoryLoding(true);
            setCategoryError(e);
          });
      })
      .catch((e) => {
        setCategoryLoding(true);
        setCategoryError(e);
      });

    FetchProductFilter()
      .then((response) => {
        setProductFilter(response);
      })
      .catch((e) => console.log(e));

    fetchAcuteCarePruducts()
      .then((res) => {
        setAcuteCareData(res);
        setAcuteCareLoding(false);
      })
      .catch((e) => {
        setAcuteCareError(e);
        setAcuteCareLoding(true);
      });

    fetchPreventiveCarePruducts()
      .then((res) => {
        setPreventiveCareData(res);
      })
      .catch((e) => {
        console.log(e);
      });

    fetchEveryDayCarePruducts()
      .then((res) => {
        setEveryDayCareData(res);
      })
      .catch((e) => {
        console.log(e);
      });

    fetchDiagnosticCarePruducts()
      .then((res) => {
        setDiagnosticCareData(res);
      })
      .catch((e) => {
        console.log(e);
      });

  }, []);

  function fetchCategoryId() {
    return axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category-setting/?expand=*`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function FetchProductFilter() {
    return axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category-setting/?expand=*`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function fetchAcuteCarePruducts() {
    return axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Acute Care') and ContentType/any(t:t eq 'ProductDetailsPage'))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function fetchPreventiveCarePruducts() {
    return axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Preventative Care') and ContentType/any(t:t eq 'ProductDetailsPage'))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function fetchEveryDayCarePruducts() {
    return axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Every Day Care') and ContentType/any(t:t eq 'ProductDetailsPage'))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function fetchDiagnosticCarePruducts() {
    return axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Diagnostic Care') and ContentType/any(t:t eq 'ProductDetailsPage'))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function filteredData(valueType: string) {
    return response?.data[0]?.blockArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: "",
    });
  };

  const handleProductClick = (data : any) =>{
    const title = data.routeSegment
    router.push({
        pathname: '/product_detail', 
        query: { data: title },
      });
}

  return (
    <>
      <GoogleTagManager />
      <HeaderComponent />
      {/* {loading && <p>Loading...</p>} */}
      {/* {error && <p>{error.message}</p>} */}
      {!loading && !error && response && (
        <CarouselComponent sectionData={filteredData("CarouselBlock")} />
      )}
      {/* {categoryLoading && <p>Loading...</p>} */}
      {/* {categoryError && <p>{categoryError.message}</p>} */}
      {!categoryLoading && !categoryError && categoryData && (
        <CategoryComponent sectionData={[categoryData]} />
      )}


      {/*  Four Col Category Start */}
      {productCategory && (
        <div className="container w-full mx-auto my-6 mb-0 lg:my-20 grid grid-cols-2 gap-4 lg:grid-cols-4 px-4 lg:px-0 four-col">
          {productCategory?.map((item: any, index: number) => {
            return (
              <div id="category" className="mb-6" key={index}>
                <div className="mx-auto w-36 lg:w-52 h-36 lg:h-52">
                  <img src={item?.productCategoryImage?.expandedValue?.url} alt={item?.productCategoryName?.value} tabIndex={0} />
                </div>
                <div className="text-center text-gtl-med text-xl lg:text-2xl mt-6 lg:mt-10 text-mckblue" tabIndex={0}>{item?.productCategoryName?.value}</div>
                <div className="text-center text-sofia-reg font-normal w-3/4 mx-auto text-base lg:text-lg text-mcknormalgrey" tabIndex={0}
                  dangerouslySetInnerHTML={{
                    __html: item?.productCategoryDescription?.value
                    }}></div>
              </div>
            )
          })}
        </div>
      )}
      {/* Four Col Category End */}


      <div className="allproductlist-page container w-full mx-auto grid grid-cols-1">

        {/* All Product - Top Active Filter section Start */}
        <section>
          <div className="flex mb-2 items-center text-mckblue" tabIndex={0} id="hn_label_003">
            {activeFiltersData?.activeFiltersText?.value}
            <img src={activeFiltersData?.activeFiltersImage?.expandedValue?.url} className="mr-2 ml-2" tabIndex={0} id="hn_label_003_1" alt="hn_label_003_1" />

            <div className="flex flex-wrap items-baseline" tabIndex={0} id="hn_label_003_2">
              {activeFilter?.map((item: any) => {
                return (
                  <div className="flex rounded-full mck-hn-selected-value" key={item}>
                    {item}&nbsp;
                    <img
                      src="/images/hn-delete-icon.svg"
                      className="mck-filter-delete-icon cursor-pointer"
                      alt="delete icon"
                      onClick={() => {
                        setActiveFilter(activeFilter.filter((filterItem: any) => filterItem !== item));
                      }}
                    />
                  </div>
                );
              })}
              <div className="flex cursor-pointer ml-2 items-baseline">
                {/* <img className="" src={activeFiltersData?.clearAllImage?.expandedValue?.url} /> */}
                <img src="/images/hn-delete-icon.svg"
                  className="mck-filter-clearall-icon"
                  alt="delete icon" />
                <div className="underline" onClick={handleClearAll}>{activeFiltersData?.clearAllText?.value}</div>
              </div>
            </div>
          </div>

          <div className="text-mcknormalgrey" tabIndex={0} id="hn_label_003_3">{activeFiltersData?.showResultsText?.value}</div>

        </section>
        {/* All Product - Top Active Filter section End */}

        <div className="lg:flex md:flex sm-flex flex-none mt-8">
          <div className="flex-none h-max">
            <div className="lg:border-r-2 pb-3 mb-2 mck-hn-filter-category">
              {/* Left main category lists */}
              <div className="flex items-center my-px">
                <div className="w-full border lg:border-0 rounded px-4 lg:px-0">
                  {productCategoryData && productCategoryData?.map((leftfiltermaindata: any) => (
                    <>
                      {/* Left filter main category */}


                      <section className="mck-hn-mobile-accordion tab overflow-hidden">
                        <input className="mck-hn-accordion-title-check" type="checkbox" id={leftfiltermaindata?.contentLink?.id} />
                        <label className="tab-label p-4 lg:p-0" htmlFor={leftfiltermaindata?.contentLink?.id}>
                          <div className="flex lg:mb-2 w-full lg:mt-2" key={leftfiltermaindata?.contentLink?.id}>
                            <img
                              id={leftfiltermaindata?.mainCategory?.value[0].name}
                              src={leftfiltermaindata?.categoryImage?.expandedValue?.url}
                            />
                            <label htmlFor="acute" className="ml-2 filter-title">
                              {leftfiltermaindata?.mainCategory?.value[0].name}
                            </label>
                          </div>
                        </label>
                        {/* Left filter main category */}

                        {/* Left filter sub category */}
                        <div className="lg:border-b-2 pb-3 mb-2 mck-hn-filter-subcat tab-content lg:max-h-none lg:px-0">
                          <ul>
                            <li className="list-none">
                              <div className="flex items-center my-px" onClick={(e) => handleViewAllChange(e, leftfiltermaindata?.mainCategory?.value[0].id)}>
                                <input
                                  id={leftfiltermaindata?.mainCategory?.value[0]?.name}
                                  type="checkbox"
                                  value="view all"
                                  className="w-4 h-4"
                                  checked={selectedFilterItems[leftfiltermaindata?.mainCategory?.value[0].id]?.isCategoryChecked}
                                  defaultChecked={selectedFilterItems[leftfiltermaindata?.mainCategory?.value[0].id]?.isCategoryChecked}
                                />
                                <label htmlFor="mck-view-all" className="ml-2 text-mcknormalgrey text-sm" id="">
                                  View All
                                </label>
                              </div>
                            </li>
                          </ul>
                          <ul>
                            {leftfiltermaindata?.subCategory?.value?.map((leftfiltersubdata: any) => (
                              <li className="list-none" key={leftfiltersubdata?.id}>
                                <div className="flex items-center my-px" onClick={(e) => handleCheckBox(e, leftfiltersubdata?.name, leftfiltermaindata?.mainCategory?.value[0].id, leftfiltersubdata?.id)}>
                                  <input
                                    id={leftfiltersubdata?.name}
                                    type="checkbox"
                                    value={leftfiltersubdata?.name}
                                    className="w-4 h-4"
                                    checked={selectedFilterItems[leftfiltermaindata?.mainCategory?.value[0].id][leftfiltersubdata?.id]?.checked}
                                    defaultChecked={selectedFilterItems[leftfiltermaindata?.mainCategory?.value[0].id][leftfiltersubdata?.id]?.checked}
                                  />
                                  <label htmlFor={leftfiltersubdata?.name} className="ml-2 text-sm">
                                    {leftfiltersubdata?.name}
                                  </label>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Left filter sub category */}
                      </section>
                    </>
                  ))}
                </div>
              </div>
              {/* Left main category lists */}

            </div>
          </div>
          <div className="flex-auto">

            <div className="container mx-auto">
              <div className="section-title">Acute Care</div>

              {/* Two Col Banner */}
              {recommendedAcuteCare && (
                <div className="grid md:grid-cols-2 lg:grid-cols-2">
                  {recommendedAcuteCare?.map((item: any) => {
                    return(
                      <div tabIndex={0} className="bg-[#EAF1F8;] bg-color lg:m-3 m-0 lg:p-9 p-4 mb-4 lg:mb-0 last:mb-0" key={item?.contentLink?.id} style={{backgroundColor: item?.backgroundColor?.value}}>
                        <div tabIndex={0} className="w-full lg:w-44 mb-4">
                          <img src={item?.imageTitle?.value?.url} alt={`title-image-${item?.contentLink?.id}`} className="h-auto max-w-full mx-auto" />
                        </div>
                        <div className="lg:flex grid grid-cols-none lg:grid-cols-3 gap-4 lg:pr-3 my-auto text-justify">
                          <div tabIndex={0} className="mx-auto my-auto h-full w-full lg:pr-4 pb-4 lg:pb-0">
                            <img src={item?.image?.value?.url} alt={`promotion-image-${item?.contentLink?.id}`} className="mx-auto lg:my-auto lg:h-full lg:w-full" /></div>
                          <div tabIndex={0} id="p-text" className="text-justify pr-0 lg:pr-9">
                            <div tabIndex={0} className="text-lg text-sofia-reg text-center col-span-2 lg:text-left pb-4"
                              dangerouslySetInnerHTML={{
                              __html: item?.description?.value
                              }}
                            ></div>
                          </div>
                        </div>
                        <div tabIndex={0} role="button" className="w-[139px] leading-5 pd-12 h-[44px] lg:m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex  lg:ml-auto lg:mr-9 mx-auto" 
                          onClick={() => handleCTABtn(item?.buttonUrl?.value)}>
                          {item?.buttonText?.value || "WHERE TO BUY"}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Two Col Banner End */}

              {/* Carouel Product Start */}

              <div className="container mx-auto relative product-carousel">
                <div className="flex gap-0.5 flex-wrap product-list-container">
                  {acuteCareData?.data?.results.map((item: any) => {
                    return (
                      <div className="w-52 h-96 border-2 product-list-item" key={item?.contentLink?.id}
                      onClick={()=>handleProductClick(item)}>
                        <img src={item?.image?.value?.url} alt={item?.name} loading="lazy"/>
                        <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">Acute Care</div>
                        <div className="mckblue product-list-title">{item?.name}</div>
                        <div className="mcknormalgrey product-list-description"
                          dangerouslySetInnerHTML={{
                            __html: item?.highlightDescription?.value,
                          }}>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="text-sofia-reg text-xl font-normal text-mckblue text-center lg:pt-0 pt-0 pd-10">1/9</div>
                <div className="lg:block hidden carousel-button w-full lg:absolute flex items-center justify-center top-28">
                  <div className="carousel-prev lg:absolute -left-3 cursor-pointer">
                    <svg width="48" height="49" viewBox="0 0 48 49" tabIndex={0} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24.8306" r="24" fill="#4D5F9C"></circle>
                      <path d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z" fill="#ffffff"></path>
                    </svg>
                  </div>
                  <div className="lg:hidden text-sofia-reg text-xl font-normal px-3">1/3</div>
                  <div className="carousel-next lg:absolute -right-6 cursor-pointer">
                    <svg width="48" height="49" viewBox="0 0 48 49" tabIndex={0} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24.8306" r="24" fill="#001A71"></circle>
                      <path d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z" fill="#fff">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Carousel Product End */}

              {/* {!recommendedAcuteCareLoading && recommendedAcuteCare && (
                // <div className="grid md:grid-cols-2 lg:grid-cols-2">
                //   {recommendedAcuteCare?.map((item: any) => {
                //     return (
                //       <div
                //         className="bg-color m-3 p-9"
                //         key={item?.contentLink?.id}
                //       >
                //         <style jsx>{`
                //           .bg-color {
                //             background-color: ${item?.backgroundColor?.value};
                //           }
                //         `}</style>
                //         <div className="logo-img mb-3">
                //           <img
                //             className="h-auto max-w-full"
                //             src="" // {item?.imageTitle?.value?.url}
                //             alt="" // {item?.title?.value}
                //           />
                //         </div>
                //         <div className="grid md:grid-cols-2 lg:grid-cols-2">
                //           <div className="pr-3 my-auto">
                //             <img
                //               className="h-auto w-auto"
                //               src={item?.image?.value.url}
                //             />
                //           </div>
                //           <div className="text-justify">
                //             <div
                //               dangerouslySetInnerHTML={{
                //                 __html: item?.highlightDescription?.value,
                //               }}
                //             ></div>
                //             <div
                //               className="w-36 text-center blue-bg rounded text-white align-middle py-3 mt-5 font-bold"
                //               onClick={() =>
                //                 handleCTABtn(item?.buttonUrl?.value)
                //               }
                //             >
                //               {item?.buttonText?.value || "WHERE TO BUY"}
                //             </div>
                //           </div>
                //         </div>
                //       </div>
                //     );
                //   })}
                // </div>
              )} */}

              {/* <div className="flex gap-0.5 flex-wrap product-list-container">
                {acuteCareData?.data?.results.map((item: any) => {
                  return (
                    <div
                      className="w-52 h-96 border-2 product-list-item"
                      key={item?.contentLink?.id}
                    >
                      <img src={item?.image?.value?.url} alt="" />
                      <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                        Acute Care
                      </div>
                      <div className="mckblue product-list-title">{item?.name}</div>
                      <div
                        className="mcknormalgrey product-list-description"
                        dangerouslySetInnerHTML={{
                          __html: item?.highlightDescription?.value,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div> */}

              <div className="section-title">Preventive Care</div>
              {/* Two Col Banner */}

              {recommendedPreventiveCare && (
                <div className="grid md:grid-cols-2 lg:grid-cols-2">
                  {recommendedPreventiveCare.map((item: any) => {
                    return (
                      <div tabIndex={0} className="bg-[#EAF1F8;] bg-color lg:m-3 m-0 lg:p-9 p-4 mb-4 lg:mb-0 last:mb-0" key={item?.contentLink?.id} style={{backgroundColor: item?.backgroundColor?.value}}>
                        <div tabIndex={0} className="w-full lg:w-44 mb-4">
                          <img src={item?.imageTitle?.value?.url} alt={`title-image-${item?.contentLink?.id}`} className="h-auto max-w-full mx-auto" />
                        </div>
                        <div className="lg:flex grid grid-cols-none lg:grid-cols-3 gap-4 lg:pr-3 my-auto text-justify">
                          <div tabIndex={0} className="mx-auto my-auto h-full w-full lg:pr-4 pb-4 lg:pb-0">
                            <img src={item?.image?.value?.url} alt={`promotion-image-${item?.contentLink?.id}`} className="mx-auto lg:my-auto lg:h-full lg:w-full" /></div>
                          <div tabIndex={0} id="p-text" className="text-justify pr-0 lg:pr-9">
                            <div tabIndex={0} className="text-lg text-sofia-reg text-center col-span-2 lg:text-left pb-4"
                              dangerouslySetInnerHTML={{
                                __html: item?.description?.value,
                              }}></div>
                          </div>
                        </div>
                        <div tabIndex={0} role="button" className="w-[139px] leading-5 pd-12 h-[44px] lg:m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex  lg:ml-auto lg:mr-9 mx-auto"
                          onClick={() => handleCTABtn(item?.buttonUrl?.value)}>
                            {item?.buttonText?.value || "WHERE TO BUY"}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Two Col Banner End */}

              {/* Carouel Product Start */}

              <div className="container mx-auto relative product-carousel">
                <div className="flex gap-0.5 flex-wrap product-list-container">
                  {preventiveCareData?.data?.results.map((item: any) => {
                    return (
                      <div className="w-52 h-96 border-2 product-list-item" key={item?.contentLink?.id}
                      onClick={()=>handleProductClick(item)}>
                        <img src={item?.image?.value?.url} alt={`product-image-${item?.contentLink?.id}`} loading="lazy" />
                        <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">Preventive Care</div>
                        <div className="mckblue product-list-title">{item?.name}</div>
                        <div className="mcknormalgrey product-list-description"
                            dangerouslySetInnerHTML={{
                              __html: item?.highlightDescription?.value,
                            }}>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="text-sofia-reg text-xl font-normal text-mckblue text-center lg:pt-0 pt-0 pd-10">1/9</div>
                <div className="lg:block hidden carousel-button w-full lg:absolute flex items-center justify-center top-28">
                  <div className="carousel-prev lg:absolute -left-3 cursor-pointer">
                    <svg width="48" height="49" viewBox="0 0 48 49" tabIndex={0} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24.8306" r="24" fill="#4D5F9C"></circle>
                      <path d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z" fill="#ffffff"></path>
                    </svg>
                  </div>
                  <div className="lg:hidden text-sofia-reg text-xl font-normal px-3">1/3</div>
                  <div className="carousel-next lg:absolute -right-6 cursor-pointer">
                    <svg width="48" height="49" viewBox="0 0 48 49" tabIndex={0} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24.8306" r="24" fill="#001A71"></circle>
                      <path d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z" fill="#fff">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Carousel Product End */}

              {/* <div className="grid md:grid-cols-2 lg:grid-cols-2">
                {recommendedPreventiveCare &&
                  recommendedPreventiveCare?.map((item: any) => {
                    return (
                      <div
                        className="bg-color m-3 p-9"
                        key={item?.contentLink?.id}
                      >
                        <style jsx>{`
                          .bg-color {
                            background-color: ${item?.backgroundColor?.value};
                          }
                        `}</style>
                        <div className="logo-img mb-3">
                          <img
                            className="h-auto max-w-full"
                            src="" // {item?.imageTitle?.value?.url}
                            alt="" // {item?.title?.value}
                          />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2">
                          <div className="pr-3 my-auto">
                            <img
                              className="h-auto w-auto"
                              src={item?.image?.value.url}
                            />
                          </div>
                          <div className="text-justify">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item?.highlightDescription?.value,
                              }}
                            ></div>
                            <div
                              className="w-36 text-center blue-bg rounded text-white align-middle py-3 mt-5 font-bold"
                              onClick={() =>
                                handleCTABtn(item?.buttonUrl?.value)
                              }
                            >
                              {item?.buttonText?.value || "No Name"}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div> */}

              {/* <div className="flex gap-0.5 flex-wrap product-list-container">
                {preventiveCareData?.data?.results.map((item: any) => {
                  return (
                    <div
                      className="w-52 h-96 border-2 product-list-item"
                      key={item?.contentLink?.id}
                    >
                      <img src={item?.image?.value?.url} alt="" />
                      <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                        Preventive Care
                      </div>
                      <div className="mckblue product-list-title">{item?.name}</div>
                      <div
                        className="mcknormalgrey product-list-description"
                        dangerouslySetInnerHTML={{
                          __html: item?.highlightDescription?.value,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div> */}

              <div className="section-title">Every Day Care</div>
              {/* Two Col Banner */}
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                {recommendedEveryDayCare?.map((item: any) => {
                  return (
                    <div tabIndex={0} className="bg-[#EAF1F8;] bg-color lg:m-3 m-0 lg:p-9 p-4 mb-4 lg:mb-0 last:mb-0" key={item?.contentLink?.id} style={{backgroundColor: item?.backgroundColor?.value}}>
                      <div tabIndex={0} className="w-full lg:w-44 mb-4">
                        <img src={item?.imageTitle?.value?.url} alt={`title-image-${item?.contentLink?.id}`} className="h-auto max-w-full mx-auto" />
                      </div>
                      <div className="lg:flex grid grid-cols-none lg:grid-cols-3 gap-4 lg:pr-3 my-auto text-justify">
                        <div tabIndex={0} className="mx-auto my-auto h-full w-full lg:pr-4 pb-4 lg:pb-0">
                          <img src={item?.image?.value?.url} alt={`promotion-image-${item?.contentLink?.id}`} className="mx-auto lg:my-auto lg:h-full lg:w-full" /></div>
                        <div tabIndex={0} id="p-text" className="text-justify pr-0 lg:pr-9">
                          <div tabIndex={0} className="text-lg text-sofia-reg text-center col-span-2 lg:text-left pb-4"
                            dangerouslySetInnerHTML={{
                              __html: item?.description?.value,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div tabIndex={0} role="button" className="w-[139px] leading-5 pd-12 h-[44px] lg:m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex  lg:ml-auto lg:mr-9 mx-auto"
                        onClick={() => handleCTABtn(item?.buttonUrl?.value)}>
                          {item?.buttonText?.value || "WHERE TO BUY"}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Two Col Banner End */}

              {/* Carouel Product Start */}

              <div className="container mx-auto relative product-carousel">
                <div className="flex gap-0.5 flex-wrap product-list-container">
                  {everyDayCareData?.data?.results.map((item: any) => {
                    return (
                      <div className="w-52 h-96 border-2 product-list-item" key={item?.contentLink?.id}
                      onClick={()=>handleProductClick(item)}>
                        <img src={item?.image?.value?.url} alt={`product-image-${item?.contentLink?.id}`} />
                        <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">Every Day Care</div>
                        <div className="mckblue product-list-title">{item?.name}</div>
                        <div className="mcknormalgrey product-list-description"
                            dangerouslySetInnerHTML={{
                              __html: item?.highlightDescription?.value,
                            }}>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="text-sofia-reg text-xl font-normal text-mckblue text-center lg:pt-0 pt-0 pd-10">1/9</div>
                <div className="lg:block hidden carousel-button w-full lg:absolute flex items-center justify-center top-28">
                  <div className="carousel-prev lg:absolute -left-3 cursor-pointer">
                    <svg width="48" height="49" viewBox="0 0 48 49" tabIndex={0} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24.8306" r="24" fill="#4D5F9C"></circle>
                      <path d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z" fill="#ffffff"></path>
                    </svg>
                  </div>
                  <div className="lg:hidden text-sofia-reg text-xl font-normal px-3">1/3</div>
                  <div className="carousel-next lg:absolute -right-6 cursor-pointer">
                    <svg width="48" height="49" viewBox="0 0 48 49" tabIndex={0} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24.8306" r="24" fill="#001A71"></circle>
                      <path d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z" fill="#fff">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Carousel Product End */}

              {/* <div className="grid md:grid-cols-2 lg:grid-cols-2">
                {recommendedEveryDayCare?.map((item: any) => {
                  return (
                    <div
                      className="bg-color m-3 p-9"
                      key={item?.contentLink?.id}
                    >
                      <style jsx>{`
                        .bg-color {
                          background-color: ${item?.backgroundColor?.value};
                        }
                      `}</style>
                      <div className="logo-img mb-3">
                        <img
                          className="h-auto max-w-full"
                          src="" // {item?.imageTitle?.value?.url}
                          alt="" // {item?.title?.value}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-2">
                        <div className="pr-3 my-auto">
                          <img
                            className="h-auto w-auto"
                            src={item?.image?.value.url}
                          />
                        </div>
                        <div className="text-justify">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.highlightDescription?.value,
                            }}
                          ></div>
                          <div
                            className="w-36 text-center blue-bg rounded text-white align-middle py-3 mt-5 font-bold"
                            onClick={() => handleCTABtn(item?.buttonUrl?.value)}
                          >
                            {item?.buttonText?.value || "No Name"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div> */}
              {/* <div className="flex gap-0.5 flex-wrap product-list-container">
                {everyDayCareData?.data?.results.map((item: any) => {
                  return (
                    <div
                      className="w-52 h-96 border-2 product-list-item"
                      key={item?.contentLink?.id}
                    >
                      <img src={item?.image?.value?.url} alt="" />
                      <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                        Every Day Care
                      </div>
                      <div className="mckblue product-list-title">{item?.name}</div>
                      <div
                        className="mcknormalgrey product-list-description"
                        dangerouslySetInnerHTML={{
                          __html: item?.highlightDescription?.value,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div> */}

              <div className="section-title">Diagnostic Care</div>
              {/* Two Col Banner */}

              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                {recommendedDiagnosticCare?.map((item: any) => {
                  return (
                    <div tabIndex={0} className="bg-[#EAF1F8;] bg-color lg:m-3 m-0 lg:p-9 p-4 mb-4 lg:mb-0 last:mb-0" key={item?.contentLink?.id} style={{backgroundColor: item?.backgroundColor?.value}}>
                      <div tabIndex={0} className="w-full lg:w-44 mb-4">
                        <img src={item?.imageTitle?.value?.url} alt={`title-image-${item?.contentLink?.id}`} className="h-auto max-w-full mx-auto" />
                      </div>
                      <div className="lg:flex grid grid-cols-none lg:grid-cols-3 gap-4 lg:pr-3 my-auto text-justify">
                        <div tabIndex={0} className="mx-auto my-auto h-full w-full lg:pr-4 pb-4 lg:pb-0">
                          <img src={item?.image?.value.url} alt={`promotion-image-${item?.contentLink?.id}`} className="mx-auto lg:my-auto lg:h-full lg:w-full" />
                        </div>
                        <div tabIndex={0} id="p-text" className="text-justify pr-0 lg:pr-9">
                          <div tabIndex={0} className="text-lg text-sofia-reg text-center col-span-2 lg:text-left pb-4"
                            dangerouslySetInnerHTML={{
                              __html: item?.description?.value,
                            }}></div>
                        </div>
                      </div>
                      <div tabIndex={0} role="button" className="w-[139px] leading-5 pd-12 h-[44px] lg:m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex  lg:ml-auto lg:mr-9 mx-auto"
                        onClick={() => handleCTABtn(item?.buttonUrl?.value)}>
                        {item?.buttonText?.value || "WHERE TO BUY"}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Two Col Banner End */}

              {/* Carouel Product Start */}

              <div className="container mx-auto relative product-carousel">
                <div className="flex gap-0.5 flex-wrap product-list-container">
                  {diagnosticCareData?.data?.results.map((item: any) => {
                    return (
                      <div className="w-52 h-96 border-2 product-list-item" key={item?.contentLink?.id}
                      onClick={()=>handleProductClick(item)}>
                        <img src={item?.image?.value?.url} alt={`product-image-${item?.contentLink?.id}`} />
                        <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">Diagnostic Care</div>
                        <div className="mckblue product-list-title">{item?.name}</div>
                        <div className="mcknormalgrey product-list-description"
                            dangerouslySetInnerHTML={{
                              __html: item?.highlightDescription?.value,
                            }}>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="text-sofia-reg text-xl font-normal text-mckblue text-center lg:pt-0 pt-0 pd-10">1/9</div>
                <div className="lg:block hidden carousel-button w-full lg:absolute flex items-center justify-center top-28">
                  <div className="carousel-prev lg:absolute -left-3 cursor-pointer">
                    <svg width="48" height="49" viewBox="0 0 48 49" tabIndex={0} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24.8306" r="24" fill="#4D5F9C"></circle>
                      <path d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z" fill="#ffffff"></path>
                    </svg>
                  </div>
                  <div className="lg:hidden text-sofia-reg text-xl font-normal px-3">1/3</div>
                  <div className="carousel-next lg:absolute -right-6 cursor-pointer">
                    <svg width="48" height="49" viewBox="0 0 48 49" tabIndex={0} fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24.8306" r="24" fill="#001A71"></circle>
                      <path d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z" fill="#fff">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Carousel Product End */}

              {/* <div className="grid md:grid-cols-2 lg:grid-cols-2">
                {recommendedDiagnosticCare?.map((item: any) => {
                  return (
                    <div
                      className="bg-color m-3 p-9"
                      key={item?.contentLink?.id}
                    >
                      <style jsx>{`
                        .bg-color {
                          background-color: ${item?.backgroundColor?.value};
                        }
                      `}</style>
                      <div className="logo-img mb-3">
                        <img
                          className="h-auto max-w-full"
                          src="" // {item?.imageTitle?.value?.url}
                          alt="" // {item?.title?.value}
                        />
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-2">
                        <div className="pr-3 my-auto">
                          <img
                            className="h-auto w-auto"
                            src={item?.image?.value.url}
                          />
                        </div>
                        <div className="text-justify">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.highlightDescription?.value,
                            }}
                          ></div>
                          <div
                            className="w-36 text-center blue-bg rounded text-white align-middle py-3 mt-5 font-bold"
                            onClick={() => handleCTABtn(item?.buttonUrl?.value)}
                          >
                            {item?.buttonText?.value || "No Name"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-0.5 flex-wrap product-list-container">
                {diagnosticCareData?.data?.results.map((item: any) => {
                  return (
                    <div
                      className="w-52 h-96 border-2 product-list-item"
                      key={item?.contentLink?.id}
                    >
                      <img src={item?.image?.value?.url} alt="" />
                      <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                        Diagnostic Care
                      </div>
                      <div className="mckblue product-list-title">{item?.name}</div>
                      <div
                        className="mcknormalgrey product-list-description"
                        dangerouslySetInnerHTML={{
                          __html: item?.highlightDescription?.value,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div> */}


            </div>
          </div>
        </div>
      </div>

      <FooterComponent />
    </>
  );
}

export default AllProductCategoryPage;
