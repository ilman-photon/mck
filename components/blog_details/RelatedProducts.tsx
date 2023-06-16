import { memo } from "react";
import { ImageComponent } from "../global/ImageComponent";
import DOMPurify from 'isomorphic-dompurify';
import TagsComponent from "../blog/Tags";

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
                    key={index}
                    className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4 lg:h-auto ">
                    <figure className='w-full  text-center'
                        onClick={() => OnRelatedProductClick(item)}
                    >
                        <ImageComponent
                            src={DOMPurify.sanitize(item?.image?.expandedValue?.url)}
                            id={`blog-img-relatedProduct-0${index}`}
                            key={`blog-img-relatedProduct-0${index}`}
                            alt={`Product-alt${index}`}
                            ariahidden={false}
                            className="px-5 lg:px-0 m-auto lg:w-32 lg:max-h-60 sm:max-h-[300px] cursor-pointer"
                        />
                    </figure>
                    <div>
                        <div className="content p-6">
                            <TagsComponent BlogTag={item.productType} />
                            <p
                                onClick={() => OnRelatedProductClick(item)}
                                className="articleTitle cursor-pointer text-xl text-heading-ellipsis sm:leading-9 text-sofia-reg font-extrabold text-mckblue mt-3 mb-1 no-underline"
                                aria-labelledby={`ProductTitel` + index}
                                id={`blog-label-0`+index}
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify?.sanitize(item?.title.value),
                                }}
                            />

                            <p className="text-sofia-reg text-heading-ellipsis font-noraml text-mcknormalgrey text-base" id={`blog-titel-0`+index} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item?.subTitle?.value) }}></p>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}
export default memo(RelatedProducts);
