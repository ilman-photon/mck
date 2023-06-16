import { useRouter } from "next/router";
import { ImageComponent } from "../global/ImageComponent";
import DOMPurify from 'isomorphic-dompurify';
import { useHeaderStore } from "../navbar/Store/useNavBarStore";
import { handlecategoryColorCode } from "../global/CommonUtil";

const ProductCard = ({ cardData, product, indexs, mainIndex }: any) => {
  const catMapping = useHeaderStore((state) => state.categoryMapping);
  const router = useRouter();
  const handleProductClick = (data: any) => {
    const title = data.routeSegment;
    router.push({
      pathname: "/product_detail",
      query: { data: title },
    });
  };

  return (
    <div className="swiper-list-item 2xl:w-[229px] xl:w-[202px] lg:w-[191px] w-[166px] lg:min-h-[420px] md:min-h-[305px] min-h-[300px] rounded-lg border border-[#CCD1E3] mr-1 p-4"
        role="button"
        tabIndex={0}
        onClick={() => handleProductClick(cardData)}
    >
      <div
        className="cursor-pointer"
      >
        <div className="lg:h-60 h-28 flex items-center justify-center" aria-hidden="true">
          <ImageComponent
            src={DOMPurify.sanitize(cardData?.image?.value?.url)}
            alt={DOMPurify.sanitize(`${indexs}${cardData?.image?.value?.url}`)}
            id={DOMPurify.sanitize(`hn_label_01_${indexs + 1}_${mainIndex + 1}`)}
            className="h-fit mx-auto border-0 lg:max-h-60 max-h-28"
            ariahidden={true}
          />
        </div>
        <div
        style={{
          backgroundColor: handlecategoryColorCode(cardData?.productCategory?.value?.[0]?.id, catMapping),
      }}
          className="w-max rounded-xl px-2 py-0.5 mt-2 text-sofia-bold text-mckblue text-xs font-extrabold h-[22px]"
          
          id={`hn_label_02_${indexs + 1}_${mainIndex + 1}`}
        >
          {cardData?.productType?.value[0]?.name}
        </div>
        <div
          className="text-mckblue mt-3 text-sofia-bold font-extrabold lg:text-xl text-lg truncate"
          
          id={`hn_label_03_${indexs + 1}_${mainIndex + 1}`}
        >
          {DOMPurify.sanitize(cardData?.highlightDescription?.value)}
        </div>
      </div>
      <div
        className="text-mcknormalgrey mt-1 text-sofia-reg lg:text-base text-sm font-normal para-ellipsis-3"
        
        id={`hn_label_04_${indexs + 1}_${mainIndex + 1}`}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(cardData?.highlightDescription?.value),
        }}
      ></div>
    </div>
  );
};

export default ProductCard;
