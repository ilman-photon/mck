import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import RecommendationalProductComponent from "../recommendational_product";

const ProductComponent = ({
  selectedProduct,
  sectionData,
  selectedRecommendedProduct,
}: any) => {
  const handleProduct = (item: any, index: number) => {
    const filteredSection = sectionData.filter((section: any) =>
      section.name.includes(item)
    );
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

  return (
    <>
      {selectedProduct?.map((product: any, index: number) => (
        <div key={index}>
          {selectedRecommendedProduct?.map((item: any, idx: number) => {
            if (item === product?.item?.name) {
              return handleProduct(item, index);
            }
            return null;
          })}
          <section className="relative">
            <h1
              className="text-mckblue lg:text-5xl text-[27px] font-medium text-gtl-med lg:pl-6 lg:pb-0 pb-4 pt-6 lg:pt-0"
              tabIndex={0}
              id={`hn_label_00_${index}`}
              aria-label={product?.item?.name}
            >
              {product?.item?.name}
            </h1>

            {product?.data?.results?.length > 0 ? (
              <div className="lg:pt-6 lg:px-6 lg:pb-12 pb-6">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={4}
                  navigation
                  slidesPerView={5}
                  slidesPerGroup={5}
                  pagination={{ clickable: true, type: "fraction" }}
                  className="lg:h-480 h-350"
                >
                  {product?.data?.results?.map((item: any, idxs: number) => {
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
                  })}
                </Swiper>
              </div>
            ) : (
              <div className="mt-3 lg:pt-6 lg:pl-6 lg:pb-6 text-sofia-bold font-extrabold text-xl truncate">
                There are no products
              </div>
            )}
          </section>
        </div>
      ))}
    </>
  );
};

export default ProductComponent;
