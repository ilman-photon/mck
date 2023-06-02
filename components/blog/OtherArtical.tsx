import React, { memo } from "react";
import { GetTime, handleTagBackgroudColor } from "../global/CommonUtil";

import { LinkComponent } from "../global/LinkComponent";
import { ImageComponent } from "../global/ImageComponent";
interface OtherArticalProps {
    ArticleList: any;
}

const OtherArtical: React.FC<OtherArticalProps> = ({ ArticleList }) => {
    return (
        <div className='grid lg:grid-cols-2 gap-x-6 grid-cols-1'>
            {ArticleList ? ArticleList?.map((item: any, index: any) => (
                <div key={`{blog-article_${item.contentLink.id}}`}>
                    <div
                        className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
                    >

                        <article className='shadow-md rounded-lg lg:mb-12 mb-6 overflow-hidden'>
                            <LinkComponent
                                href={{
                                    pathname: "/blog_details",
                                    query: { id: item.routeSegment },
                                }}
                            >
                                <figure className='lg:h-80 overflow-hidden'>

                                    <ImageComponent src={item.image.expandedValue.url} className='w-full lg:h-414 object-cover' alt={item.image.expandedValue.name} id={item.image.expandedValue.name} />
                                </figure>
                            </LinkComponent>

                            <figcaption>
                                <div className='content lg:p-6 p-4 lg:pt-4'>
                                    <div className='lg:h-28'><p className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline lg:leading-8 h-36' aria-labelledby={item.title.value}>{item.title.value}</p></div>
                                    <div className='pb-3 pt-3'>
                                        <LinkComponent
                                            href={{
                                                pathname: "/blog_details",
                                                query: { id: item.routeSegment },
                                            }}
                                        >
                                            <span className={`text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid ${item.readMinute.value ? 'shade-grey-right-border' : ''}`}>{GetTime(item.startPublish)}</span>
                                        </LinkComponent>

                                        <span className={`text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid ${false ? 'shade-grey-right-border' : ''}`}>{item.readMinute.value}</span>
                                        {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2'>1.3K views</span> */}
                                    </div>
                                    <div className='flex flex-wrap [&>*:nth-child(1)]:ml-0 min-h-52'>
                                        {item.tag.value.map((tagitem: any, idx: any) => (
                                            <div key={idx}
                                                style={{
                                                    backgroundColor: handleTagBackgroudColor(idx, item.tagBackgroundColorCode?.value),
                                                    color: item.recommendedProductButtonText?.value
                                                }}
                                                className='mb-1 categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border h-fit'>{tagitem.description}</div>
                                        ))}
                                    </div>
                                </div>
                            </figcaption>
                        </article>
                    </div>

                </div>

            )) : null}
        </div>

    )
}
export default memo(OtherArtical);
