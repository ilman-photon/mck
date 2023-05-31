import { memo } from "react";
import { ImageComponent } from "../global/ImageComponent";
interface RelatedProductsProps {
    BlogListingContent: any;
    title: string;
    OnRelatedProductClick: (e: string) => void;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ BlogListingContent, title, OnRelatedProductClick }) => {

    return (
        <div className='related-card [&>*:last-child]:mb-0'>
            <div className="text-mckblue text-sofia-bold font-extrabold text-lg mb-6" id='blog-label-010'>{title}</div>
            {BlogListingContent?.map((item: any, index: number) => (
                <div
                    onClick={() => OnRelatedProductClick(item)}
                    key={index}
                    className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4">
                    <figure className='w-full text-center'>
                        <ImageComponent
                            src={item.image.expandedValue?.url}
                            id='blog-img-006'
                            alt='Allergy Relief Product'
                            className="px-5 lg:px-0 m-auto lg:w-32"
                        />
                    </figure>
                    <figcaption>
                        <div className="content p-6">
                            <div
                                className="bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='blog-label-010-01'
                                style={{
                                    // backgroundColor: item.recommendedProductButtonColor.value,
                                    // color: item.recommendedProductButtonText.value
                                }}
                            >
                                {item.productType.value[0].name}
                            </div>

                            <a href=""
                                className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 mb-1 no-underline"
                                aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                                id={`blog-label-010-` + index}>
                                {item.name}
                            </a>
                            <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='blog-label-010-03' dangerouslySetInnerHTML={{ __html: item.subTitle.value }}></p>
                        </div>
                    </figcaption>
                </div>))}
        </div>
    )
}
export default memo(RelatedProducts);
