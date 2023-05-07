import useAxios from "@/hooks/useApi";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

const HealthNeedsComponent = () => {

    const router = useRouter();
    const [productListData, SetProductListData] = useState<any>();
    const [recommendedProductListData, SetRecommendedProductListData] = useState<any>();
    const [productFilter, setProductFilter] = useState<any>();
    const [activeFilter, setActiveFilter] = useState<any>([]);

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
    function fetchProductList(filter = "Acute Care") {
        const promise = axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=((productType/value/name eq '${filter}') and ContentType/any(t:t eq 'ProductDetailsPage'))`,
            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
        promise
            .then((res) => {
                console.log("FetchProductList----- ", res);
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

        fetchProductList();
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

    // Existing code
    const handleCheckBox = (e: any, filter: any) => {
        console.log("handleCheckBox ---- ", e, filter);
        let f: any = [];
        if (e.target.checked) {
            setActiveFilter([...activeFilter, filter]);
            fetchProductList(filter);
        } else {
            setActiveFilter(
                activeFilter.filter((item: any) => {
                    return item !== filter;
                })
            );
            fetchProductList();
        }
    };

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
                console.log("recommendedProductsDataList--- ", recommendedProductsDataList);
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
            const healthNeedsCategories = await axios(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`);
            const healthNeedsCategoriesList = healthNeedsCategories?.data[0].contentArea?.expandedValue?.filter((categoryList: any) => categoryList.name === "Health Need Highlights");

            console.log("healthNeedsCategoriesList --- ", healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue);

            const healthNeedsCategoriesListData = healthNeedsCategoriesList.length > 0 ? healthNeedsCategoriesList[0]?.healthNeedItem?.expandedValue : [];
            setHealthNeedData(healthNeedsCategoriesListData);

            // Product Category setting - Filters data
            const activeFiltersData = await axios(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`);
            const activeFiltersDataList = activeFiltersData?.data[0];
            console.log("activeFilters --- ", activeFiltersDataList);
            setactiveFiltersData(activeFiltersDataList);

            // Product Category Helath needs - Left side category lists
            const productCategoryData = await axios(`${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/product-category/health-needs/&expand=*`);
            const productCategoryDataList = productCategoryData?.data[0]?.categoryFilter?.expandedValue;
            console.log("MAIN productCategoryDataList --- ", productCategoryDataList);
            //console.log("maincategorydata?.categoryImage?.expandedValue?.url--- ",productCategoryDataList[0]?.categoryImage?.expandedValue?.url);
            setproductCategoryData(productCategoryDataList);

        };

        fetchData();
    }, []);
    // -------- Health needs page data fetch ends -------- //


    return (
        <>
            <div className="mck-health-needs-page container w-full mx-auto grid grid-cols-1 max-w-7xl">


                {/* Health needs - Top category section starts */}
                <div className="health-needs-categories">
                    <div className="health-needs-categories-icons">
                        <ul>
                            {healthNeedData && healthNeedData?.map((healthneedsdata: any) => (
                                <li key={healthneedsdata?.contentLink?.id}><img src={healthneedsdata?.image?.expandedValue?.url} />{healthneedsdata?.title.value}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Health needs - Top category section ends */}

                <div className="container max-w-7xl mt-8">

                    {/* Health needs - Top Active Filter section starts */}
                    <section>
                        <div className="flex mb-2 items-center text-mckblue">
                            {activeFiltersData?.activeFiltersText?.value}
                            <img src={activeFiltersData?.activeFiltersImage?.expandedValue?.url} className="mr-2 ml-2" />

                            <div className="flex">
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
                            </div>
                            <div className="flex cursor-pointer">
                                <img src={activeFiltersData?.clearAllImage?.expandedValue?.url} />
                                <div onClick={() => setActiveFilter([])}>{activeFiltersData?.clearAllText?.value}</div>
                            </div>
                        </div>

                        <div className="text-mcknormalgrey">{activeFiltersData?.showResultsText?.value}</div>

                    </section>
                    {/* Health needs - Top Active Filter section starts */}

                    {/* Health needs - Left coloumn Filter section starts */}
                    <div className="flex mt-8">
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
                                                            <div className="flex items-center my-px" onClick={(e) => handleCheckBox(e, viewall)}>
                                                                <input
                                                                    id="mck-viewall"
                                                                    type="checkbox"
                                                                    value="view all"
                                                                    className="w-4 h-4"
                                                                />
                                                                <label htmlFor="mck-view-all" className="ml-2 text-mcknormalgrey">
                                                                    View All
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <ul>
                                                        {leftfiltermaindata?.subCategory?.value?.map((leftfiltersubdata: any) => (
                                                            <li key={leftfiltersubdata?.id}>
                                                                <div className="flex items-center my-px" onClick={(e) => handleCheckBox(e, leftfiltersubdata?.name)}>
                                                                    <input
                                                                        id={leftfiltersubdata?.name}
                                                                        type="checkbox"
                                                                        value={leftfiltersubdata?.name}
                                                                        className="w-4 h-4"
                                                                    />
                                                                    <label htmlFor={leftfiltersubdata?.name} className="ml-2">
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
                                            <div className="section-title text-mckblue">{healthcategorytitle?.healthNeedCategory?.value[0]?.name}</div>

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

                            {/* Health needs Promotional banner section starts */}
                            <div className="product-where-to-buy grid grid-cols-1 px-6">
                                <div className="relative isolate overflow-hidden">
                                    <div className="mx-auto max-w-7xl">
                                        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">

                                            <style jsx>{`.bg-color {background-color: ${recommendedProductsData?.recommendedProductBackgroundColorCode?.value};}`}</style>
                                            <div className="flex max-w-xl bg-color py-16 sm:py-24 lg:py-10 px-6 lg:px-8">
                                                <img src={recommendedProductsData?.recommendedProductBackgroundImage?.expandedValue?.url} alt="allergy relief" className="pr-6" />
                                                <div>
                                                    <p className="mt-4 text-lg">test Allergy relief that starts working fast on the first day you take it.</p>
                                                    <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right">{recommendedProductsData?.recommendedProductButtonText?.value}</div>
                                                </div>
                                            </div>
                                            <div className="flex max-w-xl bg-color py-16 sm:py-24 lg:py-10 px-6 lg:px-8">
                                                <img src={recommendedProductsData?.recommendedProductBackgroundImage?.expandedValue?.url} alt="allergy relief" className="pr-6" />
                                                <div>
                                                    <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                                    <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right">{recommendedProductsData?.recommendedProductButtonText?.value}</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Health needs Promotional banner section ends */}

                            {/* Health needs Promotional banner section starts */}
                            <div className="mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-6">
                                <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden border border-slate-400 lg:block">
                                    <img src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/image_background.png" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
                                </div>
                                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                    <div className="flex max-w-xl lg:max-w-lg border border-slate-400 px-6 lg:px-8">
                                        <img src="images/allergy-relief.png" alt="allergy relief" className="pr-6" />
                                        <div>
                                            <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                            <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right">Where to buy</div>
                                        </div>
                                    </div>
                                    <div className="flex max-w-xl lg:max-w-lg border border-slate-400 px-6 lg:px-8">
                                        <img src="images/allergy-relief.png" alt="allergy relief" className="pr-6" />
                                        <div>
                                            <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                            <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer float-right">Where to buy</div>
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