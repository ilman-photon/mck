import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedProducts from "../blog_details/RelatedProducts";
import CatogaryComponent from './Catogory'
import SearchComponent from './Search'
import ResentBlogListComponent from '../blog_details/RecentBlogs'
import { GetTime } from "../CommonUtil/time";
import Search from "./Search";
import OtherArtical from "./OtherArtical";
function BlogComponent() {
    const [BlogListingContent, setBlogListingContent] = useState<any>();
    const [ArticleContent, setArticleContent] = useState<any>();
    const fetchBlogListing = async () => {

        const response = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog-listing-setting/&expand=*`, { headers: { 'Accept-Language': 'en' } },
        );
        const responseid = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/&expand=*`, { headers: { 'Accept-Language': 'en' } },
        );
        setBlogListingContent(response);
        setArticleContent(responseid);
    };
    useEffect(() => {
        fetchBlogListing();
    }, []);
    return (
        <>
            <div className='container grid grid-cols-3 gap-4 w-full lg:p-72 lg:px-9 lg:pb-0 p-4 pt-6 mx-auto lg:mt-36 mt-16'>
                <div className='lg:col-span-2 col-start-1 col-end-7'>
                    <div id="search" className="lg:hidden block w-full relative flex items-center content-center mb-6">
                        <SearchComponent
                            placeholder={BlogListingContent?.data[0].blogSearchPlaceholderText.value}
                            OnSearchChange={(e) => console.log(e)}
                            handleClick={(e) => console.log(e)}
                        />
                    </div>
                    <article className='mostrecent-article shadow-md rounded-lg lg:mb-12 mb-6'>
                        <figure>
                            <img
                                id={ArticleContent?.data[0].image.expandedValue.name}
                                src={ArticleContent?.data[0].image.expandedValue.url}
                            />
                        </figure>
                        <figcaption>
                            <div className='content lg:p-6 p-4'>
                            <h1 className='lg:text-54 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-center' id='blog-link-001' dangerouslySetInnerHTML={{ __html:ArticleContent?.data[0].relatedArticleHeading.value }}></h1>
                                <div className='pb-3 lg:pt-0 pt-3'>
                                    <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border' id='blog-label-001'>{GetTime(ArticleContent?.data[0].startPublish)}</span>
                                    <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border' id='blog-label-002'>65 min read</span>
                                    <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2' id='blog-label-003'>76.6K views</span>
                                </div>
                                <div className='flex'>
                                    <div className='bg-preventiveyellow text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2' id='blog-label-004'>Preventive Care</div>
                                    <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='blog-label-006'>Sample Tag 1</div>
                                    <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='blog-label-007'>Sample Tag 2</div>
                                </div>
                            </div>
                        </figcaption>
                    </article>
                    <OtherArtical
                        ArticleList={ArticleContent?.data[0].relatedArticle.expandedValue[0].relatedArticle.expandedValue}
                        OnArticleSelect={(e) => console.log(e)}
                    />
                </div>
                <div className='lg:col-span-1 col-start-1 col-end-7'>
                    <div id="search" className="lg:block hidden relative flex items-center content-center mb-6">
                        <SearchComponent
                            placeholder={BlogListingContent?.data[0].blogSearchPlaceholderText.value}
                            OnSearchChange={(e) => console.log(e)}
                            handleClick={(e) => console.log(e)}
                        />
                        <svg className="absolute top-4 right-4 z-0 cursor-pointer" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7549 11.734H11.9649L11.6849 11.464C12.6649 10.324 13.2549 8.84401 13.2549 7.23401C13.2549 3.64401 10.3449 0.734009 6.75488 0.734009C3.16488 0.734009 0.254883 3.64401 0.254883 7.23401C0.254883 10.824 3.16488 13.734 6.75488 13.734C8.36488 13.734 9.84488 13.144 10.9849 12.164L11.2549 12.444V13.234L16.2549 18.224L17.7449 16.734L12.7549 11.734ZM6.75488 11.734C4.26488 11.734 2.25488 9.72401 2.25488 7.23401C2.25488 4.74401 4.26488 2.73401 6.75488 2.73401C9.24488 2.73401 11.2549 4.74401 11.2549 7.23401C11.2549 9.72401 9.24488 11.734 6.75488 11.734Z" fill="#001A71" /></svg>
                    </div>
                    <CatogaryComponent
                        CatogaryListing={BlogListingContent?.data[0].categoryFilter.expandedValue}
                        Catogarytitle={BlogListingContent?.data[0].categoryHeadingText.value}
                        OnCatogarySelcete={(e) => console.log(e)}
                    />
                    <div className='category-card shade-blue-border rounded-lg overflow-hidden mb-6'>
                        <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg" id='blog-label-009'>{BlogListingContent?.data[0].trendingBlogHeadingText.value}</div>
                        <ResentBlogListComponent />
                    </div>
                    <RelatedProducts
                        OnRelatedProductClick={(e) => console.log(e)}
                        title={BlogListingContent?.data[0].relatedProductHeadingText.value}
                        BlogListingContent={ArticleContent?.data[0].relatedProducts.expandedValue}
                    />

                </div>
            </div>

        </>
    );
}
export default BlogComponent;