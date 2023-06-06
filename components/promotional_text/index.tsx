function ImageVideoOrTextSection({ sectionData, textAlignment, index }: any) {
  return (
    <>
      <div
        className={`w-full ${textAlignment === 'text-center' && textAlignment} mx-auto`}
        key={sectionData?.contentLink?.id}
      >
        <h3
          id={`${index}_lbl_001`}
          // id="promotion-heading"
          className="text-2xl lg:text-5xl text-gtl-med blue-txt lg:mt-6 text-center" 
        >
          {sectionData?.title?.value}
        </h3>
        <div
          // id="promotion-text"
          className={`mx-auto w-full lg:${textAlignment === 'text-center' && 'w-1/2'} text-lg lg:mt-8 mt-4 text-sofia-reg grey-txt text-center `}
          dangerouslySetInnerHTML={{ __html: sectionData?.description?.value }}
          id={`${index}_dis_001`}
        ></div>
      </div>
    </>
  );
}

export default ImageVideoOrTextSection;
