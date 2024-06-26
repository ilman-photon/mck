import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import DOMPurify from "isomorphic-dompurify";
import { useHealthNeedsStore } from "./components/Store/useHealthNeedsStore";

const HealthNeedCategoryMobile = ({
  healthNeedData,
  selectedFilterItems,
  selectedHealthNeed,
  setActiveFilter,
  activeFilter,
  productCategoryData,
}: any) => {
  const router = useRouter();
  const [activeIcon, setActiveIcon] = useState(null);
  const containerRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesPerRow = 3;
  const rowsPerPage = 2;
  const [isFirstIndex, setIsFirstIndex] = useState<boolean>(true);
  const [isLastIndex, setIsLastIndex] = useState<boolean>(false);
  const setBucket = useHealthNeedsStore((state) => state.setBucket)
  const onSelectCheckBox = useHealthNeedsStore((state) => state.onSelectCheckBox)
  const onClearAll = useHealthNeedsStore((state) => state.onClearAll)

  const handleClearAll = React.useCallback(() => {
    onClearAll()
  },[])

  function updateUrl(path: string, type: string) {
    let f = "?filter=";
    let splitPath = path !== null ? path?.split(f) : "";
    if (type === "1") {
      return splitPath[1];
    } else {
      return splitPath[0];
    }
  }

  const handleHealthNeedData = (healthNeedData: any) => {
    setActiveIcon(healthNeedData?.contentLink?.id);
    router.push({
      pathname: updateUrl(healthNeedData.healthNeedsCategoryUrl.value, "0"),
      query: {
        filter: updateUrl(healthNeedData.healthNeedsCategoryUrl.value, "1"),
      },
    },
    undefined,

    { scroll: false });

  };

  const handlePrev = () => {
    var newSlideIndex = slideIndex - 1;

    if (newSlideIndex > 0) {
      setSlideIndex(newSlideIndex);
      setIsLastIndex(false);
      setIsFirstIndex(false);
    } else if (newSlideIndex == 0) {
      setSlideIndex(0);
      setIsLastIndex(false);
      setIsFirstIndex(true);
    }
  };

  const handleNext = () => {
    const totalPages = Math.ceil(
      healthNeedData.length / (slidesPerRow * rowsPerPage)
    );
    var newSlideIndex = slideIndex + 1;
    if (newSlideIndex < totalPages - 1) {
      setSlideIndex(newSlideIndex);
      setIsLastIndex(false);
      setIsFirstIndex(false);
    } else if (newSlideIndex == totalPages - 1) {
      setSlideIndex(totalPages - 1);
      setIsLastIndex(true);
      setIsFirstIndex(false);
    }
  };

  return (
    <div className="lg:hidden">
      <h1
        className="pt-6 text-[27px] leading-[30px] text-mckblue text-gtl-med lg:px-4 font-medium"
        aria-label="Health Needs"
      >
        Health Needs
      </h1>
      <div
        className="pt-6 lg:pt-9 px-1.5 mt-6 lg:mt-12 pb-0 bg-[#f2f4f9] lg:mx-4 relative min-h-[300px]"
        id="hn_label_0002"
      >
        <div className="">
          <div className="carousel-container grid grid-cols-3 md:grid-cols-3 gap-4 overflow-x-auto">
            {healthNeedData &&
              healthNeedData
                .slice(
                  slideIndex * slidesPerRow * rowsPerPage,
                  (slideIndex + 1) * slidesPerRow * rowsPerPage
                )
                .map((healthneedsdata: any) =>{
                  const healthNeedsBucket = {
                    id: 52,
                    name: "Health Needs",
                    description:'Health Needs'
                }
                  return(
                    <div
                      key={healthneedsdata?.contentLink?.id}
                      className={`carousel-item text-sofia-reg text-mckblue text-lg text-center flex-auto pb-6 ${
                        activeIcon === healthneedsdata?.contentLink?.id
                          ? "active"
                          : ""
                      }`}
                      onClick={() => {
                        handleClearAll()
                        onSelectCheckBox(healthneedsdata.healthNeedCategory.value?.[0])
                        setBucket(healthNeedsBucket,healthneedsdata.healthNeedCategory.value?.[0],false,0,'healthNeeds',true)
                        handleHealthNeedData(
                          healthneedsdata
                        )
                      }
                      }
                      aria-label={DOMPurify.sanitize(
                        healthneedsdata?.title?.value
                      )}
                    >
                      <img
                        id={healthneedsdata?.title.value}
                        src={DOMPurify.sanitize(
                          healthneedsdata?.image?.expandedValue?.url
                        )}
                        alt={healthneedsdata?.title.value}
                        className="mb-3 mx-auto w-auto"
                      />
                      {healthneedsdata?.title.value}
                    </div>
                  )
                } 
                )}
          </div>
          {healthNeedData?.length > slidesPerRow * rowsPerPage && (
            <div className="carousel-controls flex justify-center absolute top-[124px] w-full">
              <button
                className={`${
                  isFirstIndex ? "opacity-50" : "opacity-100"
                } left-btn left-[-18px] absolute`}
                onClick={handlePrev}
                aria-label="Previous"
              ></button>
              <button
                className={`${
                  isLastIndex ? "opacity-50" : "opacity-100"
                } right-btn right-[-8px] absolute`}
                onClick={handleNext}
                aria-label="Next"
              ></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthNeedCategoryMobile;
