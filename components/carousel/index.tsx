import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTransition, animated } from "react-spring";
import DOMPurify from "isomorphic-dompurify";

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
  const [isPause, setPaused] = useState(false);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    // if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    try {
      setLoading(false);
      setResponse(sectionData?.[0]?.contentBlockArea?.expandedValue);
    } catch (error) {
      setLoading(true);
    }
  }, [sectionData]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (sectionData?.[0]?.autoRotate?.value) {
      interval = setInterval(() => {
        !isPause && infiniteScroll();
      }, Number(sectionData[0]?.timeInterval?.value));
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [current]);

  const handleCarouselImage = (index: number) => {
    setPaused((prevState) => !prevState);
    setCurrent(index);
  };

  const infiniteScroll = () => {
    if (current >= response?.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  const transitions = useTransition(response?.[current], {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: { duration: 2100 },
  });


  const blueColorBackground =  "#001a71"
  const greenColorBackground = "#2ccfad"

  const whiteColor = 'white'
  const blackColor = 'black'

  const firstResponse = response?.[0];
  const carouselContent =
    firstResponse?.title?.value ||
    firstResponse?.description?.value ||
    firstResponse?.buttonText?.value;
  return (
    <div className="flex items-center justify-center">
      <div
        id="carouselExampleCaptions"
        className="container relative mobile:p-0"
        data-te-carousel-init
        data-te-carousel-slide
      >
        {isCarouselAvaible && <div className="bg-gradient absolute"></div>}

        <div className="absloute w-full overflow-hidden after:clear-both after:block after:content-['']">
          {!loading &&
            (response?.length > 1 ? (
              transitions((styles: any, item: any) => (
                <animated.div
                  className={`w-full mx-auto ${item ? "block" : "hidden"}`}
                  style={styles}
                  key={item?.contentLink?.id + "_" + current}
                >
                  <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none h-[450px] lg:h-[800px]"
                    data-te-carousel-active
                    data-te-carousel-item
                  >
                    <img
                      src={DOMPurify.sanitize(item?.image?.value.url)}
                      className="block object-cover object-center w-full h-[225px] lg:h-[800px]"
                      alt={DOMPurify.sanitize(item?.image?.expandedValue?.altText?.value)}
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
                        {item?.title?.value  ? (
                        <h2
                          className="text-mcklightyellow lg:mb-3"
                          id={item?.title?.value}
                        >
                          {item?.title?.value}
                        </h2>
                        ) : null}
                        {item?.description?.value ? (
                          <p
                            className="lg:mb-3 pb-4 lg:pb-0 text-mcklightyellow"
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
                            className={`${item?.ctaButtonColor?.value.length == 0 || item?.ctaButtonColor?.value?.toLowerCase() === "#001a71" ? "text-white ": "text-black"} jsx-290076256 w-[124px] h-[44px] leading-5 lg:ml-0 mb-1 lg:mb-0 ml-0 text-sofia-bold flex justify-center items-center text-center hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer lg:text-base xl:text-base text-sm`}
                            style={{
                              backgroundColor: item?.ctaButtonColor?.value?.toLowerCase() === blueColorBackground ? blueColorBackground : item?.ctaButtonColor?.value?.toLowerCase() === greenColorBackground ? greenColorBackground : blueColorBackground,
                              color:item?.ctaButtonColor?.value?.toLowerCase() === blueColorBackground ? whiteColor : item?.ctaButtonColor?.value?.toLowerCase() === greenColorBackground ? blackColor : whiteColor
                            }}
                            onClick={() => handleCTABtn(item?.buttonUrl?.value)}
                          >
                            {DOMPurify.sanitize(item?.buttonText?.value)}
                          </button>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </animated.div>
              ))
            ) : (
              <div
                className="mx-auto block"
                key={firstResponse?.contentLink?.id}
              >
                <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-active
                  data-te-carousel-item
                >
                  {firstResponse && (
                    <>
                      <img
                        src={DOMPurify.sanitize(
                          firstResponse?.image?.value?.url
                        )}
                        className="block object-cover object-center w-full h-[435px] lg:h-[800px] "
                        alt={
                          firstResponse?.image?.expandedValue?.altText?.value
                        }
                        id={firstResponse?.title?.value + "_" + current}
                        aria-hidden={true}
                      />
                      {firstResponse?.title?.value && (
                        <div
                          className=" px-4 lg:px-72 pt-6 lg:pt-6 lg:pb-8 pb-3 hero-banner text-white lg:absolute left-0 bottom-20 md:block lg:w-487 w-full"
                          style={{
                            backgroundColor:
                              firstResponse?.backgroundColor?.value,
                          }}
                        >
                          <h2
                            className="text-mcklightyellow lg:mb-3"
                            id={firstResponse?.title?.value}
                          >
                            {firstResponse?.title?.value}
                          </h2>
                          <p
                            className="lg:mb-3 pb-4 lg:pb-0 text-mcklightyellow"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                firstResponse?.description?.value
                              ),
                            }}
                            id={firstResponse?.description?.value}
                          ></p>
                          {firstResponse?.buttonText?.value && (
                            <div
                              id={firstResponse?.contentLink?.id}
                              className={`jsx-290076256 w-[124px] h-[44px] leading-5 lg:ml-0 mb-1 lg:mb-0 ml-0 text-sofia-bold flex justify-center items-center text-center text-white hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer lg:text-base xl:text-base text-sm`}
                              style={{
                                  backgroundColor: firstResponse?.ctaButtonColor?.value?.toLowerCase() === blueColorBackground ? blueColorBackground : firstResponse?.ctaButtonColor?.value?.toLowerCase() === greenColorBackground ? greenColorBackground : blueColorBackground,
                                  color:firstResponse?.ctaButtonColor?.value?.toLowerCase() === blueColorBackground ? whiteColor : firstResponse?.ctaButtonColor?.value?.toLowerCase() === greenColorBackground ? blackColor : whiteColor
                              }}
                              onClick={() =>
                                handleCTABtn(firstResponse?.buttonUrl?.value)
                              }
                              role="button"
                            >
                              {firstResponse?.buttonText?.value}
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              // null
            ))}
        </div>
        {!loading && response?.length > 1 && (
          <ul className="list-unstyled absolute text-center left-0 right-0 bottom-1 lg:bottom-2 indicators">
            {response?.map((item: any, index: number) => (
              <li
                className={`indicator content-center ${
                  index === current ? "active" : ""
                }`}
                key={index}
                onClick={() => handleCarouselImage(index)}
                role="button"
              ></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
