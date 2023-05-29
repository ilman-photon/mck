import React, { memo } from "react";
import { useEffect } from "react";
import useAxios from "@/hooks/useApi";
import Link from "next/link";
import { GetTime, HandelURLToId, handleBGColor } from "../CommonUtil/time";
import HeroArticle from "./HeroArticle";

const BlogListContainer = () => {
    const { response, error, loading } = useAxios({
        method: "GET",
        url: `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage')&orderby=changed desc&top=10&skip=0`,
        headers: {
            "Accept-Language": "en",
        },
    });

    useEffect(() => {
        // Set the lang attribute to "en" on the <html> element
        document.documentElement.lang = "en";
    }, []);

    useEffect(() => {
        // Set the title of the document dynamically
        document.title = response?.data[0]?.title.value || "Blog Listing Page";
    }, [JSON.stringify(response)]);

    return (
        <>
            <HeroArticle data={response?.data.results[0]} />
            <div className='grid lg:grid-cols-2 gap-x-6 grid-cols-1'>
                {response?.data.results?.map((item: any, index: any) => (
                    <>
                        {index != 0 && <Link
                            key={item?.contentLink?.id}
                            href={{
                                pathname: "/blog_details",
                                query: { id: item.routeSegment },
                            }}
                            className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
                        >
                            <article className='shadow-md rounded-lg lg:mb-12 mb-6' >
                                <figure>
                                    <img src={item.image.value.url} className='w-full' alt={item.image.value.url} id={item.image.value.id} />
                                </figure>
                                <figcaption>
                                    <div className='content lg:p-6 p-4'>
                                        <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue mb-3 no-underline lg:leading-9 lg:h-32 text-p-ellipsis' aria-labelledby={item.title.value}>{item.title.value}</a>
                                        <div className='pb-3 pt-3'>
                                            <span className={`text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid ${item.readMinute.value?'shade-grey-right-border':''}`}>{GetTime(item.startPublish)}</span>
                                            <span className={`text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid ${false?'shade-grey-right-border':''}`}>{item.readMinute.value}</span>
                                            {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2'>1.3K views</span> */}
                                        </div>
                                        <div className='flex flex-wrap lg:h-50 overflow-hidden'>
                                            {item.tag.value.map((tagitem: any, idx: any) => (
                                                <div key={idx}
                                                    style={{
                                                        backgroundColor: handleBGColor(idx, item.tagBackgroundColorCode?.value),
                                                    }}
                                                    className='mb-1 categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mr-1 border-solid shade-blue-border h-fit'>{tagitem.description}</div>
                                            ))}
                                        </div>
                                    </div>
                                </figcaption>
                            </article>
                        </Link>}
                    </>
                ))}
            </div>

        </>
    )
}
export default memo(BlogListContainer);
