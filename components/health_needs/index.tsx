import useAxios from "@/hooks/useApi";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

const HealthNeedsComponent = () => {

    const router = useRouter();
    const [productListData, SetProductListData] = useState<any>();
    const [recommendedProductListData, SetRecommendedProductListData] =
        useState<any>();
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
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category-setting/?expand=*`,
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
                console.log("FetchProductList", res);
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

    const handleCheckBox = (e: any, filter: any) => {
        console.log("handleCheckBox", e, filter);
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

    // Health needs - list of categories
    const [healthNeedData, SetHealthNeedData] = useState<any>();

    function fetchHealthNeedsCategories() {
        return axios.get(
            //`https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category-setting/&expand=*`,

            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/product-category-setting/&expand=*`,

            {
                headers: {
                    "Accept-Language": "en",
                },
            }
        );
    }

    useEffect(() => {
        fetchHealthNeedsCategories()
            .then((res) => {
                SetHealthNeedData(res.data[0]?.healthNeedsHighlight?.expandedValue[0]);
            })
            .catch((e: Error | AxiosError) => console.log(e));
    }, []);

    console.log("healthNeedData---", healthNeedData);

    return (

        <>

            <div className="container w-full mx-auto grid grid-cols-1">

                <div className="health-needs-categories">
                    <div className="health-needs-categories-icons">
                        <ul>
                            {healthNeedData?.healthNeedItem?.expandedValue?.map((bdata: any) => (

                                <li key={bdata?.contentLink?.id}><img src={bdata?.image?.expandedValue?.url} />{bdata?.title?.value}</li>

                            ))}
                        </ul>
                    </div>
                </div>

                <div className="container lg:p-18">
                    <div className="flex">
                        Active Filter :
                        <div className="flex">
                            {activeFilter.map((item: any) => {
                                return <div key={item}>{item}</div>;
                            })}
                            <div onClick={() => setActiveFilter([])}>Clear All</div>
                        </div>
                    </div>
                    {/* <div>Showing 65 results</div> */}
                    <div className="flex">
                        <div className="flex-none h-max">
                            <div className="border-r-2 border-b-2 pb-3">
                                <div className="flex items-center my-px">
                                    <img
                                        id="acute"
                                        src={productFilter?.data[0].acuteImage?.value?.url}
                                        alt=""
                                    />
                                    <label htmlFor="acute" className="ml-2 filter-title">
                                        {productFilter?.data[0].acuteLabel?.value}
                                    </label>
                                </div>

                                {productFilter?.data[0].productTypeAcute?.value?.map(
                                    (item: any) => {
                                        return (
                                            <div
                                                className="flex items-center my-px"
                                                key={item?.id}
                                                onClick={(e) => handleCheckBox(e, item?.name)}
                                            >
                                                <input
                                                    id={item?.name}
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4"
                                                />
                                                <label htmlFor={item?.name} className="ml-2">
                                                    {item?.name}
                                                </label>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                            <div className="border-r-2 border-b-2 pt-3 pb-3">
                                <div className="flex items-center my-px">
                                    <img
                                        id="category-name"
                                        src={productFilter?.data[0].preventiveCareImage?.value?.url}
                                        alt=""
                                    />
                                    <label htmlFor="category-name" className="ml-2 filter-title">
                                        {productFilter?.data[0].preventiveCareLabel?.value}
                                    </label>
                                </div>

                                {productFilter?.data[0].productTypePreventiveCare?.value?.map(
                                    (item: any) => {
                                        return (
                                            <div className="flex items-center my-px" key={item?.id}>
                                                <input
                                                    id="default-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4"
                                                />
                                                <label htmlFor="default-checkbox" className="ml-2">
                                                    {item?.name}
                                                </label>
                                            </div>
                                        );
                                    }
                                )}
                            </div>

                            <div className="border-r-2 border-b-2 pt-3 pb-3">
                                <div className="flex items-center my-px">
                                    <img
                                        id="category-name"
                                        src={productFilter?.data[0].everyDayCareImage?.value?.url}
                                        alt=""
                                    />
                                    <label htmlFor="category-name" className="ml-2 filter-title">
                                        {productFilter?.data[0].everyDayCareLabel?.value}
                                    </label>
                                </div>
                                {productFilter?.data[0].productTypeEveryDayCare?.value?.map(
                                    (item: any) => {
                                        return (
                                            <div className="flex items-center my-px" key={item?.id}>
                                                <input
                                                    id="default-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4"
                                                />
                                                <label htmlFor="default-checkbox" className="ml-2">
                                                    {item?.name}
                                                </label>
                                            </div>
                                        );
                                    }
                                )}
                            </div>

                            <div className="border-r-2 border-b-2 pt-3 pb-3">
                                <div className="flex items-center my-px">
                                    <img
                                        id="category-name"
                                        src={productFilter?.data[0].diagnosticCareImage?.value?.url}
                                        alt=""
                                    />
                                    <label htmlFor="category-name" className="ml-2 filter-title">
                                        {productFilter?.data[0].diagnosticCareLabel?.value}
                                    </label>
                                </div>
                                {productFilter?.data[0].productTypeDiagnosticCare?.value?.map(
                                    (item: any) => {
                                        return (
                                            <div className="flex items-center my-px" key={item?.id}>
                                                <input
                                                    id="default-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4"
                                                />
                                                <label htmlFor="default-checkbox" className="ml-2">
                                                    {item?.name}
                                                </label>
                                            </div>
                                        );
                                    }
                                )}
                            </div>

                            <div className="border-r-2 border-b-2 pt-3 pb-3">
                                <div className="flex items-center my-px">
                                    <img
                                        id="category-name"
                                        src={
                                            productFilter?.data[0].healthNeedsCategoryImage?.value?.url
                                        }
                                        alt=""
                                    />
                                    <label htmlFor="category-name" className="ml-2 filter-title">
                                        {productFilter?.data[0].healthNeedsCategoryLabel?.value}
                                    </label>
                                </div>
                                {productFilter?.data[0].healthNeedsCategory?.value?.map(
                                    (item: any) => {
                                        return (
                                            <div className="flex items-center my-px" key={item?.id}>
                                                <input
                                                    id="default-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4"
                                                />
                                                <label htmlFor="default-checkbox" className="ml-2">
                                                    {item?.name}
                                                </label>
                                            </div>
                                        );
                                    }
                                )}
                            </div>

                            <div className="border-r-2 border-b-2 pt-3 pb-3">
                                <div className="flex items-center my-px">
                                    <img
                                        id="category-name"
                                        src={productFilter?.data[0].genderCategoryImage?.value?.url}
                                        alt=""
                                    />
                                    <label htmlFor="category-name" className="ml-2 filter-title">
                                        {productFilter?.data[0].genderCategoryLabel?.value}
                                    </label>
                                </div>
                                {productFilter?.data[0].genderCategory?.value?.map(
                                    (item: any) => {
                                        return (
                                            <div className="flex items-center my-px" key={item?.id}>
                                                <input
                                                    id="default-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4"
                                                />
                                                <label htmlFor="default-checkbox" className="ml-2">
                                                    {item?.name}
                                                </label>
                                            </div>
                                        );
                                    }
                                )}
                            </div>

                            <div className="border-r-2 border-b-2 pt-3 pb-3">
                                <div className="flex items-center my-px">
                                    <img
                                        id="category-name"
                                        src={productFilter?.data[0].ageCategoryImage?.value?.url}
                                        alt=""
                                    />
                                    <label htmlFor="category-name" className="ml-2 filter-title">
                                        {productFilter?.data[0].ageCategoryLabel?.value}
                                    </label>
                                </div>
                                {productFilter?.data[0].ageCategory?.value?.map((item: any) => {
                                    return (
                                        <div className="flex items-center my-px" key={item?.id}>
                                            <input
                                                id="default-checkbox"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4"
                                            />
                                            <label htmlFor="default-checkbox" className="ml-2">
                                                {item?.name}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="border-r-2 border-b-2 pt-3 pb-3">
                                <div className="flex items-center my-px">
                                    <img
                                        id="category-name"
                                        src={productFilter?.data[0].formCategoryImage?.value?.url}
                                        alt=""
                                    />
                                    <label htmlFor="category-name" className="ml-2 filter-title">
                                        {productFilter?.data[0].formCategoryLabel?.value}
                                    </label>
                                </div>
                                {productFilter?.data[0].formCategory?.value?.map((item: any) => {
                                    return (
                                        <div className="flex items-center my-px" key={item?.id}>
                                            <input
                                                id="default-checkbox"
                                                type="checkbox"
                                                value=""
                                                className="w-4 h-4"
                                            />
                                            <label htmlFor="default-checkbox" className="ml-2">
                                                {item?.name}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="border-r-2 border-b-2 pt-3 pb-3">
                                <div className="flex items-center my-px">
                                    <img
                                        id="category-name"
                                        src={
                                            productFilter?.data[0].availabilityCategoryImage?.value?.url
                                        }
                                        alt=""
                                    />
                                    <label htmlFor="category-name" className="ml-2 filter-title">
                                        {productFilter?.data[0].availabilityCategoryLabel?.value}
                                    </label>
                                </div>
                                {productFilter?.data[0].availabilityCategory?.value?.map(
                                    (item: any) => {
                                        return (
                                            <div className="flex items-center my-px" key={item?.id}>
                                                <input
                                                    id="default-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-4 h-4"
                                                />
                                                <label htmlFor="default-checkbox" className="ml-2">
                                                    {item?.name}
                                                </label>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                        <div className="flex-auto">
                            <div className="">
                                <div className="container mx-auto">
                                    <div className="grid md:grid-cols-2 lg:grid-cols-2">
                                        {recommendedProductListData?.data?.results.map(
                                            (item: any) => {
                                                return (
                                                    <div
                                                        className="bg-color m-3 p-9"
                                                        key={item?.contentLink?.id}
                                                    >
                                                        <style jsx>{`
                        .bg-color {
                          background-color: ${item?.backgroundColor?.value};
                        }
                      `}</style>
                                                        <div className="logo-img mb-3">
                                                            <img
                                                                className="h-auto max-w-full"
                                                                src="" // {item?.imageTitle?.value?.url}
                                                                alt="" // {item?.title?.value}
                                                            />
                                                        </div>
                                                        <div className="grid md:grid-cols-2 lg:grid-cols-2">
                                                            <div className="pr-3 my-auto">
                                                                <img
                                                                    className="h-auto w-auto"
                                                                    src={item?.image?.value.url}
                                                                />
                                                            </div>
                                                            <div className="text-justify">
                                                                <div
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item?.highlightDescription?.value,
                                                                    }}
                                                                ></div>
                                                                <div
                                                                    className="w-36 text-center blue-bg rounded text-white align-middle py-3 mt-5 font-bold"
                                                                    onClick={() =>
                                                                        handleCTABtn(item?.buttonUrl?.value)
                                                                    }
                                                                >
                                                                    {item?.buttonText?.value || "WHERE TO BUY"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-0.5 flex-wrap product-list-container">
                                {productListData?.data?.results.map((item: any) => {
                                    return (
                                        <div
                                            className="w-52 h-96 border-2 product-list-item"
                                            key={item?.contentLink?.id}
                                        >
                                            <img src={item?.image?.value?.url} alt="" />
                                            <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                                                Acute Care
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
                            <div className="product-where-to-buy grid grid-cols-1 px-6">
                                    <div className="relative isolate overflow-hidden border bg-slate-200 py-16 sm:py-24 lg:py-10">
                                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                                                <div className="flex max-w-xl lg:max-w-lg border bg-slate-200">
                                                    <img src="images/allergy-relief.png" alt="allergy relief" className="pr-6" />
                                                    <div>
                                                        <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                                        <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">Learn More</div>
                                                    </div>
                                                </div>
                                                <div className="flex max-w-xl lg:max-w-lg border bg-slate-200">
                                                    <img src="images/childrens-allergy-relief.png" alt="allergy relief" className="pr-6" />
                                                    <div>
                                                        <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                                        <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">Learn More</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* <!-- Image gallery --> */}
                                <div className="mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-6">
                                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden border border-slate-400 lg:block">
                                        <img src="https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/image_background.png" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
                                    </div>
                                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                        <div className="flex max-w-xl lg:max-w-lg border border-slate-400">
                                            <img src="images/allergy-relief.png" alt="allergy relief" className="pr-6" />
                                            <div>
                                                <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                                <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">Learn More</div>
                                            </div>
                                        </div>
                                        <div className="flex max-w-xl lg:max-w-lg border border-slate-400">
                                            <img src="images/allergy-relief.png" alt="allergy relief" className="pr-6" />
                                            <div>
                                                <p className="mt-4 text-lg">Allergy relief that starts working fast on the first day you take it.</p>
                                                <div id="cta-btn" className="jsx-290076256 w-[124px] h-[44px] m-3 ml-0 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 uppercase cursor-pointer">Learn More</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default HealthNeedsComponent;