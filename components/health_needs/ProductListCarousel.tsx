import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";

const ProductComponent = ({ selectedProduct }: any) => {

  return (
    <>
      {selectedProduct?.map((product: any) => (
        <>
          <section>
            <div
              className="text-mckblue lg:text-5xl text-[27px] font-medium text-gtl-med lg:pl-6 lg:pb-0 pb-4 pt-6 lg:pt-0"
              tabIndex={0}
              id="hn_label_005" role="heading"
            >
              {
                product?.item?.name
              }
            </div>
            <div className="lg:pt-6 lg:pl-6 lg:pb-6">
              <Swiper
                modules={[Navigation]}
                spaceBetween={4}
                navigation
                slidesPerView={5}
                slidesPerGroup={5}
                className="h-480"

              >
                {product?.data?.results?.map((item: any) => {
                  return (
                    <SwiperSlide
                      key={item?.contentLink?.id}
                      className="swiper-slide-custom"
                    >
                      <ProductCard  cardData= {item} product={product}/>
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