import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTransition, animated } from "react-spring";

interface CarouselComponentProps {
  sectionData: any;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({
  sectionData,
}) => {
  const router = useRouter();
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    try {
      setLoading(false);
      setResponse(sectionData[0]?.contentBlockArea?.expandedValue);
    } catch (error) {
      setLoading(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      infiniteScroll();
    }, Number(sectionData[0].timeInterval?.value));

    if (current >= response?.length - 1) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [current]);

  function handleCarouselImage(index: number) {
    setCurrent(index);
  }
  function infiniteScroll() {
    if (current >= response?.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  const transitions = useTransition(response?.[current], {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: { duration: 1000 },
  });

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <div className="bg-gradient absolute"></div>
        <div className="absloute w-full overflow-hidden after:clear-both after:block after:content-['']">
          {loading && <p>Loading...</p>}

          {!loading &&
            (response.length > 1 ? (
              transitions((styles: any, item: any) => (
                <animated.div
                  className={`container mx-auto ${item ? "block" : "hidden"}`}
                  style={styles}
                  key={item?.contentLink?.id + "_" + current}
                >
                  <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-active
                    data-te-carousel-item
                  >
                    <img
                      src={item?.image?.value.url}
                      className="block w-full"
                      alt="Carousel Image"
                      id={item?.title?.value + "_" + current}
                      tabIndex={0}
                    />
                    <div
                      className="lg:pl-18 px-4 lg:px-0 pt-6 lg:pt-6 lg:pb-8 pb-3 hero-banner text-white lg:absolute left-0 bottom-20 md:block lg:w-487 w-full"
                      style={{ backgroundColor: item?.backgroundColor?.value }}
                    >
                      <h2
                        className="text-mcklightyellow lg:mb-3"
                        id={item?.title?.value}
                        tabIndex={0}
                      >
                        {item?.title?.value}
                      </h2>
                      <p
                        className="lg:mb-3 pb-4 lg:pb-0 text-mcklightyellow"
                        dangerouslySetInnerHTML={{
                          __html: item?.description?.value,
                        }}
                        tabIndex={0}
                        id={item?.description?.value}
                      ></p>
                      {item?.buttonText?.value && (
                        <div
                          id={item?.buttonText?.value + current}
                          className={`jsx-290076256 w-[124px] h-[44px] leading-5 lg:ml-0 mb-1 lg:mb-0 ml-0 text-sofia-bold flex justify-center items-center text-center text-white hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer lg:text-base xl:text-base text-sm`}
                          style={{
                            backgroundColor: item?.ctaButtonColor?.value,
                          }}
                          onClick={() => handleCTABtn(item?.buttonUrl?.value)}
                          tabIndex={0}
                          role="button"
                        >
                          {item?.buttonText?.value}
                        </div>
                      )}
                    </div>
                  </div>
                </animated.div>
              ))
            ) : (
              <div
                className="container mx-auto block"
                key={response[0]?.contentLink?.id}
              >
                <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-active
                  data-te-carousel-item
                >
                  <img
                    src={response[0]?.image?.value.url}
                    className="block w-full"
                    alt="Carousel Image"
                    id={response[0]?.title?.value + "_" + current}
                    tabIndex={0}
                  />
                  <div
                    className="lg:pl-18 px-4 lg:px-0 pt-6 lg:pt-6 lg:pb-8 pb-3 hero-banner text-white lg:absolute left-0 bottom-20 md:block lg:w-487 w-full"
                    style={{
                      backgroundColor: response[0]?.backgroundColor?.value,
                    }}
                  >
                    <h2
                      className="text-mcklightyellow lg:mb-3"
                      id={response[0]?.title?.value}
                      tabIndex={0}
                    >
                      {response[0]?.title?.value}
                    </h2>
                    <p
                      className="lg:mb-3 pb-4 lg:pb-0 text-mcklightyellow"
                      dangerouslySetInnerHTML={{
                        __html: response[0]?.description?.value,
                      }}
                      tabIndex={0}
                      id={response[0]?.description?.value}
                    ></p>
                    {response[0]?.buttonText?.value && (
                      <div
                        id={response[0]?.buttonText?.value + current}
                        className={`jsx-290076256 w-[124px] h-[44px] leading-5 lg:ml-0 mb-1 lg:mb-0 ml-0 text-sofia-bold flex justify-center items-center text-center text-white hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer lg:text-base xl:text-base text-sm`}
                        style={{
                          backgroundColor: response[0]?.ctaButtonColor?.value,
                        }}
                        onClick={() =>
                          handleCTABtn(response[0]?.buttonUrl?.value)
                        }
                        tabIndex={0}
                        role="button"
                      >
                        {response[0]?.buttonText?.value}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div
          className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          {!loading &&
            response &&
            response.map((item: any, index: number) => (
              <button
                key={item?.contentLink?.id + "_" + index}
                type="button"
                onClick={() => handleCarouselImage(index)}
                data-te-target="#carouselExampleCaptions"
                data-te-slide-to="0"
                data-te-carousel-active
                className={`mx-[3px] box-content lg:w-4 xl:w-4 lg:h-4 xl:h-4 w-2 h-2 flex-initial cursor-pointer border-0 border-transparent rounded-full  bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${
                  index === current ? "bg-mckblue" : "bg-mckthingrey"
                }`}
                aria-current={index === current ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
