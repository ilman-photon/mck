import { useRouter } from "next/router";
import React, { useState } from "react";

const HealthNeedCategory = ({
  healthNeedData,
  selectedFilterItems,
  selectedHealthNeed,
  setActiveFilter,
  activeFilter,
  productCategoryData,
}: any) => {
  const router = useRouter();
  const [activeIcon, setActiveIcon] = useState(null);
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

  return (
    <div className="hidden lg:flex md:flex">
      <div
        className="health-needs-categories pt-9 px-1.5 mt-12 pb-0 bg-[#f2f4f9]"
        tabIndex={0}
        id="hn_label_002"
      >
        <div className="health-needs-categories-icons flex flex-wrap gap-4">
          {healthNeedData &&
            healthNeedData?.map((healthneedsdata: any) => (
              <li
                key={healthneedsdata?.contentLink?.id}
                className={`list-none text-sofia-reg text-mckblue text-lg text-center flex-auto shrink pl-[30px] pr-[30px] pb-9 ${
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
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HealthNeedCategory;
