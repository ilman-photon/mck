import ProductComponent from "./ProductListCarousel";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";

interface ISubCategory {
  id: number;
  name: string
  description: string
}

let tempCategoryName :any= []
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
  recommendedProduct
}: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleClearAll = () => {
    setActiveFilter([]);
    selectedFilterItems.map((category: any) => {
      category.isCategoryChecked = false;
      category.map((sub_category: any) => {
        sub_category.checked = false;
      });
    });
    fetchProductList("");
  };

  const handleCheckBox = (
    e: any,
    filter: any,
    categoryId: any,
    subCategoryId: any
  ) => {
    if (e.target.checked) {
      if (selectedFilterItems[categoryId]["items"].indexOf(filter) === -1) {
        selectedFilterItems[categoryId]["items"].push(filter);
      }

      setLoading(true);
      setActiveFilter([...activeFilter, filter]);
      selectedFilterItems[categoryId][subCategoryId].checked = true;
    } else {
      const index = selectedFilterItems[categoryId]["items"].indexOf(filter);
      selectedFilterItems[categoryId]["items"].splice(index, 1);
      setActiveFilter(
        activeFilter.filter((item: any) => {
          return item !== filter;
        })
      );
      fetchProductList("");
      selectedFilterItems[categoryId][subCategoryId].checked = false;
      selectedFilterItems[categoryId].isCategoryChecked = false;
    }
    setSelectedFilterItems(selectedFilterItems);
  };

  const handleViewAllChange = (e: any, categoryId: any) => {
    let isCategoryChecked = false;
    let subCategoryChecked = false;
    setLoading(true);
    if (e.target.checked) {
      if (selectedViewAllCateory.indexOf(categoryId) === -1) {
        selectedViewAllCateory.push(categoryId);
      }
      isCategoryChecked = true;
      subCategoryChecked = true;
      tempCategoryName.push(selectedFilterItems[categoryId].categoryName + "- All")
    } else {
      const index = selectedViewAllCateory.indexOf(categoryId);
      selectedViewAllCateory.splice(index, 1);
      isCategoryChecked = false;
      subCategoryChecked = false;
      const newArray = tempCategoryName.filter((item :any) => !item.includes(selectedFilterItems[categoryId].categoryName));
       tempCategoryName = newArray;

    }

    selectedFilterItems[categoryId].isCategoryChecked = isCategoryChecked;

    selectedFilterItems[categoryId].map((sub_category: any) => {
      sub_category.checked = subCategoryChecked;
      if (subCategoryChecked) {
        selectedFilterItems[categoryId]["items"].push(sub_category.name);
      } else {
        selectedFilterItems[categoryId]["items"] = [];
        const index = selectedFilterItems[categoryId]["items"].indexOf(
          sub_category.name
        );
        selectedFilterItems[categoryId]["items"].splice(index, 1);
      }
      // console.log(sub_category)
    });

    let selectedSubCat: any = [];
    let selectedCategoryName : any =[];
    tempCategoryName.map( (item :any) =>{
      selectedCategoryName.push(item);
    })
    // selectedFilterItems.map((category: any) => {
    //   category.items.map((name: any) => {
    //     if (selectedSubCat.indexOf(name) === -1) {
    //       selectedSubCat.push(name);
    //     }
    //   });
    // });
    // setActiveFilter([...selectedSubCat]);
    setActiveFilter([...selectedCategoryName]);
    if (selectedViewAllCateory.length > 0) {
    } else {
      fetchProductList("");
      router.push({
        pathname: "/health_needs",
      });
    }
    fetchProductList("");
  };

  useEffect(() => {
    if (productCategoryData) {
      productCategoryData.map((filters: any) => {
        return filters.subCategory.value.sort((a: ISubCategory, b: ISubCategory) =>
              a.name.localeCompare(b.name)
            )
      });
    }
  }, [productCategoryData])

  return (
    <div className="container lg:mt-12 mt-6 px-4 lg:px-0 desktop:px-6">
      {/* Health needs - Top Active Filter section starts */}
      <section>
        <div
          className="flex mb-2 items-center text-mckblue"
          tabIndex={0}
          id="hn_label_0003"
          aria-label={activeFiltersData?.activeFiltersText?.value}
        >
          {activeFiltersData?.activeFiltersText?.value}
          <img
            src={activeFiltersData?.activeFiltersImage?.expandedValue?.url}
            className="mr-2 ml-2"
            tabIndex={0}
            id="hn_label_003_1"
            alt={activeFiltersData?.activeFiltersText?.value}
          />

          <div
            className="flex flex-wrap items-baseline"
            tabIndex={0}
            id="hn_label_003_2"
          >
            {activeFilter?.map((item: any) => {
              return (
                <div
                  className="flex rounded-full mck-hn-selected-value"
                  key={item}
                >
                  {item}&nbsp;
                  <img
                    src="/images/hn-delete-icon.svg"
                    className="mck-filter-delete-icon cursor-pointer"
                    alt="delete icon"
                    onClick={() => {
                      setActiveFilter(
                        activeFilter.filter(
                          (filterItem: any) => filterItem !== item
                        )
                      );
                    }}
                  />
                </div>
              );
            })}
            <div className="flex cursor-pointer ml-2 items-baseline">
              {/* <img className="" src={activeFiltersData?.clearAllImage?.expandedValue?.url} /> */}
              <img
                src="/images/hn-delete-icon.svg"
                className="mck-filter-clearall-icon"
                alt="delete icon"
              />
              <div
                className="underline"
                onClick={handleClearAll}
                aria-label={activeFiltersData?.clearAllText?.value}
              >
                {activeFiltersData?.clearAllText?.value}
              </div>
            </div>
          </div>
        </div>

        <div className="text-mcknormalgrey" tabIndex={0} id="hn_label_003_3">
          {activeFiltersData?.showResultsText?.value}
        </div>
      </section>
      <div className="lg:flex mt-6">
        <div className="lg:w-1/6 xl:w-1/6 w-full h-max">
          <div className="lg:border-r lg:border-[#CCD1E3] pb-3 mb-2 mck-hn-filter-category">
            {/* Left main category lists */}
            <div className="flex items-center my-px">
              <div className="w-full border lg:border-0 rounded px-4 lg:px-0">
                {productCategoryData &&
                  productCategoryData?.map((leftfiltermaindata: any,index:number) => (
                    <>
                      {/* Left filter main category */}

                      <section className="mck-hn-mobile-accordion tab overflow-hidden">
                        <input
                          className="mck-hn-accordion-title-check"
                          type="checkbox"
                          id={leftfiltermaindata?.contentLink?.id}
                        />
                        <label
                          className="tab-label p-4 lg:p-0"
                          htmlFor={leftfiltermaindata?.contentLink?.id}
                        >
                          <div
                            className="flex lg:mb-2 w-full lg:mt-2"
                            key={leftfiltermaindata?.contentLink?.id}
                          >
                            <img
                              id={
                                leftfiltermaindata?.mainCategory?.value[0].name+index
                              }
                              src={
                                leftfiltermaindata?.categoryImage?.expandedValue
                                  ?.url
                              }
                              alt={
                                leftfiltermaindata?.mainCategory?.value[0].name
                              }
                            />
                            <label
                              htmlFor={
                                leftfiltermaindata?.mainCategory?.value[0].name
                              }
                              className="ml-2 filter-title"
                              tabIndex={0}
                              aria-label={
                                leftfiltermaindata?.mainCategory?.value[0].name
                              }
                            >
                              {leftfiltermaindata?.mainCategory?.value[0].name}
                            </label>
                          </div>
                        </label>
                        {/* Left filter main category */}

                        {/* Left filter sub category */}
                        <div className="lg:border-b lg:border-[#CCD1E3] pb-3 mb-2 mck-hn-filter-subcat tab-content lg:max-h-none lg:px-0">
                          <ul>
                            <li className="list-none">
                              <div
                                className="flex items-center my-px"
                                onClick={(e) =>
                                  handleViewAllChange(
                                    e,
                                    leftfiltermaindata?.mainCategory?.value[0]
                                      .id
                                  )
                                }
                              >
                                <input
                                  id={
                                    leftfiltermaindata?.mainCategory?.value[0]
                                      ?.name
                                  }
                                  type="checkbox"
                                  value="view all"
                                  className="w-4 h-4 accent-[#001A71]"
                                  aria-label="view all"
                                  checked={
                                    selectedFilterItems[
                                      leftfiltermaindata?.mainCategory?.value[0]
                                        .id
                                    ]?.isCategoryChecked
                                  }
                                  defaultChecked={
                                    selectedFilterItems[
                                      leftfiltermaindata?.mainCategory?.value[0]
                                        .id
                                    ]?.isCategoryChecked
                                  }
                                />
                                <label
                                  htmlFor="mck-view-all"
                                  className="ml-2 text-mcknormalgrey text-sm"
                                  id=""
                                >
                                  View All
                                </label>
                              </div>
                            </li>
                          </ul>
                          <ul>
                            {leftfiltermaindata?.subCategory?.value?.map(
                              (leftfiltersubdata: any) => (
                                <li
                                  className="list-none"
                                  key={leftfiltersubdata?.id}
                                >
                                  <div
                                    className="flex items-center my-px"
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
                                      id={leftfiltersubdata?.name}
                                      type="checkbox"
                                      value={leftfiltersubdata?.name}
                                      className="w-4 h-4 accent-[#001A71]"
                                      aria-label={leftfiltersubdata?.name}
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
                                      className="ml-2 text-sm"
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
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-10/12 xl:w-10/12 w-full">
          <ProductComponent selectedProduct={selectedProduct} recommendedProduct={recommendedProduct}/>
        </div>
      </div>
    </div>
  );
};
export default HealthNeedFilter;
