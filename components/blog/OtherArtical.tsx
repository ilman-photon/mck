import React, { memo } from "react";
import { GetTime, handlecategoryColorCode } from "../global/CommonUtil";

import { LinkComponent } from "../global/LinkComponent";
import { ImageComponent } from "../global/ImageComponent";
import DOMPurify from 'isomorphic-dompurify';
import { useHeaderStore } from "../navbar/Store/useNavBarStore";

interface OtherArticalProps {
    ArticleList: any;
}

const OtherArtical: React.FC<OtherArticalProps> = ({ ArticleList }) => {
    const catMapping = useHeaderStore((state) => state.categoryMapping);

    return (
        <div className='grid lg:grid-cols-2 gap-x-6 grid-cols-1'>
            {ArticleList ? ArticleList?.map((item: any, index: any) => (
                <div key={`{blog-article_${item.contentLink.id}}`}>
                    <div
                        className='articletitle-link max-h-620 w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
                    >

                        <article className='shadow-md rounded-lg lg:mb-12 mb-6 overflow-hidden'>
                            <LinkComponent
                                href={{
                                    pathname: "/blog_details",
                                    query: { id: item?.routeSegment },
                                }}
                            >
                                <figure className='lg:h-80 overflow-hidden'>
                                    <div className="lg:h-314 h-240 flex" aria-hidden="true" >
                                        <ImageComponent src={DOMPurify.sanitize(item?.image?.expandedValue?.url ? item?.image?.expandedValue?.url : item?.image?.value?.url)} className='w-full lg:max-h-314 max-h-240 object-cover' alt={DOMPurify.sanitize(item?.image?.expandedValue?.name)} id={item?.image?.expandedValue?.name} ariahidden={true} />
                                    </div>
                                </figure>
                            </LinkComponent>

                            <div>
                                <div className='content lg:p-6 p-4 lg:pt-4'>
                                    <LinkComponent
                                        href={{
                                            pathname: "/blog_details",
                                            query: { id: item.routeSegment },
                                        }}
                                    >
                                        <div className='lg:h-28'><p className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline lg:leading-8 lg:h-24 text-p-ellipsis' aria-labelledby={DOMPurify.sanitize(item?.title?.value)}>{DOMPurify.sanitize(item?.title?.value)}</p></div>
                                    </LinkComponent>

                                    <div className='pb-3 pt-3'>
                                        <span className={`text-mcknormalgrey text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid ${item?.readMinute?.value ? 'shade-grey-right-border' : ''}`}>{GetTime(item?.startPublish)}</span>
                                        <span className={`text-mcknormalgrey text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid ${false ? 'shade-grey-right-border' : ''}`}>{DOMPurify.sanitize(item?.readMinute?.value)}</span>
                                        {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2'>1.3K views</span> */}
                                    </div>
                                    <div className='flex flex-wrap h-25 overflow-hidden [&>*:nth-child(1)]:ml-0 min-h-52'>
                                        {item.tag.value.map((tagitem: any, idx: any) => (
                                            <div key={idx}
                                            tabIndex={0}
                                                style={{
                                                    backgroundColor: handlecategoryColorCode(tagitem.id, catMapping),
                                                }}
                                                className='mb-1 text-mcknormalgrey categoryTag  text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border h-fit'>{DOMPurify.sanitize(tagitem?.description)}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>

            )) : null}
        </div>

    )
}
export default memo(OtherArtical);
