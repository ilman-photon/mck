import { useEffect } from "react";

export default function LearningSectionComponent({ sectionData }) {
  useEffect(() => {
    console.log("LearningSectionComponent", sectionData);
  });

  return (    
    <>
      {sectionData?.map((ele) => {
        return (
          <div
            className="container mx-auto grid md:grid-cols-2 w-full"
            key={ele?.image?.value?.id}
          >
            <div
              className={`${ele?.assetPosition?.value} h-auto w-full p-5 lg:px-20 lg:my-10`}
            >
              <img src={ele?.image?.value?.url} />
            </div>
            <div className="p-5 lg:p-16 my-auto">
              <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">
                {ele?.name}
              </h2>
              <div
                className="text-base text-sofia-reg lg:pr-5 py-5 text-center lg:text-left"
                dangerouslySetInnerHTML={{ __html: ele?.description?.value }}
              ></div>
              {ele?.buttonText?.value && (
                <div className="btn w-[124px] h-[44px] mx-auto lg:mx-0">
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
