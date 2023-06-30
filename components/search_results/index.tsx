import React, { useEffect, useState } from "react";
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
  const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
  const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);
  const [productCount, setProductCount] = useState<any>(0);
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
  const productSearch = router.query.search
  // const [productSearch, setProductSearch] = useState<any>(router.query.search);
  const [placeHolders, setSearchplaceHolders] = useState<any>();
  const productSearchCard = true
  const [productSum , setProductSum] = useState<any>()

  // Right section product filter data
  function fetchProductList(filter: any) {
    setSearchLoading(true)
    let queryParameter = "";
    if (filter !== "") {
      queryParameter = `(${filter}) and `;
    } 
    const Param = router.query.search?.toString().toLowerCase()||'';
    const HandleApostrophe=Param.replaceAll("'", "''")
    const StringParam=encodeURIComponent(HandleApostrophe)
    const promise = axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=${queryParameter}ContentType/any(t:t eq 'ProductDetailsPage') and (contains(tolower(productType/value/name), '${StringParam}') or contains(tolower(productSubCategory/value/name), '${StringParam}') or contains(tolower(productCategory/value/name), '${StringParam}') or contains(tolower(description/value), '${StringParam}') or contains(tolower(title/value), '${StringParam}') or contains(tolower(name), '${StringParam}') or contains(tolower(highlightDescription/value), '${StringParam}'))`);
    promise
      .then((res:any) => {
        setProductCount(res?.data?.totalMatching);
        // setProductSearch(router.query.search);
        setSearchLoading(false);
        setProductSum(res?.data?.totalMatching)
        SetProductListData( [
          {item: {name: res?.data?.results[0]?.productType?.value[0].name }},
          {data: {results: res?.data?.results}},
        ])
      })
      .catch((e: Error) =>  setSearchLoading(false));
  }

  useEffect(() => {
   if(router.query.search){
    fetchProductList(router.query.search);
   }
  }, [router.query.search]);



  useEffect(() => {
    if(router.query.search){
    createQueryParameters();
    }
  }, [activeFilter,router.query.search]);

  const createQueryParameters = () => {
    let queryParams = "";

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
        if(queryParams?.length>0){
          fetchProductList(queryParams);
        }
        else{
          fetchProductList(router?.query?.search);
        }
  }

  // -------- Health needs page data fetch starts -------- //
  const [activeFiltersData, setactiveFiltersData] = useState<any>();
  const [productCategoryData, setproductCategoryData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
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


  useEffect(() => {
    fetchBlogSetting()
      .then((res:any) => {
        setSearchplaceHolders(res.data[0])

      })
      .catch((e: Error) => {
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
          {productCount=== 0 && placeHolders?.noMatchFoundText && !searchLoading ? 
           <div className='lg:col-span-2 col-start-1 col-end-7'>
            < div className='w-full lg:pb-11 pb-5' >
              <h1 className='lg:text-32 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-left' id='blog-link-001' >{`${placeHolders?.noMatchFoundText.value} “${productSearch}”`} </h1>
              <div className="text-base text-sofia-reg text-mckback font-normal lg:pb-px pb-3" id="srnf-label-001">{placeHolders?.searchForText.value} <strong className='text-mckred'><i>{productSearch}</i></strong></div>
              <div className='text-lg text-sofia-reg text-mcknormalgrey font-normal' id="srnf-label-003">{placeHolders?.showResultsText.value.replace(/#/g, 0)}</div>
            </div >
          </div > 
           : 
            <>
            {placeHolders?.showingResultsText && productCount > 0 &&
              <h1 className='lg:text-32 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-left' id='blog-link-001' >{`${productCount} ${placeHolders?.showingResultsText.value} “${productSearch}”`} </h1>
            }
            {/* <br /> */}
</>
}
              {/* <div className="text-lg text-sofia-reg text-mckback font-normal lg:pb-px pb-1" id="srnf-label-002">{placeHolders?.showingResultsText.value} <strong className='text-mckblue'><i>{productSearch}</i></strong></div> */}
              {/* <div className='text-lg text-sofia-reg text-mcknormalgrey font-normal' id="srnf-label-003">{placeHolders?.showResultsText.value.replace(/#/g, productCount)}</div> */}            
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
       
      </div>
    </>
  );
}
export default ResultComponent;
