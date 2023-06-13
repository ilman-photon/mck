import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from 'isomorphic-dompurify';

function RecommendationalProductComponent({ sectionData, indexs }: any) {
  const router = useRouter();
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(true);
  const dataFetchedRef = useRef(false);
  const [urlImgDynamic, setUrlImgDynamic] = useState("");
  const getImageDynamic = async (imageUrl: string) => {
    // Simulate asynchronous image loading
    try {
      const imageResponse = await axios.get(imageUrl);
      const imageData = imageResponse.data;
      setUrlImgDynamic(imageData.url);
    } catch (error) {
      console.error("Failed to load image:", error);
    }
  };
  function idRequests() {
    return sectionData[0]?.contentBlockArea?.value?.map((item: any) => {
      return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/${item?.contentLink?.id}?expand=*`
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
    router.push(url);
  };

  const display = response?.map((ele: any, index: number) => {
    const isEvenLength = response?.length % 2 === 0;
    const isSingleItem = response?.length === 1;

    const blueColorBackground =  "#001a71"
    const greenColorBackground = "#2ccfad"

    const whiteColor = 'white'
    const blackColor = 'black'

    const backgroundColorData = ele?.data?.buttonColor?.value

    const renderContent = () => (
      <>
        <div
          className={`bg-color mb-4 lg:mb-0 p-4 lg:p-[36px] ${
            isSingleItem ? "mb-4 lg:mb-0 col-span-2" : "odd:ml-0"
          }`}
          key={ele?.data?.contentLink?.id}
        >
          <style jsx>{`
            .bg-color {
              background-color: ${ele?.data?.backgroundColor?.value};
            }
          `}</style>

          <div className={`grid h-full`}>
            <div className={`w-full lg:mb-8 mb-6 lg:min-h-57`}>
              {ele?.data?.imageTitle?.value?.url && (
                <img
                  className={`h-auto lg:max-w-fit lg:w-338 w-270`}
                  src={ele?.data?.imageTitle?.value?.url}
                  alt={ele?.data?.imageTitle?.expandedValue?.altText?.value}
                  id={`home-product-image${indexs}${index + 1}`}
                />
              )}
            </div>

            <div
              className={`grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-4 lg:pr-0 my-auto text-justify`}
            >
              <div className={`pb-4 lg:pb-0 col-span-1`}>
                <div className={`mx-auto my-auto lg:h-60 object-contain`}>
                  {ele?.data?.imageTitle?.value?.url && (
                    <img
                      className={`mx-auto lg:my-auto`}
                      src={ele?.data?.image?.value?.url}
                      id={`home-product-image01${indexs}${index + 1}`}
                      alt={ele?.data?.image?.expandedValue?.altText?.value}
                    />
                  )}
                </div>
              </div>

              <div
                id={`p-text${indexs}${index + 1}`}
                className={`text-justify pr-0 lg:pr-0 col-span-2`}
              >
                <div
                  className={`text-lg text-sofia-reg text-mcknormalgrey font-normal text-left mb-4 text-sixcontent-ellipsis`}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(ele?.data?.description?.value),
                  }}
                  id={`p-text 01${indexs}${index + 1}`}
                ></div>
              </div>
            </div>
            {ele?.data?.buttonText?.value && ele?.data?.buttonUrl?.value && (
              <button
                className={`${ele?.data?.buttonColor?.value.length == 0 || ele?.data?.buttonColor?.value?.toLowerCase() === "#001a71" ? "text-white ": "text-black"} lg:min-w-[139px] w-max leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto lg:mr-0 ml-auto`}
                onClick={() => handleCTABtn(ele?.data?.buttonUrl?.value)}
                id={`home-product-button${indexs}${index + 1}`}
                style={{
                  backgroundColor: backgroundColorData?.toLowerCase() === blueColorBackground ? blueColorBackground : backgroundColorData?.toLowerCase() === greenColorBackground ? greenColorBackground : blueColorBackground,
                  color:backgroundColorData?.toLowerCase() === blueColorBackground ? whiteColor : backgroundColorData?.toLowerCase() === greenColorBackground ? blackColor : whiteColor
                }}
              >
                {ele?.data?.buttonText?.value}
              </button>
            )}
          </div>
        </div>
      </>
    );

    if (isEvenLength || (isSingleItem && index === 0)) {
      return renderContent();
    }

    return null;
  });
  const isDesktopView = () => {
    if (typeof window === "undefined") {
      return true;
    }

    const screenWidth = window.innerWidth;
    return screenWidth >= 768;
  };

  const displayOdd =
    response?.length % 2 !== 0 &&
    response?.length !== 1 &&
    response?.map((ele: any, index: number) => {

    const blueColorBackground =  "#001a71"
    const greenColorBackground = "#2ccfad"

    const whiteColor = 'white'
    const blackColor = 'black'

    const backgroundColorData = ele?.data?.buttonColor?.value
      const renderImage = ele?.data?.imageTitle?.value?.url && (
        <img
          className={`h-auto lg:max-w-fit mx-auto lg:w-338 w-270 ${
            index === 0 && "lg:absolute"
          }`}
          src={ele?.data?.imageTitle?.value?.url}
          alt={ele?.data?.imageTitle?.expandedValue?.altText?.value}
          id={`home-product-image${indexs}${index + 1}`}
          aria-hidden={true}
        />
      );

      const renderDescription = (
        <div
          id={`p-text${indexs}${index + 1}`}
          className="text-justify pr-0 lg:pr-0 col-span-2 lg:text-[18px]"
        >
          <div
            className={`text-lg text-sofia-reg text-mcknormalgrey font-normal text-left mb-4 text-sixcontent-ellipsis ${
              index == 0 && "lg:pr-24 lg:pl-4 lg:pt-48"
            } `}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(ele?.data?.description?.value),
            }}
            id={`p-text 01${indexs}${index + 1}`}
          ></div>
        </div>
      );

      const renderButton = ele?.data?.buttonText?.value &&
        ele?.data?.buttonUrl?.value && (
          <button
            className="lg:min-w-[139px] w-max leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto lg:mr-0 ml-auto"
            onClick={() => handleCTABtn(ele?.data?.buttonUrl?.value)}
            id={`home-product-button${indexs}${index + 1}`}
            style={{
              backgroundColor: backgroundColorData?.toLowerCase() === blueColorBackground ? blueColorBackground : backgroundColorData?.toLowerCase() === greenColorBackground ? greenColorBackground : blueColorBackground,
              color:backgroundColorData?.toLowerCase() === blueColorBackground ? whiteColor : backgroundColorData?.toLowerCase() === greenColorBackground ? blackColor : whiteColor
            }}
          >
            {ele?.data?.buttonText?.value}
          </button>
        );
      let isDesktopNow = ele?.data?.backgroundImage?.value?.url
        ? ele?.data?.backgroundImage?.value?.url
        : "";
      const renderContent = (
        <div
          className={`bg-color mb-4 lg:mb-0 p-4 lg:p-[36px] md:mb-0 ${
            index === 0
              ? "bg-no-repeat row-span-2 bg-center bg-cover bg-[url('" +
                ele?.data?.backgroundImage?.value?.url +
                "')]"
              : ""
          }`}
          key={ele?.data?.contentLink?.id}
          style={{
            backgroundImage: `url(${ele?.data?.backgroundImage?.value?.url})`,
          }}
        >
          <style jsx>{`
            .bg-color {
              background-color: ${ele?.data?.backgroundColor?.value};
            }
          `}</style>

          <div className={`grid h-full w-full`}>
            <div className="w-full lg:mb-0 mb-6 lg:min-h-57 text-left">
              {renderImage}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pr-0 my-auto text-justify">
              <div className={`pb-4 lg:pb-0 col-span-1`}>
                <div className="mx-auto my-auto lg:h-40 object-contain lg:py-48">
                  {ele?.data?.image?.value?.url && (
                    <img
                      aria-hidden={true}
                      className={`mx-auto lg:my-auto max-h-160`}
                      src={ele?.data?.image?.value?.url}
                      id={`home-product-image01${indexs}${index + 1}`}
                      alt={ele?.data?.image?.expandedValue?.altText?.value}
                    />
                  )}
                </div>
              </div>
              <div className="col-span-2">
                {renderDescription}
                <div className="lg:pr-24">
                  {renderButton}
                </div>
              </div>   
              
            </div>
          </div>
        </div>
      );

      return index === 0 ? (
        renderContent
      ) : (
        <>
          <div
            className={`bg-color mb-4 lg:mb-0 p-4 lg:p-[36px] bg-cover bg-center md:mb-0`}
          >
            <style jsx>{`
              .bg-color {
                background-color: ${ele?.data?.backgroundColor?.value};
              }
            `}</style>
            <div className={`grid h-full`}>
              <div className="w-full lg:w-44 lg:mb-8 mb-6 lg:min-h-57">
                {renderImage}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pr-0 my-auto text-justify">
                <div className="pb-4 lg:pb-0 col-span-1">
                  <div className="mx-auto my-auto lg:h-40 object-contain">
                    {ele?.data?.image?.value?.url && (
                      <img
                        aria-hidden={true}
                        className="mx-auto lg:my-auto max-h-160"
                        src={ele?.data?.image?.value?.url}
                        id={`home-product-image01${indexs}${index + 1}`}
                        alt={ele?.data?.image?.expandedValue?.altText?.value}
                      />
                    )}
                  </div>
                </div>

                {renderDescription}
              </div>
              {renderButton}
            </div>
          </div>
        </>
      );
    });
  return (
    <div id="promotion-container" className="mx-auto">
      <div className="promotion-product-container lg:mb-12">
        <div className="md:grid lg:grid lg:gap-4 xl:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-4">
          {display}
          {displayOdd}
        </div>
      </div>
    </div>
  );
}

export default RecommendationalProductComponent;
