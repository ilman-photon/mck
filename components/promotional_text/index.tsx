function ImageVideoOrTextSection({ sectionData, textAlignment }: any) {
  return (
    <>
      <div
        className={`w-full container lg:pb-6 pb-6 lg:pt-6 ${textAlignment} mx-auto`}
        key={sectionData?.contentLink?.id}
      >
        <h3
          // id="promotion-heading"
          className="text-2xl lg:text-5xl text-gtl-med blue-txt lg:mt-6" tabIndex={0} id={sectionData?.title?.value}
        >
          {sectionData?.title?.value}
        </h3>
        <div
          // id="promotion-text"
          className="mx-auto w-full lg:w-1/2 px-3 text-lg lg:mt-8 mt-4 text-sofia-reg grey-txt"
          dangerouslySetInnerHTML={{ __html: sectionData?.description?.value }} tabIndex={0} id={sectionData?.description?.value}
        ></div>
      </div>
    </>
  );
}

export default ImageVideoOrTextSection;
