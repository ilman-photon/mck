import { useEffect } from "react";

export default function LearningSectionComponent({ sectionData }) {
  useEffect(() => {
    console.log("LearningSectionComponent", sectionData);
    console.log("hoi",sectionData[3].contentBlockArea.value[0].contentLink.id)
  });

  return (
    <>
      {sectionData?.map((ele) => {
        return (
          <div className={`${(ele?.assetPosition?.value) === 'Right' ? 'flex-row-reverse' : ''} container mx-auto grid lg:flex w-full`}
            key={ele?.image?.value?.id}>
            <div className={`${ele?.assetPosition?.value} w-full lg:w-1/2 h-auto p-5 lg:px-20 lg:py-10 col-span-1`}>
              <img src={ele?.image?.value?.url} />
            </div>
            <div className="p-5 lg:p-16 my-auto col-span-1 w-full lg:w-1/2">
              <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">
                {ele?.name}
              </h2>
              <div className="text-base text-sofia-reg lg:pr-5 py-5 text-center lg:text-left" dangerouslySetInnerHTML={{ __html: ele?.description?.value }}></div>
              {ele?.buttonText?.value && (
                <div className="w-[124px] h-[44px] m-3 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer mx-auto lg:mx-0">
                  {ele?.buttonText?.value}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}