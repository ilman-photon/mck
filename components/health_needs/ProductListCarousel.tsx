import React, { useEffect, useState } from "react";
import { useWindowResize } from "@/hooks/useWindowResize";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Autoplay, A11y, Pagination } from "swiper";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import RecommendationalProductComponent from "../recommendational_product";
import ProductSearchCard from "../product_list/ProductSearchCard";
import { useRouter } from "next/router";
import { useHealthNeedsStore } from "./components/Store/useHealthNeedsStore";
import { useAllProductStore } from "../all_products_category/Store/useAllProductsStore";
SwiperCore.use([Navigation, Autoplay]);
const ProductComponent = ({
  selectedProduct,
  sectionData,
  selectedRecommendedProduct,
  filterClicked,
  productSearchCard,
  // activeFiltersData
}: any) => {
  const [windowWidth] = useWindowResize();
  const [isMobile, setIsMobile] = useState(windowWidth >= 968 ? false : true);
  const router = useRouter()
  const pathNameHealthNeeds = router?.pathname === '/health_needs'
  const pathNameAllProducts = router?.pathname === '/all_product_category'
  const bucketHealthNeeds = useHealthNeedsStore(state => state.bucket)
  const bucketAllProducts = useAllProductStore(state => state.bucket)
// console.log(bucketAllProducts)
  if(!isMobile) {
    SwiperCore.use([Pagination])
  }
  
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

    if (filteredSection?.length > 0) {
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
      swiper.autoplay.running = false;
    } else {
      swiper.autoplay.running = false;
    }
  };

  const ariaHiddenArrow = (swiper: any) => {
    let prevArrowTabIdxAtt = swiper?.el?.children[1]?.attributes[1]?.value
    if(prevArrowTabIdxAtt == "-1") {
      swiper?.el?.children[1]?.setAttribute('aria-hidden','true')
    } else {
      swiper?.el?.children[1]?.setAttribute('aria-hidden','true')
    }

    let nextArrowTabIdxAtt = swiper?.el?.children[2]?.attributes[1]?.value
    if(nextArrowTabIdxAtt == "-1") {
      swiper?.el?.children[2]?.setAttribute('aria-hidden','true')
    } else {
      swiper?.el?.children[2]?.setAttribute('aria-hidden','true')
    }
  }

  return (
    <>
      {selectedProduct?.map((product: any, index: number) => {
        return(
          <div key={index}>
            
            <section className="relative">
              
  
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
                    <h2
                className="text-mckblue lg:text-5xl text-[27px] font-medium text-gtl-med lg:pb-0 pb-4 pt-0 lg:pt-0"
                id={`hn_label_00_${index}`}
                aria-label={product?.item?.name}
              >
                {product?.data?.results?.length > 0
                  ? product?.item?.name
                  : !filterClicked
                  ? product?.item?.name
                  // : "There are no products"
                  : null
                  }
              </h2>
             
                      <div className="lg:pt-6 lg:pb-12 pb-6 lg:m-21 lg:mb-[50px]">
                        <Swiper
                          spaceBetween={4}
                          navigation={isMobile ? false : true}
                          slidesPerView={isMobile ? "auto" : 5}
                          slidesPerGroup={isMobile ? 1 : 5}
                          className="lg:h-420 h-300 md:h-[305px]"
                          onSlideChange={(swiper) => {
                            handleOnSlideChange(swiper);
                            ariaHiddenArrow(swiper)
                          }}
                          onAfterInit={(swiper) => {
                            ariaHiddenArrow(swiper)
                          }}
                          pagination={{
                            type:"fraction"}}
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
                    </>
                  )}
                </>
              ) : (
                
                null
              )}
            </section>
           <div>
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
           </div>
            
          </div>
        )
      } 
      )}
      {pathNameHealthNeeds ? (
        <>
        {selectedProduct?.length === 0 &&  bucketHealthNeeds?.length !== 0 && <div  className="text-mckblue lg:text-5xl text-[27px] font-medium text-gtl-med lg:pb-0 pb-4 pt-0 lg:pt-0">
        {selectedProduct?.length === 0  ? "There are no products" : null }
        </div>}
        </>
      ) : pathNameAllProducts ?
      (
        <>
        {selectedProduct?.length === 0 &&  bucketAllProducts?.length !== 0 && <div  className="text-mckblue lg:text-5xl text-[27px] font-medium text-gtl-med lg:pb-0 pb-4 pt-0 lg:pt-0">
        {selectedProduct?.length === 0  ? "There are no products" : null }
        </div>}
        </>
      )
      : (
        <>
        {selectedProduct?.[1]?.data?.results?.length === 0  && <div  className="text-mckblue lg:text-5xl text-[27px] font-medium text-gtl-med lg:pb-0 pb-4 pt-0 lg:pt-0">
        {selectedProduct?.[1]?.data?.results?.length === 0  ? "There are no products" : null }
        </div>}
        </>
      )}
    </>
  );
};

export default ProductComponent;
