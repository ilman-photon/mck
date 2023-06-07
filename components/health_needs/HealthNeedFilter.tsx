import ProductComponent from './ProductListCarousel';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import gifImage from '../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif';
import { ImageComponent } from '../global/ImageComponent';
import { customAdd, customUniqueElementArray, deleteMultipleElements, extractMainCategoryId, extractMainCategoryName, selectedProductType, selectedProductType_ } from '../global/CommonUtil';

interface ISubCategory {
  id: number;
  name: string;
  description: string;
}

let tempCategoryName: any = [];
const HealthNeedFilter = ({
  activeFiltersData,
  activeFilter,
  setActiveFilter,
  productCategoryData,
  selectedFilterItems,
  selectedProduct,
  setSelectedFilterItems,
  selectedViewAllCateory,
  fetchProductList,
  recommendedProduct,
  sectionData,
  selectedRecommendedProduct,
  productSum,
  productSearchCard
}: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isFilterShow, setIsFilterShow] = useState(true);
  const [mainCategoryId, setMainCategoryId] = useState('')
  const [alternateFlag, setAlternateFlag] = useState(false)
  const [group, setGroup] = useState<any>()
  const [mainCatNames, setMainCatNames] = useState<any>([]);
  const handleClearAll = () => {
    setActiveFilter([]);
    selectedFilterItems.map((category: any) => {
      category.isCategoryChecked = false;
      category.map((sub_category: any) => {
        sub_category.checked = false;
      });
    });
    const currentURL = window.location.href;
  const updatedURL = currentURL.split('?')[0]; 
  window.location.href = updatedURL;
  };
  const handleDelete = (activeFilter: any, item: any) => {
    setActiveFilter(
      activeFilter.filter((filterItem: any) => filterItem !== item)
    );
    
    const mainCatId = extractMainCategoryId(productCategoryData, item)
    if(selectedFilterItems[mainCatId]){
      selectedFilterItems[mainCatId].isCategoryChecked = false;
      console.log("selectedFilterItems[mainCateId] -->", group, selectedFilterItems[mainCatId]?.isCategoryChecked)
      selectedFilterItems[mainCatId].map((sub_category: any ,idx :number  ) => {
        sub_category.checked = false;
        const tempLength = selectedFilterItems[mainCategoryId]['items'].length
        selectedFilterItems[mainCategoryId]['items'].splice(0, tempLength);
      });
    }else{
      selectedFilterItems.map((category: any ,idx :number) => {
        category.map((sub_category: any) => {
          if(sub_category.name === item){
            console.log(selectedFilterItems[idx]['items'],"before items")
            const index = selectedFilterItems[idx]?.['items'].indexOf(item);
            selectedFilterItems[idx]['items'].splice(index, 1);
            sub_category.checked = false;
            console.log(selectedFilterItems[idx]['items'],"after items")
          }
        })
      })
    }
  };

  const handleCheckBox = (
    e: any,
    filter: any,
    categoryId: any,
    subCategoryId: any
  ) => {
    setMainCategoryId(categoryId);
    if (e.target.checked) {
      if (selectedFilterItems[categoryId]['items'].indexOf(filter) === -1) {
        selectedFilterItems[categoryId]['items'].push(filter);
      }
      setGroup(customAdd(categoryId, filter))

      setLoading(true);
      setActiveFilter([...activeFilter, filter]);
      selectedFilterItems[categoryId][subCategoryId].checked = true;
    } else {
      const index = selectedFilterItems[categoryId]['items'].indexOf(filter);
      selectedFilterItems[categoryId]['items'].splice(index, 1);
      const subIds = group?.find((c: any) => c.mainCatId === categoryId)?.subCateIds //?.splice(index, 1)
      const idx = subIds?.indexOf(filter);
      const a = subIds?.splice(idx, 1);
      setActiveFilter(
        activeFilter.filter((item: any) => {
          return item !== filter;
        })
      );
      // fetchProductList('');
      selectedFilterItems[categoryId][subCategoryId].checked = false;
      selectedFilterItems[categoryId].isCategoryChecked = false;
    }
    setSelectedFilterItems(selectedFilterItems);
    setAlternateFlag(!alternateFlag)
  };
  useEffect(() => {
    const selectedProductType = productCategoryData?.find((a: any) => a.mainCategory?.value[0].id === mainCategoryId);
    const subCategoryValues = Array.from(new Set([selectedProductType?.subCategory?.value])).filter(Boolean);
    if(selectedFilterItems[mainCategoryId]){
      selectedFilterItems[mainCategoryId].items =  customUniqueElementArray(selectedFilterItems[mainCategoryId]?.items);
    }
    console.log("selected items itit --> ", selectedFilterItems[mainCategoryId], customUniqueElementArray(selectedFilterItems[mainCategoryId]?.items), subCategoryValues.flat())
    if(customUniqueElementArray(selectedFilterItems[mainCategoryId]?.items)?.length === subCategoryValues.flat().length){
      if(selectedFilterItems[mainCategoryId]){
        const isAllAreChecked = selectedFilterItems[mainCategoryId].map((sub_category: any) => sub_category.checked).filter(Boolean);
        console.log("itit 1-->", isAllAreChecked)
        if(isAllAreChecked?.length === subCategoryValues.flat().length){
          selectedFilterItems[mainCategoryId].isCategoryChecked = true;
        }
      }
    }
  }, [activeFilter])
  useEffect(() => {
    const currentCategory = group?.find((gr: any) => gr.mainCatId === mainCategoryId);
    if(currentCategory && Object.keys(currentCategory).length > 0){
      const [value, count, name] = selectedProductType(productCategoryData, mainCategoryId);
      if(count === currentCategory?.subCateIds?.length){
        setMainCatNames([...mainCatNames, name])
          const catIds = [...mainCatNames, name]?.map((mcn: any) => extractMainCategoryId(productCategoryData, mcn)) 
            const process = catIds?.map((cId: any) =>selectedProductType_(productCategoryData, cId))
            const subCateNames =  process.flat()?.map((p: any) => p.name)
            const onlyOtherSubCateIds = deleteMultipleElements(activeFilter, subCateNames)
        setActiveFilter([...Array.from(new Set([...mainCatNames, name])).filter(Boolean), ...onlyOtherSubCateIds])
      }else{
        if(mainCategoryId === currentCategory?.mainCatId){
          if(mainCatNames?.includes(name)){
            console.log("**SD -->before", mainCatNames, activeFilter)
            const findIndex = mainCatNames?.findIndex((item: any) => item === name)
            const findMainCatNameIndex = activeFilter?.flat().findIndex((item: any) => item === name);
            mainCatNames.splice(findIndex, 1);
            activeFilter.splice(findMainCatNameIndex, 1);
            const common = Array.from(new Set([...mainCatNames, ...activeFilter]))
            const findCommonIndex = common?.flat().findIndex((item: any) => item === name);
            if(findCommonIndex>=0){
              common?.splice(findCommonIndex, 1)
            }
            console.log("**SD -com->", mainCatNames, activeFilter.flat(), common, findCommonIndex, currentCategory?.subCateIds)
            const catIds = mainCatNames?.map((mcn: any) => extractMainCategoryId(productCategoryData, mcn)) 
            const process = catIds?.map((cId: any) =>selectedProductType_(productCategoryData, cId))
            const subCateNames =  process.flat()?.map((p: any) => p.name)
            const common1 = deleteMultipleElements(common, subCateNames)
            setActiveFilter(Array.from(new Set([...common1.filter((a: any)  => !Array.isArray(a)), ...currentCategory?.subCateIds])))
          }
        }else{
          setActiveFilter(Array.from(new Set([...activeFilter])))
        }
      }
    }
  }, [alternateFlag])

  console.log("** active filter -->", activeFilter)
  const handleViewAllChange = (e: any, categoryId: any) => {
    let isCategoryChecked = false;
    let subCategoryChecked = false;
    setMainCategoryId(categoryId);
    setAlternateFlag(!alternateFlag);
    setLoading(true);
    if (e.target.checked) {
      setGroup(customAdd(categoryId, "", productCategoryData, true))
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
      const newArray = tempCategoryName.filter(
        (item: any) =>
          !item.includes(selectedFilterItems[categoryId].categoryName)
      );
      tempCategoryName = newArray;

      // empty subcates 
      const currentCategoryIndex = group?.findIndex((gr: any) => gr.mainCatId === categoryId);
      if(group[currentCategoryIndex]){
        group[currentCategoryIndex].subCateIds = []
      }
    }

    selectedFilterItems[categoryId].isCategoryChecked = isCategoryChecked;

    selectedFilterItems[categoryId].map((sub_category: any) => {
      sub_category.checked = subCategoryChecked;
      if (subCategoryChecked) {
        selectedFilterItems[categoryId]['items'].push(sub_category.name);
      } else {
        selectedFilterItems[categoryId]['items'] = [];
        const index = selectedFilterItems[categoryId]['items'].indexOf(
          sub_category.name
        );
        selectedFilterItems[categoryId]['items'].splice(index, 1);
      }
    });

    let selectedSubCat: any = [];
    let selectedCategoryName: any = [];
    tempCategoryName.map((item: any) => {
      selectedCategoryName.push(item);
    });
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
      fetchProductList('');
      router.push({
        pathname: '/health_needs'
      });
    }
    fetchProductList('');
  };

  useEffect(() => {
    if (productCategoryData?.length) {
      productCategoryData.map((filters: any) => {
        return filters.subCategory.value.sort(
          (a: ISubCategory, b: ISubCategory) => a.name.localeCompare(b.name)
        );
      });
    }
  }, [productCategoryData]);
  // const productsSum = selectedProduct.reduce((accumulator :any, obj :any) => {
    
  //   return accumulator + obj?.data?.results?.length;
  // }, 0);
  return (
    <div className='lg:mt-12 mt-6 lg:px-0 desktop:px-6 mobilelarge:px-0'>
      {/* Health needs - Top Active Filter section starts */}
      <section>
        <div
          className='flex flex-wrap relative lg:mb-2 items-center text-mckblue'
          
          id='hn_label_0003'
          aria-label={activeFiltersData?.activeFiltersText?.value}
        >
          {activeFiltersData?.activeFiltersText?.value}
          <ImageComponent
            id={`hn_label_003_${activeFiltersData?.activeFiltersImage?.expandedValue?.contentLink?.id}`}
            src = {activeFiltersData?.activeFiltersImage?.expandedValue?.url} 
            className='mr-2 ml-2'
            alt={activeFiltersData?.activeFiltersText?.value}
            width={24}
            height={24}                   
            aria-hidden="true"
          />
          <div
            className='flex flex-wrap items-baseline pt-3 lg:pt-0 w-full lg:w-auto'
            
            id='hn_label_003_2'
          >
            {activeFilter?.length > 0 && activeFilter?.map((item: any, index: number) => {
              return (
                <div
                  className='flex gap-1 items-center rounded-xl px-2 py-0.5 text-xs border border-[#001A71] font-normal text-sofia-regular mr-1 mb-4 ml-0 lg:mb-0 leading-[18px] bg-[#F8F9FB]'
                  key={item}
                >
                  {extractMainCategoryName(productCategoryData)?.includes(item)?`${item}-All` : `${item}`}
                  <Image
                    src='/images/hn-delete-icon.svg'
                    className='cursor-pointer mt-0.5'
                    alt='delete icon'
                    onClick={() => handleDelete(activeFilter, item)}
                    width={7}
                    height={7}
                    id={`hn-001_0${index}`}
                  />
                </div>
              );
            })}
            {activeFilter?.length > 0 &&
            <div className='flex gap-0 cursor-pointer ml-2 items-baseline absolute left-auto right-0 top-0 lg:static'>
              {/* <img className="" src={activeFiltersData?.clearAllImage?.expandedValue?.url} /> */}
              <Image
                src='/images/hn-delete-icon.svg'
                className='w-3 cursor-pointer mr-1'
                alt='delete icon'
                width={12}
                height={12}
                id={`hn-001_0${'02'}`}
              />
              <div
                className='underline text-sm lg:text-lg'
                onClick={handleClearAll}
                aria-label={activeFiltersData?.clearAllText?.value}
              >
                {activeFiltersData?.clearAllText?.value}
              </div>
            </div>
}
          </div>
        </div>
        <div className='lg:hidden flex flex-row pb-4 justify-between'>
          <div className='flex'>
            <span className='text-sofia-bold text-base font-extrabold text-mckblue'>FILTER</span>
            <ImageComponent
            id={`hn_label_003_${activeFiltersData?.activeFiltersImage?.expandedValue?.contentLink?.id}`}
            src = {activeFiltersData?.activeFiltersImage?.expandedValue?.url} 
            className='mr-2 ml-2'
            alt={activeFiltersData?.activeFiltersText?.value}
            width={24}
            height={24}
          />
          </div>
          <div
            className='cursor-pointer text-sofia-bold text-base font-extrabold text-mckblue'
            onClick={() => setIsFilterShow(!isFilterShow)}
          >
            {isFilterShow ? 'Hide' : 'Open'}
          </div>
        </div>
        <div className='text-mcknormalgrey'  id='hn_label_003_3'>
          {productSum && (activeFiltersData?.showResultsText?.value)?.replace (/#/,  productSum)}
        </div>
      </section>
      <div className='lg:flex mt-6'>
        {isFilterShow ? (
          <div className='lg:w-1/6 xl:w-1/6 w-full h-max'>
            <div className='lg:border-r lg:border-[#CCD1E3] pb-3 mb-4 mck-hn-filter-category'>
              {/* Left main category lists */}
              <div className='flex items-center my-px'>
                <div className='w-full border lg:border-0 rounded px-4 lg:px-0'>
                  {productCategoryData &&
                    productCategoryData?.map(
                      (leftfiltermaindata: any, index: number) => (
                        <>
                          {/* Left filter main category */}

                          <section className='mck-hn-mobile-accordion tab overflow-hidden'>
                            <input
                              className='mck-hn-accordion-title-check'
                              type='checkbox'
                              id={leftfiltermaindata?.contentLink?.id}
                            />
                            <label
                              className="tab-label py-5 lg:p-0 relative after:absolute after:top-6 after:content-['+'] after:right-4 lg:after:content-['']"
                              htmlFor={leftfiltermaindata?.contentLink?.id}
                            >
                              <div
                                className='flex lg:mb-2 w-full lg:mt-2'
                                key={`${leftfiltermaindata?.contentLink?.id}_${index}`}
                              >
                                {leftfiltermaindata?.categoryImage?.expandedValue ? 
                                <ImageComponent
                                  src={leftfiltermaindata?.categoryImage?.expandedValue?.url}
                                  alt={leftfiltermaindata?.mainCategory?.value[0].name}
                                  id={leftfiltermaindata?.mainCategory?.value[0].name + index}
                                  height={24}
                                  width={24} />
                                  : null} 
                                <label
                                  htmlFor={
                                    leftfiltermaindata?.mainCategory?.value[0]
                                      .name
                                  }
                                  className='ml-2 filter-title'
                                  
                                  aria-label={
                                    leftfiltermaindata?.mainCategory?.value[0]
                                      .name
                                  }
                                >
                                  {
                                    leftfiltermaindata?.mainCategory?.value[0]
                                      .name
                                  }
                                </label>
                              </div>
                            </label>
                            {/* Left filter main category */}

                            {/* Left filter sub category */}
                            <div className='lg:border-b lg:border-[#CCD1E3] pb-3 mb-2 mck-hn-filter-subcat tab-content lg:max-h-none lg:px-0'>
                              <ul>
                                <li className='list-none pb-1 lg:pb-0'>
                                  <div
                                    className='flex items-center my-px'
                                    onClick={(e) =>
                                      handleViewAllChange(
                                        e,
                                        leftfiltermaindata?.mainCategory
                                          ?.value[0].id
                                      )
                                    }
                                  >
                                    <input
                                      id={
                                        leftfiltermaindata?.mainCategory
                                          ?.value[0]?.name + 'View All'
                                      }
                                      type='checkbox'
                                      value='view all'
                                      className='w-4 h-4 accent-[#001A71]'
                                      aria-label='view all'
                                      role='checkbox'
                                      checked={
                                        selectedFilterItems[
                                          leftfiltermaindata?.mainCategory
                                            ?.value[0].id
                                        ]?.isCategoryChecked
                                      }
                                      defaultChecked={
                                        selectedFilterItems[
                                          leftfiltermaindata?.mainCategory
                                            ?.value[0].id
                                        ]?.isCategoryChecked
                                      }
                                    />
                                    <label
                                      htmlFor='mck-view-all'
                                      className='ml-2 text-mcknormalgrey text-sm'
                                      id={'mck-'+ activeFiltersData?.viewAllText?.value}
                                    >
                                      {activeFiltersData?.viewAllText?.value}
                                    </label>
                                  </div>
                                </li>
                              </ul>
                              <ul>
                                {leftfiltermaindata?.subCategory?.value?.map(
                                  (leftfiltersubdata: any) => (
                                    <li
                                      className='list-none pb-1 lg:pb-0'
                                      key={leftfiltersubdata?.id}
                                    >
                                      <div
                                        className='flex items-center my-px'
                                        onClick={(e) =>
                                          handleCheckBox(
                                            e,
                                            leftfiltersubdata?.name,
                                            leftfiltermaindata?.mainCategory
                                              ?.value[0].id,
                                            leftfiltersubdata?.id
                                          )
                                        }
                                      >
                                        <input
                                          id={leftfiltersubdata?.name + index}
                                          type='checkbox'
                                          value={leftfiltersubdata?.name}
                                          className='w-4 h-4 accent-[#001A71]'
                                          aria-label={leftfiltersubdata?.name}
                                          role='checkbox'
                                          checked={
                                            selectedFilterItems[
                                              leftfiltermaindata?.mainCategory
                                                ?.value[0].id
                                            ][leftfiltersubdata?.id]?.checked
                                          }
                                          defaultChecked={
                                            selectedFilterItems[
                                              leftfiltermaindata?.mainCategory
                                                ?.value[0].id
                                            ][leftfiltersubdata?.id]?.checked
                                          }
                                        />
                                        <label
                                          htmlFor={leftfiltersubdata?.name}
                                          className='ml-2 text-sm'
                                          aria-label={leftfiltersubdata?.name}
                                        >
                                          {leftfiltersubdata?.name}
                                        </label>
                                      </div>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </section>
                        </>
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div className='lg:w-10/12 xl:w-10/12 w-full lg:pl-6'>
          <ProductComponent
            selectedProduct={selectedProduct}
            recommendedProduct={recommendedProduct}
            sectionData={sectionData}
            selectedRecommendedProduct={selectedRecommendedProduct}
            productSearchCard={productSearchCard}
          />
        </div>
      </div>
    </div>
  );
};
export default HealthNeedFilter;
