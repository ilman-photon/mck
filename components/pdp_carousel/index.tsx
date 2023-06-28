import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useWindowResize } from "@/hooks/useWindowResize";
import { ImageComponent } from "../global/ImageComponent";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from "isomorphic-dompurify";

function PdpCarousel(prodViewData: any) {
  const router = useRouter();
  const [deviceWidth] = useWindowResize();
  const { data } = router.query;
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [arrowClick, setArrowClick] = useState(0);
  const [dataImageId, setDataImageId] = useState(0);
  const [prodResponse, setProdResponse] = useState<any>();
  const [indexPoint, setIndexPoint] = useState();
  const [carouselState, setCarouselState] = useState({
    selectedItemIndex: 0,
    lastIndex: 0,
    arrowClick: 0,
  });
  const [imgUrl, setImgUrl] = useState("");
  function fetchPDPCarouselDetails() {
    return axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${
        process.env.API_URL
      }/en/pdp/${data?.length && data}/&expand=*`
    );
  }
  useEffect(() => {
    setLastIndex(
      deviceWidth <= 400
        ? 3
        : deviceWidth > 400 && deviceWidth <= 812
        ? 4
        : deviceWidth > 812 && deviceWidth <= 1024
        ? 5
        : 6
    );
  }, [deviceWidth]);

  useEffect(() => {
    fetchPDPCarouselDetails()
      .then((res: any) => {
        setProdResponse(res.data[0]);
      })
      .catch((e: Error | AxiosError) => console.log(e));
  }, [prodResponse?.routeSegment, data]);

  const handleDownArrowClick = () => {
    if (lastIndex < prodResponse?.productImages?.value?.length) {
      setArrowClick(() => arrowClick + 1);
      setLastIndex(() => lastIndex + 1);
      setImgUrl(prodResponse?.productImages?.value[selectedItemIndex]?.url);
    }
    if (prodResponse?.productImages?.value?.length > selectedItemIndex + 1) {
      setSelectedItemIndex((prevState) => prevState + 1);
      setImgUrl(prodResponse?.productImages?.value[selectedItemIndex]?.url);
    }
  };

  const handleUpArrowClick = () => {
    if (arrowClick > 0) {
      setArrowClick((prevArrowClick) => prevArrowClick - 1);
      setLastIndex((prevLastIndex) => prevLastIndex - 1);
      setImgUrl(prodResponse?.productImages?.value[selectedItemIndex]?.url);
    }
    if (selectedItemIndex > 0) {
      setSelectedItemIndex(
        (prevSelectedItemIndex) => prevSelectedItemIndex - 1
      );
      setImgUrl(prodResponse?.productImages?.value[selectedItemIndex]?.url);
    }
  };

  const handleImageClick = (i: any, dataImageId?: any) => {
    const index = prodResponse?.productImages?.value.findIndex(
      (imgdata: any) => imgdata.id == dataImageId
    );

    setSelectedItemIndex(i + arrowClick);
    setDataImageId(dataImageId);
    setImgUrl(prodResponse?.productImages?.value[selectedItemIndex]?.url);
  };

  const handleMouseOver = (id: number) => {
    setSelectedItemIndex(id);
    setImgUrl(prodResponse?.productImages?.value[selectedItemIndex]?.url);
  };

  const isProductImageLessThanSix =
    prodResponse?.productImages?.expandedValue?.length < 6;
  useEffect(() => {
    const imgData =
      prodResponse?.productImages?.value &&
      prodResponse?.productImages?.value[selectedItemIndex + arrowClick];
    const imgUrl =
      (imgData && imgData.url) ||
      prodResponse?.image?.expandedValue?.url ||
      prodResponse?.image?.value?.url;
    setImgUrl(prodResponse?.productImages?.value[selectedItemIndex]?.url);
  }, [selectedItemIndex, arrowClick, prodResponse]);

  return (
    <div className="flex lg:mx-auto lg:h-[636px] mx-4 lg:mx-0" id="pdp-01">
      <div className="flex flex-col-reverse lg:flex-row pdp-carousel w-full">
        <div className="pdp_images flex lg:grid relative">
          {isProductImageLessThanSix ? null : (
            <div className="hidden lg:block cursor-pointer absolute left-[36px] top-[-13px]">
              <img
                onClick={handleUpArrowClick}
                src="images\carousel_down.png"
                alt="img"
                className={`m-auto ${
                  selectedItemIndex <= 0 ? "opacity-25" : ""
                } rotate-180`}
                id="pdp-img-001"
              />
            </div>
          )}
          {isProductImageLessThanSix ? null : (
            <div
              id={'pdp-left-arrow'}
              onClick={handleUpArrowClick}
              className={`carousel-prev -left-6 cursor-pointer lg:hidden flex items-center absolute left-[-10px] top-[27px] ${
                selectedItemIndex <= 0 ? "opacity-25" : ""
              }`}
            >
              <svg
                className="focus:outline-none"
                width="24"
                height="49"
                viewBox="0 0 48 49"
                id="hcp-btn-005"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24.8306" r="24" fill="#001A71"></circle>
                <path
                  d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z"
                  fill="#ffffff"
                ></path>
              </svg>
            </div>
          )}
          <ul className="3GnUWp flex lg:flex-col">
            {prodResponse?.productImages?.value &&
              prodResponse?.productImages?.value
                ?.slice(arrowClick, lastIndex)
                .map((imgdata: any, index: any) => {
                  return (
                    <li
                      className={`lg:w-24 w-20 lg:h-24 h-20 rounded box-border flex flex-row justify-center items-center p-2 bg-white border border-solid border-mckblue mb-3 
                                    ${
                                      selectedItemIndex === index + arrowClick
                                        ? "cursor-pointer border-solid border-4 border-indigo-600 hover:border-solid hover:border-4"
                                        : ""
                                    } 
                                `}
                      id={"pdp_carousel_" + index}
                      key={`pdpcarousalkey${index}`}
                      onClick={() => {
                        handleImageClick(index, imgdata?.id);
                      }}
                      onMouseOver={(event) =>
                        handleMouseOver(index + arrowClick)
                      }
                    >
                      <img
                        className="max-w-xl w-10"
                        role="img"
                        src={DOMPurify.sanitize(imgdata?.url)}
                        alt={DOMPurify.sanitize(`pdp-img-C0` + index)}
                        id={DOMPurify.sanitize(`pdp-img-C0` + index)}
                      />
                    </li>
                  );
                })}
          </ul>
          {/* <button onClick={handleDownArrowClick}>Down arrow</button> */}
          {isProductImageLessThanSix ? null : (
            <div className="hidden lg:block cursor-pointer absolute bottom-[-13px] left-[36px]">
              <img
                onClick={handleDownArrowClick}
                src="images\carousel_down.png"
                alt={DOMPurify.sanitize("image")}
                className={`m-auto ${
                  prodResponse?.productImages?.value?.length - 1 <=
                  selectedItemIndex
                    ? "opacity-25"
                    : ""
                }`}
              />
            </div>
          )}
          {isProductImageLessThanSix ? null : (
            <div
              id={'pdp-right-arrow'}
              onClick={handleDownArrowClick}
              className={`carousel-next -right-6 lg:hidden cursor-pointer flex items-center absolute top-[27px] right-[-10px] ${
                prodResponse?.productImages?.value?.length - 1 <=
                selectedItemIndex
                  ? "opacity-25"
                  : ""
              }`}
            >
              <svg
                className="focus:outline-none"
                width="24"
                height="49"
                viewBox="0 0 48 49"
                id="hcp-btn-006"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24.8306" r="24" fill="#001A71"></circle>
                <path
                  d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          )}
        </div>
        <div
          className={`lg:w-[526px] ${
            deviceWidth < 1024 && deviceWidth !== 0 ? "h-[300px]" : ""
          } box-border flex flex-row justify-center items-center p-2 bg-white rounded border border-solid border-mckblue lg:ml-14`}
        >
          <ImageComponent
            src={DOMPurify.sanitize(imgUrl)}
            className="lg:w-[270px] max-w-[180px]"
            alt={DOMPurify.sanitize("Image is not available")}
            ariahidden={false}
            id={
              "pdp_carousel_highlight"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default PdpCarousel;
