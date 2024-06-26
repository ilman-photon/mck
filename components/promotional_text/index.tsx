import { ImageComponent } from "../Shared";
import DOMPurify from 'isomorphic-dompurify';

function ImageVideoOrTextSection({ sectionData, textAlignment, index }: any) {

  return (
    <>
    {sectionData?.backgroundImage?.expandedValue?.url ? (
      <ImageComponent
      imageContainerStyle=""
      imageSource={sectionData?.backgroundImage?.expandedValue?.url}
      imageStyle="w-full"
      alt={`${index}_img_001`}
      id={`${index}_img_001`}
      ariahidden={false}
      />
    ) : ( 
      <div
        className={`w-full ${textAlignment === 'text-center' && textAlignment} mx-auto`}
        key={sectionData?.contentLink?.id}
      >
        <h1
          id={`${index}_lbl_001`}
          // id="promotion-heading"
          className="text-2xl lg:text-5xl text-gtl-med text-mckblue lg:mt-6 text-center" 
        >
          {sectionData?.title?.value}
        </h1>
        <div
          // id="promotion-text"
          className={`mx-auto w-full lg:${textAlignment === 'text-center' && 'w-1/2'} text-lg lg:mt-8 mt-4 text-sofia-reg grey-txt lg:text-left`}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(sectionData?.description?.value) }}
          id={`${index}_dis_001`}
        ></div>
      </div>
    )}
    </>
  );
}

export default ImageVideoOrTextSection;
