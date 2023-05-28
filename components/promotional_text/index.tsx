function ImageVideoOrTextSection({ sectionData, textAlignment }: any) {
  return (
    <>
      <div
        className={`w-full container lg:pb-6 pb-6 lg:pt-6 lg:px-72 ${textAlignment === 'text-center' && textAlignment} mx-auto`}
        key={sectionData?.contentLink?.id}
      >
        <h3
          // id="promotion-heading"
          className="text-2xl lg:text-5xl text-gtl-med blue-txt lg:mt-6 text-center" tabIndex={0} id={sectionData?.title?.value}
        >
          {sectionData?.title?.value}
        </h3>
        <div
          // id="promotion-text"
          className={`mx-auto w-full lg:${textAlignment === 'text-center' && 'w-1/2' } text-lg lg:mt-8 mt-4 text-sofia-reg grey-txt ${textAlignment} `}
          dangerouslySetInnerHTML={{ __html: sectionData?.description?.value }} tabIndex={0} id={sectionData?.description?.value}
        ></div>
      </div>
    </>
  );
}

export default ImageVideoOrTextSection;
