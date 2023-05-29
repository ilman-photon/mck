import CarouselComponent from "@/components/carousel";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import CategoryComponent from "@/components/category";
import GoogleTagManager from "@/components/google_tag_manager";
import HealthNeedFilter from "@/components/health_needs/HealthNeedFilter";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import Head from "next/head";

let sectionData: any = []
let selectedRecommendedProduct: any = []

interface MyComponentProps {
  Response: {
    data: {
      title: {
        value: string;
      };
    }[];
  };
}

function AllProductCategoryPage({ Response }: MyComponentProps): React.ReactElement {
  const [categoryError, setCategoryError] = useState<any>();
  const [categoryLoading, setCategoryLoding] = useState<any>(true);
  const [productFilter, setProductFilter] = useState<any>();
  const [activeFilter, setActiveFilter] = useState<any>([]);
  const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);

  const [productCategory, setProductCategory] = useState<any>();
  const [selectedProduct, setSelectedProduct] = useState<any>([]);
  const [categoryProduct, setCategoryProduct] = useState<any>([]);
  const [carouselData, setCarouselData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [recommendedProduct , setRecommendedProduct] = useState<any>()
  let selectedCategoryName: any = [];
  let productName: any = [];

  function fetchProductList(filter: any) {
    setIsLoading(true);
    let queryParameter = "";
    if (filter === "") {
      queryParameter = `(productType/value/name eq 'Acute Care')`;
    } else {
      queryParameter = filter;
    }

    const query = filter;
    const regex = /'([^']+)'/g;
    const matches = [...query.matchAll(regex)];
    const values = matches.map((match) => match[1]);
    const promise = axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(${queryParameter} and ContentType/any(t:t eq 'ProductDetailsPage'))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
    promise
      .then((res) => {
        console.log("FetchProductList----- ", res.data);
        let tempResults :any = {}
        res.data.results.map((item :any) =>{
          let name = item.productType.value[0].name
          if(tempResults[name]){
            let tempArray = tempResults[name]
            tempArray.push(item)
            tempResults[name] = tempArray
          }
          else{
            tempResults[name] = [item]
          }

        })
        Object.keys(tempResults).map(key =>{
         let index= selectedProduct.findIndex((value :any) => value.item.name === key )
          selectedProduct[index].data.results = tempResults[key]
          selectedProduct[index].data.totalMatching = tempResults[key].length
        })
      })
      .catch((e: Error | AxiosError) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }

  // -------- Health needs page data fetch starts -------- //
  const [healthNeedData, setHealthNeedData] = useState<any>();
  const [activeFiltersData, setactiveFiltersData] = useState<any>();
  const [productCategoryData, setproductCategoryData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      // Health needs Categories List
      const healthNeedsCategories = await axios(
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
      const activeFiltersData = await axios(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`
      );
      const activeFiltersDataList = activeFiltersData?.data[0];
      setactiveFiltersData(activeFiltersDataList);

      // Product Category Helath needs - Left side category lists
      const productCategoryData = await axios(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/landing-page/&expand=*`
      );
      const productCategoryDataList =
        productCategoryData?.data[0]?.categoryFilter?.expandedValue;
      setproductCategoryData(productCategoryDataList);
      createTempFilterArr(productCategoryDataList);
      setCarouselData(productCategoryData?.data[0]?.contentArea?.expandedValue);

      // Four column block area
      const productLandingPage = await axios(
        `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/landing-page/&expand=*`
      );

      // const tempList = productLandingPage?.data[0].contentArea?
      const productCategoryList =
        productLandingPage?.data[0].contentArea?.expandedValue[1]
          ?.contentBlockArea?.expandedValue;
      setProductCategory(productCategoryList);
      setRecommendedProduct(productLandingPage?.data[0].contentArea)
      let tempObj = productLandingPage?.data[0].contentArea?.expandedValue[1];
      setCategoryProduct([tempObj]);
      productCategoryList?.map((item: any) => {
        productName.push(item.productCategoryName.value);
      });
      productName?.map((item: any) => {
        axios
          .get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(productType/value/name eq '${item}' and ContentType/any(t:t eq 'ProductDetailsPage'))`,
            {
              headers: {
                "Accept-Language": "en",
              },
            }
          )
          .then((res) => {
            setSelectedProduct((prevSelectedProducts: any) => {
              const itemExists = prevSelectedProducts.some(
                (product: any) => product.item.name === item
              );
              if (itemExists) {
                return prevSelectedProducts;
              }
              const newItem = { item: { name: item }, data: res.data };
              const updatedProducts = [...prevSelectedProducts, newItem];
              updatedProducts.sort((a: any, b: any) => {
                const propertyName = "name";
                return a.item[propertyName].localeCompare(b.item[propertyName]);
              });

              return updatedProducts;
            });
          })
          .catch((e: Error | AxiosError) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
          
      });
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

  // Get & display checkbox value - From Sub category list
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

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
          const categoryName = selectedFilterItems[catId].categoryName;
          selectedCategoryName.push(categoryName);
          if (lastCatId > 0 && lastCatId != catId) {
            queryParams += " and ";
          }

          queryParams += "(";
          category.items.map((item: any, index: any) => {
            const itemName = item.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            // const concatStr = category.isBusinessVerticalCategory ? " or " : " and ";
            const concatStr = category.items.length === index + 1 ? "" : category.isBusinessVerticalCategory ? " or " : " and ";
            queryParams += `${(category.isBusinessVerticalCategory ? (category.productType) : (category.productType).toLowerCase())}/value/name eq '${encodeItemName}' ${concatStr}`;
          });
        minSubCategoryCnt += category.items.length;
          queryParams += `)`;
          // selectedCategoryName.map((item: any, index: any) => {
          //   queryParams += "(";
          //   if (queryParams.includes(item)) {
          //     const concatStr =
          //       selectedCategoryName.length === index + 1 ? "" : " or ";
          //     queryParams = `(${category.productType}/value/name eq '${item}' ) ${concatStr}`;
          //   } else {
          //     const concatStr =
          //       selectedCategoryName.length === index + 1 ? "" : " or ";
          //     queryParams += `${category.productType}/value/name eq '${item}') ${concatStr}`;
          //   }
          // });

          // minSubCategoryCnt += category.items.length;
          lastCatId = catId;
        } else {
          minCategoryCnt += category.isCategoryChecked;
          if (category.isCategoryChecked) {
            const categoryName = selectedFilterItems[catId].categoryName;
            const itemName = categoryName.replace(/[^a-zA-Z ]/g, "");
            const encodeItemName = encodeURI(itemName);
            const joinedCond =
              selectedViewAllCateory.length === minCategoryCnt ? "" : "and ";
            const beforeCond = minSubCategoryCnt > 0 ? " and " : "";
            queryParams += ` ${beforeCond} (${selectedFilterItems[catId].productType}/value/name eq '${encodeItemName}') ${joinedCond} `;
          }
        }
      });

      if (minCategoryCnt === 0 && minSubCategoryCnt == 0) {
        queryParams = "";
      }
    }
    if (queryParams) fetchProductList(queryParams);
  };

  useEffect(() => {
    fetchCategoryId()
      .then((res) => {
        const id = res?.data[0]?.productCategory?.value[0]?.contentLink?.id;
        return axios.get(
          `${process.env.API_URL}/api/episerver/v3.0/content/${id}`,
          {
            headers: {
              "Accept-Language": "en",
            },
          }
        );
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

  useEffect(()=>{
    recommendedProduct?.expandedValue?.map((id: any) => {
      return recommendedProduct?.expandedValue[1].contentBlockArea.expandedValue.map((item: any) => {
        if (id?.recommendedProductCategory?.value &&
          id.recommendedProductCategory.value[0].id === item.productCategoryType.value[0].id) {  
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
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    if (Response && Response.data && Response.data.length > 0 && Response.data[0].title && Response.data[0].title.value) {
      fetch('https://api.example.com/data')
        .then((response: Response) => {
          if (!response.ok) {
            throw new Error('Request failed');
          }
          return response.json();
        })
        .then((data: any) => {
          if (data && data.length > 0 && data[0].title && data[0].title.value) {
            document.title = data[0].title.value;
          } else {
            document.title = "All Products";
          }
        })
        .catch((error: Error) => {
          console.log(error.message);
          document.title = "All Products";
        });
    } else {
      document.title = "All Product";
    }
  }, [JSON.stringify(Response)]);

  return (
    <>
    <Head>
        <title>Your Page Title</title>
      </Head>
      <GoogleTagManager />
      <HeaderComponent />
      {!carouselData || isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
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
      {carouselData && <CarouselComponent sectionData={carouselData} />}
      {categoryProduct.length && (
        <CategoryComponent sectionData={categoryProduct} />
      )}

      <div className="allproductlist-page container w-full mx-auto grid grid-cols-1">
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
        />
      </div>
      <FooterComponent />
    </>
  );
}

export default AllProductCategoryPage;
