import { ImageComponent } from "../global/ImageComponent";

function ProductFilter({
  productCategoryData,
  handleViewAllChange,
  selectedFilterItems,
  handleCheckBox,
}: any) {
  return (
    <div className="lg:border-r-2 lg:pb-3 lg:mb-2 mck-hn-filter-category">
      {/* Left main category lists */}
      <div className="flex items-center my-px">
        <div className="w-full border lg:border-0 rounded px-4 lg:px-0">
          {productCategoryData &&
            productCategoryData?.map((leftfiltermaindata: any, index: number) => (
              <>
                {/* Left filter main category */}

                <section className="mck-hn-mobile-accordion tab overflow-hidden">
                  <input
                    id={`${leftfiltermaindata?.contentLink?.id}_${index}`}
                    className="mck-hn-accordion-title-check"
                    type="checkbox"
                  />
                  <label
                    className="tab-label p-4 lg:p-0"
                    htmlFor={leftfiltermaindata?.contentLink?.id}
                  >
                    <div
                      className="flex lg:mb-2 w-full lg:mt-2"
                      key={leftfiltermaindata?.contentLink?.id}
                    >
                      <ImageComponent
                        src={leftfiltermaindata?.categoryImage?.expandedValue?.url}
                        alt={leftfiltermaindata?.mainCategory?.value[0].name}
                        id={leftfiltermaindata?.mainCategory?.value[0].name + index} /> 
               
                      <label htmlFor="acute" className="ml-2 filter-title" tabIndex={0} aria-label={leftfiltermaindata?.mainCategory?.value[0].name}>
                        {leftfiltermaindata?.mainCategory?.value[0].name}
                      </label>
                    </div>
                  </label>
                  {/* Left filter main category */}

                  {/* Left filter sub category */}
                  <div className="lg:border-b-2 pb-3 mb-2 mck-hn-filter-subcat tab-content lg:max-h-none lg:px-0">
                    <ul>
                      <li className="list-none">
                        <div
                          className="flex items-center my-px"
                          onClick={(e) =>
                            handleViewAllChange(
                              e,
                              leftfiltermaindata?.mainCategory?.value[0].id
                            )
                          }
                        >
                          <input
                            id={`${leftfiltermaindata?.mainCategory?.value[0]?.name}_${index}+View All`}
                            type="checkbox"
                            value="view all"
                            className="w-4 h-4 accent-[#001A71]"
                            checked={
                              selectedFilterItems[
                                leftfiltermaindata?.mainCategory?.value[0].id
                              ]?.isCategoryChecked
                            }
                            defaultChecked={
                              selectedFilterItems[
                                leftfiltermaindata?.mainCategory?.value[0].id
                              ]?.isCategoryChecked
                            }
                            aria-label="View All"
                            role="checkbox"
                          />
                          <label
                            htmlFor="mck-view-all"
                            className="ml-2 text-mcknormalgrey text-sm"
                            id="" tabIndex={0} aria-label="View All"
                          >
                            View All
                          </label>
                        </div>
                      </li>
                    </ul>
                    <ul>
                      {leftfiltermaindata?.subCategory?.value?.map(
                        (leftfiltersubdata: any) => (
                          <li className="list-none" key={leftfiltersubdata?.id}>
                            <div
                              className="flex items-center my-px"
                              onClick={(e) =>
                                handleCheckBox(
                                  e,
                                  leftfiltersubdata?.name,
                                  leftfiltermaindata?.mainCategory?.value[0].id,
                                  leftfiltersubdata?.id
                                )
                              }
                            >
                              <input
                                id={`${leftfiltersubdata?.name}_${index}`}
                                type="checkbox"
                                value={leftfiltersubdata?.name}
                                className="w-4 h-4 accent-[#001A71]"
                                checked={
                                  selectedFilterItems[
                                    leftfiltermaindata?.mainCategory?.value[0]
                                      .id
                                  ][leftfiltersubdata?.id]?.checked
                                }
                                defaultChecked={
                                  selectedFilterItems[
                                    leftfiltermaindata?.mainCategory?.value[0]
                                      .id
                                  ][leftfiltersubdata?.id]?.checked
                                }
                                aria-label={leftfiltersubdata?.name}
                                role="checkbox"
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
                  {/* Left filter sub category */}
                </section>
              </>
            ))}
        </div>
      </div>
      {/* Left main category lists */}
    </div>
  );
}

export default ProductFilter;
