import useAxios from "../../hooks/useApi";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import ProductComponent from "./product_List_Carousel";
import HealthNeedCategory from "./healthNeedCategory";

const HealthNeedsComponent = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<any>([]);
  const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>([]);
  const [selectedHealthNeed , setSelectedHealthNeed] = useState<any>([]);
  const [healthData , setHealthData] = useState(false)


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
    if(filter.length >0){
      const query  = filter.match(/eq '(.*)'/);
      const queryParams = { filter: query[1] };
    router.push({
      pathname: '/health_needs',
      query: queryParams,
    });
    }
    else{
      router.push({
        pathname: '/health_needs'
      });
    }
    
    const query = filter
    const regex = /'([^']+)'/g;
    const matches = [...query.matchAll(regex)];
    const values = matches.map(match => match[1]);


    let queryParameter = '';
    if (filter === '') {
      queryParameter = `(productType/value/name eq 'Acute Care')`;
      // queryParameter = `(healthNeeds/value/name eq 'Bone')`;

    } else {
      if(filter.includes('healthNeeds')){
        queryParameter = filter;
      }
      else{
        queryParameter = filter + " or ContentType/any(t:t eq 'ProductDetailsPage')"
      }
      
    }
   
    const promise = axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(${queryParameter})`,
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
        let tempObj : any ={}
        if(filter.includes('Health%20Needs')){
          setHealthData(!healthData)
        }
        else{     
        res.data.results.map((item : any)=>{
        values.map( key =>{
            let tempArray = item.healthNeeds.value.filter( (healthNeeds :any) => healthNeeds.name === key )

            if(tempArray.length === 1){
              if(tempObj[key]){
                let categoryArray : any = tempObj[key]
                categoryArray.push(item)
                tempObj[key] = categoryArray

              }
              else{
                tempObj[key] = [item]
              }
              
            }

          })
        })
        let productArray : any =[]
        values.map(key =>{
          
          productArray.push({ item :{name : key}, data : {results:tempObj[key]}})
        })
        setSelectedProduct(productArray)  
      }  
      })
      .catch((e: Error | AxiosError) => console.log(e));
  }

  useEffect(() => {
    FetchProductFilter()
      .then((res) => {
      
      })
      .catch((e) => console.log(e));

    fetchRecommandedProduct()
      .then((res) => {
      
      })
      .catch((e: Error | AxiosError) => console.log(e));

    fetchProductList("");
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

  const handleCheckBox = (
    e: any,
    filter: any,
    categoryId: any,
    subCategoryId: any
  ) => {
    if (e.target.checked) {
      if (selectedFilterItems[categoryId]["items"].indexOf(filter) === -1) {
        selectedFilterItems[categoryId]["items"].push(filter);
      }
      //existing code
      setActiveFilter([...activeFilter, filter]);
      selectedFilterItems[categoryId][subCategoryId].checked = true;
    } else {
      const index = selectedFilterItems[categoryId]["items"].indexOf(filter);
      selectedFilterItems[categoryId]["items"].splice(index, 1);
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

    selectedFilterItems[categoryId].isCategoryChecked = isCategoryChecked;

    selectedFilterItems[categoryId].map((sub_category: any) => {
      sub_category.checked = subCategoryChecked;
      if (subCategoryChecked) {
        selectedFilterItems[categoryId]["items"].push(sub_category.name);
      } else {
        selectedFilterItems[categoryId]["items"] = [];
        const index = selectedFilterItems[categoryId]["items"].indexOf(
          sub_category.name
        );
        selectedFilterItems[categoryId]["items"].splice(index, 1);
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
    } else {
      fetchProductList("");
      router.push({
          pathname: '/health_needs',
      })
    }
    
  };

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
                if (!category.isCategoryChecked && category.items.length > 0) {
                    if (lastCatId > 0 && lastCatId != catId) {
                        queryParams += ' or ';
                    }
                    queryParams += '(';
                    category.items.map((item: any, index: any) => {
                        const itemName = item.replace(/[^a-zA-Z ]/g, "");
                        const encodeItemName = encodeURI(itemName);
                        const concatStr = (category.items.length === (index + 1)) ? '' : ' and ';
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
        
        
        if (queryParams)
            fetchProductList(queryParams);
        else{        
            router.push({
              pathname: '/health_needs',
            });         
        }
    }


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
      // console.log("activeFilters --- ", activeFiltersDataList);
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

subCategories.forEach((subCat :any) => {
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
    const fetchData = async () => {
    const healthNeedsCategories = await axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`
    );
    const healthNeedsCategoriesList =
      healthNeedsCategories?.data[0].contentArea?.expandedValue?.filter(
        (categoryList: any) => categoryList.name === "Health Need Highlights"
      );

    // console.log("healthNeedsCategoriesList --- ", healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue);

    const healthNeedsCategoriesListData =
      healthNeedsCategoriesList.length > 0
        ? healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue
        : [];
     
    healthNeedsCategoriesListData?.map((item :any)=>{
      const text = item.name;
      const correctText = text.replace(/&/g, "");
      axios.get(`${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(healthNeeds/value/name eq '${correctText}')`,
  {
    headers: {
      "Accept-Language": "en",
    },
  }
  )
      .then(res =>{
        setSelectedProduct((prevSelectedProducts :any) => [
          ...prevSelectedProducts,
          { item, data: res.data },
        ]);
      })
      })
    };

    fetchData();
  },[healthData])
 

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

  const handleClearAll = () => {
    setActiveFilter([]);
    selectedFilterItems.map((category: any) => {
      category.isCategoryChecked = false;
      category.map((sub_category: any) => {
        sub_category.checked = false;
      });
    });
    fetchProductList("");
  };
  return (
    <>
      <div className="mck-health-needs-page container w-full mx-auto grid grid-cols-1">
        {/* Health needs - Top category section starts */}
        <HealthNeedCategory healthNeedData ={healthNeedData} 
        selectedFilterItems={selectedFilterItems}
        selectedHealthNeed ={selectedHealthNeed}
        setActiveFilter={setActiveFilter}
        activeFilter = {activeFilter}/>
        
        {/* Health needs - Top category section ends */}

        <div className="container lg:mt-12 mt-6 px-4 lg:px-0">
          {/* Health needs - Top Active Filter section starts */}
          <section>
            <div
              className="flex mb-2 items-center text-mckblue"
              tabIndex={0}
              id="hn_label_003"
            >
              {activeFiltersData?.activeFiltersText?.value}
              <img
                src={activeFiltersData?.activeFiltersImage?.expandedValue?.url}
                className="mr-2 ml-2"
                tabIndex={0}
                id="hn_label_003_1"
              />

              <div
                className="flex flex-wrap items-baseline"
                tabIndex={0}
                id="hn_label_003_2"
              >
                {activeFilter?.map((item: any) => {
                  return (
                    <div
                      className="flex rounded-full mck-hn-selected-value"
                      key={item}
                    >
                      {item}&nbsp;
                      <img
                        src="/images/hn-delete-icon.svg"
                        className="mck-filter-delete-icon cursor-pointer"
                        alt="delete icon"
                        onClick={() => {
                          setActiveFilter(
                            activeFilter.filter(
                              (filterItem: any) => filterItem !== item
                            )
                          );
                        }}
                      />
                    </div>
                  );
                })}
                <div className="flex cursor-pointer ml-2 items-baseline">
                  {/* <img className="" src={activeFiltersData?.clearAllImage?.expandedValue?.url} /> */}
                  <img
                    src="/images/hn-delete-icon.svg"
                    className="mck-filter-clearall-icon"
                    alt="delete icon"
                  />
                  <div className="underline" onClick={handleClearAll}>
                    {activeFiltersData?.clearAllText?.value}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="text-mcknormalgrey"
              tabIndex={0}
              id="hn_label_003_3"
            >
              {activeFiltersData?.showResultsText?.value}
            </div>
          </section>
          {/* Health needs - Top Active Filter section starts */}

          {/* Health needs - Left coloumn Filter section starts */}
          {/* <div className="swiper-container mt-8"> */}
          <div className="grid lg:grid-cols-3 grid-cols-1 mt-6">
            <div className="flex-none h-max">
              <div className="lg:border-r lg:border-[#CCD1E3] pb-3 mb-2 mck-hn-filter-category">
                {/* Left main category lists */}
                <div className="flex items-center my-px">
                  <div className="w-full border lg:border-0 rounded px-4 lg:px-0">
                    {productCategoryData &&
                      productCategoryData?.map((leftfiltermaindata: any) => (
                        <>
                          {/* Left filter main category */}

                          <section className="mck-hn-mobile-accordion tab overflow-hidden">
                            <input
                              className="mck-hn-accordion-title-check"
                              type="checkbox"
                              id={leftfiltermaindata?.contentLink?.id}
                            />
                            <label
                              className="tab-label p-4 lg:p-0"
                              htmlFor={leftfiltermaindata?.contentLink?.id}
                            >
                              <div
                                className="flex lg:mb-2 w-full lg:mt-2"
                                key={leftfiltermaindata?.contentLink?.id}
                              >
                                <img
                                  id={
                                    leftfiltermaindata?.mainCategory?.value[0]
                                      .name
                                  }
                                  src={
                                    leftfiltermaindata?.categoryImage
                                      ?.expandedValue?.url
                                  }
                                />
                                <label
                                  htmlFor={leftfiltermaindata?.mainCategory?.value[0]
                                    .name}
                                  className="ml-2 filter-title"
                                >
                                  {
                                    leftfiltermaindata?.mainCategory?.value[0]
                                      .name
                                  }
                                </label>
                              </div>
                            </label>
                            {/* Left filter main category */}

                            {/* Left filter sub category */}
                            <div className="lg:border-b lg:border-[#CCD1E3] pb-3 mb-2 mck-hn-filter-subcat tab-content lg:max-h-none lg:px-0">
                              <ul>
                                <li className="list-none">
                                  <div
                                    className="flex items-center my-px"
                                    onClick={(e) =>
                                      handleViewAllChange(
                                        e,
                                        leftfiltermaindata?.mainCategory
                                          ?.value[0].id
                                      )
                                    }
                                  >
                                    <input
                                      id={
                                        leftfiltermaindata?.mainCategory
                                          ?.value[0]?.name
                                      }
                                      type="checkbox"
                                      value="view all"
                                      className="w-4 h-4"
                                      checked={
                                        selectedFilterItems[
                                          leftfiltermaindata?.mainCategory
                                            ?.value[0].id
                                        ]?.isCategoryChecked
                                      }
                                      defaultChecked={
                                        selectedFilterItems[
                                          leftfiltermaindata?.mainCategory
                                            ?.value[0].id
                                        ]?.isCategoryChecked
                                      }
                                    />
                                    <label
                                      htmlFor="mck-view-all"
                                      className="ml-2 text-mcknormalgrey text-sm"
                                      id=""
                                    >
                                      View All
                                    </label>
                                  </div>
                                </li>
                              </ul>
                              <ul>
                                {leftfiltermaindata?.subCategory?.value?.map(
                                  (leftfiltersubdata: any) => (
                                    <li
                                      className="list-none"
                                      key={leftfiltersubdata?.id}
                                    >
                                      <div
                                        className="flex items-center my-px"
                                        onClick={(e) =>
                                          handleCheckBox(
                                            e,
                                            leftfiltersubdata?.name,
                                            leftfiltermaindata?.mainCategory
                                              ?.value[0].id,
                                            leftfiltersubdata?.id
                                          )
                                        }
                                      >
                                        <input
                                          id={leftfiltersubdata?.name}
                                          type="checkbox"
                                          value={leftfiltersubdata?.name}
                                          className="w-4 h-4"
                                          checked={
                                            selectedFilterItems[
                                              leftfiltermaindata?.mainCategory
                                                ?.value[0].id
                                            ][leftfiltersubdata?.id]?.checked
                                          }
                                          defaultChecked={
                                            selectedFilterItems[
                                              leftfiltermaindata?.mainCategory
                                                ?.value[0].id
                                            ][leftfiltersubdata?.id]?.checked
                                          }
                                        />
                                        <label
                                          htmlFor={leftfiltersubdata?.name}
                                          className="ml-2 text-sm"
                                        >
                                          {leftfiltersubdata?.name}
                                        </label>
                                      </div>
                                    </li>
                                  )
                                )}
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

            {/* <div className="flex-auto"> */}
            <div className="col-span-2">
              {/* Health needs - Right coloumn starts */}
              <div>
                  <ProductComponent selectedProduct={selectedProduct}/>       
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthNeedsComponent;
