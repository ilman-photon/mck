import { useRouter } from "next/router";
import React, { useState, useRef } from "react";

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

  function updateUrl(path: string, type: string) {
    let f = "?filter=";
    let splitPath = path !== null ? path?.split(f) : "";
    if (type === "1") {
      return splitPath[1];
    } else {
      return splitPath[0];
    }
  }

  const handleHealthNeedData = (data: any, healthNeedData: any) => {
    setActiveIcon(healthNeedData?.contentLink?.id);
    router.push({
      pathname: updateUrl(healthNeedData.healthNeedsCategoryUrl.value, "0"),
      query: {
        filter: updateUrl(healthNeedData.healthNeedsCategoryUrl.value, "1"),
      },
    });

    const cat_id = productCategoryData.mainCategory.value[0].id;
    const sub_cat_id = healthNeedData.healthNeedCategory.value[0].id;

    if (selectedFilterItems[cat_id][sub_cat_id].checked) {
      setActiveFilter(
        activeFilter.filter((item: any) => {
          return item !== selectedHealthNeed[data]?.key;
        })
      );
      selectedFilterItems[cat_id][sub_cat_id].checked = false;
    } else {
      selectedFilterItems[cat_id].items = [];   
      selectedFilterItems[cat_id].items.push(data);
      selectedFilterItems.map((category: any) => {
        category.isCategoryChecked = false;
        category.map((sub_category: any) => {
          sub_category.checked = false;
        });
      });

      setActiveFilter([data]);
      selectedFilterItems[cat_id][sub_cat_id].checked = true;
    }
  };

  const handlePrev = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleNext = () => {
    const totalPages = Math.ceil(
      healthNeedData.length / (slidesPerRow * rowsPerPage)
    );
    if (slideIndex < totalPages - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="lg:hidden">
      <h1 className="pt-6 text-[27px] leading-[30px] text-mckblue text-gtl-med lg:px-4 font-medium"  aria-label="Health Needs">Health Needs</h1>
      <div
        className="pt-6 lg:pt-9 px-1.5 mt-6 lg:mt-12 pb-0 bg-[#f2f4f9] lg:mx-4 relative min-h-[300px]"
        
        id="hn_label_0002"
      >
        <div className="">
          <div className="carousel-container grid grid-cols-3 md:grid-cols-3 gap-4 overflow-x-auto" >
            {healthNeedData &&
              healthNeedData
                .slice(
                  slideIndex * slidesPerRow * rowsPerPage,
                  (slideIndex + 1) * slidesPerRow * rowsPerPage
                )
                .map((healthneedsdata: any) => (
                  <div
                    key={healthneedsdata?.contentLink?.id}
                    className={`carousel-item text-sofia-reg text-mckblue text-lg text-center flex-auto pb-6 ${activeIcon === healthneedsdata?.contentLink?.id
                        ? "active"
                        : ""
                      }`}
                    onClick={() =>
                      handleHealthNeedData(
                        healthneedsdata?.title.value,
                        healthneedsdata
                      )
                    }
                     aria-label={healthneedsdata?.title.value}
                  >
                    <img
                      id={healthneedsdata?.title.value}
                      src={healthneedsdata?.image?.expandedValue?.url}
                      alt={healthneedsdata?.title.value}
                      className="mb-3 mx-auto w-auto"
                    />
                    {healthneedsdata?.title.value}
                  </div>
                ))}
          </div>
          {healthNeedData?.length > slidesPerRow * rowsPerPage && (
            <div className="carousel-controls flex justify-center absolute top-[124px] w-full" >
              <button
                className="left-btn left-[-18px] absolute"
                onClick={handlePrev}  aria-label="Previous"
              >
              </button>
              <button
                className="right-btn right-[-8px] absolute"
                onClick={handleNext}  aria-label="Next"
              >
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthNeedCategoryMobile;
