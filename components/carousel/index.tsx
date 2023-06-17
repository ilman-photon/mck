import React, { useRef, useState, useEffect, useTransition } from "react";
import { useRouter } from "next/router";
import DOMPurify from "isomorphic-dompurify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface CarouselComponentProps {
  sectionData: any;
  isCarouselAvaible?: boolean;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  sectionData,
  isCarouselAvaible,
}) => {
  const router = useRouter();
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const dataFetchedRef = useRef(false);
  const [timeDelayCarousel, setTimeDelayCarousel] = useState(5000);
  const [autoRotate, setIsAutoRotate] = useState(true);

  useEffect(() => {
    dataFetchedRef.current = true;

    try {
      setLoading(false);
      setResponse(sectionData?.[0]?.contentBlockArea?.expandedValue);
      setTimeDelayCarousel(Number(sectionData?.[0]?.timeInterval?.value));
      setIsAutoRotate(!sectionData?.[0]?.autoRotate?.value);
    } catch (error) {
      setLoading(true);
    }
  }, [sectionData]);

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  const blueColorBackground = "#001a71";
  const greenColorBackground = "#2ccfad";

  const whiteColor = "white";
  const blackColor = "black";
  return (
    <div className="flex items-center justify-center" role="main">
      <div id="carouselExampleCaptions" className="w-full relative">
        {isCarouselAvaible && <div className="bg-gradient absolute"></div>}

        <div className="absloute w-full overflow-hidden after:clear-both after:block after:content-['']">
          <Swiper
            centeredSlides={true}
            speed={timeDelayCarousel}
            loop={true}
            autoplay={{
              disableOnInteraction: false,
              stopOnLastSlide: autoRotate,
            }}
            pagination={{
              clickable: true,
            }}
            effect="fade"
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {response &&
              response?.map((item: any, idx: any) => {
                return (
                  <SwiperSlide
                    key={item.contentLink.id}
                    className={`w-full mx-auto ${item ? "block" : "hidden"}`}
                  >
                    <div className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none h-[450px] lg:h-[800px]">
                      <img
                        src={DOMPurify.sanitize(item?.image?.value.url)}
                        className="block object-cover object-center w-full h-[225px] lg:h-[800px]"
                        alt={DOMPurify.sanitize(
                          item?.image?.expandedValue?.altText?.value
                        )}
                        id={item?.title?.value + "_" + current}
                        aria-hidden={true}
                      />
                      {item?.title?.value || item?.buttonText?.value ? (
                        <div
                          className={`px-4 lg:px-72 pt-6 lg:pt-6 lg:pb-8 pb-3 hero-banner h-[225px] lg:h-auto text-white lg:absolute left-0 bottom-20 md:block lg:w-487 w-full`}
                          style={{
                            backgroundColor:
                              item?.title?.value || item?.description?.value
                                ? item?.backgroundColor?.value
                                : "",
                          }}
                        >
                          {item?.title?.value ? (
                            <h2
                              className="text-sofia-reg font-bold text-4xl mobile:text-2xl text-mcklightyellow lg:mb-3 max-w-343 mobilelarge:max-w-unset mobilelarge:mb-[10px] mobile:font-normal"
                              id={item?.title?.value}
                            >
                              {item?.title?.value}
                            </h2>
                          ) : null}
                          {item?.description?.value ? (
                            <p
                              className="text-sofia-reg lg:text-20 text-lg text-mcklightyellow lg:mb-3 max-w-343 mobilelarge:max-w-unset pb-4 lg:pb-0"
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(
                                  item?.description?.value
                                ),
                              }}
                              id={item?.description?.value}
                            ></p>
                          ) : null}
                          {item?.buttonText?.value ? (
                            <button
                              id={item?.contentLink?.id}
                              className={`${
                                item?.ctaButtonColor?.value.length == 0 ||
                                item?.ctaButtonColor?.value?.toLowerCase() ===
                                  blueColorBackground
                                  ? "text-white "
                                  : "text-black"
                              } jsx-290076256 w-[124px] h-[44px] leading-5 lg:ml-0 mb-1 lg:mb-0 ml-0 text-sofia-bold flex justify-center items-center text-center hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer lg:text-base xl:text-base text-sm`}
                              style={{
                                backgroundColor:
                                  item?.ctaButtonColor?.value?.toLowerCase() ===
                                  blueColorBackground
                                    ? blueColorBackground
                                    : item?.ctaButtonColor?.value?.toLowerCase() ===
                                      greenColorBackground
                                    ? greenColorBackground
                                    : blueColorBackground,
                                color:
                                  item?.ctaButtonColor?.value?.toLowerCase() ===
                                  blueColorBackground
                                    ? whiteColor
                                    : item?.ctaButtonColor?.value?.toLowerCase() ===
                                      greenColorBackground
                                    ? blackColor
                                    : whiteColor,
                              }}
                              onClick={() =>
                                handleCTABtn(item?.buttonUrl?.value)
                              }
                            >
                              {DOMPurify.sanitize(item?.buttonText?.value)}
                            </button>
                          ) : null}
                        </div>
                      ) : null}
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
