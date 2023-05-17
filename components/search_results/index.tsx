import useAxios from "../../hooks/useApi";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

function ResultComponent() {
    
    const router = useRouter();
    const [productListData, SetProductListData] = useState<any>();
    const [activeFilter, setActiveFilter] = useState<any>([]);
    const [productFilter, setProductFilter] = useState<any>();
    const [selectedFilterItems, setSelectedFilterItems] = useState<any>([]);
    const [selectedViewAllCateory, setSelectedViewAllCateory] = useState<any>([]);

    const { response, error, loading } = useAxios({
        method: "GET",
        url: `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/home/&expand=*&Select=blockArea`,
        headers: {
            "Accept-Language": "en",
        },
    });

    // filter data to share as props
    function filteredData(valueType: string) {
        return response?.data[0]?.blockArea?.expandedValue?.filter((ele: any) => {
            return ele.contentType.some((arrEle: string) => {
                return arrEle == valueType;
            });
        });
    }

    function FetchProductFilter() {
        return axios.get(
            //`${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category-setting/?expand=*`,
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    function fetchRecommandedProduct() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Acute care' or  productType/value/name eq 'Preventative Care') and ContentType/any(t:t eq 'ProductDetailsPage') and (recommendedProduct/value eq true))`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    // Right section product carousel data
    function fetchProductList(filter: any) {
        let queryParameter = '';
        if (filter === '') {
            queryParameter = `(productType/value/name eq 'Acute Care')`;
        } else {
            queryParameter = filter;
        }
        const promise = axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=(${queryParameter} and ContentType/any(t:t eq 'ProductDetailsPage'))`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
        promise
            .then((res) => {
                // console.log("FetchProductList----- ", res);
                SetProductListData(res);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }

    useEffect(() => {
        FetchProductFilter()
            .then((res) => {
                setProductFilter(res);
            })
            .catch((e) => console.log(e));

        fetchProductList('');

    }, []);

    const handleCTABtn = (url: string) => {
        router.push({
            pathname: "",
        });
    };

    // Get & display checkbox value - From Sub category list
    const [checkedValues, setCheckedValues] = useState<string[]>([]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const inputElement = event.target;
        const inputValue = (inputElement as HTMLInputElement).value;

        if (inputValue) {
            if (checkedValues.includes(inputValue)) {
                // Remove the value if it's already checked
                setCheckedValues(checkedValues.filter((val) => val !== inputValue));
            } else {
                // Add the value if it's not checked
                setCheckedValues([...checkedValues, inputValue]);
            }
        }
    }

    const handleCheckBox = (e: any, filter: any, categoryId: any, subCategoryId: any) => {
        if (e.target.checked) {
            if (selectedFilterItems[categoryId]['items'].indexOf(filter) === -1) {
                selectedFilterItems[categoryId]['items'].push(filter);
            }
            //existing code
            setActiveFilter([...activeFilter, filter]);
            selectedFilterItems[categoryId][subCategoryId].checked = true;
        } else {
            const index = selectedFilterItems[categoryId]['items'].indexOf(filter);
            selectedFilterItems[categoryId]['items'].splice(index, 1);
            //existing code
            setActiveFilter(
                activeFilter.filter((item: any) => {
                    return item !== filter;
                })
            );
            selectedFilterItems[categoryId][subCategoryId].checked = false;
            selectedFilterItems[categoryId].isCategoryChecked = false;
        }
        setSelectedFilterItems(selectedFilterItems);
    }

    const handleViewAllChange = (e: any, categoryId: any) => {
        let isCategoryChecked = false;
        let subCategoryChecked = false;
        if (e.target.checked) {
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
        }

        selectedFilterItems[categoryId].isCategoryChecked = isCategoryChecked;
        
        selectedFilterItems[categoryId].map((sub_category: any) => {
            sub_category.checked = subCategoryChecked;
            if (subCategoryChecked) {
                selectedFilterItems[categoryId]['items'].push(sub_category.name);
            } else {
                const index = selectedFilterItems[categoryId]['items'].indexOf(sub_category.name);
                selectedFilterItems[categoryId]['items'].splice(index, 1);
            }
            // console.log(sub_category)
        });

        let selectedSubCat:any = [];
        selectedFilterItems.map((category: any) => {
            category.items.map((name: any) => {
                if (selectedSubCat.indexOf(name) === -1) {
                    selectedSubCat.push(name);
                }
            });
        });
        setActiveFilter([...selectedSubCat]);
        if (selectedViewAllCateory.length > 0)  {
            // let queryParams = '';
            // selectedViewAllCateory.map((catId: any, index: any) => {
            //     if (selectedFilterItems[catId].isCategoryChecked) {
            //         const categoryName = selectedFilterItems[catId].categoryName;
            //         const itemName = categoryName.replace(/[^a-zA-Z ]/g, "");
            //         const encodeItemName = encodeURI(itemName);
            //         const joinedCond = (selectedViewAllCateory.length === index + 1) ? '' : 'and ';
            //         queryParams += `(${selectedFilterItems[catId].productType}/value/name eq '${encodeItemName}') ${joinedCond}`;
            //     }
            // })
            // console.log(queryParams);
            // fetchProductList(queryParams);
        } else {
            fetchProductList('');
        }
    }

    useEffect(() => {
        createQueryParameters();
    }, [activeFilter])

    const createQueryParameters = () => {
        let queryParams = "";
        if (selectedFilterItems.length > 0) {
            let lastCatId = 0;
            let minCategoryCnt = 0;
            let minSubCategoryCnt = 0;
            selectedFilterItems.map((category: any, catId: any) => {
                if (!category.isCategoryChecked && category.items.length > 0) {
                    if (lastCatId > 0 && lastCatId != catId) {
                        queryParams += ' and ';
                    }
                    queryParams += '(';
                    category.items.map((item: any, index: any) => {
                        const itemName = item.replace(/[^a-zA-Z ]/g, "");
                        const encodeItemName = encodeURI(itemName);
                        const concatStr = (category.items.length === (index + 1)) ? '' : ' or ';
                        queryParams += `${category.productType}/value/name eq '${encodeItemName}' ${concatStr}`;
                    });
                    
                    minSubCategoryCnt += category.items.length;
                    queryParams += `)`;
                    lastCatId = catId;
                } else {
                    minCategoryCnt += category.isCategoryChecked;
                    if (category.isCategoryChecked) {
                        const categoryName = selectedFilterItems[catId].categoryName;
                        const itemName = categoryName.replace(/[^a-zA-Z ]/g, "");
                        const encodeItemName = encodeURI(itemName);
                        //console.log(selectedViewAllCateory, minCategoryCnt)
                        const joinedCond = (selectedViewAllCateory.length === minCategoryCnt) ? '' : 'and ';
                        const beforeCond = (minSubCategoryCnt > 0) ? ' and ' : '';
                        queryParams += ` ${beforeCond} (${selectedFilterItems[catId].productType}/value/name eq '${encodeItemName}') ${joinedCond} `;
                    }
                }
            });
            
            // console.log(minCategoryCnt, minSubCategoryCnt, queryParams)
            if (minCategoryCnt === 0 && minSubCategoryCnt == 0) {
                queryParams = "";
            }
        }
        
        // console.log(queryParams);
        if (queryParams)
            fetchProductList(queryParams);
    }

    // -------- Health needs page data fetch starts -------- //
    const [healthNeedData, setHealthNeedData] = useState<any>();
    const [activeFiltersData, setactiveFiltersData] = useState<any>();
    const [productCategoryData, setproductCategoryData] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {

            // Health needs Categories List
            const healthNeedsCategories = await axios.get(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`);
            const healthNeedsCategoriesList = healthNeedsCategories?.data[0].contentArea?.expandedValue?.filter((categoryList: any) => categoryList.name === "Health Need Highlights");

            // console.log("healthNeedsCategoriesList --- ", healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue);

            const healthNeedsCategoriesListData = healthNeedsCategoriesList.length > 0 ? healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue : [];
            setHealthNeedData(healthNeedsCategoriesListData);

            // Product Category setting - Filters data
            const activeFiltersData = await axios.get(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`);
            const activeFiltersDataList = activeFiltersData?.data[0];
            // console.log("activeFilters --- ", activeFiltersDataList);
            setactiveFiltersData(activeFiltersDataList);

            // Product Category Helath needs - Left side category lists
            const productCategoryData = await axios(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-search-result/&expand=*`);
            const productCategoryDataList = productCategoryData?.data[0]?.categoryFilter?.expandedValue;
            // console.log("MAIN productCategoryDataList --- ", productCategoryDataList);
            //console.log("maincategorydata?.categoryImage?.expandedValue?.url--- ",productCategoryDataList[0]?.categoryImage?.expandedValue?.url);
            setproductCategoryData(productCategoryDataList);
            createTempFilterArr(productCategoryDataList)

        };

        fetchData();
    }, []);

    const createTempFilterArr = (results: any) => {
        let tempArr: any = [];
        results?.map((leftfiltermaindata: any) => {
            tempArr[leftfiltermaindata?.mainCategory?.value[0].id] = [];
            tempArr[leftfiltermaindata?.mainCategory?.value[0].id]['items'] = [];
            tempArr[leftfiltermaindata?.mainCategory?.value[0].id][leftfiltermaindata?.subCategory?.value[0].id] = [];
            tempArr[leftfiltermaindata?.mainCategory?.value[0].id]['categoryName'] = leftfiltermaindata?.mainCategory?.value[0].name;
            tempArr[leftfiltermaindata?.mainCategory?.value[0].id]['isBusinessVerticalCategory'] = leftfiltermaindata?.isBusinessVerticalCategory?.value;
            tempArr[leftfiltermaindata?.mainCategory?.value[0].id]['productType'] = leftfiltermaindata?.isBusinessVerticalCategory?.value ? 'productType' : leftfiltermaindata?.name;
            tempArr[leftfiltermaindata?.mainCategory?.value[0].id]['isCategoryChecked'] = false;
            leftfiltermaindata?.subCategory?.value.map((subItem: any) => {
                tempArr[leftfiltermaindata?.mainCategory?.value[0].id][subItem.id] = [];
                tempArr[leftfiltermaindata?.mainCategory?.value[0].id][subItem.id]['checked'] = false;
                tempArr[leftfiltermaindata?.mainCategory?.value[0].id][subItem.id]['name'] = subItem.name;
            });
        });
        setSelectedFilterItems(tempArr);
    }

    const handleClearAll = () => {
        setActiveFilter([]);
        selectedFilterItems.map((category: any) => {
            category.isCategoryChecked = false;
            category.map((sub_category: any) => {
                sub_category.checked = false;
            });
        });
        fetchProductList('');
    }


    return (
        <>
            <div className="search-results lg:p-72 p-4 pb-0 container mx-auto lg:mt-36 mt-16">
                {/* <div>
                    <div className="text-54 font-medium text-gtl-med text-mckblue lg:pb-12 pb-1" tabIndex={0} id="sr_label_001">18 results found for “Pain Relief”</div>
                    <div className="lg:text-lg text-base text-sofia-reg text-black pb-1 font-normal" tabIndex={0} id="sr_label_002">Showing results for <span className="text-mckblue italic">Pain Relief</span></div>
                    <div className="lg:text-base text-sm text-sofia-reg text-black lg:pb-5 pb-3 font-normal" tabIndex={0} id="sr_label_003">Search for <span className="text-mckred italic">Pain Releef</span></div>
                    <div className="lg:text-lg text-base pb-1.5 text-sofia-reg font-normal textmcknormalgrey lg:pb-11 border-b-[#CCD1E3]" tabIndex={0} id="sr_label_004">Showing 18 results</div>
                </div> */}
                <div className="mck-product-filter">
                    <div className="container max-w-7xl mt-8">

                        {/* Health needs - Top Active Filter section starts */}
                        <section>
                            <div className="flex mb-2 items-center text-mckblue" tabIndex={0} id="sr_label_005">
                                {activeFiltersData?.activeFiltersText?.value}
                                <img src={activeFiltersData?.activeFiltersImage?.expandedValue?.url} className="mr-2 ml-2" />

                                <div className="flex flex-wrap items-baseline">
                                    {activeFilter?.map((item: any) => {
                                        return (
                                            <div className="flex rounded-full mck-hn-selected-value" key={item}>
                                                {item}&nbsp;
                                                <img
                                                    src="/images/hn-delete-icon.svg"
                                                    className="mck-filter-delete-icon cursor-pointer"
                                                    alt="delete icon"
                                                    onClick={() => {
                                                        setActiveFilter(activeFilter.filter((filterItem: any) => filterItem !== item));
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                    <div className="flex cursor-pointer ml-2 items-baseline">
                                        {/* <img className="" src={activeFiltersData?.clearAllImage?.expandedValue?.url} /> */}
                                        <img src="/images/hn-delete-icon.svg"
                                            className="mck-filter-clearall-icon"
                                            alt="delete icon" />
                                        <div className="underline" onClick={handleClearAll}>{activeFiltersData?.clearAllText?.value}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-mcknormalgrey" tabIndex={0} id="sr_label_006">{activeFiltersData?.showResultsText?.value}</div>

                        </section>
                        {/* Health needs - Top Active Filter section starts */}

                        {/* Health needs - Left coloumn Filter section starts */}
                        <div className="lg:flex md:flex sm-flex flex-none mt-8">
                            <div className="flex-none h-max">
                                <div className="border-r-2 pb-3 mb-2 mck-hn-filter-category">
                                    {/* Left main category lists */}
                                    <div className="flex items-center my-px">
                                        <div>
                                            {productCategoryData && productCategoryData?.map((leftfiltermaindata: any) => (
                                                <>
                                                    {/* Left filter main category */}
                                                    <div className="flex mb-2" key={leftfiltermaindata?.contentLink?.id}>
                                                        <img
                                                            id={leftfiltermaindata?.mainCategory?.value[0].name}
                                                            src={leftfiltermaindata?.categoryImage?.expandedValue?.url}
                                                        />
                                                        <label htmlFor="acute" className="ml-2 filter-title">
                                                            {leftfiltermaindata?.mainCategory?.value[0].name}
                                                        </label>
                                                    </div>
                                                    {/* Left filter main category */}

                                                    {/* Left filter sub category */}
                                                    <div className="border-b-2 pb-3 mb-2 mck-hn-filter-subcat">
                                                        <ul>
                                                            <li>
                                                                <div className="flex items-center my-px" onClick={(e) => handleViewAllChange(e, leftfiltermaindata?.mainCategory?.value[0].id)}>
                                                                    <input
                                                                        id={leftfiltermaindata?.mainCategory?.value[0]?.name}
                                                                        name={leftfiltermaindata?.mainCategory?.value[0]?.name}
                                                                        type="checkbox"
                                                                        value="view all"
                                                                        className="w-4 h-4"
                                                                        checked={selectedFilterItems[leftfiltermaindata?.mainCategory?.value[0].id]?.isCategoryChecked}
                                                                        defaultChecked={selectedFilterItems[leftfiltermaindata?.mainCategory?.value[0].id]?.isCategoryChecked}
                                                                    />
                                                                    <label htmlFor="mck-view-all" className="ml-2 text-mcknormalgrey text-sm">
                                                                        View All
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul>
                                                            {leftfiltermaindata?.subCategory?.value?.map((leftfiltersubdata: any) => (
                                                                <li key={leftfiltersubdata?.id}>
                                                                    <div className="flex items-center my-px" onClick={(e) => handleCheckBox(e, leftfiltersubdata?.name, leftfiltermaindata?.mainCategory?.value[0].id, leftfiltersubdata?.id)}>
                                                                        <input
                                                                            id={leftfiltersubdata?.name}
                                                                            type="checkbox"
                                                                            value={leftfiltersubdata?.name}
                                                                            className="w-4 h-4"
                                                                            checked={selectedFilterItems[leftfiltermaindata?.mainCategory?.value[0].id][leftfiltersubdata?.id]?.checked}
                                                                            defaultChecked={selectedFilterItems[leftfiltermaindata?.mainCategory?.value[0].id][leftfiltersubdata?.id]?.checked}
                                                                        />
                                                                        <label htmlFor={leftfiltersubdata?.name} className="ml-2 text-sm">
                                                                            {leftfiltersubdata?.name}
                                                                        </label>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    {/* Left filter sub category */}
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Left main category lists */}

                                </div>

                            </div>

                            <div className="flex-auto">

                                {/* Health needs - Right coloumn starts */}
                                <div>
                                    {healthNeedData?.map((healthcategorytitle: any) => (
                                        <>

                                            {/* Health needs categories title & product carousel items starts */}
                                            <section>
                                                {/* Product items */}
                                                <div className="flex gap-0.5 flex-wrap product-list-container">
                                                    {productListData?.data?.results.map((item: any) => {
                                                        return (
                                                            <div
                                                                className="w-52 h-96 border-2 product-list-item"
                                                                key={item?.contentLink?.id}>
                                                                <img src={item?.image?.value?.url} alt="" />
                                                                <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                                                                    {healthcategorytitle?.healthNeedCategory?.value[0]?.name}
                                                                </div>
                                                                <div className="mckblue product-list-title">
                                                                    {item?.name}
                                                                </div>
                                                                <div
                                                                    className="mcknormalgrey product-list-description"
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item?.highlightDescription?.value,
                                                                    }}
                                                                ></div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </section>
                                            {/* Health needs categories title & product carousel items starts */}
                                        </>
                                    ))}
                                </div>
                                {/* Health needs - Right coloumn ends */}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default ResultComponent;