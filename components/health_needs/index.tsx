import useAxios from "../../hooks/useApi";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import 'swiper/css/navigation';

const HealthNeedsComponent = () => {

    const router = useRouter();
    const [productListData, SetProductListData] = useState<any>();
    const [recommendedProductListData, SetRecommendedProductListData] = useState<any>();
    const [productFilter, setProductFilter] = useState<any>();
    const [activeFilter, setActiveFilter] = useState<any>([]);
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
                selectedFilterItems[categoryId]['items'] = [];
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
            const productCategoryData = await axios.get(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`);
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

    // -------- Health needs page data fetch ends -------- //

    // -------- View all checkbox functionality ------- //
    // const viewallhandleCheckBox = (event: React.MouseEvent<HTMLDivElement>, label: string) => {
    //     const value = (event.target as HTMLInputElement).value;
    //     const isChecked = (event.target as HTMLInputElement).checked;
        
    //     if (label === 'viewall') {
    //         // If "View All" checkbox is clicked, update all sub-categories checkboxes
    //         setActiveFilter(isChecked ? leftfiltermaindata?.subCategory?.value?.map((item: any) => item.name) : []);
    //         document.querySelectorAll('input[type=checkbox]').forEach((checkbox: HTMLInputElement) => {
    //             checkbox.checked = isChecked;
    //         });
    //     } else {
    //         // If a sub-category checkbox is clicked, update the active filter
    //         const newActiveFilter = isChecked ? [...activeFilter, value] : activeFilter.filter((item: string) => item !== value);
    //         setActiveFilter(newActiveFilter);
    //     }
    // };


    const handleProductClick = (data : any) =>{
        const title = data.routeSegment
        router.push({
            pathname: '/product_detail', 
            query: { data: title },
          });
    }
    
    return (
        <>
            <div className="mck-health-needs-page container w-full mx-auto grid grid-cols-1">


                {/* Health needs - Top category section starts */}
                <div className="health-needs-categories" tabIndex={0} id="hn_label_002">
                    <div className="health-needs-categories-icons">
                        <ul>
                            {healthNeedData && healthNeedData?.map((healthneedsdata: any) => (
                                <li key={healthneedsdata?.contentLink?.id}><img src={healthneedsdata?.image?.expandedValue?.url} />{healthneedsdata?.title.value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Health needs - Top category section ends */}

                <div className="container lg:mt-8 mt-6 px-4 lg:px-0">

                    {/* Health needs - Top Active Filter section starts */}
                    <section>
                        <div className="flex mb-2 items-center text-mckblue" tabIndex={0} id="hn_label_003">
                            {activeFiltersData?.activeFiltersText?.value}
                            <img src={activeFiltersData?.activeFiltersImage?.expandedValue?.url} className="mr-2 ml-2" tabIndex={0} id="hn_label_003_1" />

                            <div className="flex flex-wrap items-baseline" tabIndex={0} id="hn_label_003_2">
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

                        <div className="text-mcknormalgrey" tabIndex={0} id="hn_label_003_3">{activeFiltersData?.showResultsText?.value}</div>

                    </section>
                    {/* Health needs - Top Active Filter section starts */}

                    {/* Health needs - Left coloumn Filter section starts */}
                    {/* <div className="swiper-container mt-8"> */}
                    <div className="grid grid-cols-3 mt-8">
                        <div className="flex-none h-max">
                            <div className="lg:border-r-2 pb-3 mb-2 mck-hn-filter-category">
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

                        {/* <div className="flex-auto"> */}
                        <div className="col-span-2">

                            {/* Health needs - Right coloumn starts */}
                            <div>
                                {healthNeedData?.map((healthcategorytitle: any) => (
                                    <>

                                        {/* Health needs categories title & product carousel items starts */}
                                        <section>
                                            <div className="section-title text-mckblue" tabIndex={0} id="hn_label_005">{healthcategorytitle?.healthNeedCategory?.value[0]?.name}</div>
                                            {/* Product items */}
                                            <div className="flex gap-0.5 flex-wrap product-list-container">
                                                <Swiper
                                                    modules={[Navigation]}
                                                    spaceBetween={0}
                                                    navigation
                                                    slidesPerView={5}
                                                    onSlideChange={() => console.log('slide change')}
                                                    onSwiper={(swiper) => console.log(swiper)}
                                                    // style={{ margin: 0, padding: 0 }}
                                                >
                                                    {productListData?.data?.results.map((item: any) => {
                                                        return (
                                                            <SwiperSlide 
                                                            style={{ flex: '0 0 0%', width: '30%' }}
                                                            >
                                                        <div
                                                         onClick={()=>handleProductClick(item)}
                                                            className="w-52 h-96 border-2 swiper-list-item"
                                                            key={item?.contentLink?.id}>
                                                            <img src={item?.image?.value?.url} alt={item?.image?.value?.url} tabIndex={0} id="hn_label_005_01" />
                                                            <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey" tabIndex={0} id="hn_label_005_02">
                                                                {healthcategorytitle?.healthNeedCategory?.value[0]?.name}
                                                            </div>
                                                            <div className="mckblue product-list-title" tabIndex={0} id="hn_label_005_03">
                                                                {item?.name}
                                                            </div>
                                                            <div
                                                                className="mcknormalgrey product-list-description" tabIndex={0} id="hn_label_005_03"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: item?.highlightDescription?.value,
                                                                }}
                                                            ></div>
                                                        </div>
                                                            </SwiperSlide>
                                                         );
                                                    })}
                                                </Swiper>
                                            </div>
                                        </section>
                                        {/* Health needs categories title & product carousel items starts */}
                                    </>
                                ))}
                            </div>
                            {/* Health needs - Right coloumn ends */}

                            {/* Health needs Promotional banner section starts - 2 products */}
                            <div className="product-where-to-buy grid grid-cols-1 lg:px-6">
                                <div className="relative isolate overflow-hidden">
                                    <div className="mx-auto max-w-7xl">
                                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

                                            <style jsx>{`.bg-color {background-color: ${recommendedProductsData?.recommendedProductBackgroundColorCode?.value};}`}</style>
                                            <div className="flex max-w-xl bg-color py-4 sm:py-24 lg:py-10 px-4 lg:px-8 items-center">
                                                {/* <img src={recommendedProductsData?.recommendedProductBackgroundImage?.expandedValue?.url} alt="allergy relief" className="pr-6" /> */}
                                                <img src="images/allergy-relief.png" alt="allergy relief" className="lg:pr-6 pr-4 h-fit w-3/12 lg:w-full" tabIndex={0} id="hn_label_006" />
                                                <div>
                                                    <p className="lg:mt-4 text-lg" tabIndex={0} id="hn_label_006_01">test Allergy relief that starts working fast on the first day you take it.</p>
                                                    <div className="jsx-290076256 leading-5 pd-12 h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right w-auto" tabIndex={0} id="hn_label_006_02" role="button" aria-label={recommendedProductsData?.recommendedProductButtonText?.value}>{recommendedProductsData?.recommendedProductButtonText?.value}</div>
                                                </div>
                                            </div>
                                            <div className="flex max-w-xl bg-color py-4 sm:py-24 lg:py-10 px-4 lg:px-8 items-center">
                                                {/* <img src={recommendedProductsData?.recommendedProductBackgroundImage?.expandedValue?.url} alt="allergy relief" className="pr-6" /> */}
                                                <img src="images/allergy-relief.png" alt="allergy relief" className="lg:pr-6 pr-4 h-fit w-3/12 lg:w-full" tabIndex={0} id="hn_label_006_03" />
                                                <div>
                                                    <p className="lg:mt-4 text-lg" tabIndex={0} id="hn_label_006_04">Allergy relief that starts working fast on the first day you take it.</p>
                                                    <div className="jsx-290076256 w-auto leading-5 pd-12 h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right" tabIndex={0} id="hn_label_006_05" aria-label={recommendedProductsData?.recommendedProductButtonText?.value}><a href={recommendedProductsData?.recommendedProductButtonUrl?.value}>{recommendedProductsData?.recommendedProductButtonText?.value}</a></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Health needs Promotional banner section ends */}

                            {/* Health needs Promotional banner section starts - 3 products */}
                            <div className="mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-6">
                                <div className="aspect-h-4 aspect-w-3 overflow-hidden border border-slate-400 lg:block relative mb-4 lg:mb-0">
                                    <img src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/image_background.png" alt="Two each of gray, white, and black shirts laying flat." className="w-full object-contain object-center" tabIndex={0} id="hn_label_007" />
                                    <div className="mck-hn-recommend-prd-content absolute top-0">
                                        <img src="images/logo.png" alt="logo" className="mt-1 lg:mt-12 ml-12" tabIndex={0} id="hn_label_007_01"/>
                                        <div className="flex max-w-xl bg-color py-4 sm:py-24 lg:py-6 px-4 lg:px-12 items-center">
                                                {/* <img src={recommendedProductsData?.recommendedProductBackgroundImage?.expandedValue?.url} alt="allergy relief" className="pr-6" /> */}
                                                <img src="images/allergy-relief.png" alt="allergy relief" className="lg:pr-6 pr-4 h-fit w-3/12 lg:w-full" tabIndex={0} id="hn_label_007_02"/>
                                                <div>
                                                    <p className="mt-4 text-lg" tabIndex={0} id="hn_label_007_02">Allergy relief that starts working fast on the first day you take it.</p>
                                                    <div className="jsx-290076256 w-auto leading-5 pd-12 h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right" tabIndex={0} id="hn_label_007_03" aria-label={recommendedProductsData?.recommendedProductButtonText?.value}><a href={recommendedProductsData?.recommendedProductButtonUrl?.value}>{recommendedProductsData?.recommendedProductButtonText?.value}</a></div>
                                                </div>
                                            </div>

                                    </div>
                                </div>
                                <div className="lg:grid lg:grid-cols-1 lg:gap-y-8">
                                
                                <div className="flex max-w-xl lg:max-w-lg border border-slate-400 px-4 py-4 lg:py-0 lg:px-8 items-center mb-4 lg:mb-0">
                                                {/* <img src={recommendedProductsData?.recommendedProductBackgroundImage?.expandedValue?.url} alt="allergy relief" className="pr-6" /> */}
                                                <img src="images/allergy-relief.png" alt="allergy relief" className="lg:pr-6 pr-4 h-fit w-3/12 lg:w-full" tabIndex={0} id="hn_label_007_04" />
                                                <div>
                                                    <p className="mt-4 text-lg" tabIndex={0} id="hn_label_007_05">Allergy relief that starts working fast on the first day you take it.</p>
                                                    <div className="jsx-290076256 w-auto leading-5 pd-12 h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right" tabIndex={0} id="hn_label_007_06" aria-label={recommendedProductsData?.recommendedProductButtonText?.value}><a href={recommendedProductsData?.recommendedProductButtonUrl?.value}>{recommendedProductsData?.recommendedProductButtonText?.value}</a></div>
                                                </div>
                                            </div>
                                            <div className="flex max-w-xl lg:max-w-lg border border-slate-400 px-4 lg:px-8 py-4 lg:py-0 items-center">
                                                {/* <img src={recommendedProductsData?.recommendedProductBackgroundImage?.expandedValue?.url} alt="allergy relief" className="pr-6" /> */}
                                                <img src="images/allergy-relief.png" alt="allergy relief" className="lg:pr-6 pr-4 h-fit w-3/12 lg:w-full" tabIndex={0} id="hn_label_007_07" />
                                                <div>
                                                    <p className="mt-4 text-lg" tabIndex={0} id="hn_label_007_08">Allergy relief that starts working fast on the first day you take it.</p>
                                                    <div className="jsx-290076256 w-auto leading-5 pd-12 h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right" tabIndex={0} id="hn_label_007_09" aria-label={recommendedProductsData?.recommendedProductButtonText?.value}><a href={recommendedProductsData?.recommendedProductButtonUrl?.value}>{recommendedProductsData?.recommendedProductButtonText?.value}</a></div>
                                                </div>
                                            </div>
                                </div>
                            </div>
                            {/* Health needs Promotional banner section ends */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default HealthNeedsComponent;