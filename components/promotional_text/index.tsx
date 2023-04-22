function PromotionalTextComponent({ sectionData }: any) {
  return (
    <>
      <div className="w-full container pb-20 text-center mx-auto">
        {sectionData?.map((item: any) => {
          return (
            <div>
              <h5 className="text-2xl lg:text-5xl text-gtl-med blue-txt mt-6">
                {item?.title?.value}
              </h5>
              <div
                className="mx-auto w-full lg:w-1/2 px-3 text-lg mt-8 text-sofia-reg grey-txt"
                dangerouslySetInnerHTML={{ __html: item?.description?.value }}
              ></div>
            </div>
          );
        })}
      </div>
      {sectionData?.map((item: any) => {
        return (
          <div
            className="w-full container pb-20 text-center mx-auto"
            key={item?.contentLink?.id}
          >
            <h5 className=" mx-auto w-full lg:w-1/2 lg:px-24 lg:pt-10 m-10 text-27 lg:text-54 text-gtl-med blue-txt">
              {item?.title?.value}
            </h5>
            <div
              className=" mx-auto w-full lg:w-1/2 px-3 text-lg text-sofia-reg grey-txt"
              dangerouslySetInnerHTML={{ __html: item?.description?.value }}
            ></div>
          </div>
        );
      })}
    </>
  );
}

export default PromotionalTextComponent;
