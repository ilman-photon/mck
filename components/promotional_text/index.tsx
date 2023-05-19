function PromotionalTextComponent({ sectionData }: any) {
  return (
    <>
      {sectionData?.map((item: any) => {
        return (
          <div
            className="w-full container lg:pb-9 pb-6 text-center mx-auto"
            key={item?.contentLink?.id}
          >
            <h3
              // id="promotion-heading"
              className="text-2xl lg:text-5xl text-gtl-med blue-txt lg:mt-6" tabIndex={0} id={item?.title?.value}
            >
              {item?.title?.value}
            </h3>
            <div
              // id="promotion-text"
              className="mx-auto w-full lg:w-1/2 px-3 text-lg lg:mt-8 mt-4 text-sofia-reg grey-txt"
              dangerouslySetInnerHTML={{ __html: item?.description?.value }} tabIndex={0} id={item?.description?.value}
            ></div>
          </div>
        );
      })}
    </>
  );
}

export default PromotionalTextComponent;
