import { useRouter } from "next/router";
import React, { useState } from "react";

const HealthNeedCategory = ({healthNeedData , selectedFilterItems ,selectedHealthNeed,setActiveFilter,activeFilter,productCategoryData}:any) =>{
    const router = useRouter();
    const [activeIcon, setActiveIcon] = useState(null);
    function updateUrl(path: String,type: string) {
      let f = "?filter=";
      let splitPath = path !== null ? path?.split(f) : "";
      if (type === "1") {
        return splitPath[1];
      } else {
        return splitPath[0];
      }
    }

    const handleHealthNeedData = (data :any , healthNeedData :any ) =>{
      setActiveIcon(healthNeedData?.contentLink?.id);
        router.push({
          pathname : updateUrl(healthNeedData.healthNeedsCategoryUrl.value , "0"),
          query: {
            filter: updateUrl(healthNeedData.healthNeedsCategoryUrl.value, "1"),
          },
        });
 
    const cat_id = productCategoryData.mainCategory.value[0].id
    const sub_cat_id = healthNeedData.healthNeedCategory.value[0].id

   if(selectedFilterItems[cat_id][sub_cat_id].checked){
  
    setActiveFilter(
      activeFilter.filter((item: any) => {
        return item !== selectedHealthNeed[data]?.key;
      })
    );
    selectedFilterItems[cat_id][sub_cat_id].checked = false
   }
   else{
  
    selectedFilterItems[cat_id].items.push(data)
  setActiveFilter([...activeFilter,selectedHealthNeed[data]?.key ]);
        selectedFilterItems[cat_id][sub_cat_id].checked = true;
   }
    }

    return(
        <div className="health-needs-categories p-6 mt-12 bg-gray-200 pb-0" tabIndex={0} id="hn_label_002">
        <div className="health-needs-categories-icons">
          <ul className="flex flex-wrap">
            {healthNeedData &&
              healthNeedData?.map((healthneedsdata: any) => (
                <li
                  key={healthneedsdata?.contentLink?.id} 
                  className={`text-sofia-reg text-mckblue text-lg text-center grow shrink pl-6 pr-6 pb-6 ${activeIcon === healthneedsdata?.contentLink?.id ? 'active' : ''}`}
                  onClick={() => handleHealthNeedData(healthneedsdata?.title.value, healthneedsdata)}
                >
                  <img src={healthneedsdata?.image?.expandedValue?.url} alt={healthneedsdata?.title.value} />
                  {healthneedsdata?.title.value}
                </li>
              ))}
          </ul>
        </div>
      </div>

    );

}

export default HealthNeedCategory;