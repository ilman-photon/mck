import { useState, useEffect, memo } from "react";
import Image from 'next/image';
import axios, { AxiosError } from "axios";
import ResentBlogListComponent from "./RecentBlogs";
import CarouselComponent from "./Carousel";
import CommentComponent from './Comment'
import { GetTime } from "../CommonUtil/time";
import RelatedProducts from "./RelatedProducts";
import SocialMediaIconComponent from './SocialMediaIcon'

const BlogDetailsComponent = () => {

    const [BlogListingContent, setBlogListingContent] = useState<any>();

    useEffect(() => {
        fetchBlogListing();
    }, []);
    const fetchBlogListing = async () => {
        const response = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/&expand=*`, { headers: { 'Accept-Language': 'en' } },
        );
        setBlogListingContent(response);
    };


    return (
        <>
            <div className='container w-full lg:p-72 lg:pb-0 p-4 pt-6  mx-auto lg:mt-36 mt-16'>
                <div className='col-start-1 col-end-7 rounded-lg overflow-hidden'>
                    <Image
                        src={BlogListingContent?.data[0].image.expandedValue.url}
                        className='w-full' alt="Are your medications causing you to lose nutrients? article"
                        id='blog-img-001'
                        width={500}
                        height={500}
                    />
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 lg:pt-10'>
                    <div className='lg:col-span-2 col-start-1 col-end-7 lg:pl-24'>
                        <article className='mb-6'>
                            <div className='content lg:p-6 pb-0 p-4 px-0'>
                                <h1 className='lg:text-54 text-32 text-gtl-med text-mckblue lg:pb-6 text-center' id='blog-link-001' dangerouslySetInnerHTML={{ __html: BlogListingContent?.data[0].relatedArticleHeading.value }}></h1>
                                <div className='grid lg:grid-cols-2 lg:gap-4 lg:pt-0 pt-3 lg:pb-6 pb-4'>
                                    <div className='lg:pb-0 pb-4'>
                                        <span className='text-mckblue text-sofia-reg font-normal text-base pr-2 border-solid shade-grey-right-border' id='blog-label-001'>{GetTime(BlogListingContent?.data[0].startPublish)}</span>
                                        <span className='text-mckblue text-sofia-reg font-normal text-base px-2 border-solid shade-grey-right-border' id='blog-label-002'>65 min read</span>
                                        <span className='text-mckblue text-sofia-reg font-normal text-base pl-2' id='blog-label-003'>76.6K views</span>
                                    </div>
                                    <div className='flex lg:justify-end'>
                                        <div className='bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2' id='blog-label-004'>Acute Care</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='blog-label-006'>Sample Tag 1</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='blog-label-007'>Sample Tag 2</div>
                                        <div className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border' id='blog-label-008'>Sample Tag 3</div>
                                    </div>
                                </div>
                                <div className='text-center text-sofia-reg text-lg font-normal text-mckblack pb-3 border border-t-0 border-x-0 mb-6'>
                                    <p>Editor&apos;s Note: A version of this article originally appeared on McKesson&apos;s &quot;Our Stories&quot; site.</p>
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: BlogListingContent?.data[0].description.value }}></div>

                                <div className='BlogSource'>
                                    <div className="tab text-mckblue w-full overflow-hidden lg:border-none border-none">
                                        <input type="checkbox" id="acute-1" value="" />
                                        <label className="tab-label py-2 flex cursor-pointer text-sofia-bold font-extrabold text-base relative" htmlFor="acute-1" id="blog-label-008-01">Sources</label>
                                        <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey mb-0">
                                            <ul className='lg:pl-1'>
                                                <ol>
                                                    <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021</li>
                                                    <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>The Striking, Startling Realities of Pharmacist Burnout, University of Illinois Chicago, Dec. 6, 2022</li>
                                                    <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>Pharmacists, U.S. Bureau of Labor Statistics, 2021</li>
                                                    <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>Medication Errors, AMCP, July 18, 2019</li>
                                                    <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>Medication Dispensing Errors And Prevention, National Library of Medicine, July 3, 20 22</li>
                                                    <li className='text-sofia-reg text-lg font-normal text-mckblue pb-2'>Medication Adherence: The Elephant in the Room, U.S. Pharmacist, Jan. 19, 2018</li>
                                                    <li className='text-sofia-reg text-lg font-normal text-mckblue'>Get the Facts on Healthy Aging, National Council on Aging, Jan 1, 2021</li>
                                                </ol>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <CarouselComponent />
                        <CommentComponent />
                    </div>
                    <div className='lg:col-span-1 col-start-1 col-end-7'>
                        <SocialMediaIconComponent />
                        <div className='category-card shade-blue-border rounded-lg overflow-hidden mb-6'>
                            <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg" id='blog-label-009'>Recent Blogs</div>
                            <ResentBlogListComponent />
                        </div>
                        <RelatedProducts
                            OnRelatedProductClick={(e) => console.log(e)}
                            title={'Related Products'}
                            BlogListingContent={BlogListingContent?.data[0].relatedProducts.expandedValue}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
export default memo(BlogDetailsComponent);
