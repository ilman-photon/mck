import { useRef, useState, useEffect } from "react";
import HeaderComponent from "../header";
import axios from "axios";
import { useRouter } from "next/router";

export default function CarouselComponent({ sectionData }: any) {
  const router = useRouter();
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(true);

  const imgRefDiv = useRef();
  const dataFetchedRef = useRef(false);

  function idRequests() {
    return sectionData[0]?.contentBlockArea?.value?.map((item: any) => {
      console.log("idRequests");
      return axios.get(
        `https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/${item?.contentLink?.id}`,
        {
          headers: {
            "Accept-Language": "en",
          },
        }
      );
    });
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    axios
      .all(idRequests())
      .then((responses) => {
        setLoading(false);
        setResponse(responses);
      })
      .catch((error) => {
        setLoading(true);
      });
  }, []);

  function handleCarouselImage(id: any) {
    // imgRefDiv.current[id-1].style
    console.log("id", id, imgRefDiv.current);
  }

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: "",
    });
  };

  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
      >
        <HeaderComponent />
        <div
          className="absloute w-full overflow-hidden after:clear-both after:block after:content-['']"
          // ref={imgRefDiv}
        >
          {loading && <p>Loading...</p>}

          {!loading &&
            response &&
            response.map((ele: any, index: number) => {
              return (
                <div
                  className="container mx-auto"
                  key={ele?.data?.contentLink?.id + "_" + index}
                >
                  <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-active
                    data-te-carousel-item
                  >
                    <img
                      src={ele?.data?.image?.value.url}
                      className="block w-full"
                      alt="..."
                    />
                    <div className="hero-banner p-3 text-white absolute left-0 bottom-20">
                      <h2 className="m-3">{ele?.data?.title?.value}</h2>
                      <p
                        className="m-3"
                        dangerouslySetInnerHTML={{
                          __html: ele?.data?.description?.value,
                        }}
                      ></p>
                      <div
                        className="jsx-290076256 w-[124px] h-[44px] m-3 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex ml-auto"
                        onClick={() =>
                          handleCTABtn(ele?.data?.buttonUrl?.value)
                        }
                      >
                        {ele?.data?.buttonText?.value}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div
          className="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          {!loading &&
            response &&
            response.map((ele: any, index: number) => {
              return (
                <button
                  key={ele?.data?.contentLink?.id + index}
                  type="button"
                  onClick={() =>
                    handleCarouselImage(ele?.data?.contentLink?.id)
                  }
                  data-te-target="#carouselExampleCaptions"
                  data-te-slide-to="0"
                  data-te-carousel-active
                  className="mx-[3px] box-content h-[8px] w-[8px] flex-initial cursor-pointer border-0 border-transparent rounded bg-[#CCD1E3] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
              );
            })}
        </div>
      </div>
    </div>
  );
}
