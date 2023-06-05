import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

function RecommendationalProductComponent({ sectionData, indexs }: any) {
  const router = useRouter();
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(true);
  const dataFetchedRef = useRef(false);

  function idRequests() {
    return sectionData[0]?.contentBlockArea?.value?.map((item: any) => {
      return axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/${item?.contentLink?.id}`,
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

  const handleCTABtn = (url: string) => {
    const tempUrl = url.split("=")[1];
    const encodedValue = encodeURIComponent(tempUrl);
    const desiredURL = `/selected_product_category?filter=${encodedValue}/${encodedValue}`;
    router.push(desiredURL);
  };

  const oneItemD = response?.length == 1 && (
    <>
      {!loading &&
        response &&
        response.map((ele: any, index: number) => {
          return (
            <div
              className={`bg-color col-span-2 p-4 lg:p-[36px]`}
              key={ele?.data?.contentLink?.id}
            >
              <style jsx>{`
                .bg-color {
                  background-color: ${ele?.data?.backgroundColor?.value};
                }
              `}</style>

              <div className={`grid h-full`}>
                <div className="w-full lg:w-44 lg:mb-8 mb-6 lg:min-h-57">
                  <img
                    className="h-auto lg:max-w-fit mx-auto lg:w-338 w-270"
                    src={ele?.data?.imageTitle?.value?.url}
                    alt={ele?.data?.imageTitle?.value?.url}
                    
                    id={"home-product-image" + indexs + index + 1}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 lg:gap-4 xl:gap-4 lg:pr-0 my-auto text-justify">
                  <div className="pb-4 lg:pb-0 col-span-1">
                    <div className="mx-auto my-auto lg:h-60 object-contain">
                      <img
                        className="mx-auto lg:my-auto"
                        src={ele?.data?.image?.value?.url}
                        
                        id={"home-product-image01" + indexs + index + 1}
                        alt="promotion image"
                        role="img"
                      />
                    </div>
                  </div>

                  <div
                    id={"p-text" + indexs + index + 1}
                    className={`text-justify pr-0 lg:pr-0 col-span-2 
                }`}
                  >
                    <div
                      className="text-lg text-sofia-reg text-mcknormalgrey font-normal text-left mb-4 text-sixcontent-ellipsis"
                      dangerouslySetInnerHTML={{
                        __html: ele?.data?.description?.value,
                      }}
                      
                      id={"p-text 01" + indexs + index + 1}
                    ></div>
                  </div>
                </div>

                {ele?.data?.buttonText?.value && (
                  <div
                    className="lg:min-w-[139px] w-max leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto lg:mr-0 ml-auto"
                    onClick={() => handleCTABtn(ele?.data?.buttonUrl?.value)}
                    
                    role="button"
                    id={"home-product-button" + indexs + index + 1}
                    style={{
                      backgroundColor: ele?.data?.buttonColor?.value,
                    }}
                  >
                    {ele?.data?.buttonText?.value}
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </>
  );
  const threeDisplay = response?.length == 3 && (
    <>
      {!loading &&
        response &&
        response.map((ele: any, index: number) => {
          let oddItemSpan = index == 0 && "row-span-2";
          return (
            <div
              className={`bg-color mb-4 lg:mb-0 p-4 lg:p-[36px] ${oddItemSpan} `}
              key={ele?.data?.contentLink?.id}
            >
              <style jsx>{`
                .bg-color {
                  background-color: ${ele?.data?.backgroundColor?.value};
                }
              `}</style>

              <div className={`grid h-full`}>
                <div className="w-full lg:w-44 lg:mb-8 mb-6 lg:min-h-57">
                  <img
                    className="h-auto lg:max-w-fit mx-auto lg:w-338 w-270"
                    src={ele?.data?.imageTitle?.value?.url}
                    alt={ele?.data?.imageTitle?.value?.url}
                    
                    id={"home-product-image" + indexs + index + 1}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4 lg:pr-0 my-auto text-justify">
                  <div className="pb-4 lg:pb-0 col-span-1">
                    <div className="mx-auto my-auto lg:h-40 object-contain">
                      <img
                        className="mx-auto lg:my-auto"
                        src={ele?.data?.image?.value?.url}
                        
                        id={"home-product-image01" + indexs + index + 1}
                        alt="promotion image"
                        role="img"
                      />
                    </div>
                  </div>

                  <div
                    id={"p-text" + indexs + index + 1}
                    className={`text-justify pr-0 lg:pr-0 col-span-2 
                }`}
                  >
                    <div
                      className="text-lg text-sofia-reg text-mcknormalgrey font-normal text-left mb-4 text-sixcontent-ellipsis"
                      dangerouslySetInnerHTML={{
                        __html: ele?.data?.description?.value,
                      }}
                      
                      id={"p-text 01" + indexs + index + 1}
                    ></div>
                  </div>
                </div>

                {ele?.data?.buttonText?.value && (
                  <div
                    className="lg:min-w-[139px] w-max leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto lg:mr-0 ml-auto"
                    onClick={() => handleCTABtn(ele?.data?.buttonUrl?.value)}
                    
                    role="button"
                    id={"home-product-button" + indexs + index + 1}
                    style={{
                      backgroundColor: ele?.data?.buttonColor?.value,
                    }}
                  >
                    {ele?.data?.buttonText?.value}
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </>
  );
  const twoDisplay =
    response?.length == 2 &&
    !loading &&
    response &&
    response.map((ele: any, index: number) => {
      return (
        <>
          <div
            className={`bg-color p-4 lg:p-[36px] odd:ml-0`}
            key={ele?.data?.contentLink?.id}
          >
            <style jsx>{`
              .bg-color {
                background-color: ${ele?.data?.backgroundColor?.value};
              }
            `}</style>

            <div className={`grid h-full`}>
              <div className="w-full lg:mb-8 mb-6 lg:min-h-57">
                <img
                  className="h-auto lg:max-w-fit lg:w-338 w-270"
                  src={ele?.data?.imageTitle?.value?.url}
                  alt={ele?.data?.imageTitle?.value?.url}
                  
                  id={"home-product-image" + indexs + index + 1}
                />
              </div>

              <div className="grid grid-cols-3 lg:gap-4 gap-4 lg:pr-0 my-auto text-justify">
                <div className="pb-4 lg:pb-0 col-span-1">
                  <div className="mx-auto my-auto lg:h-60 object-contain">
                    <img
                      className="mx-auto lg:my-auto"
                      src={ele?.data?.image?.value?.url}
                      
                      id={"home-product-image01" + indexs + index + 1}
                      alt="promotion image"
                      role="img"
                    />
                  </div>
                </div>

                <div
                  id={"p-text" + indexs + index + 1}
                  className={`text-justify pr-0 lg:pr-0 col-span-2 
                }`}
                >
                  <div
                    className="text-lg text-sofia-reg text-mcknormalgrey font-normal text-left mb-4 text-sixcontent-ellipsis"
                    dangerouslySetInnerHTML={{
                      __html: ele?.data?.description?.value,
                    }}
                    
                    id={"p-text 01" + indexs + index + 1}
                  ></div>
                </div>
              </div>

              {ele?.data?.buttonText?.value && (
                <div
                  className="lg:min-w-[139px] w-max leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto lg:mr-0 ml-auto"
                  onClick={() => handleCTABtn(ele?.data?.buttonUrl?.value)}
                  
                  role="button"
                  id={"home-product-button" + indexs + index + 1}
                  style={{
                    backgroundColor: ele?.data?.buttonColor?.value,
                  }}
                >
                  {ele?.data?.buttonText?.value}
                </div>
              )}
            </div>
          </div>
        </>
      );
    });
  const moreDisplay =
    response?.length > 3 &&
    !loading &&
    response &&
    response.map((ele: any, index: number) => {
      let newcolSpan =
        index === response.length - 1 &&
        response.length % 2 != 0 &&
        "col-span-2";
      return (
        <>
          <div
            className={`bg-color p-4 lg:p-[36px] sm:m-3 lg:m-0 mb-4 bg-red odd:ml-0 ${newcolSpan}`}
            key={ele?.data?.contentLink?.id}
          >
            <style jsx>{`
              .bg-color {
                background-color: ${ele?.data?.backgroundColor?.value};
              }
            `}</style>

            <div className={`grid h-full`}>
              <div className="w-full lg:w-44 lg:mb-8 mb-6 lg:min-h-57">
                <img
                  className="h-auto lg:max-w-fit mx-auto lg:w-338 w-270"
                  src={ele?.data?.imageTitle?.value?.url}
                  alt={ele?.data?.imageTitle?.value?.url}
                  
                  id={"home-product-image" + indexs + index + 1}
                />
              </div>

              <div className="grid grid-cols-3 gap-4 lg:pr-0 my-auto text-justify">
                <div className="pb-4 lg:pb-0 col-span-1">
                  <div className="mx-auto my-auto lg:h-60 object-contain">
                    <img
                      className="mx-auto lg:my-auto"
                      src={ele?.data?.image?.value?.url}
                      
                      id={"home-product-image01" + indexs + index + 1}
                      alt="promotion image"
                      role="img"
                    />
                  </div>
                </div>

                <div
                  id={"p-text" + indexs + index + 1}
                  className={`text-justify pr-0 lg:pr-0 col-span-2 
                  }`}
                >
                  <div
                    className="text-lg text-sofia-reg text-mcknormalgrey font-normal text-left mb-4 text-sixcontent-ellipsis"
                    dangerouslySetInnerHTML={{
                      __html: ele?.data?.description?.value,
                    }}
                    
                    id={"p-text 01" + indexs + index + 1}
                  ></div>
                </div>
              </div>

              {ele?.data?.buttonText?.value && (
                <div
                  className="lg:min-w-[139px] w-max leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto lg:mr-0 ml-auto"
                  onClick={() => handleCTABtn(ele?.data?.buttonUrl?.value)}
                  
                  role="button"
                  id={"home-product-button" + indexs + index + 1}
                  style={{
                    backgroundColor: ele?.data?.buttonColor?.value,
                  }}
                >
                  {ele?.data?.buttonText?.value}
                </div>
              )}
            </div>
          </div>
        </>
      );
    });
  return (
    <div id="promotion-container" className="mx-auto">
      <div className="promotion-product-container lg:mb-12">
        <div className="md:grid lg:grid lg:gap-4 xl:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {oneItemD}
          {threeDisplay}
          {moreDisplay}
          {twoDisplay}
        </div>
      </div>
    </div>
  );
}

export default RecommendationalProductComponent;
