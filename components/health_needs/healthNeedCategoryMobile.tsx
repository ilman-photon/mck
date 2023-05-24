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
      selectedFilterItems[cat_id].items.push(data);
      setActiveFilter([...activeFilter, selectedHealthNeed[data]?.key]);
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
    <div className="lg:hidden md:hidden">
      <div
        className="health-needs-categories pt-9 px-1.5 mt-12 pb-0 bg-[#f2f4f9]"
        tabIndex={0}
        id="hn_label_002"
      >
        <div className="health-needs-categories-icons">
          <div className="carousel-container grid grid-cols-3 md:grid-cols-2 gap-4 overflow-x-auto">
            {healthNeedData &&
              healthNeedData
                .slice(
                  slideIndex * slidesPerRow * rowsPerPage,
                  (slideIndex + 1) * slidesPerRow * rowsPerPage
                )
                .map((healthneedsdata: any) => (
                  <div
                    key={healthneedsdata?.contentLink?.id}
                    className={`carousel-item text-sofia-reg text-mckblue text-lg text-center flex-auto pb-9 ${
                      activeIcon === healthneedsdata?.contentLink?.id
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      handleHealthNeedData(
                        healthneedsdata?.title.value,
                        healthneedsdata
                      )
                    }
                  >
                    <img
                      src={healthneedsdata?.image?.expandedValue?.url}
                      alt={healthneedsdata?.title.value}
                      className="mb-3 mx-auto w-auto"
                    />
                    {healthneedsdata?.title.value}
                  </div>
                ))}
          </div>
          {healthNeedData?.length > slidesPerRow * rowsPerPage && (
            <div className="carousel-controls flex justify-center mt-2">
              <button
                className="mr-2 bg-gray-200 px-3 py-2 rounded-md text-gray-600"
                onClick={handlePrev}
              >
                Prev
              </button>
              <button
                className="bg-gray-200 px-3 py-2 rounded-md text-gray-600"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthNeedCategoryMobile;
