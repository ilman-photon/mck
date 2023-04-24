import useAxios from "@/hooks/useApi";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import CarouselComponent from "@/components/carousel";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";

function ProductListPage() {
  const router = useRouter();
  const [productListData, SetProductListData] = useState<any>();
  const [recommendedProductListData, SetRecommendedProductListData] =
    useState<any>();
  const [productFilter, setProductFilter] = useState<any>();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/home/&expand=*&Select=blockArea",
    headers: {
      "Accept-Language": "en",
    },
  });

  function filteredData(valueType: string) {
    return response?.data[0]?.blockArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }

  function FetchProductFilter() {
    return axios.get(
      `https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category-setting/?expand=*`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function fetchRecommandedProduct() {
    return axios.get(
      `https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Acute care' or  productType/value/name eq 'Preventative Care') and ContentType/any(t:t eq 'ProductDetailsPage') and (recommendedProduct/value eq true))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function FetchProductList() {
    const res = axios.get(
      `https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Acute Care') and ContentType/any(t:t eq 'ProductDetailsPage'))`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );

    return res;
  }

  useEffect(() => {
    FetchProductFilter()
      .then((response) => {
        console.log("response", response);
        setProductFilter(response);
      })
      .catch((e) => console.log(e));

    fetchRecommandedProduct()
      .then((response) => {
        SetRecommendedProductListData(response);
      })
      .catch((e: Error | AxiosError) => console.log(e));

    FetchProductList()
      .then((response) => {
        SetProductListData(response);
      })
      .catch((e: Error | AxiosError) => console.log(e));
  }, []);

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: "",
    });
  };

  return (
    <>
      <HeaderComponent />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && response && (
        <CarouselComponent sectionData={filteredData("CarouselBlock")} />
      )}
      <div className="container lg:p-18 mx-auto">
        {/* <div>Active Filter</div>
        <div>Showing 65 results</div> */}
        <div className="flex">
          <div className="flex-none h-max">
            <div className="border-r-2 border-b-2 pb-3">
              <div className="flex items-center my-px">
                <img
                  id="category-name"
                  src={productFilter?.data[0].acuteImage?.value?.url}
                  alt=""
                />
                <label htmlFor="category-name" className="ml-2 filter-title">
                  {productFilter?.data[0].acuteLabel?.value}
                </label>
              </div>

              {productFilter?.data[0].productTypeAcute?.value?.map(
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
                    <div className="mckblue product-list-title">{item?.name}</div>
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
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default ProductListPage;
