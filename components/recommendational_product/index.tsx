import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from 'isomorphic-dompurify';

function RecommendationalProductComponent({ sectionData, indexs }: any) {
  const router = useRouter();
  const [productData , setProductData] = useState<any>([])
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

  function getData(){
    sectionData[0]?.contentBlockArea?.expandedValue?.map((item: any) => {
      setProductData((prevData: any) => [...prevData, item]);
    })
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getData()
  }, []);

  const handleCTABtn = (url: string) => {
    const tempUrl = url.split("=")[1];
    const encodedValue = encodeURIComponent(tempUrl);
    const desiredURL = `/selected_product_category?filter=${encodedValue}/${encodedValue}`;
    router.push(url);
  };

  const display = productData?.map((ele: any, index: number) => {
    const isEvenLength = productData?.length % 2 === 0;
    const isSingleItem = productData?.length === 1;

    const blueColorBackground =  "#001a71"
    const greenColorBackground = "#2ccfad"

    const whiteColor = 'white'
    const blackColor = 'black'

    const backgroundColorData = ele?.buttonColor?.value

    const renderContent = () => (
      <>
        <div
          className={`bg-color mb-4 lg:mb-0 p-4 lg:p-[36px] ${
            isSingleItem ? "mb-4 lg:mb-0 col-span-2" : "odd:ml-0"
          }`}
          key={ele?.contentLink?.id}
        >
          <style jsx>{`
            .bg-color {
              background-color: ${ele?.backgroundColor?.value};
            }
          `}</style>

          <div className={`grid h-full`}>
            <div className={`w-full lg:mb-8 mb-6 lg:min-h-57`}>
              {ele?.imageTitle?.value?.url && (
                <img
                  className={`h-auto lg:max-w-fit lg:w-338 w-270`}
                  src={DOMPurify.sanitize(ele?.imageTitle?.value?.url)}
                  alt={DOMPurify.sanitize(ele?.imageTitle?.expandedValue?.altText?.value)}
                  id={DOMPurify.sanitize(`home-product-image${indexs}${index + 1}`)}
                />
              )}
            </div>

            <div
              className={`grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-4 lg:pr-0 my-auto text-justify`}
            >
              <div className={`pb-4 lg:pb-0 col-span-1`}>
                <div className={`mx-auto my-auto lg:h-60 object-contain`}>
                  {ele?.imageTitle?.value?.url && (
                    <img
                      className={`mx-auto lg:my-auto`}
                      src={DOMPurify.sanitize(ele?.image?.value?.url)}
                      id={DOMPurify.sanitize(`home-product-image01${indexs}${index + 1}`)}
                      alt={DOMPurify.sanitize(ele?.image?.expandedValue?.altText?.value)}
                      aria-hidden={true}
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
                    __html: DOMPurify.sanitize(ele?.description?.value),
                  }}
                  id={`p-text 01${indexs}${index + 1}`}
                ></div>
              </div>
            </div>
            {ele?.buttonText?.value && ele?.buttonUrl?.value && (
              <button
                className={`${ele?.buttonColor?.value.length == 0 || ele?.buttonColor?.value?.toLowerCase() === "#001a71" ? "text-white ": "text-black"} lg:min-w-[139px] w-max leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto lg:mr-0 ml-auto`}
                onClick={() => handleCTABtn(ele?.buttonUrl?.value)}
                id={`home-product-button${indexs}${index + 1}`}
                style={{
                  backgroundColor: backgroundColorData?.toLowerCase() === blueColorBackground ? blueColorBackground : backgroundColorData?.toLowerCase() === greenColorBackground ? greenColorBackground : blueColorBackground,
                  color:backgroundColorData?.toLowerCase() === blueColorBackground ? whiteColor : backgroundColorData?.toLowerCase() === greenColorBackground ? blackColor : whiteColor
                }}
              >
                {DOMPurify.sanitize(ele?.buttonText?.value)}
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
    productData?.length % 2 !== 0 &&
    productData?.length !== 1 &&
    productData?.map((ele: any, index: number) => {

    const blueColorBackground =  "#001a71"
    const greenColorBackground = "#2ccfad"

    const whiteColor = 'white'
    const blackColor = 'black'

    const backgroundColorData = ele?.buttonColor?.value
      const renderImage = ele?.imageTitle?.value?.url && (
        <img
          className={`h-auto lg:max-w-fit mx-auto lg:w-338 w-270 ${
            index === 0 && "lg:absolute"
          }`}
          src={DOMPurify.sanitize(ele?.imageTitle?.value?.url)}
          alt={DOMPurify.sanitize(ele?.imageTitle?.expandedValue?.altText?.value)}
          id={DOMPurify.sanitize(`home-product-image${indexs}${index + 1}`)}
          aria-hidden={true}
        />
      );

      const renderDescription:any = (
        <div
          id={`p-text${indexs}${index + 1}`}
          className="text-justify pr-0 lg:pr-0 col-span-2 lg:text-[18px]"
        >
          <div
            className={`text-lg text-sofia-reg text-mcknormalgrey font-normal text-left mb-4 text-sixcontent-ellipsis ${
              index == 0 && "lg:pr-24 lg:pl-4 lg:pt-48"
            } `}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(ele?.description?.value),
            }}
            id={`p-text 01${indexs}${index + 1}`}
          ></div>
        </div>
      );

      const renderButton = ele?.buttonText?.value &&
        ele?.buttonUrl?.value && (
          <button
            className="lg:min-w-[139px] w-max leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto lg:mr-0 ml-auto"
            onClick={() => handleCTABtn(ele?.buttonUrl?.value)}
            id={`home-product-button${indexs}${index + 1}`}
            style={{
              backgroundColor: backgroundColorData?.toLowerCase() === blueColorBackground ? blueColorBackground : backgroundColorData?.toLowerCase() === greenColorBackground ? greenColorBackground : blueColorBackground,
              color:backgroundColorData?.toLowerCase() === blueColorBackground ? whiteColor : backgroundColorData?.toLowerCase() === greenColorBackground ? blackColor : whiteColor
            }}
          >
            {ele?.buttonText?.value}
          </button>
        );
      let isDesktopNow = ele?.backgroundImage?.value?.url
        ? ele?.backgroundImage?.value?.url
        : "";
      const renderContent = (
        <div
          className={`bg-color mb-4 lg:mb-0 p-4 lg:p-[36px] md:mb-0 ${
            index === 0
              ? "bg-no-repeat row-span-2 bg-center bg-cover bg-[url('" +
                ele?.backgroundImage?.value?.url +
                "')]"
              : ""
          }`}
          key={ele?.contentLink?.id}
          style={{
            backgroundImage: `url(${ele?.backgroundImage?.value?.url})`,
          }}
        >
          <style jsx>{`
            .bg-color {
              background-color: ${ele?.backgroundColor?.value};
            }
          `}</style>

          <div className={`grid h-full w-full`}>
            <div className="w-full lg:mb-0 mb-6 lg:min-h-57 text-left">
              {DOMPurify.sanitize(renderImage)}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pr-0 my-auto text-justify">
              <div className={`pb-4 lg:pb-0 col-span-1`}>
                <div className="mx-auto my-auto lg:h-40 object-contain lg:py-48">
                  {ele?.image?.value?.url && (
                    <img
                      aria-hidden={true}
                      className={`mx-auto lg:my-auto max-h-160`}
                      src={DOMPurify.sanitize(ele?.image?.value?.url)}
                      id={DOMPurify.sanitize(`home-product-image01${indexs}${index + 1}`)}
                      alt={DOMPurify.sanitize(ele?.image?.expandedValue?.altText?.value)}
                    />
                  )}
                </div>
              </div>
              <div className="col-span-2">
                {DOMPurify.sanitize(renderDescription)}
                <div className="lg:pr-24">
                  {DOMPurify.sanitize(renderButton)}
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
                background-color: ${ele?.backgroundColor?.value};
              }
            `}</style>
            <div className={`grid h-full`}>
              <div className="w-full lg:w-44 lg:mb-8 mb-6 lg:min-h-57">
                {renderImage}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pr-0 my-auto text-justify">
                <div className="pb-4 lg:pb-0 col-span-1">
                  <div className="mx-auto my-auto lg:h-40 object-contain">
                    {ele?.image?.value?.url && (
                      <img
                        aria-hidden={true}
                        className="mx-auto lg:my-auto max-h-160"
                        src={ele?.image?.value?.url}
                        id={DOMPurify.sanitize(`home-product-image01${indexs}${index + 1}`)}
                        alt={DOMPurify.sanitize(ele?.image?.expandedValue?.altText?.value)}
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
