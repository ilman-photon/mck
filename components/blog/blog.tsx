import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import RelatedProducts from "../blog_details/RelatedProducts";
import CatogaryComponent from './Catogory'
import SearchComponent from './Search'
import ResentBlogListComponent from '../blog_details/RecentBlogs'
import { GetTime } from "../CommonUtil/time";
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
                        />
                    </div>
                    <article className='mostrecent-article shadow-md rounded-lg lg:mb-12 mb-6'>
                        <figure>
                            <Image
                                src={ArticleContent?.data[0].image.expandedValue.url}
                                className='w-full' alt="Are your medications causing you to lose nutrients? article"
                                id='blog-img-001'
                                width={500}
                                height={500}
                            />
                        </figure>
                        <figcaption>
                            <div className='content lg:p-6 p-4'>
                                <h1 className='lg:text-54 text-32 text-gtl-med text-mckblue lg:pb-6 text-center' id='blog-link-001' dangerouslySetInnerHTML={{ __html: ArticleContent?.data[0].relatedArticleHeading.value }}></h1>
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
                    <div className='grid lg:grid-cols-2 gap-x-6 grid-cols-1'>
                        <article className='shadow-md rounded-lg lg:mb-12 mb-6'>
                            <figure>
                                <img src="images/blog-oldarticle1.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article' id='blog-img-002' />
                            </figure>
                            <figcaption>
                                <div className='content lg:p-6 p-4'>
                                    <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report'>CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                                    <div className='pb-3 lg:pt-0 pt-3'>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border'>February 18, 2022</span>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border'>65 min read</span>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2'>1.3K views</span>
                                    </div>
                                    <div className='flex'>
                                        <div className='bg-diagnosticgreen text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2'>Diagnostic Care</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'>Sample Tag 1</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'>Sample Tag 3</div>
                                    </div>
                                </div>
                            </figcaption>
                        </article>
                        <article className='shadow-md rounded-lg lg:mb-12 mb-6'>
                            <figure>
                                <img src="images/blog-oldarticle2.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article' id='blog-img-003' />
                            </figure>
                            <figcaption>
                                <div className='content lg:p-6 p-4'>
                                    <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report'>CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                                    <div className='pb-3 lg:pt-0 pt-3'>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border'>February 18, 2022</span>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border'>65 min read</span>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2'>220 views</span>
                                    </div>
                                    <div className='flex'>
                                        <div className='bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2'>Acute Care</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'>Sample Tag 1</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'>Sample Tag 3</div>
                                    </div>
                                </div>
                            </figcaption>
                        </article>
                        <article className='shadow-md rounded-lg lg:mb-12 mb-6'>
                            <figure>
                                <img src="images/blog-oldarticle3.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article' id='blog-img-004' />
                            </figure>
                            <figcaption>
                                <div className='content lg:p-6 p-4'>
                                    <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report'>CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                                    <div className='pb-3 lg:pt-0 pt-3'>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border'>February 18, 2022</span>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border'>65 min read</span>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2'>15.5K views</span>
                                    </div>
                                    <div className='flex'>
                                        <div className='bg-preventiveyellow text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2'>Preventive Care</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'>Sample Tag 1</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'>Sample Tag 3</div>
                                    </div>
                                </div>
                            </figcaption>
                        </article>
                        <article className='shadow-md rounded-lg lg:mb-12 mb-6'>
                            <figure>
                                <img src="images/blog-oldarticle4.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article' id='blog-img-005' />
                            </figure>
                            <figcaption>
                                <div className='content lg:p-6 p-4'>
                                    <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report'>CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                                    <div className='pb-3 lg:pt-0 pt-3'>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-xl pr-2 border-solid shade-grey-right-border'>February 18, 2022</span>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-xl px-2 border-solid shade-grey-right-border'>65 min read</span>
                                        <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-xl pl-2'>223K views</span>
                                    </div>
                                    <div className='flex'>
                                        <div className='bg-everydayblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2'>Everyday Care</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'>Sample Tag 1</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'>Sample Tag 3</div>
                                    </div>
                                </div>
                            </figcaption>
                        </article>
                    </div>
                </div>
                <div className='lg:col-span-1 col-start-1 col-end-7'>
                    <div id="search" className="lg:block hidden relative flex items-center content-center mb-6">
                        <SearchComponent
                            placeholder={BlogListingContent?.data[0].blogSearchPlaceholderText.value}
                            OnSearchChange={(e) => console.log(e)}
                        />
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