import React, { memo } from "react";
import { GetTime, HandelURLToId } from "../CommonUtil/time";
import Link from "next/link";


const HeroArticle = (data: any) => {
 
    return (
        <Link
            href={{
                pathname: "/blog_details",
                query: { id: `${HandelURLToId(data.data?.contentLink.url)}` },
            }}
            className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
        >
            <article className='mostrecent-article shadow-md rounded-lg lg:mb-12 mb-6'>

                <figure>
                    <img
                        id={data.data?.image.value.name}
                        src={data.data?.image.value.url}
                    />
                </figure>
                <figcaption>
                    <div className='content lg:p-6 p-4'>
                        <h1 className='lg:text-54 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-left' id='blog-link-001' >{data.data?.title.value}</h1>
                        <div className='pb-3 lg:pt-0 pt-3'>
                            <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border' id='blog-label-001'>{GetTime(data.data?.startPublish)}</span>
                            <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border' id='blog-label-002'>{data.data?.readMinute.value}</span>
                            {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id='blog-label-003'>76.6K views</span> */}
                        </div>
                        <div className='flex'>
                            {data.data?.tag.value.map((item: any, index: any) => (
                                <div key={index}
                                    style={{
                                        backgroundColor: item.tagBackgroundColorCode?.value,
                                    }}
                                    className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='blog-label-006'>
                                    {item.description}
                                </div>
                            ))}
                        </div>
                    </div>
                </figcaption>
            </article>
        </Link>

    )
}
export default memo(HeroArticle);