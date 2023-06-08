import React, { memo } from "react";
import { useEffect } from "react";
import useAxios from "@/hooks/useApi";
import { LinkComponent } from "../global/LinkComponent";
import HeroArticle from "./HeroArticle";
import { ImageComponent } from "../global/ImageComponent";
import { GetTime, handleTagBackgroudColor } from "../global/CommonUtil";

const BlogListContainer = () => {
    const { response, error, loading } = useAxios({
        method: "GET",
        url: `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage')&orderby=changed desc&top=10&skip=0`,
        headers: {
            "Accept-Language": "en"
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
            <div className='grid lg:grid-cols-2 gap-x-6 grid-cols-1' id="carouselExampleCaptions">
                {response?.data.results?.map((item: any, index: any) => (
                    <React.Fragment key={item?.contentLink?.id}>
                        {index != 0 &&
                            <div
                                className='articletitle-link max-h-620 w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
                            >
                                <article className='shadow-md rounded-lg lg:mb-12 mb-6' >
                                    <figure>
                                        <LinkComponent
                                            href={{
                                                pathname: "/blog_details",
                                                query: { id: item.routeSegment },
                                            }}
                                        >
                                            <div className="lg:h-314 h-240 flex">
                                                <ImageComponent src={item.image.value.url} className='lg:max-h-314 max-h-240 w-full object-cover' alt={item.image.value.url} id={item.image.value.id} />
                                            </div>
                                        </LinkComponent>
                                    </figure>
                                    <figcaption className="lg:h-260 h-210">
                                        <div className='content lg:p-6 p-4 lg:pt-4'>
                                            <LinkComponent
                                                href={{
                                                    pathname: "/blog_details",
                                                    query: { id: item.routeSegment },
                                                }}
                                            >
                                                <p className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue mb-3 no-underline lg:leading-9 lg:h-28  text-p-ellipsis' aria-labelledby={item.title.value}>{item.title.value}</p>
                                            </LinkComponent>
                                            <div className='pb-3 pt-3'>
                                                <span className={`text-mcknormalgrey text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid ${item.readMinute.value ? 'shade-grey-right-border' : ''}`}>{GetTime(item.startPublish)}</span>
                                                <span className={`text-mcknormalgrey text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid ${false ? 'shade-grey-right-border' : ''}`}>{item.readMinute.value}</span>
                                                {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2'>1.3K views</span> */}
                                            </div>
                                            <div className='flex flex-wrap h-25 overflow-hidden'>
                                                {item.tag.value.map((tagitem: any, idx: any) => (
                                                    <div key={idx}
                                                        style={{
                                                            backgroundColor: handleTagBackgroudColor(idx, item.tagBackgroundColorCode?.value),
                                                        }}
                                                        className='mb-1 categoryTag text-mcknormalgrey text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mr-1 border-solid shade-blue-border h-fit'>{tagitem.description}</div>
                                                ))}
                                            </div>
                                        </div>
                                    </figcaption>
                                </article>
                            </div>

                        }
                    </React.Fragment >
                ))}
            </div>

        </>
    )
}
export default memo(BlogListContainer);
