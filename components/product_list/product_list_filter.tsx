import ProductComponent from "../health_needs/ProductListCarousel";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import { ImageComponent } from "../global/ImageComponent";
import DOMPurify from "isomorphic-dompurify";
import { useSelectedProductCategoryStore } from "./Store/useSelectedProductCategoryStore";
import { ActiveFiltersDataResponse, ProductFilter } from "./Model/ProdutAPI";
import { useHeaderStore } from "../navbar/Store/useNavBarStore";
// import { getQueryString } from "@/utils/URLUtils";

interface ISubCategory {
  id: number;
  name: string;
  description: string;
}

// interface ProductListFilterProps{
//   activeFilter:ProductFilter.QueryBucketType[]
//   activeFiltersData:ActiveFiltersDataResponse
// }

let tempCategoryName: any = [];
const ProductListFilter = ({
  activeFiltersData,
  activeFilter,
  // setActiveFilter,
  productCategoryData,
  // selectedFilterItems,
  selectedProduct,
  // setSelectedFilterItems,
  // selectedViewAllCateory,
  // fetchProductList,
  recommendedProduct,
  sectionData,
  selectedRecommendedProduct,
  productSum,
  productSearchCard,

  filterClicked,
}: any) => {
  // const router = useRouter();
  const [isFilterShow, setIsFilterShow] = useState(true);
  const onSelectCheckBox = useSelectedProductCategoryStore(state => state.onSelectCheckBox)
  const onClearAll = useSelectedProductCategoryStore(state => state.onClearAll)
  const onDeleteEachFilterItem = useSelectedProductCategoryStore(state => state.onDeleteEachFilterItem)
  const onSelectMainCategory = useSelectedProductCategoryStore(state => state.onSelectMainCategory)
  const getAlProductList = useSelectedProductCategoryStore(state => state.fetchAllProductList)
  const setBucket = useSelectedProductCategoryStore(state => state.setBucket)
  const selectedFilter = useHeaderStore(state => state.selectedFilter)
  const onDeselectedFilter = useHeaderStore(state => state.onSelectedSetFilter)
  const onDeselectRemoveBucket = useSelectedProductCategoryStore(state => state.onDeselectRemoveBucket)
  const onDeselectRemoveBuckets = useSelectedProductCategoryStore(state => state.onRemoveEachOfViewAllSelected)

  const handleClearAll = async() => {
    onClearAll()
    onDeselectedFilter(null)
    await getAlProductList()
  }

  return (
    <div className="lg:mt-[50px] mt-6 lg:px-0 desktop:px-6 smalldekstop:px-6 mobilelarge:px-0">
      {/* Health needs - Top Active Filter section starts */}
      <section>
        <div
          className="flex flex-wrap relative lg:mb-2 items-center text-mckblue"
          id="hn_label_0003"
          aria-label={activeFiltersData?.activeFiltersText?.value}
        >
          {DOMPurify.sanitize(activeFiltersData?.activeFiltersText?.value)}
          <ImageComponent
            id={`hn_label_003_${activeFiltersData?.activeFiltersImage?.expandedValue?.contentLink?.id}`}
            src={DOMPurify.sanitize(
              activeFiltersData?.activeFiltersImage?.expandedValue?.url
            )}
            className="mr-2 ml-2"
            alt={DOMPurify.sanitize(
              activeFiltersData?.activeFiltersText?.value
            )}
            width={24}
            height={24}
            aria-hidden="true"
            ariahidden={false}
          />
          <div
            className="flex flex-wrap items-baseline pt-3 lg:pt-0 w-full lg:w-auto"
            id="hn_label_003_2"
          >
            {activeFilter.map((item: ProductFilter.QueryBucketType, index: number) => {
                return (
                  <>
                  {item?.isViewAll ? (
                    <>
                     <div
                    className="flex gap-1 items-center rounded-xl px-2 py-0.5 text-xs border border-[#001A71] font-normal text-sofia-regular mr-1 mb-4 ml-0 lg:mb-0 leading-[18px] bg-[#F8F9FB]"
                    key={item?.id}
                  >
                    {item?.name} - All
                    <Image
                      src="/images/hn-delete-icon.svg"
                      className="cursor-pointer mt-0.5"
                      alt="delete icon"
                      onClick={() => {
                        onDeselectRemoveBuckets(item)
                      }}
                      width={7}
                      height={7}
                      id={`hn-001_0${index}`}
                    />
                  </div>
                    </>
                  ) : (
                    <>
                  {item?.subCategory?.map((data:ProductFilter.MainCategory, subIndex) => (
                  <div
                    className="flex gap-1 items-center rounded-xl px-2 py-0.5 text-xs border border-[#001A71] font-normal text-sofia-regular mr-1 mb-4 ml-0 lg:mb-0 leading-[18px] bg-[#F8F9FB]"
                    key={data?.id}
                  >
                    {data?.name}
                    <Image
                      src="/images/hn-delete-icon.svg"
                      className="cursor-pointer mt-0.5"
                      alt="delete icon"
                      onClick={() => {
                        onDeselectRemoveBucket(index,subIndex)
                        onDeleteEachFilterItem(data)
                      }}
                      width={7}
                      height={7}
                      id={`hn-001_0${index}`}
                    />
                  </div>
                  ))}
                    </>
                  )}
                  
                  </>
                );
              })}
            {activeFilter?.length > 0 && (
              <div className="flex gap-0 cursor-pointer ml-2 items-baseline absolute left-auto right-0 top-0 lg:static">
                {/* <img className="" src={activeFiltersData?.clearAllImage?.expandedValue?.url} /> */}
                <Image
                  src="/images/hn-delete-icon.svg"
                  className="w-3 cursor-pointer mr-1"
                  alt="delete icon"
                  width={12}
                  height={12}
                  id={`hn-001_0${"02"}`}
                />
                <div
                  className="underline text-sm lg:text-lg lg:leading-[27px] font-normal"
                  // onClick={handleClearAll}
                  onClick={handleClearAll}
                  aria-label={activeFiltersData?.clearAllText?.value}
                >
                  {activeFiltersData?.clearAllText?.value}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="lg:hidden flex flex-row pb-4 justify-between">
          <div className="flex">
            <span className="text-sofia-bold text-base font-extrabold text-mckblue">
              {DOMPurify.sanitize("FILTER")}
            </span>
            <ImageComponent
              id={`hn_label_003_${activeFiltersData?.activeFiltersImage?.expandedValue?.contentLink?.id}`}
              src={DOMPurify.sanitize(
                activeFiltersData?.activeFiltersImage?.expandedValue?.url
              )}
              className="mr-2 ml-2"
              alt={DOMPurify.sanitize(
                activeFiltersData?.activeFiltersText?.value
              )}
              width={24}
              height={24}
              ariahidden={false}
            />
          </div>
          <div
            className="cursor-pointer text-sofia-bold text-base font-extrabold text-mckblue"
            onClick={() => setIsFilterShow(!isFilterShow)}
          >
            {isFilterShow ? (
              <div className="flex">
                <span className="text-sofia-bold text-base font-extrabold text-mckblue">
                  Hide
                </span>
                <svg
                  className="mr-2 ml-2 mt-1"
                  width="20"
                  height="20"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.54498 5.96173H19.715V3.96173H7.54498L9.54498 5.96173ZM14.545 10.9617H16.715V8.96173H12.545L14.545 10.9617ZM12.715 14.7917V15.9617H8.71498V13.9617H11.885L8.88498 10.9617H4.71498V8.96173H6.88498L3.88498 5.96173H1.71498V3.96173H1.88498L0.10498 2.18173L1.51498 0.771729L19.895 19.1517L18.485 20.5617L12.715 14.7917Z"
                    fill="#001A71"
                  />
                </svg>
              </div>
            ) : (
              <div className="flex">
                <span className="text-sofia-bold text-base font-extrabold text-mckblue">
                  Open
                </span>
                <svg
                  className="mr-2 ml-2 mt-2"
                  width="20"
                  height="20"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 12.6667H11V10.6667H7V12.6667ZM0 0.666748V2.66675H18V0.666748H0ZM3 7.66675H15V5.66675H3V7.66675Z"
                    fill="#001A71"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
        <div
          className="text-mcknormalgrey font-normal lg:text-lg lg:leading-[27px] text-base"
          id="hn_label_003_3"
        >
          {productSum >= 0
            ? activeFiltersData?.showResultsText?.value?.replace(
                /#/,
                productSum
              )
            : null}
        </div>
      </section>
      <div className="lg:flex mt-6">
        {isFilterShow ? (
          <div className="lg:w-1/6 xl:w-1/6 w-full h-max">
            <div className="lg:border-r lg:border-[#CCD1E3] pb-3 mb-4 last:pb-0 last:mb-0">
              {/* Left main category lists */}
              <div className="flex items-center my-px">
                <div className="w-full border lg:border-0 rounded px-4 lg:px-0">
                  {productCategoryData &&
                    productCategoryData?.map(
                      (leftfiltermaindata: any, index: number) => {
                        // const viewAllRef = useRef<HTMLInputElement>
                        // console.log(activeFilter)
                        return(
                          <>
                            {/* Left filter main category */}
                              
                            <section className="tab overflow-hidden border-b-[0.5px] border-[#ccd1e3] lg:border-b-0">
                              <input
                                className="hidden"
                                type="checkbox"
                                id={leftfiltermaindata?.contentLink?.id}
                              />
                              <label
                                className="tab-label flex items-end py-5 lg:p-0 relative after:absolute after:top-6 after:content-['+'] after:right-4 lg:after:content-['']"
                                htmlFor={leftfiltermaindata?.contentLink?.id}
                              >
                                <div
                                  className="flex lg:mb-2 w-full lg:mt-2"
                                  key={`${leftfiltermaindata?.contentLink?.id}_${index}`}
                                >
                                  {leftfiltermaindata?.categoryImage
                                    ?.expandedValue ? (
                                    <ImageComponent
                                      src={DOMPurify.sanitize(
                                        leftfiltermaindata?.categoryImage
                                          ?.expandedValue?.url
                                      )}
                                      alt={DOMPurify.sanitize(
                                        leftfiltermaindata?.mainCategory?.value?.[0]
                                          ?.name
                                      )}
                                      id={
                                        leftfiltermaindata?.mainCategory?.value?.[0]
                                          ?.name + index
                                      }
                                      height={24}
                                      width={24}
                                      className="mr-2"
                                      ariahidden={false}
                                    />
                                  ) : null}
                                  <label
                                    htmlFor={
                                      leftfiltermaindata?.mainCategory?.value[0]
                                        ?.name
                                    }
                                    className="text-base font-extrabold text-sofia-bold text-mckblue z-[-1]"
                                    aria-label={
                                      leftfiltermaindata?.mainCategory?.value[0]
                                        ?.name
                                    }
                                  >
                                    {
                                      leftfiltermaindata?.mainCategory?.value[0]
                                        ?.name
                                    }
                                  </label>
                                </div>
                              </label>
                              {/* Left filter main category */}
  
                              {/* Left filter sub category */}
                              <div className="lg:border-b lg:border-[#CCD1E3] mb-2 pb-0 last:m-0 tab-content lg:max-h-none lg:px-0">
                                <ul className="m-0">
                                  <li className="list-none pb-1 lg:pb-0">
                                    <div className="flex items-center my-px cursor-pointer">
                                      <input
                                        onClick={() =>{
                                          const subCategoryData = leftfiltermaindata?.subCategory?.value?.map((subData:ProductFilter.MainCategory) => {
                                            return onSelectCheckBox(subData)
                                          })
                                          const subCategoryDataChecked = leftfiltermaindata?.subCategory?.value?.map((subData:ProductFilter.MainCategory) => {
                                            return setBucket(leftfiltermaindata?.mainCategory?.value?.[0],subData,leftfiltermaindata?.isBusinessVerticalCategory?.value,leftfiltermaindata?.subCategory?.value?.length,leftfiltermaindata?.filterType?.value)
                                          })
                                          onSelectMainCategory(leftfiltermaindata?.mainCategory?.value?.[0])
                                        }}
                                        type="checkbox"
                                        className="w-4 h-4 accent-[#001A71] cursor-pointer hover:before:content hover:before:block hover:before:w-full hover:before:h-full hover:before:bg-mckopacityblue hover:before:rounded-sm"
                                        aria-label="view all"
                                        role="checkbox"
                                        checked={activeFilter?.some((item:ProductFilter.QueryBucketType) => {
                                          return item?.id === leftfiltermaindata?.mainCategory.value?.[0].id && item?.isViewAll
                                        })}
                                      />
                                      <label
                                        onClick={() => {
                                          const subCategoryData = leftfiltermaindata?.subCategory?.value?.map((subData:ProductFilter.MainCategory) => {
                                            return onSelectCheckBox(subData)
                                          })
                                          onSelectMainCategory(leftfiltermaindata?.mainCategory?.value?.[0])
                                          const subCategoryDataChecked = leftfiltermaindata?.subCategory?.value?.map((subData:ProductFilter.MainCategory) => {
                                            return setBucket(leftfiltermaindata?.mainCategory?.value?.[0],subData,leftfiltermaindata?.isBusinessVerticalCategory?.value,leftfiltermaindata?.subCategory?.value?.length,leftfiltermaindata?.filterType?.value)
                                          })
                                        }}
                                        htmlFor={
                                          leftfiltermaindata?.mainCategory
                                            ?.value?.[0]?.name + " View All"
                                        }
                                        className="ml-2 text-mcknormalgrey text-sm hover:text-mckblue cursor-pointer leading-[21px] font-normal"
                                        id={
                                          "mck-" +
                                          activeFiltersData?.viewAllText?.value
                                        }
                                      >
                                        {activeFiltersData?.viewAllText?.value}
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                                <ul>
                                  {leftfiltermaindata?.subCategory?.value?.map((leftfiltersubdata: ProductFilter.MainCategory,index:number) => {
                                    const isNameMatchFilterMenu = leftfiltersubdata?.name === selectedFilter?.clickedMenuName && selectedFilter?.isClicked
                                    const isSubDataChekcboxActive = activeFilter.map((data:ProductFilter.QueryBucketType) => (
                                      data?.subCategory?.filter((each:ProductFilter.MainCategory) => each.id === leftfiltersubdata.id)
                                    ))
                                    const isSubDataFiltered = isSubDataChekcboxActive?.flat()?.[0]
                                    return (
                                       <li
                                         className="list-none pb-1 lg:pb-0"
                                         key={leftfiltersubdata?.id}
                                       >
                                         <div className="flex items-center my-px cursor-pointer">
                                           <input
                                             onClick={() =>{
                                               onSelectCheckBox(leftfiltersubdata)
                                                // console.log(leftfiltermaindata)
                                                setBucket(leftfiltermaindata.mainCategory.value?.[0],leftfiltersubdata,leftfiltermaindata?.isBusinessVerticalCategory?.value,leftfiltermaindata?.subCategory?.value?.length,leftfiltermaindata?.filterType?.value)
                                              if(isNameMatchFilterMenu){
                                                onDeselectedFilter(null)
                                              }
                                             }}
                                             id={leftfiltersubdata?.name + index}
                                             type="checkbox"
                                             value={leftfiltersubdata?.name}
                                             className="w-4 h-4 accent-[#001A71] cursor-pointer hover:before:content hover:before:block hover:before:w-full hover:before:h-full hover:before:bg-mckopacityblue hover:before:rounded-sm"
                                             role="checkbox"
                                             aria-label={leftfiltersubdata?.name}
                                            checked={isSubDataFiltered}
                                           />
                                           <label
                                             htmlFor={
                                               leftfiltersubdata?.name + index
                                             }
                                             className="ml-2 text-mcknormalgrey text-sm hover:text-mckblue cursor-pointer font-normal leading-[21px]"
                                             aria-label={leftfiltersubdata?.name}
                                           >
                                             {leftfiltersubdata?.name}
                                           </label>
                                         </div>
                                       </li>
                                     )
                                    } 
                                  )}
                                </ul>
                              </div>
                            </section>
                          </>
                        )
                      } 
                    )}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className="lg:w-10/12 xl:w-10/12 w-full lg:pl-6 pt-4 lg:pt-0">
          <ProductComponent
            selectedProduct={selectedProduct}
            recommendedProduct={recommendedProduct}
            sectionData={sectionData}
            selectedRecommendedProduct={selectedRecommendedProduct}
            productSearchCard={productSearchCard}
            filterClicked={filterClicked}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductListFilter;
