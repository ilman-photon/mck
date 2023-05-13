import useAxios from "@/hooks/useApi";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
// import RecommendationalProductComponent from "@/components/recommendational_product";

function ProductListComponent() {

    const router = useRouter();
    const [productListData, SetProductListData] = useState<any>();
    const [recommendedProductListData, SetRecommendedProductListData] = useState<any>();
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

        fetchRecommandedProduct()
            .then((res) => {
                SetRecommendedProductListData(res);
            })
            .catch((e: Error | AxiosError) => console.log(e));

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

        let selectedSubCat: any = [];
        selectedFilterItems.map((category: any) => {
            category.items.map((name: any) => {
                if (selectedSubCat.indexOf(name) === -1) {
                    selectedSubCat.push(name);
                }
            });
        });
        setActiveFilter([...selectedSubCat]);
        if (selectedViewAllCateory.length > 0) {
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

    // -------- Recommended Products Section ----------- //
    const [recommendedProductsData, setRecommendedProductsData] = useState<any>();
    function fetchRecommendedProductsData() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/pdp/vitamin-d3-50-mcg-2000/&expand=*`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }
    useEffect(() => {
        fetchRecommendedProductsData()
            .then((res: any) => {
                const recommendedProductsDataList = res.data[0];
                // console.log("recommendedProductsDataList--- ", recommendedProductsDataList);
                setRecommendedProductsData(recommendedProductsDataList);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);
    // -------- Recommended Products Section ----------- //

    // -------- Health needs page data fetch starts -------- //
    const [healthNeedData, setHealthNeedData] = useState<any>();
    const [activeFiltersData, setactiveFiltersData] = useState<any>();
    const [productCategoryData, setproductCategoryData] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
            // Product Category setting - Filters data
            const activeFiltersData = await axios(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`);
            const activeFiltersDataList = activeFiltersData?.data[0];
            // console.log("activeFilters --- ", activeFiltersDataList);
            setactiveFiltersData(activeFiltersDataList);

            // Product Category Helath needs - Left side category lists
            const productCategoryData = await axios(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`);
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
            <div className="mck-Product-Listing-page container w-full mx-auto grid grid-cols-1 max-w-7xl">

                <div className="container max-w-7xl lg:mt-8 mt-6 px-4 lg:px-0">

                    {/* Health needs - Top Active Filter section starts */}
                    <section>
                        <div className="flex mb-2 items-center text-mckblue">
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

                        <div className="text-mcknormalgrey">{activeFiltersData?.showResultsText?.value}</div>

                    </section>
                    {/* Health needs - Top Active Filter section starts */}

                    {/* Health needs - Left coloumn Filter section starts */}
                    <div className="lg:flex md:flex sm-flex flex-none mt-8">
                        <div className="flex-none h-max">

                            <div className="border-r-2 pb-3 mb-2 mck-hn-filter-category">
                              {/* Left main category lists */}
                              <div className="flex items-center my-px">
                                    <div className="w-full border lg:border-0 rounded px-4 lg:px-0">
                                        {productCategoryData && productCategoryData?.map((leftfiltermaindata: any) => (
                                            <>
                                                {/* Left filter main category */}

                                                <section className="mck-hn-mobile-accordion tab overflow-hidden">
                                                    <input className="mck-hn-accordion-title-check" type="checkbox" id={leftfiltermaindata?.contentLink?.id} />
                                                    <label className="tab-label p-4 lg:p-0" htmlFor={leftfiltermaindata?.contentLink?.id}>
                                                    <div className="flex lg:mb-2 w-full lg:mt-2" key={leftfiltermaindata?.contentLink?.id}>
                                                        <img
                                                            id={leftfiltermaindata?.mainCategory?.value[0].name}
                                                            src={leftfiltermaindata?.categoryImage?.expandedValue?.url}
                                                        />
                                                        <label htmlFor="acute" className="ml-2 filter-title">
                                                            {leftfiltermaindata?.mainCategory?.value[0].name}
                                                        </label>
                                                    </div>
                                                    </label>
                                                {/* Left filter main category */}

                                                {/* Left filter sub category */}
                                                <div className="lg:border-b-2 pb-3 mb-2 mck-hn-filter-subcat tab-content lg:max-h-none lg:px-0">
                                                    <ul>
                                                        <li className="list-none">
                                                            <div className="flex items-center my-px" onClick={(e) => handleViewAllChange(e, leftfiltermaindata?.mainCategory?.value[0].id)}>
                                                                <input
                                                                    id={leftfiltermaindata?.mainCategory?.value[0]?.name}
                                                                    type="checkbox"
                                                                    value="view all"
                                                                    className="w-4 h-4"
                                                                    checked={selectedFilterItems[leftfiltermaindata?.mainCategory?.value[0].id]?.isCategoryChecked}
                                                                    defaultChecked={selectedFilterItems[leftfiltermaindata?.mainCategory?.value[0].id]?.isCategoryChecked}
                                                                />
                                                                <label htmlFor="mck-view-all" className="ml-2 text-mcknormalgrey text-sm" id="">
                                                                    View All
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        {leftfiltermaindata?.subCategory?.value?.map((leftfiltersubdata: any) => (
                                                            <li className="list-none" key={leftfiltersubdata?.id}>
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
                                                </section>
                                            </>
                                        ))}
                                    </div>
                                </div>
                                {/* Left main category lists */}

                            </div>

                        </div>

                        <div className="flex-auto">

                            {/* Product Listing Two Col banner section starts*/}

                            <div className="grid md:grid-cols-2 lg:grid-cols-2">
                                <div tabIndex={0} className="bg-[#EAF1F8;] bg-color lg:m-3 m-0 lg:p-9 p-4 mb-4 lg:mb-0 last:mb-0">
                                    <div tabIndex={0} className="w-full lg:w-44 mb-4"><img src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png" id="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png" className="h-auto max-w-full mx-auto" /></div>
                                    <div className="lg:flex grid grid-cols-none lg:grid-cols-3 gap-4 lg:pr-3 my-auto text-justify">
                                        <div tabIndex={0} className="mx-auto my-auto h-full w-full lg:pr-4 pb-4 lg:pb-0">
                                            <img src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png" id="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png" alt="promotion image" className="mx-auto lg:my-auto lg:h-full lg:w-full" /></div>
                                        <div tabIndex={0} id="p-text" className="text-justify pr-0 lg:pr-9">
                                            <div tabIndex={0} className="text-lg text-sofia-reg text-center col-span-2 lg:text-left pb-4"><p>You’re in touch with your health, able to pinpoint what you need. With Foster &amp; Thrive, you can easily target and treat your precise needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div tabIndex={0} role="button" className="w-[139px] leading-5 pd-12 h-[44px] lg:m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex  lg:ml-auto lg:mr-9 mx-auto">WHERE TO BUY</div>
                                </div>
                                <div tabIndex={0} className="bg-[#FFEABC] bg-color lg:m-3 m-0 lg:p-9 p-4 mb-4 lg:mb-0 last:mb-0">
                                    <div tabIndex={0} className="w-full lg:w-44 mb-4">
                                        <img src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png" id="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png" className="h-auto max-w-full mx-auto" /></div>
                                    <div className="lg:flex grid grid-cols-none lg:grid-cols-3 gap-4 lg:pr-3 my-auto text-justify">
                                        <div className="mx-auto my-auto h-full w-full lg:pr-4 pb-4 lg:pb-0">
                                            <img src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png" id="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png" alt="promotion image" className="mx-auto lg:my-auto lg:h-full lg:w-full" /></div>
                                        <div id="p-text" className="text-justify pr-0 lg:pr-9">
                                            <div className="text-lg text-sofia-reg text-center col-span-2 lg:text-left pb-4">
                                                <p>Everybody deserves optimal health, and nobody is immune to everything. With Foster &amp; Thrive, you can be prepared for almost anything.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="button" className="w-[139px] leading-5 pd-12 h-[44px] lg:m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex  lg:ml-auto lg:mr-9 mx-auto">WHERE TO BUY</div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-1">
                                <div tabIndex={0} className="bg-[#DBDFEB] bg-color lg:m-3 m-0 lg:p-9 p-4 mb-4 lg:mb-0 last:mb-0">
                                    <div className="lg:flex grid grid-cols-none lg:grid-cols-3 gap-4 lg:pr-3 my-auto text-justify">
                                        <div tabIndex={0} className="mx-auto my-auto lg:pr-4 pb-4 lg:pb-0">
                                            <img src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png" id="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png" alt="promotion image" className="mx-auto lg:my-auto lg:h-full lg:w-full" /></div>
                                        <div tabIndex={0} id="p-text" className="text-justify pr-0 lg:pr-9">
                                            <div tabIndex={0} className="text-lg text-sofia-reg text-center col-span-2 lg:text-left pb-4"><p>You’re in touch with your health, able to pinpoint what you need. With Foster &amp; Thrive, you can easily target and treat your precise needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div tabIndex={0} role="button" className="w-[139px] leading-5 pd-12 h-[44px] lg:m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex  lg:ml-auto lg:mr-9 mx-auto">WHERE TO BUY</div>
                                </div>
                            </div>

                            {/* Product items */}
                            <div className="flex gap-0.5 flex-wrap product-list-container">
                                {productListData?.data?.results.map((item: any) => {
                                    return (
                                        <div
                                            className="w-52 h-96 border-2 product-list-item"
                                            key={item?.contentLink?.id}>
                                            <img src={item?.image?.value?.url} alt="" />
                                            <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                                                {/* {healthcategorytitle?.healthNeedCategory?.value[0]?.name} */}
                                            </div>
                                            <div className="mckblue product-list-title">
                                                {item?.name}
                                            </div>
                                            <div id="my_text"
                                                className="mcknormalgrey product-list-description ellipsis"
                                                dangerouslySetInnerHTML={{
                                                    __html: item?.highlightDescription?.value,
                                                }}
                                            ></div>
                                        </div>
                                    );
                                })}
                            </div>
                            {/* Product End */}

                            {/* Product Listing Promotion Banner Start */}

                            <div className="mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-6">
                                <div className="aspect-h-4 aspect-w-3 overflow-hidden border border-slate-400 lg:block relative mb-4 lg:mb-0">
                                    <img src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/image_background.png" alt="Two each of gray, white, and black shirts laying flat." className="w-full object-contain object-center" />
                                    <div className="mck-hn-recommend-prd-content absolute top-0">
                                        <img id="logo-image" src="images/logo.png" alt="logo" className="mt-1 lg:mt-12 ml-12" />
                                        <div className="flex max-w-xl bg-color py-4 sm:py-24 lg:py-6 px-4 lg:px-12 items-center">
                                            <img src="images/allergy-relief.png" alt="allergy relief" className="lg:pr-6 pr-4 h-fit w-3/12 lg:w-full" />
                                            <div>
                                                <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                                <div id="cta-btn" className="w-auto leading-5 pd-12 h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right">
                                                    where to buy
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                                    <div className="flex max-w-xl lg:max-w-lg border border-slate-400 px-4 py-4 lg:py-0 lg:px-8 items-center mb-4 lg:mb-0">
                                        <img src="images/allergy-relief.png" alt="allergy relief" className="lg:pr-6 pr-4 h-fit w-3/12 lg:w-full" />
                                        <div><p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                            <div id="cta-btn" className="w-auto leading-5 pd-12 h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right">
                                                where to buy
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex max-w-xl lg:max-w-lg border border-slate-400 px-4 lg:px-8 py-4 lg:py-0 items-center">
                                        <img src="images/allergy-relief.png" alt="allergy relief" className="lg:pr-6 pr-4 h-fit w-3/12 lg:w-full" />
                                        <div>
                                            <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                            <div id="cta-btn" className="w-auto leading-5 pd-12 h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right">
                                                where to buy
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Product Listing Promotion Banner End */}


                            {/* Product items */}
                            <div className="flex gap-0.5 flex-wrap product-list-container">
                                {productListData?.data?.results.map((item: any) => {
                                    return (
                                        <div
                                            className="w-52 h-96 border-2 product-list-item"
                                            key={item?.contentLink?.id}>
                                            <img src={item?.image?.value?.url} alt="" />
                                            <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                                                {/* {healthcategorytitle?.healthNeedCategory?.value[0]?.name} */}
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
                            {/* Product End */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );



}
export default ProductListComponent;