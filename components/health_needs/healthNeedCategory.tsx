import { useRouter } from "next/router";
import React, { useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import { useHealthNeedsStore } from "./components/Store/useHealthNeedsStore";

const HealthNeedCategory = ({
  healthNeedData,
  selectedFilterItems,
  selectedHealthNeed,
  setActiveFilter,
  activeFilter,
  productCategoryData,
  customerBackgroundColorCode,
}: any) => {
  const router = useRouter();
  const [activeIcon, setActiveIcon] = useState(null);
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
      pathname: updateUrl(healthNeedData?.healthNeedsCategoryUrl?.value, "0"),
      query: {
        filter: updateUrl(healthNeedData?.healthNeedsCategoryUrl?.value, "1"),
      },
    },
    undefined,

    { scroll: false }
);
    // const cat_id = productCategoryData?.mainCategory?.value[0]?.id;
    // const sub_cat_id = healthNeedData?.healthNeedCategory?.value[0].id;

    // if (selectedFilterItems[cat_id][sub_cat_id].checked) {
    //   setActiveFilter(
    //     activeFilter.filter((item: any) => {
    //       return item !== selectedHealthNeed[data]?.key;
    //     })
    //   );
    //   selectedFilterItems[cat_id][sub_cat_id].checked = false;
    // } else {
    //   selectedFilterItems[cat_id].items = [];
    //   selectedFilterItems[cat_id].items.push(data);
    //   selectedFilterItems.map((category: any) => {
    //     category.isCategoryChecked = false;
    //     category.map((sub_category: any) => {
    //       sub_category.checked = false;
    //     });
    //   });

    //   setActiveFilter([data]);
    //   selectedFilterItems[cat_id][sub_cat_id].checked = true;
    // }
  };

  // const healthNeedsBucket = {
  //       id: 52,
  //       name: "Health Needs",
  //       description:'Health Needs'
  //   }

  return (
    <div className="hidden lg:flex md:hidden desktop:px-6">
      <div
        className="pt-[36px] px-1.5 pb-0 desktop:mx-0 smalldekstop:mx-6 desktop:mt-6 smalldekstop:mt-6 lg:mt-[72px]"
        id="hn_label_0001"
        style={{ background: DOMPurify.sanitize(customerBackgroundColorCode) }}
      >
        <ul className="flex flex-wrap gap-4">
          {healthNeedData &&
            healthNeedData?.map((healthneedsdata: any, index: number) => {
                  const healthNeedsBucket = {
                    id: 52,
                    name: "Health Needs",
                    description:'Health Needs'
                }
              return  (
                <li
                  id={`Health_title+${index}`}
                  key={healthneedsdata?.contentLink?.id}
                  tabIndex={0}
                  role="link"
                  className={`list-none text-sofia-reg text-mckblue text-lg text-center shrink pl-[30px] pr-[30px] pb-[36px] cursor-pointer lg:max-w-[170px] active:lg:max-w-[170px] desktop:max-w-[105px] active:desktop:max-w-[105px] smalldekstop:max-w-[140px] active:smalldekstop:max-w-[140px]${
                    activeIcon === healthneedsdata?.contentLink?.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() => {
                    handleClearAll()
                    onSelectCheckBox(healthneedsdata.healthNeedCategory.value?.[0])
                    setBucket(healthNeedsBucket,healthneedsdata.healthNeedCategory.value?.[0],false,0,'healthNeeds',true)
                    handleHealthNeedData(healthneedsdata)
                  }
                }
                  aria-label={healthneedsdata?.title?.value}
                >
                  <img
                    id={`hl-img+${index}`}
                    src={DOMPurify.sanitize(
                      healthneedsdata?.image?.expandedValue?.url
                    )}
                    alt={DOMPurify.sanitize(healthneedsdata?.title?.value)}
                    className="mb-3 mx-auto w-auto hover:opacity-60"
                    aria-hidden="true"
                  />
                  {DOMPurify.sanitize(healthneedsdata?.title?.value)}
                </li>
              )
            } 
           )}
        </ul>
      </div>
    </div>
  );
};

export default HealthNeedCategory;