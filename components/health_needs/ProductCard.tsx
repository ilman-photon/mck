import { useRouter } from "next/router";
import { ImageComponent } from "../global/ImageComponent";

const ProductCard = ({ cardData, product, indexs, mainIndex }: any) => {
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
            onClick={() => handleProductClick(cardData)}
            className="swiper-list-item w-[198px] lg:min-h-[420px] min-h-[450px] rounded-lg border border-[#CCD1E3] mr-1 p-4"
        >
            <div className="h-60 flex items-center justify-center">
            <ImageComponent 
                src={cardData?.image?.value?.url}
                alt={`${indexs}${cardData?.image?.value?.url}`}
                tabIndex={0}
                id={`hn_label_01_${indexs + 1}_${mainIndex + 1}`} className="h-fit mx-auto border-0"
            />
            </div>
            <div
                className="w-max rounded-xl px-2 py-0.5 bg-mckthingrey mt-2 text-sofia-bold text-mckblue text-xs font-extrabold"
                tabIndex={0}
                id={`hn_label_02_${indexs + 1}_${mainIndex + 1}`}
            >
                {
                    product.item?.healthNeedCategory
                        ?.value[0]?.name
                }
            </div>
            <div
                className="text-mckblue mt-3 text-sofia-bold font-extrabold text-xl truncate"
                tabIndex={0}
                id={`hn_label_03_${indexs + 1}_${mainIndex + 1}`}
            >
                {cardData?.name}
            </div>
            <div
                className="text-mcknormalgrey mt-1 text-sofia-reg text-base font-normal para-ellipsis-3"
                tabIndex={0}
                id={`hn_label_04_${indexs + 1}_${mainIndex + 1}`}
                dangerouslySetInnerHTML={{
                    __html: cardData?.highlightDescription?.value,
                }}
            ></div>
        </div>

    );
}

export default ProductCard;