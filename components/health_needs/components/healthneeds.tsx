import React from 'react'
import HealthNeedCategory from '../healthNeedCategory'
import HealthNeedCategoryMobile from '../healthNeedCategoryMobile'
import { useHealthNeedsStore } from './Store/useHealthNeedsStore'
// import ProductListFilter from '@/components/product_list/product_list_filter'
import gifImage from "../../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import { constructQuery } from '@/components/product_list/productlists'
import axiosInstance from '@/utils/axiosInstance'
import HealthNeedsFilterComponent from './healthneedsfilter'
import Image from 'next/image'
import { ProductFilter } from '@/components/product_list/Model/ProdutAPI';

let sectionData:any = []
let selectedRecommendedProduct: any = [];
function HealthNeeds() {

    const getProductCategoryList = useHealthNeedsStore((state) => state.fetchRecommendedProductData)
    const healthNeedData = useHealthNeedsStore((state) => state.healthNeedsCategory)

    const bucket = useHealthNeedsStore((state) => state.bucket)
    const productCategoryData = useHealthNeedsStore((state) => state.productCategoryDataList)
    const activeFiltersData = useHealthNeedsStore((state) => state.activeFiltersData)
    const recommendProductData = useHealthNeedsStore(state => state.recommendProductData)
    const selectedFilterItems = useHealthNeedsStore(state => state.selectedFilterItems)
    const productQueriedData = useHealthNeedsStore(state => state.productQueriedData)
    const onProductQueried = useHealthNeedsStore(state => state.onProductQueried)
    const isLoading = useHealthNeedsStore((state) => state.isLoading)
    const customerBackgroundColor = useHealthNeedsStore(state => state.customerBackgroundColor)
    const fetchAllProductList = useHealthNeedsStore(state => state.fetchAllProductList)
    const getProductFilterList = useHealthNeedsStore(state => state.fetchProductFilterList)
    const setLoader = useHealthNeedsStore(state => state.setLoader)
    const isProductFilterSelected = selectedFilterItems?.length > 0
    const isProductFilterSelectedEmpty = selectedFilterItems?.length === 0

    const productSum = useHealthNeedsStore((state) => state.productSum)
    
    const handleFetchProductsSubCategories = async (categoryArrayList:any) => {
        setLoader(true)
        let tempResults: any = [];
        await axiosInstance.get(constructQuery(bucket)).then((res) => {
          res.data.results.map((item:any) => {
            let name = item.productCategory.value[0].name;
            // if (tempResults[name]) {
            //   let tempArray = tempResults[name];
            //   tempArray.push(item);
            //   tempResults[name] = tempArray;
            // } else {
            //   tempResults[name] = [item];
            // }
            item?.healthNeeds?.value.forEach((value: any) => {
            if (
              value.name !== "Health Needs" &&
              categoryArrayList.some((element: ProductFilter.QueryBucketType) =>
                element.subCategory.some((data:ProductFilter.MainCategory) => {
                  return value.name.includes(data.description)
                })
              )
            ) {
              if (!tempResults[value.name]) {
                tempResults[value.name] = [];
              }
              tempResults[value.name].push(item);
            }  else if (
              value.name !== "Health Needs" &&
              categoryArrayList.length === 0 
              ) {
              tempResults[name] = [item];
            } 
          });
          })
            // const nameValue = res?.data?.results?.[0]?.productType?.value?.[0]?.name
            // const resultValue = res?.data?.results
            
            const totalMatching = res?.data?.totalMatching
            const transformedArray = Object.entries(tempResults).map(
              ([key, value]) => {
                return {
                  item: { name: key },
                  data: { results: value },
                };
              }
            );
            // console.log(transformedArray)
            // console.log(bucket)
            onProductQueried(
              transformedArray,
              totalMatching
            )
            setLoader(false)
        }).catch(() => setLoader(false))
    }

    React.useEffect(() => {
        if (isProductFilterSelected) {
            handleFetchProductsSubCategories(bucket)
        } else if (isProductFilterSelectedEmpty) {
            fetchAllProductList([])
        }
    }, [selectedFilterItems])   
    

    React.useEffect(() => {
        getProductCategoryList()
        getProductFilterList()
    },[])

    // console.log(recommendProductData)
    React.useEffect(() => {
      let tempRecommendedProduct = recommendProductData?.expandedValue?.filter(
        (item: any) => {
          if (
            item &&
            item?.title &&
            item?.title?.value === "Health Needs Highlights"
          ) {
            return item;
          }
        }
      );
      recommendProductData?.expandedValue?.map((id: any) => {
        return tempRecommendedProduct[0].healthNeedItem?.expandedValue.map(
          (item: any) => {
            if (
              id?.recommendedProductCategory?.value &&
              id.recommendedProductCategory.value[0].id ===
                item.healthNeedCategory.value[0].id
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
    }, [recommendProductData]);

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
        //   selectedFilterItems={selectedFilterItems}
        //   selectedHealthNeed={selectedHealthNeed}
        //   setActiveFilter={setActiveFilter}
         activeFilter={bucket}
         productCategoryData={
            productCategoryData?.length && productCategoryData[0]
         }
      customerBackgroundColorCode={customerBackgroundColor}
    />
    <HealthNeedCategoryMobile
      healthNeedData={healthNeedData}
      //   selectedFilterItems={selectedFilterItems}
        // selectedHealthNeed={selectedHealthNeed}
        // setActiveFilter={}
       activeFilter={bucket}
      productCategoryData={
        productCategoryData?.length && productCategoryData[0]
      }
      customerBackgroundColorCode={customerBackgroundColor}
    />
    <HealthNeedsFilterComponent
      activeFiltersData={activeFiltersData}
      activeFilter={bucket}
      productCategoryData={productCategoryData}
      selectedProduct={productQueriedData}
      recommendedProduct={recommendProductData}
      sectionData={sectionData}
    // productSearchCard={true}
      selectedRecommendedProduct={selectedRecommendedProduct} 
      productSum={productSum}
    />
  </div>
  </>
  )
}

export default HealthNeeds