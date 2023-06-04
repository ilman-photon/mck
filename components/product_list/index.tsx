import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import ProductFilter from "@/components/productFilter";
import ActiveProductFilter from "@/components/activeProductFilter";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import ProductCard from "../../components/health_needs/ProductCard";
import RecommendationalProductComponent from "../recommendational_product";

let sectionData: any = [];
let selectedRecommendedProduct: any = [];
function ProductListComponent() {
  const router = useRouter();
  const [productListData, SetProductListData] = useState<any>();

  const [activeFilter, setActiveFilter] = useState<any>([]);
  const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Loading state variable
  const [recommendedProduct, setRecommendedProduct] = useState<any>();
  const [productName , setProductName] = useState<any>()
  // Right section product carousel data
  function fetchProductList(filter: any) {
    setIsLoading(true);
    let queryParameter = "";
    if (filter === "") {
      queryParameter = `(productType/value/name eq '${router.query.filter}') and`;
    } else if(filter === "NA"){
      queryParameter = "";
    } else {
      queryParameter = `${filter} and`;
    }
    const promise = axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(${queryParameter} ContentType/any(t:t eq 'ProductDetailsPage'))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    promise
      .then((res) => {
        setProductName(res.data.results[0].productType?.value[0].name )
        SetProductListData(res);
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
        category.items.map((item: any) => {
          if(category.isBusinessVerticalCategory){
            let categoryProductType = category.productType;
            let queryParam = `${categoryProductType}/value/name eq '${item}'`;
            businessVerticalCategory.push(queryParam);
          }else{
            let categoryProductType = category.productType ? category.productType.toLowerCase() : '';
            let queryParam = `${categoryProductType}/value/name eq '${item}'`;
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
        queryParams = `(${businessQueryParams})`;
      }
    }else{
      queryParams = notBusinessQueryParams;
    }
    
    queryParams = queryParams !== '' ? queryParams : 'NA';

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
      // setRecommendedProduct(productCategoryData?.data[0].contentArea);
    // console.log("MAIN productCategoryDataList --- ", productCategoryDataList);
    //console.log("maincategorydata?.categoryImage?.expandedValue?.url--- ",productCategoryDataList[0]?.categoryImage?.expandedValue?.url);
    setproductCategoryData(productCategoryDataList);
    createTempFilterArr(productCategoryDataList);
  };


  const fetchRecommandedProductData = async () =>{
    const tempName = productName?.replace(/ /g, "-")
    const recommendedCategoryData = await axios(
      `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/${tempName}/&expand=*`
    );
    const response = recommendedCategoryData?.data[0]?.contentArea
    setRecommendedProduct(response)
  }
  useEffect(()=>{
    fetchRecommandedProductData()
   
  },[productName])

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

    let selectedFilterData : any[] =[];
    selectedFilterData = tempArr;
    selectedFilterData.map((category: any) => {
      category.map((sub_category: any) => {
        if (router.query.filter === sub_category.name) {
          sub_category.checked = true;
          if(category["items"] && category["items"].indexOf(router.query.filter) === -1){
            category["items"].push(router.query.filter);
            setActiveFilter([...activeFilter, router.query.filter]);
          }
        } else {
          if(category["items"] && category["items"].indexOf(sub_category.name) > -1){
            category["items"].splice(category["items"].indexOf(sub_category.name), 1);
          }
          category.checked = false;
        }
      });
    });

    setSelectedFilterItems(selectedFilterData);

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
    fetchProductList("NA");
  };

  const handleProductClick = (data: any) => {
    const title = data.routeSegment;
    router.push({
      pathname: "/product_detail",
      query: { data: title },
    });
  };

  useEffect(() => {
    recommendedProduct?.expandedValue?.map((id: any) => {
      return recommendedProduct?.expandedValue[1].contentBlockArea.expandedValue.map(
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

  const handleProduct = (item: any, index: number) => {
    const filteredSection = sectionData.filter((section : any) => {
      const tempProductName = section?.recommendedProductCategory?.value[0]?.name
      const itemName = tempProductName.toLowerCase().replace(/[^\w\s]/gi, '');
      const searchItem = item?.toLowerCase().replace(/[^\w\s]/gi, ''); 
     
      return itemName.includes(searchItem);
    });

    if (filteredSection.length > 0) {
      return (
        <RecommendationalProductComponent
          indexs={index}
          sectionData={filteredSection.map((section: any) => section)}
        />
      );
    }
    return null;
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
              <>
                 {selectedRecommendedProduct?.map((itemData: any, index: number) => {
                  let correctItemValue = itemData?.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s+/g, "");
                  let correctProductValue = productName?.toLowerCase().replace(/[^\w\s]/gi, "").replace(/\s+/g, "");
                  if (correctItemValue === correctProductValue) {
                    return handleProduct(productName, index);
                  }
                  return null;
                })}
                </>
              <div className="grid mobile:grid-cols-2 md:grid-cols-3  desktop:grid-cols-4 lg:grid-cols-5 pt-4 lg:pt-0 lg:pl-6 lg:mb-12 break-words">         
                {productListData?.data?.results.map((item: any) => {
                  return (
                    <div
                      className="rounded-lg border border-[#CCD1E3] mr-1 p-4 lg:mb-6 mb-4"
                      key={item?.contentLink?.id}
                      onClick={() => handleProductClick(item)}
                    >
                      <div className="lg:h-60 h-28 flex items-center justify-center">
                      <img src={item?.image?.value?.url} alt={`${item?.image?.value?.url}`} className="mx-auto border-0 lg:max-h-60 max-h-28 cursor-pointer" />
                      </div>
                      <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey mt-2 text-sofia-bold text-mckblue text-xs font-extrabold leading-[18px] h-[22px]">
                        {/* {healthcategorytitle?.healthNeedCategory?.value[0]?.name} */}
                      </div>
                      <div className="text-mckblue mt-3 text-sofia-bold font-extrabold lg:text-xl text-lg truncate leading-[23px]">
                        {item?.name}
                      </div>
                      <div
                        id="my_text"
                        className="text-mcknormalgrey mt-1 text-sofia-reg lg:text-base text-sm font-normal para-ellipsis-3"
                        dangerouslySetInnerHTML={{
                          __html: item?.highlightDescription?.value,
                        }}
                      ></div>
                    </div>                  );
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
