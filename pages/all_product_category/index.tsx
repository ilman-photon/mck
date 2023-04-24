import useAxios from "@/hooks/useApi";
import CarouselComponent from "@/components/carousel";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoryComponent from "@/components/category/index1";
import { useRouter } from "next/router";

function AllProductCategoryPage() {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState<any>();
  const [categoryError, setCategoryError] = useState<any>();
  const [categoryLoading, setCategoryLoding] = useState<any>(true);
  const [productFilter, setProductFilter] = useState<any>();
  const [acuteCareData, setAcuteCareData] = useState<any>();
  const [acuteCareError, setAcuteCareError] = useState<any>();
  const [acuteCareLoading, setAcuteCareLoding] = useState<any>(true);
  const [recommendedAcuteCare, setRecommendedAcuteCare] = useState<any>();
  const [recommendedAcuteCareLoading, setRecommendedAcuteCareLoading] =
    useState<any>(true);
  const [preventiveCareData, setPreventiveCareData] = useState<any>();
  const [recommendedPreventiveCare, setRecommendedPreventiveCare] =
    useState<any>();
  const [everyDayCareData, setEveryDayCareData] = useState<any>();
  const [recommendedEveryDayCare, setRecommendedEveryDayCare] = useState<any>();
  const [diagnosticCareData, setDiagnosticCareData] = useState<any>();
  const [recommendedDiagnosticCare, setRecommendedDiagnosticCare] =
    useState<any>();

  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/home/&expand=*&Select=blockArea",
    headers: {
      "Accept-Language": "en",
    },
  });

  useEffect(() => {
    fetchCategoryId()
      .then((res) => {
        const id = res?.data[0]?.productCategory?.value[0]?.contentLink?.id;
        let categoryIds = axios.get(
          `https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/${id}`,
          {
            headers: {
              "Accept-Language": "en",
            },
          }
        );

        categoryIds
          .then((res) => {
            setCategoryData(res.data);
            setCategoryLoding(false);
          })
          .catch((e) => {
            setCategoryLoding(true);
            setCategoryError(e);
            console.log(e);
          });
      })
      .catch((e) => {
        setCategoryLoding(true);
        setCategoryError(e);
      });

    FetchProductFilter()
      .then((response) => {
        setProductFilter(response);
      })
      .catch((e) => console.log(e));

    fetchAcuteCarePruducts()
      .then((res) => {
        setAcuteCareData(res);
        setAcuteCareLoding(false);
      })
      .catch((e) => {
        setAcuteCareError(e);
        setAcuteCareLoding(true);
      });

    acuteCareRecommendation()
      .then((res) => {
        setRecommendedAcuteCare(res);
        console.log("acuteCareRecommendation", res);
        setRecommendedAcuteCareLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setRecommendedAcuteCareLoading(true);
      });

    fetchPreventiveCarePruducts()
      .then((res) => {
        setPreventiveCareData(res);
      })
      .catch((e) => {
        console.log(e);
      });

    preventiveCareRecommendation()
      .then((res) => {
        setRecommendedPreventiveCare(res);
      })
      .catch((e) => {
        console.log(e);
      });

    fetchEveryDayCarePruducts()
      .then((res) => {
        setEveryDayCareData(res);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log("everyDayCareRecommendation", everyDayCareRecommendation());
    setRecommendedEveryDayCare(everyDayCareRecommendation());

    fetchDiagnosticCarePruducts()
      .then((res) => {
        setDiagnosticCareData(res);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log("diagnosticCareRecommendation", diagnosticCareRecommendation());
    setRecommendedDiagnosticCare(diagnosticCareRecommendation());
  }, []);

  function fetchCategoryId() {
    return axios.get(
      "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/product-category-setting/?expand=*",
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
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

  function fetchAcuteCarePruducts() {
    return axios.get(
      "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Acute Care') and ContentType/any(t:t eq 'ProductDetailsPage'))",
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  const acuteCareRecommendation = async () => {
    return await acuteCareData?.data?.results.filter((item: any) => {
      return item.recommendedProduct.value;
    });
  };

  function fetchPreventiveCarePruducts() {
    return axios.get(
      "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Preventative Care') and ContentType/any(t:t eq 'ProductDetailsPage'))",
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  async function preventiveCareRecommendation() {
    return await recommendedPreventiveCare?.data?.results.filter(
      (item: any) => {
        return item.recommendedProduct.value;
      }
    );
  }

  function fetchEveryDayCarePruducts() {
    return axios.get(
      "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Every Day Care') and ContentType/any(t:t eq 'ProductDetailsPage'))",
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function diagnosticCareRecommendation() {
    return recommendedDiagnosticCare?.data?.results.filter((item: any) => {
      return item.recommendedProduct.value;
    });
  }

  function fetchDiagnosticCarePruducts() {
    return axios.get(
      "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/search/content?filter=((productType/value/name eq 'Diagnostic Care') and ContentType/any(t:t eq 'ProductDetailsPage'))",
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  function everyDayCareRecommendation() {
    return recommendedEveryDayCare?.data?.results.filter((item: any) => {
      return item.recommendedProduct.value;
    });
  }

  function filteredData(valueType: string) {
    return response?.data[0]?.blockArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }

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
      {categoryLoading && <p>Loading...</p>}
      {categoryError && <p>{categoryError.message}</p>}
      {!categoryLoading && !categoryError && categoryData && (
        <CategoryComponent sectionData={[categoryData]} />
      )}
      <div className="container lg:p-18">
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
                <label htmlFor="category-name" className="ml-2">
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
                <label htmlFor="category-name" className="ml-2">
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
                <label htmlFor="category-name" className="ml-2">
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
                <label htmlFor="category-name" className="ml-2">
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
                <label htmlFor="category-name" className="ml-2">
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
                <label htmlFor="category-name" className="ml-2">
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
                <label htmlFor="category-name" className="ml-2">
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
                <label htmlFor="category-name" className="ml-2">
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
                <label htmlFor="category-name" className="ml-2">
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
            <div className="container mx-auto">
              <div className="section-title">Acute Care</div>
              {!recommendedAcuteCareLoading && recommendedAcuteCare && (
                <div className="grid md:grid-cols-2 lg:grid-cols-2">
                  {recommendedAcuteCare?.map((item: any) => {
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
                  })}
                </div>
              )}
              <div className="flex gap-0.5 flex-wrap product-list-container">
                {acuteCareData?.data?.results.map((item: any) => {
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

              <div className="section-title">Preventive Care</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                {recommendedPreventiveCare &&
                  recommendedPreventiveCare?.map((item: any) => {
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
                              {item?.buttonText?.value || "No Name"}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="flex gap-0.5 flex-wrap product-list-container">
                {preventiveCareData?.data?.results.map((item: any) => {
                  return (
                    <div
                      className="w-52 h-96 border-2 product-list-item"
                      key={item?.contentLink?.id}
                    >
                      <img src={item?.image?.value?.url} alt="" />
                      <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                      Preventive Care
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

              <div className="section-title">Every Day Care</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                {recommendedEveryDayCare?.map((item: any) => {
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
                            onClick={() => handleCTABtn(item?.buttonUrl?.value)}
                          >
                            {item?.buttonText?.value || "No Name"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-0.5 flex-wrap product-list-container">
                {everyDayCareData?.data?.results.map((item: any) => {
                  return (
                    <div
                      className="w-52 h-96 border-2 product-list-item"
                      key={item?.contentLink?.id}
                    >
                      <img src={item?.image?.value?.url} alt="" />
                      <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                      Every Day Care
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

              <div className="section-title">Diagnostic Care</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                {recommendedDiagnosticCare?.map((item: any) => {
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
                            onClick={() => handleCTABtn(item?.buttonUrl?.value)}
                          >
                            {item?.buttonText?.value || "No Name"}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-0.5 flex-wrap product-list-container">
                {diagnosticCareData?.data?.results.map((item: any) => {
                  return (
                    <div
                      className="w-52 h-96 border-2 product-list-item"
                      key={item?.contentLink?.id}
                    >
                      <img src={item?.image?.value?.url} alt="" />
                      <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey">
                      Diagnostic Care
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
      </div>
      <FooterComponent />
    </>
  );
}

export default AllProductCategoryPage;
