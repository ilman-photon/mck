import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
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

  async function idRequests() {
    const requests = sectionData[0]?.contentBlockArea?.value?.map(
      (item: any) => {
        return axios.get(
          `${process.env.API_URL}/api/episerver/v3.0/content/${item?.contentLink?.id}`,
          {
            headers: {
              "Accept-Language": "en",
            },
          }
        );
      }
    );

    try {
      const responses = await axios.all(requests);
      setLoading(false);
      setResponse(responses);
    } catch (error) {
      setLoading(true);
    }
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    idRequests();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      infiniteScroll();
    }, Number(sectionData[0].timeInterval?.value));
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
      pathname: "",
    });
  };

  const transitions = useTransition(response?.[current], {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
    config: { duration: 960 },
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
            transitions((styles, item) => (
              <animated.div
                className={`container mx-auto ${item ? "block" : "hidden"}`}
                style={styles}
                key={item?.data?.contentLink?.id + "_" + current}
              >
                <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-active
                  data-te-carousel-item
                >
                  <img
                    src={item?.data?.image?.value.url}
                    className="block w-full"
                    alt="Carousel Image"
                    id={item?.data?.title?.value + "_" + current}
                    tabIndex={0}
                  />
                  <div
                    className="lg:pl-18 px-4 lg:px-0 pt-6 lg:pt-6 lg:pb-8 pb-3 hero-banner text-white lg:absolute left-0 bottom-20 md:block lg:w-487 w-full"
                    style={{ backgroundColor: item?.backgroundColor?.value }}
                  >
                    <h2
                      className="text-mcklightyellow lg:mb-3"
                      id={item?.data?.title?.value}
                      tabIndex={0}
                    >
                      {item?.data?.title?.value}
                    </h2>
                    <p
                      className="lg:mb-3 pb-4 lg:pb-0 text-mcklightyellow"
                      dangerouslySetInnerHTML={{
                        __html: item?.data?.description?.value,
                      }}
                      tabIndex={0}
                      id={item?.data?.description?.value}
                    ></p>
                    {item?.data?.buttonText?.value && (
                      <div
                        id={item?.data?.buttonText?.value + current}
                        className={`jsx-290076256 w-[124px] h-[44px] leading-5 lg:ml-0 mb-1 lg:mb-0 ml-0 text-sofia-bold flex justify-center items-center text-center text-white hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer lg:text-base xl:text-base text-sm`}
                        style={{
                          backgroundColor: item?.data?.ctaButtonColor?.value,
                        }}
                        onClick={() =>
                          handleCTABtn(item?.data?.buttonUrl?.value)
                        }
                        tabIndex={0}
                        role="button"
                      >
                        {item?.data?.buttonText?.value}
                      </div>
                    )}
                  </div>
                </div>
              </animated.div>
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
                key={item?.data?.contentLink?.id + "_" + index}
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
