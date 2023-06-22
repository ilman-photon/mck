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
 * @param selectedFilterItems 
 * @returns query constructor for SubCategory Products
*/
function constructQuerySubCategory(selectedFilterItems: ProductFilter.MainCategory[]) {
    const filterConditions = selectedFilterItems.map((item) => {
        return `productSubCategory/value/id eq ${item?.id}`;
    });

    const query = `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=${encodeURIComponent(
        `((${filterConditions.join(" or ")}) and ContentType/any(t:t eq 'ProductDetailsPage'))`
    )}`;

    return query;
}

/**
 * 
 * @param mainCategoryData 
 * @returns query constructor for MainCategory products
*/

function constructQueryMainCategory(mainCategoryData: ProductFilter.MainCategory[]) {
    const baseUrl = `${process.env.API_URL}/api/episerver/v3.0/search/content?`;
    const contentTypeFilter = "ContentType/any(t:t eq 'ProductDetailsPage')";
    let categoryFilters: ProductFilter.MainCategory[] | string[] | any = [];
    
    mainCategoryData.forEach((category) => {
        const categoryName = encodeURIComponent(category.name);
        const categoryFilter = `(productCategory/value/name eq '${categoryName}')`;
        categoryFilters.push(categoryFilter);
    });

    const query = `${baseUrl}filter=((${categoryFilters.join(' or ')}) and ${contentTypeFilter})`;
    return query;
}

// function constructQuery(data:ProductFilter.QueryBucketType[]) {
//     let query = `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(`;
  
//     data.forEach((item, index) => {
//       if (index !== 0) {
//         query += ') or ';
//       }
//       const checkRootLength = data?.length > 1
//       if (item.isBusinessVerticalCategory) {
//         checkRootLength && index !== 0 && (query += '(')
//         query += `productCategory/value/name eq '${item.name}' `;
//         const checkLength = item?.subCategory?.length > 1
//         //(productType/value/name eq 'Acute Care' and (productSubCategory/value/name eq 'Sleep Aid' or productSubCategory/value/name eq 'Alert Aid')) and ContentType/any(t:t eq 'ProductDetailsPage')
//         query += `and `
//         checkLength && (query += '(')
//         item.subCategory.forEach((subItem,subIndex) => {
//             query += 'productSubCategory/value/name eq'
//             query += ` '${subItem.name}'`;
//             checkLength && subIndex === 0 && (query += ' or ')
//             item?.subCategory?.length > 1 && (query += ' ')
//         });
//         checkLength && (query += ')')
//       } else {
//         query += `${item?.name?.toLowerCase()}/value/name eq`
//         item?.subCategory?.forEach((subItem) => {
//             query += ` '${subItem?.name}' `
//         })
//       }
//     });
  
//     query += `) and ContentType/any(t:t eq 'ProductDetailsPage')`;
  
//     return query;
//   }

/**
 * trial 2
 */
// function constructQuery(data:ProductFilter.QueryBucketType[]) {
//     let query = `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(`;
  
//     data.forEach((item, index) => {
//       if (index !== 0) {
//         query += ') or ';
//       }
//       const checkRootLength = data.length > 1;
//       if (item.isBusinessVerticalCategory) {
//         checkRootLength && index !== 0 && (query += '(');
//         query += `productCategory/value/name eq '${item.name}' `;
//         const checkLength = item.subCategory.length > 1;
//         query += `and `;
//         if (checkLength) {
//           query += '(';
//         }
//         item.subCategory.forEach((subItem, subIndex) => {
//           query += 'productSubCategory/value/name eq';
//           query += ` '${subItem.name}'`;
//           if (checkLength && subIndex < item.subCategory.length - 1) {
//             query += ' or ';
//           }
//         });
//         if (checkLength) {
//           query += ')';
//         }
//       } else {
//         query += `${item?.name?.toLowerCase()}/value/name eq`;
//         item.subCategory.forEach((subItem, subIndex) => {
//           query += ` '${subItem?.name}' `;
//           if (subIndex < item.subCategory.length - 1) {
//             query += ' or ';
//           }
//         });
//       }
//     });
  
//     query += `) and ContentType/any(t:t eq 'ProductDetailsPage')`;
  
//     return query;
//   }

function constructQuery(data:ProductFilter.QueryBucketType[]) {
    let query = `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(`;
  
    data.forEach((item, index) => {
      if (index !== 0 && item.isBusinessVerticalCategory) {
        query += ') or ';
      } else if(index !== 0 && !item?.isBusinessVerticalCategory) {
        query += ') and '
      }
      const checkRootLength = data.length > 1;
      if (item.isBusinessVerticalCategory) {
        checkRootLength && index !== 0 && (query += '(');
        // query += `productCategory/value/name eq '${item.name}' `;
        if(item.isViewAll){
            query += `productType/value/name eq '${item.name}'`
        } else{
            query += `productCategory/value/name eq '${item.name}' `;
        }
        const checkLength = item.subCategory.length > 1;
        !item.isViewAll && (query += `and `);
        // data.length > 1 && !item.isViewAll  && (query+=`and `)
        if (checkLength && !item.isViewAll) {
          query += '(';
        }
        if(!item?.isViewAll){
            item.subCategory.forEach((subItem, subIndex) => {
              query += 'productSubCategory/value/name eq';
              query += ` '${subItem.name}'`;
              if (checkLength && subIndex < item.subCategory.length - 1) {
                query += ' or ';
              }
            });
        } 
        if (checkLength && !item.isViewAll) {
          query += ')';
        }
      } else {
        // const subCategoryValues = item.subCategory.map((subItem) => `'${subItem.name}'`).join(' or ');
        if(item.isViewAll){
            if(index !== 0) query += '('
            const itemName = item?.name === 'Health Needs' ? 'healthNeeds' : item?.name?.toLowerCase()
            query += `${itemName}/value/name eq '${item?.name}'`    
        } else {
            const itemName = item?.name === 'Health Needs' ? 'healthNeeds' : item?.name?.toLowerCase()
            const subCategoryValues = item?.subCategory?.map((subItem) => `${itemName}/value/name eq '${subItem.name}'`).join(' or ');
            // query += '('
            query += `${subCategoryValues}`;
            // query += ')'
        }    
        // query += `${item.name.toLowerCase()}/value/name eq ${subCategoryValues} `;
      }
    });
  
    query += `) and ContentType/any(t:t eq 'ProductDetailsPage')`;
  
    return query;
  }
  
  

/**
 * 
 * @author [Zaqi Akbar]("https://github.com/zaqiakbaar")
 * 
 * @access **Any changes on this must be authorized by `author`**. 
 */
function ProductList() {
    const router = useRouter()
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
  const selectedMainCategory = useSelectedProductCategoryStore(state => state.selectedMainCategory)
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
    console.log(bucket)
    const onSelectCheckBox = useSelectedProductCategoryStore(state => state.onSelectCheckBox)
    // const selectedFilter = useHeaderStore(state => state.selectedFilter)
    // console.log(selectedFilterItems)
    /**
     * @end
     */
    // console.log('ini lho', selectedFilterItems)
    // const handleFetchProductsSubCategory = async () => {
    //     setLoader(true)
    //     await axiosInstance.get(constructQuerySubCategory(selectedFilterItems)).then((res) => {
    //         const nameValue = res?.data?.results?.[0]?.productType?.value?.[0]?.name
    //         const resultValue = res?.data?.results
    //         const totalMatching = res?.data?.totalMatching
    //         onProductQueried(
    //             [
    //                 { item: { name: nameValue } },
    //                 { data: { results: resultValue } },
    //             ],
    //             totalMatching
    //         )
    //         setLoader(false)
    //     }).catch(() => setLoader(false))
    // }
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

    const handleFetchOnViewAllSelected = async () => {
        setLoader(true)
        await axiosInstance.get(constructQueryMainCategory(bucket)).then((res) => {
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
    const isCategorySelectedIsAMainCategory = selectedMainCategory?.length > 0

    React.useEffect(() => {
        if (isProductFilterSelected) {
            // if (isCategorySelectedIsAMainCategory) {
                // handleFetchOnViewAllSelected()
            // } else {
                // handleFetchProductsSubCategory()
                handleFetchProductsSubCategories()
            // }
        } else if (isProductFilterSelectedEmpty) {
            fetchAllProductList()
        }
    }, [selectedFilterItems, selectedMainCategory])



    React.useEffect(() => {
        // if (¿) {
            getProductFilterList()
        // }
    }, [])

    React.useEffect(() => {
        // if () {
            getRecommendedProductData(productItemName)
        // }
    }, [])


    return (
        <>
           <Loader isValidating={isLoading}/>
            <div className="mck-Product-Listing-page container w-full mx-auto grid grid-cols-1 mb-18">
                <ProductListFilter
                    activeFiltersData={activeFilterDataList}
                    productCategoryData={productCategoryDataList}
                    recommendedProduct={recommendProductData}
                    // activeFilter={selectedFilterItems}
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