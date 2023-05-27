import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Navigation , Pagination } from "swiper";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import RecommendationalProductComponent from "../recommendational_product";

const ProductComponent = ({ selectedProduct, recommendedProduct }: any) => {
  let sectionData: any = []
  let selectedRecommendedProduct: any = []

  const recommendedProducts = recommendedProduct?.expandedValue;

  recommendedProducts?.map((id: any) => {
    return recommendedProduct?.expandedValue[1].healthNeedItem.expandedValue.map((item: any) => {
      if (id?.recommendedProductCategory?.value &&
        id.recommendedProductCategory.value[0].id === item.healthNeedCategory.value[0].id) {

        const productName = id.recommendedProductCategory.value[0].name

        selectedRecommendedProduct.push(productName)

        sectionData.push(id)
      }

    });
  });

  return (
    <>
      {selectedProduct?.map((product: any, index: number) => (
        <>
          {selectedRecommendedProduct?.map((item: any, idx: number) => {
            if (item === product?.item?.name) {
              return (
                <RecommendationalProductComponent
                  indexs={index}
                  key={idx}
                  sectionData={sectionData}
                />
              );
            }
          })}
          <section>
            <div
              className="text-mckblue lg:text-5xl text-[27px] font-medium text-gtl-med lg:pl-6 lg:pb-0 pb-4 pt-6 lg:pt-0"
              tabIndex={0}
              id={`hn_label_00${index}`}
              aria-label="100"
            >
              {
                product?.item?.name
              }
            </div>
            <div className="lg:pt-6 lg:pl-6 lg:pb-6">
              <Swiper
                modules={[Navigation , Pagination]}
                spaceBetween={4}
                navigation
                slidesPerView={5}
                slidesPerGroup={5}
                pagination={{ clickable: true }}
                className="h-480"

              >
                {product?.data?.results?.map((item: any, idx: number) => {
                  return (
                    <SwiperSlide
                      key={item?.contentLink?.id}
                      className="swiper-slide-custom"
                    >
                      <ProductCard cardData={item} product={product} indexs={index+idx+1} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </section>
        </>
      ))}
    </>
  );

}

export default ProductComponent;