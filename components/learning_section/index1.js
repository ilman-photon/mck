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
            <div className={`${ele?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:py-9 lg:px-9 col-span-1`}>
              <img className="w-full px-5 lg:px-0" src={ele?.image?.value?.url} />
            </div>
            <div className="p-5 lg:pr-9 lg:pl-9 my-auto col-span-1 w-full lg:w-1/2">
              <h2 className="pb-6 text-2xl lg:text-54 text-gtl-med text-center lg:text-left blue-txt">
                {ele?.name}
              </h2>
              <div className="jsx-290076256 text-lg text-sofia-reg text-center lg:text-left pb-6" dangerouslySetInnerHTML={{ __html: ele?.description?.value }}></div>
              {ele?.buttonText?.value && (
                <div className="jsx-290076256 w-[124px] h-[44px] m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex ml-0 lg:ml-auto">
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