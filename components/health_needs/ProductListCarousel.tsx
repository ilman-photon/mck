import React, { useEffect, useState } from "react";
import { useWindowResize } from "@/hooks/useWindowResize";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Autoplay, A11y } from "swiper";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import RecommendationalProductComponent from "../recommendational_product";
import ProductSearchCard from "../product_list/ProductSearchCard";
SwiperCore.use([Navigation, Autoplay]);
const ProductComponent = ({
  selectedProduct,
  sectionData,
  selectedRecommendedProduct,
  filterClicked,
  productSearchCard,
}: any) => {
  const [windowWidth] = useWindowResize();
  const [isMobile, setIsMobile] = useState(windowWidth >= 968 ? false : true);
  const [reviewCount, setReviewCount] = useState<number>(1);

  useEffect(() => {
    setIsMobile(windowWidth >= 968 ? false : true);
  }, [windowWidth]);
  const handleProduct = (item: any, index: number) => {
    const filteredSection = sectionData.filter((section: any) => {
      const tempName = section?.recommendedProductCategory?.value[0]?.name;
      const itemName = tempName?.toLowerCase().replace(/[^\w\s]/gi, "");
      const searchItem = item?.toLowerCase().replace(/[^\w\s]/gi, "");
      return itemName.includes(searchItem);
    });

    if (filteredSection.length > 0) {
      return (
        <RecommendationalProductComponent
          indexs={index}
          sectionData={filteredSection.map((section: any) => section)}
        />
      );
    }
    return null;
  };
  const handleOnSlideChange = (swiper: any) => {
    if (isMobile) {
      swiper.autoplay.running = true;
      setReviewCount(() => Math.ceil(swiper.activeIndex) + 1);
    } else {
      swiper.autoplay.running = false;
      setReviewCount(() => Math.ceil(swiper.activeIndex / 6) + 1);
    }
  };
  return (
    <>
      {selectedProduct?.map((product: any, index: number) => (
        <div key={index}>
          {selectedRecommendedProduct?.map((item: any, idx: number) => {
            let correctItemValue = item
              ?.toLowerCase()
              .replace(/[^\w\s]/gi, "")
              .replace(/\s+/g, "");
            let correctProductValue = product?.item?.name
              ?.toLowerCase()
              .replace(/[^\w\s]/gi, "")
              .replace(/\s+/g, "");
            if (correctItemValue === correctProductValue) {
              return handleProduct(item, index);
            }
            return null;
          })}
          <section className="relative">
            <h2
              className="text-mckblue lg:text-5xl text-[27px] font-medium text-gtl-med lg:pb-0 pb-4 pt-0 lg:pt-0"
              id={`hn_label_00_${index}`}
              aria-label={product?.item?.name}
            >
              {product?.data?.results?.length > 0
                ? product?.item?.name
                : filterClicked
                ? product?.item?.name
                : null}
            </h2>

            {product?.data?.results?.length > 0 ? (
              <>
                {productSearchCard ? (
                  <div className="grid mobile:grid-cols-2 md:grid-cols-3  desktop:grid-cols-4 lg:grid-cols-5 pt-4 lg:pt-0 lg:mb-0 break-words">
                    {product?.data?.results?.map((item: any, idxs: number) => {
                      return (
                        <ProductSearchCard
                          cardData={item}
                          key={item.id}
                          product={product}
                          indexs={idxs}
                          mainIndex={index}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <>
                    <div className="lg:pt-6 lg:pb-12 pb-6 lg:m-21">
                      <Swiper
                        spaceBetween={4}
                        navigation={isMobile ? false : true}
                        slidesPerView={isMobile ? "auto" : 6}
                        slidesPerGroup={isMobile ? 1 : 6}
                        autoplay={isMobile ? { delay: 3000 } : false}
                        className="lg:h-480 h-350"
                        onSlideChange={(swiper) => {
                          handleOnSlideChange(swiper);
                        }}
                        a11y={{
                          prevSlideMessage:"",
                          nextSlideMessage: "",
                          firstSlideMessage:"",
                          lastSlideMessage:"",
                        }
                        }
                        modules={[A11y]}
                      >
                        {product?.data?.results?.map(
                          (item: any, idxs: number) => {
                            return (
                              <SwiperSlide
                                key={item?.contentLink?.id}
                                className="swiper-slide-custom"
                              >
                                <ProductCard
                                  cardData={item}
                                  product={product}
                                  indexs={idxs}
                                  mainIndex={index}
                                />
                              </SwiperSlide>
                            );
                          }
                        )}
                      </Swiper>
                    </div>
                    {product?.data?.results?.length>=7&&!isMobile&&<div className="text-sofia-reg text-xl font-normal text-mckblue text-center lg:pt-4">
                      {reviewCount}/
                      {isMobile
                        ? Math.ceil(product?.data?.results?.length)
                        : Math.ceil(product?.data?.results?.length / 6)}
                    </div>}
                  </>
                )}
              </>
            ) : (
              <div className="mt-3 lg:pt-6 lg:pl-6 lg:pb-6 text-sofia-bold font-extrabold text-xl truncate">
                {filterClicked ? "There are no products" : null}
              </div>
            )}
          </section>
        </div>
      ))}
    </>
  );
};

export default ProductComponent;
