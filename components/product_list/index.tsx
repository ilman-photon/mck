import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import ProductFilter from "@/components/productFilter";
import ActiveProductFilter from "@/components/activeProductFilter";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import ProductCard from "../../components/health_needs/ProductCard";
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
        <div className="container lg:mt-18 mt-6 px-4 lg:px-4 xl:px-0 desktop:mt-6">
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


              {/* Product items */}
              <div className="grid mobile:grid-cols-2 md:grid-cols-3  desktop:grid-cols-4 lg:grid-cols-5 pt-4 lg:pt-6 lg:pl-6 break-words">
                {productListData?.data?.results.map((item: any, idxs: number) => {
                  return (
                    <ProductCard cardData={item} product={productListData} indexs={idxs} mainIndex={idxs} />
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
