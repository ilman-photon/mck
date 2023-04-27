function PromotionalTextComponent({ sectionData }: any) {
  return (
    <>
      {sectionData?.map((item: any) => {
        return (
          <div
            className="w-full container pb-9 text-center mx-auto"
            key={item?.contentLink?.id}
          >
            <h5
              id="promotion-heading"
              className="text-2xl lg:text-5xl text-gtl-med blue-txt mt-6"
            >
              {item?.title?.value}
            </h5>
            <div
              id="promotion-text"
              className="mx-auto w-full lg:w-1/2 px-3 text-lg mt-8 text-sofia-reg grey-txt"
              dangerouslySetInnerHTML={{ __html: item?.description?.value }}
            ></div>
          </div>
        );
      })}
    </>
  );
}

export default PromotionalTextComponent;
