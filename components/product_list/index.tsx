import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import ProductFilter from "@/components/productFilter";
import ActiveProductFilter from "@/components/activeProductFilter";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
function ProductListComponent() {
  const router = useRouter();
  const [productListData, SetProductListData] = useState<any>();

  const [activeFilter, setActiveFilter] = useState<any>([]);
  const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state variable

  // Right section product carousel data
  function fetchProductList(filter: any) {
    setIsLoading(true);
    let queryParameter = "";
    if (filter === "") {
      queryParameter = `(productType/value/name eq '${router.query.filter}')`;
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
      .catch((e: Error | AxiosError) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchProductList("");
  }, [router]);

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
            queryParams += " or ";
          }
          queryParams += "(";
          category.items.map((item: any, index: any) => {
            const itemName = item.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            const concatStr = category.items.length === index + 1 ? "" : " or ";
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
            const joinedCond =
              selectedViewAllCateory.length === minCategoryCnt ? "" : "and ";
            const beforeCond = minSubCategoryCnt > 0 ? " and " : "";
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
    if (queryParams) {
      fetchProductList(queryParams);
    }
  };

  // -------- Health needs page data fetch starts -------- //
  const [healthNeedData, setHealthNeedData] = useState<any>();
  const [activeFiltersData, setactiveFiltersData] = useState<any>();
  const [productCategoryData, setproductCategoryData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      // Product Category setting - Filters data
      const activeFiltersData = await axios(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`
      );
      const activeFiltersDataList = activeFiltersData?.data[0];
      // console.log("activeFilters --- ", activeFiltersDataList);
      setactiveFiltersData(activeFiltersDataList);

      // Product Category Helath needs - Left side category lists
      const productCategoryData = await axios(
        // `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/landing-page/&expand=*`
      );
      const productCategoryDataList =
        productCategoryData?.data[0]?.categoryFilter?.expandedValue;
      // console.log("MAIN productCategoryDataList --- ", productCategoryDataList);
      //console.log("maincategorydata?.categoryImage?.expandedValue?.url--- ",productCategoryDataList[0]?.categoryImage?.expandedValue?.url);
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
    selectedFilterItems.map((category: any) => {
      category.isCategoryChecked = false;
      category.map((sub_category: any) => {
        if (item == sub_category.name) {
          sub_category.checked = false;
        }
      });
    });
  }

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

  const handleProductClick = (data: any) => {
    const title = data.routeSegment;
    router.push({
      pathname: "/product_detail",
      query: { data: title },
    });
  };
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
        <div className="container lg:mt-8 mt-6 px-4 lg:px-4 xl:px-0">
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
          <div className="lg:flex md:flex-none sm-flex flex-none mt-8">
            <div className="flex-none h-max">
              <ProductFilter
                productCategoryData={productCategoryData}
                handleViewAllChange={handleViewAllChange}
                selectedFilterItems={selectedFilterItems}
                handleCheckBox={handleCheckBox}
              />
            </div>

            <div className="flex-auto">
              {/* Product Listing Two Col banner section starts*/}

              <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:ml-6 pt-6 lg:pt-0">
                <div tabIndex={0} className="bg-[#EAF1F8;] lg:p-9 p-4 md:mr-3 mb-4 lg:mb-0 md:mb-0">
                  <div tabIndex={0} className="w-full lg:mb-4 mb-3">
                    <img
                      src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png"
                      id="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png"
                      className="h-auto max-w-full"
                    />
                  </div>
                  <div className="grid grid-cols-3 lg:grid-cols-3 my-auto text-justify">
                    <div
                      tabIndex={0}
                      className="lg:h-60 object-contain col-span-1 lg:mr-6 mr-4"
                    >
                      <img
                        src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png"
                        id="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png"
                        alt="promotion image"
                        className="mx-auto lg:my-auto"
                      />
                    </div>
                    <div
                      tabIndex={0}
                      id="p-text"
                      className="text-justify pr-0 col-span-2"
                    >
                      <div
                        tabIndex={0}
                        className="text-lg text-sofia-reg col-span-2 lg:text-left lg:pb-4 pb-3"
                      >
                        <p>
                          You’re in touch with your health, able to pinpoint
                          what you need. With Foster &amp; Thrive, you can
                          easily target and treat your precise needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    role="button"
                    className="w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto"
                  >
                    WHERE TO BUY
                  </div>
                </div>
                <div tabIndex={0} className="bg-[#FFEABC] lg:p-9 p-4 lg:ml-4">
                  <div tabIndex={0} className="w-full mb-4">
                    <img
                      src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png"
                      id="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png"
                      className="h-auto max-w-full"
                    />
                  </div>
                  <div className="grid grid-cols-3 lg:grid-cols-3 my-auto text-justify">
                    <div className="lg:h-60 object-contain col-span-1 lg:mr-6 mb-3 mr-4">
                      <img
                        src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
                        id="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png"
                        alt="promotion image"
                        className="mx-auto lg:my-auto"
                      />
                    </div>
                    <div id="p-text" className="text-justify pr-0 col-span-2">
                      <div className="text-lg text-sofia-reg col-span-2 lg:text-left lg:pb-4 pb-3">
                        <p>
                          Everybody deserves optimal health, and nobody is
                          immune to everything. With Foster &amp; Thrive, you
                          can be prepared for almost anything.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    role="button"
                    className="w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto"
                  >
                    WHERE TO BUY
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-1">
                <div
                  tabIndex={0}
                  className="bg-[#DBDFEB] lg:ml-6 mt-4 m-0 lg:p-9 p-4 mb-4 lg:mb-0 last:mb-0"
                >
                  <div className="grid grid-cols-3 lg:grid-cols-3 my-auto text-justify">
                    <div
                      tabIndex={0}
                      className="lg:h-56 object-contain col-span-1 lg:mr-6 mr-4 mb-4"
                    >
                      <img
                        src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png"
                        id="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png"
                        alt="promotion image"
                        className="mx-auto lg:my-auto"
                      />
                    </div>
                    <div
                      tabIndex={0}
                      id="p-text"
                      className="text-justify pr-0 col-span-2"
                    >
                      <div
                        tabIndex={0}
                        className="text-lg text-sofia-reg col-span-2 lg:text-left pb-4"
                      >
                        <p>
                          You’re in touch with your health, able to pinpoint
                          what you need. With Foster &amp; Thrive, you can
                          easily target and treat your precise needs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    role="button"
                    className="w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex  lg:ml-auto float-right lg:float-none"
                  >
                    WHERE TO BUY
                  </div>
                </div>
              </div>

              {/* Product items */}
              <div className="grid mobile:grid-cols-2 md:grid-cols-3  desktop:grid-cols-4 lg:grid-cols-5 pt-4 lg:pt-6 lg:pl-6 break-words">
                {productListData?.data?.results.map((item: any) => {
                  return (
                    <div
                      className="rounded-lg border border-[#CCD1E3] mr-1 p-4 lg:mb-6 mb-4"
                      key={item?.contentLink?.id}
                      onClick={() => handleProductClick(item)}
                    >
                      <img src={item?.image?.value?.url} alt={item?.image?.value?.url} className="mx-auto" />
                      <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey mt-2 text-sofia-bold text-mckblue text-xs font-extrabold leading-[18px]">
                        {/* {healthcategorytitle?.healthNeedCategory?.value[0]?.name} */}
                      </div>
                      <div className="text-mckblue mt-3 text-sofia-bold font-extrabold text-xl truncate">
                        {item?.name}
                      </div>
                      <div
                        id="my_text"
                        className="text-mcknormalgrey mt-1 text-sofia-reg text-base font-normal para-ellipsis-3"
                        dangerouslySetInnerHTML={{
                          __html: item?.highlightDescription?.value,
                        }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              {/* Product End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductListComponent;
