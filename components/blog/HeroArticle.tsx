import React, { memo } from "react";
import { GetTime, handleTagBackgroudColor } from "../global/CommonUtil";
import Link from "next/link";
import { LinkComponent } from "../global/LinkComponent";


const HeroArticle = ({ data }: any) => {

    return (

        <article className='mostrecent-article shadow-md rounded-lg lg:mb-12 mb-6 overflow-hidden'>
            <LinkComponent
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
                        src={data?.image.value?.url}
                        alt={data?.image.value?.url}
                    />
                </figure>
            </LinkComponent>
            <figcaption>
                <div className='content lg:p-6 p-4'>
                    <h1 className='lg:text-32 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-3' id='blog-link-001'>{data?.title?.value}</h1>
                    <div className='pb-3 lg:pt-0 pt-3'>
                        <LinkComponent
                            href={{
                                pathname: "/blog_details",
                                query: { id: data?.routeSegment },
                            }}
                            className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
                        >
                            <span className={`text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid ${data?.readMinute?.value ? 'shade-grey-right-border' : ''}`} id='blog-label-001'>{GetTime(data?.startPublish)}</span>
                        </LinkComponent>

                        <span className={`text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid ${false ? 'shade-grey-right-border' : ''}`} id='blog-label-002'>{data?.readMinute?.value}</span>
                        {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id='blog-label-003'>76.6K views</span> */}
                    </div>
                    <div className='flex lg:flex-wrap [&>*:nth-child(1)]:ml-0 '>
                        {data?.tag?.value.map((item: any, index: any) => (
                            <div key={index}
                                style={{
                                    backgroundColor: handleTagBackgroudColor(index, data?.tagBackgroundColorCode?.value),
                                }}
                                className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border lg:w-fit xl:w-fit lg:mb-0 mb-2' id='blog-label-006'>
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
