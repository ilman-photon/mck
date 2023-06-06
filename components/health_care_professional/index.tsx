import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HeaderImage from "../../public/images/health-professional.png";
import Quotes from "../../public/images/teamcarousel-quotes.png";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import CarouselComponent from "../carousel";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import { ImageComponent } from "../global/ImageComponent";

SwiperCore.use([Navigation, Autoplay]);

function HealthCareProfessionalComponent() {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<any>();
  const [customers, setCustomers] = useState<any>();
  const [customerReviewTitle, setCustomerReviewTitle] = useState<any>();
  const [reviewCount, setReviewCount] = useState<number>(1);
  const [customerBackgroundColorCode, setCustomerBackgroundColorCode] =
    useState();
  const [descriptionValue, setDescriptionValue] = useState<any>();
  const [carouselRelated, setCarouselRelated] = useState<any>();
  const [tabRelated, setTabRelated] = useState<any>([]);
  const [tabSelected, setTabSelected] = useState("Key Benefits");
  const [tabClicked, setTabClicked] = useState<any[]>();
  const [isMobile, setIsMobile] = useState(false);

  const handleTabClick = (idx: any, tabTitle: string) => {
    setTabSelected(tabTitle);
    const updated = tabClicked?.map((tab: any) => {
      if (tab?.title?.value === tabTitle) {
        tab.flag = !tab.flag;
      } else {
        tab.flag = false;
      }
      return tab;
    });
    setTabClicked(updated);
  };

  const [ApiRespond, setApiRespond] = useState<any>();
  const url = `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/health-care-professionals/&expand=*`;

  const fetchUrl = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url, {
        headers: { "Accept-Language": "en" },
      });
      if (Object.keys(res?.data).length > 0) {
        setResponse(res?.data[0]);
      } else {
        setResponse(null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUrl();
  }, []);

  useEffect(() => {
    if (response && Object.keys(response).length > 0) {
      const {
        contentArea: { expandedValue },
      } = response;
      const {
        contentBlockArea: { expandedValue: carouselRelated },
      } = expandedValue[0];
      var customerReview: string = "";
      var customerReviewTitle: string = "";
      var backgroundColorCode: any = {};
      var customers: any = {};
      var descriptionValue: string = "";
      var tabRelated: any = [];

      expandedValue.map((item: any, index: number) => {
        if (item.contentType[1] == "CustomerReviewBlock") {
          const {
            name,
            title,
            backgroundColorCode: backgroundColor,
            contentBlockArea: { expandedValue: customersReviewContent },
          } = expandedValue[index];

          customerReview = name;
          customerReviewTitle = title;
          backgroundColorCode = backgroundColor;
          customers = customersReviewContent;
        } else if (item.contentType[1] == "CategoryFeatureBlock") {
          descriptionValue =
            expandedValue[index]?.description?.value ||
            "Default Description Value";
          tabRelated =
            expandedValue[index]?.contentBlockArea?.expandedValue || [];
        }
      });

      setCustomers(customers);
      setCustomerReviewTitle(customerReviewTitle);
      setCustomerBackgroundColorCode(backgroundColorCode?.value);
      setDescriptionValue(descriptionValue);
      setTabRelated(tabRelated);
      setTabClicked([
        ...tabRelated?.map((a: any, idx: number) => ({
          ...a,
          flag: idx === 0 ? true : false,
        })),
      ]);
      setCarouselRelated(carouselRelated);
    }
  }, [response]);

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    document.title =
      ApiRespond?.data[0]?.title.value || "Health Care Professional";
  }, [ApiRespond]);

  useEffect(() => {
    const setPageNameAsClassName = () => {
      const pageName: string = "health-care-component";
      document.body.className = pageName;
    };
    setPageNameAsClassName();
  }, []);

  function filteredData(valueType: string) {
    return response?.contentArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 968);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div
            className="relative"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Image
              src={gifImage}
              {...(gifImage ? { width: 400, height: 400 } : {})}
              alt="coba-image"
              loading="eager"
              role="image"
            />
          </div>
        </div>
      ) : (
        <div>
          {response &&
            response?.contentArea?.expandedValue &&
            Object.keys(response).length > 0 && (
              <>
                <div className="w-full mx-auto">
                  {carouselRelated && carouselRelated?.length > 0 && (
                    <div>
                      <CarouselComponent
                        sectionData={filteredData("CarouselBlock")}
                      />
                      <div className="bg-gradient absolute"></div>
                    </div>
                  )}
                </div>

                <div
                  className={`lg:p-72 pt-6 lg:pb-16 pb-4 lg:mt-[72px] lg:pt-[72px] mt-6`}
                  style={{ background: customerBackgroundColorCode }}
                >
                  <div className="container mx-auto">
                    <h1
                      className="text-gtl-med lg:text-54 text-27 font-medium text-mckblue text-center pb-6"
                      id="hcp-label-1"
                    >
                      {customerReviewTitle?.value}
                    </h1>
                    <div className="relative lg:p-0 px-6">
                      <Swiper
                        spaceBetween={48}
                        navigation={isMobile ? false : true}
                        autoplay={isMobile ? { delay: 3000 } : false}
                        slidesPerView={isMobile ? "auto" : 3}
                        slidesPerGroup={isMobile ? 1 : 3}
                        className="h-auto"
                        onSlideChange={(swiper) => {
                          setReviewCount(Math.ceil(swiper.activeIndex / 3) + 1);
                        }}
                      >
                        {response &&
                          customers &&
                          customers.length > 0 &&
                          customers.map((customer: any, idx: number) => {
                            return (
                              <SwiperSlide
                                key={idx}
                                className="swiper-slide lg:mb-8 md:mb-6 sm:mb-2 mb-1"
                              >
                                <div className="bg-mckwhite shadow-whatpeoplesaying rounded-lg  lg:p-6 lg:pb-54 p-4 relative lg:h-[220px]">
                                  <div
                                    key={customer?.customerName?.value}
                                    className="content-wrapper lg:h-136 lg:overflow-auto textoverflow-scroll"
                                  >
                                    <div
                                      className="text-sofia-reg text-base font-normal text-mckblack mb-4 lg:min-h-[96px]"
                                      id={`hcp-label-000${idx}`}
                                      dangerouslySetInnerHTML={{
                                        __html: customer?.reviewComment?.value,
                                      }}
                                    ></div>
                                    <div
                                      className="text-sofia-reg text-base font-medium text-mckblue lg:mb-0 mb-8"
                                      id={`hcp-label-0000${idx}`}
                                    >
                                      {customer.customerName?.value} -{" "}
                                      {customer?.customerQualification?.value}{" "}
                                    </div>
                                  </div>

                                  <div className="w-full absolute left-0 -bottom-11">
                                    <svg
                                      width="84"
                                      height="84"
                                      className="mx-auto shadow-circleshadow rounded-full"
                                      viewBox="0 0 84 84"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        width="84"
                                        height="84"
                                        rx="42"
                                        fill="white"
                                      />
                                      <path
                                        d="M38 49.9841C38 56.6115 32.6274 61.984 26 61.984C19.3726 61.984 14 56.6115 14 49.9841C14 28.041 33 19.717 33 22.5508C33 22.5508 23 28.2834 26 35.7167C29 43.15 38 43.3567 38 49.9841Z"
                                        fill="#A7C8E9"
                                      />
                                      <path
                                        d="M70 49.9841C70 56.6115 64.6274 61.984 58 61.984C51.3726 61.984 46 56.6115 46 49.9841C46 28.041 65 19.717 65 22.5508C65 22.5508 55 28.2834 58 35.7167C61 43.15 70 43.3567 70 49.9841Z"
                                        fill="#A7C8E9"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </SwiperSlide>
                            );
                          })}
                      </Swiper>
                    </div>
                    <div className="text-sofia-reg text-xl font-normal text-mckblue text-center lg:pt-4">
                      {reviewCount}/{Math.ceil(customers?.length / 3)}
                    </div>
                  </div>
                </div>
                <div className="container mx-auto lg:pl-8 lg:pr-54 lg:pt-12 pt-6 pb-0">
                  <div
                    className="text-sofia-reg lg:text-32 text-xl font-extrabold text-mckblue text-center lg:leading-10 lg:pb-12 pb-6 lg:max-w-5xl max-w-sm mx-auto"
                    id="hcp-btn-007"
                    dangerouslySetInnerHTML={{ __html: descriptionValue }}
                  />
                  <div className="NavTabs_Contain lg:px-0 px-4 keybenefits-navatabs-wrapper">
                    <div className="tabs border border-mckthingrey rounded-lg overflow-hidden">
                      {tabRelated &&
                        tabRelated.length > 0 &&
                        tabRelated?.map((tab: any, idx: number) => {
                          const { value } = tab?.tabColorCode;
                          return (
                            <React.Fragment key={idx}>
                              <input
                                type="radio"
                                name="tabs"
                                id={tab?.title?.value}
                                checked={
                                  isMobile
                                    ? tabClicked &&
                                      tabClicked[idx]?.flag &&
                                      tab?.title?.value === tabSelected
                                    : tab?.title?.value === tabSelected
                                }
                                onClick={() =>
                                  handleTabClick(idx, tab?.title?.value)
                                }
                              />
                              <label
                                htmlFor={tab?.title?.value}
                                className={`flex text-sofia-reg text-base font-extrabold text-mckblue text-center uppercase 
                                cursor-pointer border border-mckthingrey items-center py-4 lg:px-0 px-4 relative`}
                                style={{ background: value }}
                              >
                                {tab?.tabImage?.expandedValue?.url ? (
                                  <ImageComponent
                                    src={tab?.tabImage?.expandedValue?.url}
                                    id={tab?.tabImage?.expandedValue?.url}
                                    className="mr-3"
                                    alt="check"
                                  />
                                ) : (
                                  <div className="px-3 flex lg:hidden md:hidden">
                                    &nbsp;
                                  </div>
                                )}

                                {tab?.tabTitle?.value}
                                <svg
                                  className="lg:hidden block absolute right-5"
                                  width="12"
                                  height="9"
                                  viewBox="0 0 12 9"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1.41 0.961914L6 5.54191L10.59 0.961914L12 2.37191L6 8.37191L0 2.37191L1.41 0.961914Z"
                                    fill="#001A71"
                                  />
                                </svg>
                              </label>
                              <div className="tab py-6 px-6 lg:min-h-[700px]">
                                <h2
                                  className="text-gtl-med lg:text-5xl text-2xl text-mckblue font-medium lg:pb-12 pb-6"
                                  id={`hcp-label-0${idx}`}
                                >
                                  {tab?.title?.value}
                                </h2>
                                <div
                                  className="text-sofia-reg lg:text-32 text-xl text-mckblue font-extrabold lg:pb-6 pb-6 key-description-wrapper"
                                  id={`hcp-label-00${idx}`}
                                  dangerouslySetInnerHTML={{
                                    __html: tab?.description?.value,
                                  }}
                                />
                              </div>
                            </React.Fragment>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </>
            )}
        </div>
      )}
    </>
  );
}
export default HealthCareProfessionalComponent;
