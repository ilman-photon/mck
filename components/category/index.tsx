// import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from 'isomorphic-dompurify';
import { useCategoryStore } from "../global/Store/useCategoryStore";
import { useSelectedProductCategoryStore } from "../product_list/Store/useSelectedProductCategoryStore";
import { ProductFilter } from "../product_list/Model/ProdutAPI";
import { useHeaderStore } from "../navbar/Store/useNavBarStore";
import axiosInstance from "@/utils/axiosInstance";

export default function CategoryComponent({ sectionData }: any) {
  const router = useRouter();
  const [isNull,setIsNull] = useState(false)
  const response = useCategoryStore(state => state.data)
  const getData = useCategoryStore(state => state.getData)
  const loading = useCategoryStore(state => state.isLoading)
  const _sectionData = sectionData?.[0]?.contentBlockArea?.value

  
  const setBucket = useSelectedProductCategoryStore((state) => state.setBucket)
  const onSelectCheckBox = useSelectedProductCategoryStore(state => state.onSelectCheckBox)
  const onClearAll = useSelectedProductCategoryStore(state => state.onClearAll)
  const setLoader = useSelectedProductCategoryStore(state => state.setLoader)
  const setProductCategoryDataList = useSelectedProductCategoryStore(state => state.setProductCategoryDataList)
  // const productCategoryDataList = useSelectedProductCategoryStore(state => state.productCategoryDataList)
  const selectCategory = useHeaderStore((state) => state.onClickEachCategory);
  const handleClearAll = React.useCallback(() => {
    onClearAll()
  },[])

  useEffect(() => {
    // if(response === null){
      getData(_sectionData)
    // }
  },[_sectionData])

  function handleClickOnCategory(url: string) {
    let f = "?filter=";
    let splitPath = url !== null ? url?.split(f) : "";
    router.push({
      pathname: splitPath[0],
      query: {
        filter: splitPath[1],
      },
    });
  }


  return (
    <>
    {!loading && response && !isNull && (
      <div className="container w-full mx-auto my-6 mb-0 lg:mt-20 lg:mb-12 px-4 lg:px-0">
        <div className="flex flex-wrap justify-center">
          {response.map((item: any, index: any) =>{
            if(!item?.data?.productCategoryImage?.value?.url){
               setIsNull(true)
            }
            return (
              <div
                key={item?.data?.contentLink?.id}
                  onClick={async() => {
                    handleClearAll()
                    setLoader(true)
                    selectCategory(item?.data?.productCategoryType?.value[0]?.name);
                      const correctedName = item?.data?.productCategoryType?.value[0]?.name.replace(/ /g, "-")
                      const callApiRecommendCategoryData = await axiosInstance.get(
                       `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/${correctedName}/&expand=*`
                      )
                      if(callApiRecommendCategoryData.data && callApiRecommendCategoryData.status === 200){
                          const productCategoryDataList = callApiRecommendCategoryData?.data?.[0]?.categoryFilter?.expandedValue;
                          const filteredData = productCategoryDataList?.filter((filterMainData:any) => {
                            return filterMainData?.mainCategory?.value?.[0]?.id === item?.data?.productCategoryType?.value[0]?.id
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
                    setLoader(false)
                    handleClickOnCategory(item?.data?.productCategoryUrl?.value)
                  }
                  }
                className={`mb-6 cursor-pointer ${
                  index < 4 ? "w-1/2 lg:w-1/4" : "w-full lg:w-1/2"
                }`}
              >
                <div
                  id={`category_0${index}`}
                  className="mx-auto w-36 lg:w-52 h-36 lg:h-52"
                  
                >
                  <style jsx>{`
                    .border {
                      border: 2px solid ${item?.data?.backgroundColor?.value};
                    }
                  `}</style>
                  <img
                    src={DOMPurify.sanitize(item?.data?.productCategoryImage?.value?.url)}
                    alt={DOMPurify.sanitize(`category_${index}`)}
                    id={item?.data?.productCategoryImage?.value?.url}
                    aria-hidden={true}                    
                  />
                </div>
                <div
                  className="text-center text-gtl-med text-xl lg:text-2xl mt-6 lg:mt-10 text-mckblue cursor-pointer text-oneline-ellipsis"
                  id={`category_name_0${index}`}
                >
                  <Link
                    href={`/selected_product_category?type=${item?.data?.productCategoryType?.value[0].name}`}
                  >
                    {DOMPurify.sanitize(item?.data?.productCategoryName?.value)}
                  </Link>
                </div>
                <div
                  
                  className="text-center text-sofia-reg font-normal w-full lg:w-3/4 xl:w-3/4 mx-auto text-base lg:text-lg text-mcknormalgrey text-heading-ellipsis"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item?.data?.productCategoryDescription?.value),
                  }}
                  id={`category_Titel_0${DOMPurify.sanitize(index)}`}
                ></div>
              </div>
            )
          } )}
        </div>
    </div>
      )}
    </>
  );
}
