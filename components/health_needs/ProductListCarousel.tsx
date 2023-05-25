import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";

const ProductComponent = ({ selectedProduct }: any) => {
  const router = useRouter();
  const handleProductClick = (data: any) => {
    const title = data.routeSegment;
    router.push({
      pathname: "/product_detail",
      query: { data: title },
    });
  };
  return (
    <>
      {selectedProduct?.map((product: any) => (
        <>
          <section>
            <div
              className="text-mckblue lg:text-5xl text-[27px] font-medium text-gtl-med lg:pl-6 lg:pb-0 pb-4 pt-6 lg:pt-0"
              tabIndex={0}
              id="hn_label_005"
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
                      <div
                          onClick={() => handleProductClick(item)}
                          className="swiper-list-item w-[198px] min-h-480 rounded-lg border border-[#CCD1E3] mr-1 p-4"
                      >
                        <img
                          src={item?.image?.value?.url}
                          alt={item?.image?.value?.url}
                          tabIndex={0}
                          id="hn_label_005_01" className="h-fit mx-auto"
                        />
                        <div
                          className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey mt-2 text-sofia-bold text-mckblue text-xs font-extrabold"
                          tabIndex={0}
                          id="hn_label_005_02"
                        >
                          {
                            product.item?.healthNeedCategory
                              ?.value[0]?.name
                          }
                        </div>
                        <div
                          className="text-mckblue mt-3 text-sofia-bold font-extrabold text-xl"
                          tabIndex={0}
                          id="hn_label_005_03"
                        >
                          {item?.name}
                        </div>
                        <div
                          className="text-mcknormalgrey mt-1 text-sofia-reg text-base font-normal"
                          tabIndex={0}
                          id="hn_label_005_03"
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
        </>
      ))}
    </>
  );

}

export default ProductComponent;