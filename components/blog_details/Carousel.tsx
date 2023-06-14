import { memo, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Autoplay, A11y } from "swiper";
import "swiper/css/navigation";
import { ImageComponent } from "../global/ImageComponent";
import { GetTime, handlecategoryColorCode } from "../global/CommonUtil";
import DOMPurify from 'isomorphic-dompurify';
import { useHeaderStore } from "../navbar/Store/useNavBarStore";

interface CarouselComponentProps {
  title: string;
  OnRelatedArticleClick: (e: string) => void;
  relatedArticle: [];
}
SwiperCore.use([Navigation, Autoplay]);

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  relatedArticle,
  title,
  OnRelatedArticleClick,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [reviewCount, setReviewCount] = useState<number>(1);
  const catMapping = useHeaderStore((state) => state.categoryMapping);

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
  const handleOnSlideChange = (swiper: any) => {
    if (isMobile) {
      swiper.autoplay.running = true;
      setReviewCount(() => Math.ceil(swiper.activeIndex) + 1);
    } else {
      swiper.autoplay.running = false;
      setReviewCount(() => Math.ceil(swiper.activeIndex / 2) + 1);
    }
  };
  return (
    <div className="lg:p-6 px-0">
      <h3
        className="text-gtl-med text-mckblue text-32 font-medium pb-6"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <div className="lg:pt-6 lg:px-2 lg:pb-6 blockDetailsCarousel">

        <Swiper
          spaceBetween={4}
          navigation={isMobile ? false : true}
          autoplay={isMobile ? { delay: 3000 } : false}
          slidesPerView={isMobile ? "auto" : 2}
          slidesPerGroup={isMobile ? 1 : 2}
          className="h-auto"
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
          {relatedArticle?.map((item: any, index: any) => {
            return (
              <SwiperSlide
                key={item?.contentLink?.id}
                className="swiper-slide-custom"
              >
                <div className="swiper-list-item mb-[60px] w-[360px] lg:w-[438px] lg:max-h-[544px] min-h-[450px] rounded-lg border border-[#CCD1E3] mr-1 ">
                  <article>
                    <figure>
                      <div
                        onClick={() =>{
                          OnRelatedArticleClick(item.routeSegment)
                        }
                        }
                        className="h-240 lg:h-276 flex"
                        aria-hidden="true"
                      >
                        <ImageComponent
                          src={DOMPurify.sanitize(item?.image?.value?.url)}
                          alt={item?.image?.value?.id}
                          id={item?.image?.value?.id}
                          aria-hidden="true"
                          className="w-full max-h-[240px] lg:max-h-[276px] object-cover"
                        />
                      </div>
                    </figure>
                    <figcaption>
                      <div className="content lg:p-6 p-4 lg:pt-4">
                        <div
                          onClick={() =>
                            OnRelatedArticleClick(item.routeSegment)
                          }
                          role="button"
                          tabIndex={0}
                          className="articleTitle lg:text-32 leading-10 max-[576px]:leading-8 sm:text-32 text-3xl text-gtl-med text-mckblue no-underline text-p-ellipsis"
                          aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                        >
                          {item?.title?.value}
                        </div>
                        <div className="pb-3 pt-3">
                          <span
                            className={`text-mcknormalgrey text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid ${
                              item.startPublish ? "shade-grey-right-border" : ""
                              }`}
                          >
                            {GetTime(item?.startPublish)}
                          </span>
                          <span
                            className={`text-mcknormalgrey text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid ${
                              false ? "shade-grey-right-border" : ""
                              }`}
                          >
                            {item?.readMinute?.value}
                          </span>
                          {/* <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2">2.3K views</span> */}
                        </div>
                        <div className="flex flex-wrap lg:h-25 h-25 overflow-hidden">
                          {item.tag.value.map((tagitem: any, idx: any) => (
                            <div
                              style={{
                                backgroundColor: handlecategoryColorCode(tagitem.id, catMapping),
                              }}
                              key={idx}
                              className="mb-1 categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                            >
                              {tagitem?.description}
                            </div>
                          ))}
                        </div>
                      </div>
                    </figcaption>
                  </article>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {relatedArticle?.length > 2|| isMobile  ? 
        <div className="text-sofia-reg text-xl font-normal text-mckblue text-center lg:pt-4">
          {reviewCount}/
          {isMobile
            ? Math.ceil(relatedArticle?.length)
            : Math.ceil(relatedArticle?.length / 2)}
        </div>:<></>
      }
    </div>
  );
};
export default memo(CarouselComponent);
