import React, { memo } from "react";
import { GetTime, handlecategoryColorCode } from "../global/CommonUtil";
import { LinkComponent } from "../global/LinkComponent";
import DOMPurify from 'isomorphic-dompurify';
import { useHeaderStore } from "../navbar/Store/useNavBarStore";

const HeroArticle = ({ data }: any) => {
    const catMapping = useHeaderStore((state) => state.categoryMapping);

    return (

        <article className='mostrecent-article shadow-md rounded-lg lg:mb-12 mb-6 overflow-hidden'>
            <LinkComponent
                id={'blog-hero-article-01'}
                key={'blog-hero-article-01'}
                href={{
                    pathname: "/blog_details",
                    query: { id: data?.routeSegment },
                }}
                className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
            >
                <figure className="w-full lg:h-402 lg:overflow-hidden">
                    <img
                        className="w-full"
                        id={data?.image.value?.name}
                        src={DOMPurify.sanitize(data?.image?.value?.url)}
                        alt={DOMPurify.sanitize(data?.image?.value?.url)}
                        aria-hidden="true"
                    />
                </figure>
            </LinkComponent>
            <figcaption>
                <div className='content lg:p-6 p-4 lg:pt-4'>
                    <LinkComponent
                        id={'blog-hero-title-article-01'}
                        key={'blog-hero-title-article-01'}
                        href={{
                            pathname: "/blog_details",
                            query: { id: data?.routeSegment },
                        }}
                        className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
                    >
                        <h1 role="link" className='lg:text-32 text-xl lg:leading-linemax max-[576px]:leading-9 sm:text-32 max-[576px]:mb-2.5 max-[576px]:h-25 max-[576px]:overflow-hidden text-gtl-med text-mckblue lg:pb-3' id='blog-link-001'>{data?.title?.value}</h1>
                    </LinkComponent>
                    <div className='pb-3 lg:pt-0 pt-3'>

                        <span className={`text-mcknormalgrey text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid ${data?.readMinute?.value ? 'shade-grey-right-border' : ''}`} id='blog-hero-label-001'>{GetTime(data?.startPublish)}</span>

                        <span className={`text-mcknormalgrey text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid ${false ? 'shade-grey-right-border' : ''}`} id='blog-hero-label-002'>{data?.readMinute?.value}</span>
                        {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id='blog-label-003'>76.6K views</span> */}
                    </div>
                    <div className='flex flex-wrap mb-2.5 h-25 overflow-hidden [&>*:nth-child(1)]:ml-0 '>
                        {data?.tag?.value.map((item: any, index: any) => (
                            <div
                                id={`blog-hero-article-tag` + index}
                                key={index}
                                style={{
                                    backgroundColor: handlecategoryColorCode(item.id, catMapping),
                                }}
                                className='categoryTag text-mcknormalgrey text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border lg:w-fit xl:w-fit  mb-2'>
                                {item.description}
                            </div>
                        ))}
                    </div>
                </div>
            </figcaption>
        </article>
    )
}
export default memo(HeroArticle);
