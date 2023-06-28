import React, { useState } from "react";
import Link from "next/link";
import { useHeaderStore } from "../navbar/Store/useNavBarStore";
import { useSelectedProductCategoryStore } from "../product_list/Store/useSelectedProductCategoryStore";
import { ProductFilter } from "../product_list/Model/ProdutAPI";
import { useHealthNeedsStore } from "../health_needs/components/Store/useHealthNeedsStore";
import { useRouter } from "next/router";
import axiosInstance from "@/utils/axiosInstance";

function ProductDropComponent({ subMenuData ,handleClick}: Props) {
  const [active, setActive] = useState(null);
  const router = useRouter()
  const pathNameHealthNeeds = router?.pathname === '/health_needs'
  /**
   * @description onClickEachCategory is a func to set the state selected to the selectedCategory
   */
  const selectCategory = useHeaderStore((state) => state.onClickEachCategory);
  const onSelectedSetFilter = useHeaderStore((state) => state.onSelectedSetFilter);
  // const selectedCategory = useHeaderStore((state) => state.selectedCategory);
  const selectedFilter = useHeaderStore((state) => state.selectedFilter)
  const productItemName = useHeaderStore(state => state.selectedCategory)
  // console.log(productItemName)
  const setBucket = useSelectedProductCategoryStore(state => state.setBucket)
  const onSelectCheckBox = useSelectedProductCategoryStore(state => state.onSelectCheckBox)
  const onClearAll = useSelectedProductCategoryStore(state => state.onClearAll)

  
  const setBucketHealthNeeds = useHealthNeedsStore((state) => state.setBucket)
  const onSelectCheckBoxHealthNeeds = useHealthNeedsStore((state) => state.onSelectCheckBox)
  const onClearAllHealthNeeds = useHealthNeedsStore(state => state.onClearAll)
  const setLoader = useSelectedProductCategoryStore(state => state.setLoader)
  const setProductCategoryDataList = useSelectedProductCategoryStore(state => state.setProductCategoryDataList)

  const handleOnClearAllHealthNeeds = React.useCallback(() => {
    onClearAllHealthNeeds()
  },[])


  const handleClearAll = React.useCallback(() => {
    onClearAll()
  },[])
  /**
   * @description selectedCategory is a state that received value from onClickEachCategory where you can use it anywhere else
   *
   * @example `const selectedCategory = useHeaderStore(state => state.selectedCategory)`
   *
   */


  // React.useEffect(() => {
  //   if(productCategoryDataList === null && productItemName !== ''){
  //     getRecommendProductData(productItemName)
  //   }
  // },[productCategoryDataList,productItemName])

  function updateUrl(path: string, type: string) {
    let f = "?filter=";
    let splitPath = path !== null ? path?.split(f) : "";
    if (type === "1") {
      if(splitPath?.[1]?.includes('&')){
        const replacement = ""
        let result:string = String(splitPath?.[1])?.replace(/&\s*/g,replacement)
        return result?.replace(/\s+/g," ")?.replace(',','')
      }
      return splitPath?.[1]
    } else {
      return splitPath?.[0];
    }
  }

  // console.log(bucket)

  return (
    <div className="w-full lg:flex xl:flex lg:mx-auto xl:mx-auto absolute bg-mcklightyellow z-10 left-0 pt-6 pb-12">
      <ul className="lg:w-11/12 xl:w-11/12 lg:container lg:flex lg:mx-auto xl:flex xl:mx-auto lg:justify-center">
        {subMenuData?.map(({ response }: any, index:any) => {
          return (
            <li className="lg:w-1/5 xl:w-1/5" key={`submenukey${index}`}>
              <div className="lg:border-l lg:border-black xl:border-l xl:border-black">
                <Link
                id={`header-mainmenu-${index+1}`}
                  onClick={async() => {
                    onSelectedSetFilter({
                      isClicked:true,
                      clickedMenuName:response?.menuItemName?.value
                    })
                    handleClearAll()
                    setLoader(true)
                    selectCategory(response?.menuItemName?.value);
                      const correctedName = response?.menuItemName?.value?.replace(/ /g, "-")
                      const callApiRecommendCategoryData = await axiosInstance.get(
                       `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/${correctedName}/&expand=*`
                      )
                      if(callApiRecommendCategoryData.data && callApiRecommendCategoryData.status === 200){
                          const productCategoryDataList = callApiRecommendCategoryData?.data?.[0]?.categoryFilter?.expandedValue;
                          const filteredData = productCategoryDataList?.filter((filterMainData:any) => {
                            return filterMainData?.mainCategory?.value?.[0]?.id === response?.categoryItem?.value?.[0]?.id
                          })
                          setProductCategoryDataList(productCategoryDataList)
                          if(filteredData){
                            filteredData?.map((filteredData:any) => {
                              filteredData?.subCategory?.value?.map((subData:ProductFilter.MainCategory) => {
                                onSelectCheckBox(subData)
                                setBucket(filteredData?.mainCategory?.value?.[0],subData,filteredData?.isBusinessVerticalCategory?.value,filteredData?.subCategory?.value?.length,filteredData?.filterType?.value,true)
                              })
                            })
                          }
                      }
                    router.push({
                      pathname: updateUrl(response?.menuItemUrl?.value, "0"),
                      query: {
                        filter: updateUrl(response?.menuItemUrl?.value, "1")
                      },
                    })
                    setLoader(false)
                  }}
                  href={"#"}
                  className="text-gtl-med text-2xl text-mckblue text-left pl-2 empty:hidden categoryname font-medium"
                >
                  {/* {item?.data[0]?.menuItemName?.value} */}
                  {response?.menuItemName?.value}
                </Link>
                <ul
                  className={` submenu megamenu-submenu ${
                    // item?.data[0].subMenuContentBlockArea?.value === null
                    response?.subMenuContentBlockArea?.value === null
                      ? "hidden"
                      : "group-active:block hover-active:block"
                    // : "block"
                  }`}
                >
                  {response?.subMenuContentBlockArea?.expandedValue?.map(
                    (ele: any,index:any) => {
                      const filterParentCat = response?.menuItemName?.value
                      const isBusinessVerticalCategory = filterParentCat ? true : false
                      const healthNeedsBucket = {
                        id: 52,
                        name: "Health Needs",
                        description:'Health Needs'
                    }
                      return (
                        <li
                        id={`header-submenu-${index+1}`}
                          className="text-mckblue text-left text-sofia-reg pt-9 smalldekstop:pt-0.5 smalldekstop:pb-0.5 pt pb-9 pl-2 hover:bg-beige-50"
                          key={`sbmenu${index}`}
                          onClick={() => {
                            if(pathNameHealthNeeds){
                              handleOnClearAllHealthNeeds()
                              setBucketHealthNeeds(healthNeedsBucket,ele?.categoryItem?.value?.[0],isBusinessVerticalCategory,0,'healthNeeds',false)
                              onSelectCheckBoxHealthNeeds(ele?.categoryItem?.value?.[0])
                            } else {
                              handleClearAll()
                              const subCategoryData = response?.subMenuContentBlockArea?.expandedValue?.flatMap((subData: any) => {
                                return subData.categoryItem?.value?.map((data: ProductFilter.MainCategory) => ({
                                  id: data?.id,
                                  name: data?.name,
                                  description: data?.description
                                }));
                               });
                              setBucket(response?.categoryItem?.value?.[0],ele?.categoryItem?.value?.[0],isBusinessVerticalCategory,subCategoryData?.length,'',false)
                              onSelectCheckBox(ele?.categoryItem?.value?.[0])
                            }
                            /**
                             * @description refer to this as well because Health Needs doesn't have a `parent`
                             */
                            handleClick(false)
                            if (response?.menuItemName?.value) {
                              selectCategory(response?.menuItemName?.value);
                            } else {
                              selectCategory(
                                updateUrl(ele?.menuItemUrl?.value, "1")
                              );
                            }
                            if(selectedFilter === null){
                              onSelectedSetFilter({
                                isClicked:true,
                                clickedMenuName:updateUrl(ele?.menuItemUrl?.value,"1")
                              })
                            } 
                          }}
                        >
                          <Link
                            href={{
                              pathname: updateUrl(ele?.menuItemUrl?.value, "0"),
                              query: response?.menuItemName?.value ? 
                              {
                                filter:updateUrl(ele?.menuItemUrl?.value, "1"),
                                categoryOf:response?.menuItemName?.value
                              }
                              :
                              {
                                filter: updateUrl(ele?.menuItemUrl?.value, "1"),
                              },
                            }}
                            className="cursor-pointer"
                          >
                            {ele?.menuItemName?.value}
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
                <span
                  onClick={() => setActive(response)}
                  // className={`${
                  //   response?.subMenuContentBlockArea?.value == null
                  //     ? "lg:hidden xl:hidden"
                  //     : "icon-arrow lg:hidden xl:hidden"
                  // } ${active == response ? "open" : ""}`}
                >
                  {" "}
                </span>
              </div>
            </li>
          );
        })}
        {/* <li className="w-1/5 signup-form">
                    <div className="px-0 py-0 whitespace-normal mb-5">
                        <div className="px-3 py-3 lg:px-3 bg-white rounded-lg border-mcknormalgrey border-solid border">
                            <h5 className="m-0 pb-6 px-0 text-2xl text-sofia-reg text-mckblue">Email Signup & Rewards</h5>
                            <div className="px-0 text-lg text-mckblue text-sofia-reg">
                                Want to receive tips, personalized content and exclusive offers
                                from Foster & Thrive?
                            </div>
                            <div className="text-mckblue py-6 px-0 text-lg text-sofia-reg">Sign up today!</div>
                            <SignUpComponent />
                        </div>
                    </div>
                </li> */}
      </ul>
    </div>
  );
}

type Props = {
  subMenuData: any;
  handleClick: (value: any) => void;
};

export default ProductDropComponent;
