import { useRouter } from "next/router";
import { ImageComponent } from "../global/ImageComponent";
import DOMPurify from 'isomorphic-dompurify';

const ProductSearchCard = ({ cardData }: any) => {
  const router = useRouter();
  const handleProductClick = (data: any) => {
    const title = data.routeSegment;
    router.push({
      pathname: "/product_detail",
      query: { data: title },
    });
  };
  return (
    <div
                      className="rounded-lg border border-[#CCD1E3] mr-1 p-4 lg:mb-6 mb-4"
                      key={cardData?.contentLink?.id}
                    >
                      <div
                        onClick={() => handleProductClick(cardData)}
                        className="lg:h-60 h-28 flex items-center justify-center">
                        <img src={ DOMPurify.sanitize(cardData?.image?.value?.url)} alt={ DOMPurify.sanitize(cardData?.image?.value?.url)} className="mx-auto border-0 lg:max-h-60 max-h-28 cursor-pointer" />
                      </div>
                      <div className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey mt-2 text-sofia-bold text-mckblue text-xs font-extrabold leading-[18px] h-[22px] cursor-pointer">
                      { DOMPurify.sanitize(cardData?.productType?.value[0]?.name)}
                      </div>
                      <div
                     onClick={() => handleProductClick(cardData)}
                        className="text-mckblue mt-3 text-sofia-bold font-extrabold lg:text-xl text-lg truncate leading-[23px] cursor-pointer">
                        { DOMPurify.sanitize(cardData?.highlightDescription.value)}
                      </div>
                      <div
                        id="my_text"
                        className="text-mcknormalgrey mt-1 text-sofia-reg lg:text-base text-sm font-normal para-ellipsis-3"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(cardData?.highlightDescription?.value),
                        }}
                      ></div>
                    </div>
    // <div className="swiper-list-item lg:w-[202px] w-[166px] lg:min-h-[420px] min-h-[300px] rounded-lg border border-[#CCD1E3] mr-1 p-4 ">
    //   <div
    //     onClick={() => handleProductClick(cardData)}
    //     className="cursor-pointer"
    //   >
    //     <div className="lg:h-60 h-28 flex items-center justify-center">
    //       <ImageComponent
    //         src={cardData?.image?.value?.url}
    //         alt={`${indexs}${cardData?.image?.value?.url}`}
    //         id={`hn_label_01_${indexs + 1}_${mainIndex + 1}`}
    //         className="h-fit mx-auto border-0 lg:max-h-60 max-h-28"
    //       />
    //     </div>
    //     <div
    //       className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey mt-2 text-sofia-bold text-mckblue text-xs font-extrabold h-[22px]"
          
    //       id={`hn_label_02_${indexs + 1}_${mainIndex + 1}`}
    //     >
    //       {cardData?.productType?.value[0]?.name}
    //     </div>
    //     <div
    //       className="text-mckblue mt-3 text-sofia-bold font-extrabold lg:text-xl text-lg truncate"
          
    //       id={`hn_label_03_${indexs + 1}_${mainIndex + 1}`}
    //     >
    //       {cardData?.highlightDescription.value}
    //     </div>
    //   </div>
    //   <div
    //     className="text-mcknormalgrey mt-1 text-sofia-reg lg:text-base text-sm font-normal para-ellipsis-3"
        
    //     id={`hn_label_04_${indexs + 1}_${mainIndex + 1}`}
    //     dangerouslySetInnerHTML={{
    //       __html: cardData?.highlightDescription?.value,
    //     }}
    //   ></div>
    // </div>
  );
};

export default ProductSearchCard;
