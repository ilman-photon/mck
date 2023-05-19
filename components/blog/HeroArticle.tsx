import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { GetTime } from "../CommonUtil/time";


const HeroArticle = () => {
    const [ArticleContent, setArticleContent] = useState<any>();

    const fetchBlogHeroArticale = async () => {
        const responseid = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage') and topBlog/value eq 1&top=1&expand=*`, { headers: { 'Accept-Language': 'en' } },
        );
        setArticleContent(responseid);
    };
    useEffect(() => {
        fetchBlogHeroArticale();
    }, []);

    return (
        <article className='mostrecent-article shadow-md rounded-lg lg:mb-12 mb-6'>
            <figure>
                <img
                    id={ArticleContent?.data.results[0].image.expandedValue.name}
                    src={ArticleContent?.data.results[0].image.expandedValue.url}
                />
            </figure>
            <figcaption>
                <div className='content lg:p-6 p-4'>
                    <h1 className='lg:text-54 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-center' id='blog-link-001' dangerouslySetInnerHTML={{ __html: ArticleContent?.data.results[0].title.value }}></h1>
                    <div className='pb-3 lg:pt-0 pt-3'>
                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border' id='blog-label-001'>{GetTime(ArticleContent?.data.results[0].startPublish)}</span>
                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border' id='blog-label-002'>{ArticleContent?.data[0]?.readMinute.value}</span>
                        {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id='blog-label-003'>76.6K views</span> */}
                    </div>
                    <div className='flex'>
                        {ArticleContent?.data.results[0].tag.value.map((item: any, index: any) => (
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

    )
}
export default memo(HeroArticle);
