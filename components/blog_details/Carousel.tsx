import { memo } from "react";
import { GetTime, HandelURLToId, handleBGColor } from "../CommonUtil/time";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import { LinkComponent } from "../global/LinkComponent";

interface CarouselComponentProps {
  title: string;
  OnRelatedArticleClick: (e: string) => void;
  relatedArticle: []
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  relatedArticle,
  title,
  OnRelatedArticleClick,
}) => {


  return (
    <div className="lg:pb-0 lg:p-6 lg:pt-0 pt-0 p-4">
      <h1
        className="text-gtl-med text-mckblue text-32 font-medium lg:pb-6"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h1>
      <div className="lg:pt-6 lg:pl-6 lg:pb-6">

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={4}
          navigation
          slidesPerView={2}
          slidesPerGroup={2}
          pagination={{ clickable: true, type: "fraction" }}
        >
          {relatedArticle?.map((item: any, index: any) => {
            return (
              <SwiperSlide
                key={item?.contentLink?.id + index}
                className="swiper-slide-custom"
              >
                <div
                  className="swiper-list-item w-[326px] lg:min-h-[420px] min-h-[450px] rounded-lg border border-[#CCD1E3] mr-1 p-4"
                >
                  <LinkComponent
                    key={index}
                    href={{
                      pathname: "/blog_details",
                      query: { id: `${HandelURLToId(item.contentLink.url)}` },
                    }}
                  >
                    <article onClick={(e: any) => OnRelatedArticleClick(item.contentLink.url)} >
                      <figure>
                        <img
                          src={item.image.value.url}
                          alt={item.image.value.id}
                          id={item.image.value.id}
                          className="w-full"
                        />
                      </figure>
                      <figcaption>
                        <div className="content lg:p-6 p-4">
                          <div
                            className="articleTitle lg:text-32 leading-10 max-[576px]:leading-8 sm:text-32 text-xl text-gtl-med text-mckblue no-underline"
                            aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                          >
                            {item.title.value}
                          </div>
                          <div className="pb-3 pt-3">
                            <span className={`text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid ${item.startPublish?'shade-grey-right-border':''}`}>
                              {GetTime(item.startPublish)}
                            </span>
                            <span className={`text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid ${false?'shade-grey-right-border':''}`}>
                              {item.readMinute.value}
                            </span>
                            {/* <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2">2.3K views</span> */}
                          </div>
                          <div className="flex flex-wrap">
                            {item.tag.value.map((tagitem: any, idx: any) => (
                              <div
                                style={{
                                  backgroundColor: handleBGColor(idx, item.tagBackgroundColorCode.value)
                                }}
                                key={idx}
                                className="mb-1 categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border"
                              >
                                {tagitem.description}
                              </div>
                            ))}
                          </div>
                        </div>
                      </figcaption>
                    </article>
                  </LinkComponent>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default memo(CarouselComponent);
