import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const HealthNeedCategory = ({healthNeedData , selectedFilterItems ,selectedHealthNeed,setActiveFilter,activeFilter}:any) =>{
    const router = useRouter();
    const [activeIcon, setActiveIcon] = useState(null);

    const handleHealthNeedData = (data :any , healthNeedData :any ) =>{
      setActiveIcon(healthNeedData?.contentLink?.id);
        const queryParams = { filter: data };
        router.push({
          pathname: '/health_needs',
          query: queryParams,
        });
  
    const cat_id = 52
    const sub_cat_id = 53

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
        // <div className="health-needs-categories p-[36px] mt-[72px] bg-[#F2F4F9] pb-0" tabIndex={0} id="hn_label_002">
        //   <div className="health-needs-categories-icons">
        //     <ul className="flex flex-wrap">
        //       {healthNeedData &&
        //         healthNeedData?.map((healthneedsdata: any) => (
        //           <li key={healthneedsdata?.contentLink?.id} 
                  
        //           className="text-sofia-reg text-mckblue text-lg text-center grow shrink pl-[30px] pr-[30px] pb-[36px] "
        //           onClick ={()=>(handleHealthNeedData(healthneedsdata?.title.value , healthneedsdata))}
        //           >
        //             <img src={healthneedsdata?.image?.expandedValue?.url} />
        //             {healthneedsdata?.title.value}
        //           </li>
        //         ))}
        //     </ul>
        //   </div>
        // </div>
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