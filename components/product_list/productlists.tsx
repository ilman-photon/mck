import React from 'react'
import { useSelectedProductCategoryStore } from './Store/useSelectedProductCategoryStore'
import ProductListFilter from './product_list_filter'
import { useHeaderStore } from '../navbar/Store/useNavBarStore'
import { ProductFilter } from './Model/ProdutAPI';
import axiosInstance from '@/utils/axiosInstance';
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from 'next/image';
import { useRouter } from 'next/router';

interface LoaderProps {
    isValidating: boolean
}

const Loader = (props: LoaderProps) => {
    const { isValidating } = props

    return (
        <>
            {isValidating ? (
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
            ) : null}
        </>
    )
}

/**
 * 
 * ((filterType.value/value/name eq 'Female' ) 
 * and 
 * (filterType.value/value/name eq 'Adults' ) and
 * (filterType.value/value/name eq 'Capsule' or filterType.value/value/name eq 'Chewable' ) and 
 * (productCategory/value/name eq 'Acute Care' and productSubCategory/value/name eq 'Ear Care' or productSubCategory/value/name eq 'Nasal Relief' ) and ()
 * (productType/value/name eq 'Everyday Care')
 * and (filterType.value/value/name eq 'Acid Reflux' or filterType.value/value/name eq 'Acid Reducer' ) 
 * and ContentType/any(t:t eq 'ProductDetailsPage'))
 *  */ 

const subCategory = (data:ProductFilter.MainCategory[], parrentQuery:string, isFirstParent: boolean = false) => {
    let sbCategory = "";
    data.forEach((item, index) => {
        if (index > 0 || isFirstParent) {
            sbCategory+= ' or '
        } 
        sbCategory += `${parrentQuery}/value/name eq '${item?.name}'`;
    })
    return sbCategory
};

const subCategoryNonBussiness = (data:ProductFilter.MainCategory[], parrentQuery:string, isFirstParent: boolean = false) => {
    let sbCategory = "(";
    data.forEach((item, index) => {
        if (index > 0 || isFirstParent) {
            sbCategory+= ' or '
        } 
        sbCategory += `${parrentQuery}/value/name eq '${item?.name}'`;
    })
    return sbCategory+=")"
};

const category = (item: any) => {
    let category = "";
    category += `productCategory/value/name eq '${item.name}' and `;
    category += subCategory(item.subCategory, 'productSubCategory');
    return category
};

export function constructQuery(data:ProductFilter.QueryBucketType[],additionalQuery?:string){
  let query = `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=`;
  const dataBusinessVerticalCategory = data.filter((dtx) => dtx.isBusinessVerticalCategory);
  const notDataBusinessVerticalCategory = data.filter((dtx) => !dtx.isBusinessVerticalCategory);

  const viewAllviewAll = dataBusinessVerticalCategory.filter((item) => item.isViewAll);
  const haveCategory = dataBusinessVerticalCategory.some((item) => !item.isViewAll);
  let viewAllQuery = "";
  let viewAllNonBusinessVertical = "";

  let ctg = haveCategory ?"(" : "";
  let viewAllIndex = 0;
  let categoryIndex = 0;

  dataBusinessVerticalCategory?.forEach((item,index) => {
        if(item.isViewAll){
            viewAllQuery += `(productType/value/name eq '${item?.name}')`
            if (haveCategory) {
                viewAllQuery += " or ";
            }
            if (!haveCategory && !(viewAllviewAll.length-1 === viewAllIndex)) {
                viewAllQuery += " or ";
            }
            viewAllIndex += 1;
        }else{
            if (categoryIndex > 0) {
                ctg += " or (";
            }
            ctg += category(item);
            ctg += ")";

            categoryIndex += 1
        }    
  });

  let queryViewAllBusinessVertical = `${viewAllQuery} ${ctg}`;
  const whiteSpace = ' '
  queryViewAllBusinessVertical = queryViewAllBusinessVertical !== whiteSpace ? `${queryViewAllBusinessVertical} and` : '';
//   console.log(notDataBusinessVerticalCategory)
  let nonBusinessCatId = 0;
  notDataBusinessVerticalCategory?.forEach((item, index) => {
        if (item.isViewAll) {
            if(index !== 0){
                // viewAllNonBusinessVertical += " and "
            }
            viewAllNonBusinessVertical += `(${item?.filterType}/value/name eq '${item?.name}')`
            nonBusinessCatId += 1;
        } else {
            viewAllNonBusinessVertical += subCategoryNonBussiness(item.subCategory, item.filterType)
        }
        
        notDataBusinessVerticalCategory.length > index && (viewAllNonBusinessVertical += (notDataBusinessVerticalCategory.length === index+1?"": " and "))
  });
  const queryViewAllNonBusinessVertical = viewAllNonBusinessVertical !== '' ? `${viewAllNonBusinessVertical} and` : ''
  query += `${queryViewAllNonBusinessVertical} ${queryViewAllBusinessVertical} ContentType/any(t:t eq 'ProductDetailsPage')`;
//   query += `&orderby=healthNeeds/value/name,title/value asc`
//   console.log(query);
  return query;
}

let selectedRecommendedProduct:any = []
let sectionData:any = []

/**
 * 
 * @author [Zaqi Akbar]("https://github.com/zaqiakbaar")
 * 
 * @access **Any changes on this must be authorized by `author`**. 
 */
function ProductList() {
    const router = useRouter()
    // const productName:
    /**
     * @description Loader Component State
     */
    const isLoading = useSelectedProductCategoryStore(state => state.isLoading)
    /**
     * @description Loader Setter , use this to shown loader
     */
    const setLoader = useSelectedProductCategoryStore(state => state.setLoader)
    /**
     * @description func to get the Product Filter List
     */
    const getProductFilterList = useSelectedProductCategoryStore(state => state.fetchProductFilterList)
    /**
     * @description State Bucker of All Filter
     */
    const activeFilterDataList = useSelectedProductCategoryStore(state => state.activeFiltersData)
    /**
     * @description Product Carousel and everything inbetween
     */
    const recommendProductData = useSelectedProductCategoryStore(state => state.recommendProductData)
    /**
     * @description Product Category of Data
     */
    const productCategoryDataList = useSelectedProductCategoryStore(state => state.productCategoryDataList)
    /**
     * @description handler to get Recommended Product Data
     */
    const getRecommendedProductData = useSelectedProductCategoryStore(state => state.fetchRecommendedProductData)
    /**
     * @description mutable state for Filter Business logic, contains of selected filter
     */
    const selectedFilterItems = useSelectedProductCategoryStore(state => state.selectedFilterItems)
    /**
     * @description state of selected parent from Mega Menu
    */
   const productItemName = useHeaderStore(state => state.selectedCategory)
   /**
    * @description State Bucket of on `View All` selected, stored in Array of Objects
   */
//   const selectedMainCategory = useSelectedProductCategoryStore(state => state.selectedMainCategory)
    /**
     * @description State Bucket of Product Queried on Selected or deselected, if empty it returns all Products
     */
    const productQueriedData = useSelectedProductCategoryStore(state => state.productQueriedData)
    /**
     * @description Setter state to key of `productQueriedData`
     */
    const onProductQueried = useSelectedProductCategoryStore(state => state.onProductQueried)
    /**
     * @description mapped value of Total Matching Product
     */
    const productSum = useSelectedProductCategoryStore(state => state.productSum)
    /**
     * @description handler func to get All Product List, executed on Clear View All and first mount and also if checkboxes empty
     */
    const fetchAllProductList = useSelectedProductCategoryStore(state => state.fetchAllProductList)
    const bucket = useSelectedProductCategoryStore(state => state.bucket)
    // console.log(bucket,'ini lho')
    const onSelectCheckBox = useSelectedProductCategoryStore(state => state.onSelectCheckBox)
    // const sectionData = useSelectedProductCategoryStore(state => state.sectionData)
    // const setSectionData = useSelectedProductCategoryStore(state => state.setSectionData)
    // console.log(bucket)
    /**
     * @end
     */
    const handleFetchProductsSubCategories = async () => {
        setLoader(true)
        await axiosInstance.get(constructQuery(bucket)).then((res) => {
            const nameValue = res?.data?.results?.[0]?.productType?.value?.[0]?.name
            const resultValue = res?.data?.results
            const totalMatching = res?.data?.totalMatching
            onProductQueried(
                [
                    { item: { name: nameValue } },
                    { data: { results: resultValue } },
                ],
                totalMatching
            )
            setLoader(false)
        }).catch(() => setLoader(false))
    }
    
    const selectedFilter = useHeaderStore(state => state.selectedFilter)
    // console.log(selectedFilterItems,'--',bucket)
    const handleFilterFromRoute = () => {
        const filterName = selectedFilter?.clickedMenuName
        if(productCategoryDataList){
          const dataSet = productCategoryDataList.map((item:ProductFilter.ExpandedValue) => {
           return item.subCategory.value.filter((data:ProductFilter.MainCategory) => {
              return data?.name === filterName
            })
          })
          return onSelectCheckBox(dataSet?.[0]?.[0])
        }
      }

    React.useEffect(() => {
        if(selectedFilter?.isClicked){
        handleFilterFromRoute()
      }
      },[selectedFilter?.isClicked])  

    const isProductFilterSelected = selectedFilterItems?.length > 0
    const isProductFilterSelectedEmpty = selectedFilterItems?.length === 0
    const addressBarState = router?.query?.categoryOf
    const addressBarStateOfFilter = router?.query?.filter

    React.useEffect(() => {
        if (isProductFilterSelected) {
            handleFetchProductsSubCategories()
        } else if (isProductFilterSelectedEmpty && selectedFilter === null) {
            fetchAllProductList()
        }
    }, [selectedFilterItems,selectedFilter])   
    
    React.useEffect(() => {
        getRecommendedProductData(productItemName,String(addressBarState || addressBarStateOfFilter))
        getProductFilterList()
    }, [])

    React.useEffect(() => {
        recommendProductData?.expandedValue?.map((id: any) => {
          return recommendProductData?.expandedValue[1].contentBlockArea.expandedValue.map(
            (item: any) => {
              if (
                id?.recommendedProductCategory?.value &&
                id.recommendedProductCategory.value[0].id ===
                  item.productCategoryType.value[0].id
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
           <Loader isValidating={isLoading}/>
            <div className="mck-Product-Listing-page container w-full mx-auto grid grid-cols-1 mb-18">
                <ProductListFilter
                    selectedRecommendedProduct={selectedRecommendedProduct}
                    sectionData={sectionData}
                    activeFiltersData={activeFilterDataList}
                    productCategoryData={productCategoryDataList}
                    recommendedProduct={recommendProductData}                 
                    activeFilter={bucket}
                    productSearchCard={true}
                    selectedProduct={productQueriedData}
                    productSum={productSum}
                />

            </div>
        </>
    )
}

export default ProductList