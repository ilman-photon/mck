import { useState, useEffect, memo } from "react";
import Image from 'next/image';
import axios, { AxiosError } from "axios";
import ResentBlogListComponent from "./RecentBlogs";
import CarouselComponent from "./Carousel";
import CommentComponent from './Comment'
import { GetTime } from "../CommonUtil/time";

const BlogDetailsComponent = () => {

    const [BlogListingContent, setBlogListingContent] = useState<any>();

    useEffect(() => {
        fetchBlogListing();
    }, []);
    const fetchBlogListing = async () => {
        const response = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/&expand=*`, { headers: { 'Accept-Language': 'en' } },
        );
        const SocialIcon = await axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/application-settings/&expand=`, { headers: { 'Accept-Language': 'en' } },
        );
        console.log(JSON.stringify(SocialIcon.data))
        setBlogListingContent(response);
        const dateFormet = GetTime('2023-04-27T08:44:26Z')
        console.log(dateFormet)
    };


    return (
        <>
            <div className='container w-full lg:p-72 lg:pb-0 p-4 pt-6  mx-auto'>
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
                                        <span className='text-mckblue text-sofia-reg font-normal text-base pr-2 border-solid shade-grey-right-border' id='blog-label-001'>February 18, 2022</span>
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
                        <div className='flex w-fit mx-auto lg:p-6 py-6'>
                            <a href="" className='mx-1.5 hover:cursor-pointer' target='_blank'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.479004" width="24" height="24" rx="12" fill="#001A71" /><path d="M14.6068 13.1431L14.9178 11.0956H12.9726V9.7674C12.9726 9.20709 13.2438 8.66061 14.1151 8.66061H15V6.9174C15 6.9174 14.1973 6.77905 13.4301 6.77905C11.8274 6.77905 10.7808 7.75995 10.7808 9.53498V11.0956H9V13.1431H10.7808V18.0933C11.1384 18.15 11.5041 18.1791 11.8767 18.1791C12.2493 18.1791 12.6151 18.15 12.9726 18.0933V13.1431H14.6068Z" fill="white" /></svg></a><a href="" className='mx-1.5 hover:cursor-pointer' target='_blank'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_110_4315)"><rect y="0.479004" width="24" height="24" rx="12" fill="#001A71" /><path d="M9.21885 18.479C14.8778 18.479 17.9739 13.8618 17.9739 9.85894C17.9739 9.72913 17.971 9.59645 17.9651 9.46664C18.5674 9.0378 19.0872 8.50661 19.5 7.89805C18.9391 8.14376 18.3435 8.30424 17.7337 8.37399C18.3758 7.99503 18.8566 7.39971 19.0869 6.69838C18.4828 7.05085 17.8222 7.29949 17.1334 7.43364C16.6693 6.94809 16.0556 6.6266 15.3873 6.51887C14.719 6.41114 14.0332 6.52318 13.4361 6.83765C12.8389 7.15213 12.3636 7.65154 12.0837 8.25866C11.8037 8.86578 11.7346 9.5468 11.8872 10.1964C10.6641 10.136 9.46746 9.82315 8.37499 9.27818C7.28252 8.73321 6.31856 7.96828 5.54561 7.03298C5.15275 7.69987 5.03254 8.48901 5.20939 9.24002C5.38625 9.99104 5.84691 10.6476 6.49775 11.0762C6.00914 11.0609 5.53123 10.9314 5.10352 10.6983V10.7358C5.10308 11.4357 5.34881 12.1141 5.79894 12.6557C6.24908 13.1973 6.87583 13.5688 7.57266 13.7069C7.12003 13.8288 6.64499 13.8466 6.18428 13.7588C6.38091 14.3607 6.76348 14.8871 7.27861 15.2646C7.79373 15.6421 8.4157 15.8518 9.05772 15.8645C7.96777 16.7075 6.62136 17.1647 5.23535 17.1625C4.98955 17.1621 4.744 17.1473 4.5 17.1181C5.90804 18.0075 7.54596 18.4799 9.21885 18.479Z" fill="white" /></g><defs><clipPath id="clip0_110_4315"><rect y="0.479004" width="24" height="24" rx="12" fill="white" /></clipPath></defs></svg></a>
                            <a href="" className='mx-1.5 hover:cursor-pointer' target='_blank'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.479004" width="24" height="24" rx="12" fill="#001A71" /><path d="M11.9973 6.31944C14.0042 6.31944 14.2419 6.32824 15.0312 6.36345C15.7647 6.39573 16.1608 6.51896 16.4249 6.62166C16.7741 6.75663 17.0264 6.92094 17.2875 7.18208C17.5516 7.44616 17.713 7.69556 17.848 8.04472C17.9507 8.3088 18.0739 8.70784 18.1062 9.43845C18.1414 10.2307 18.1502 10.4683 18.1502 12.4724C18.1502 14.4793 18.1414 14.717 18.1062 15.5063C18.0739 16.2398 17.9507 16.6359 17.848 16.9C17.713 17.2492 17.5487 17.5015 17.2875 17.7626C17.0235 18.0267 16.7741 18.1881 16.4249 18.3231C16.1608 18.4258 15.7618 18.549 15.0312 18.5813C14.239 18.6165 14.0013 18.6253 11.9973 18.6253C9.99031 18.6253 9.75264 18.6165 8.96336 18.5813C8.22982 18.549 7.83371 18.4258 7.56963 18.3231C7.22047 18.1881 6.96813 18.0238 6.70699 17.7626C6.44292 17.4986 6.28154 17.2492 6.14657 16.9C6.04388 16.6359 5.92064 16.2369 5.88836 15.5063C5.85316 14.7141 5.84435 14.4764 5.84435 12.4724C5.84435 10.4654 5.85316 10.2277 5.88836 9.43845C5.92064 8.70491 6.04388 8.3088 6.14657 8.04472C6.28154 7.69556 6.44585 7.44322 6.70699 7.18208C6.97107 6.91801 7.22047 6.75663 7.56963 6.62166C7.83371 6.51896 8.23275 6.39573 8.96336 6.36345C9.75264 6.32824 9.99031 6.31944 11.9973 6.31944ZM11.9973 4.9668C9.95804 4.9668 9.70276 4.9756 8.90174 5.01081C8.10365 5.04602 7.55496 5.17512 7.07963 5.35997C6.58376 5.55363 6.16418 5.8089 5.74753 6.22848C5.32794 6.64513 5.07267 7.06472 4.87902 7.55765C4.69416 8.03592 4.56506 8.58167 4.52985 9.37976C4.49464 10.1837 4.48584 10.439 4.48584 12.4782C4.48584 14.5175 4.49464 14.7727 4.52985 15.5738C4.56506 16.3718 4.69416 16.9205 4.87902 17.3959C5.07267 17.8917 5.32794 18.3113 5.74753 18.728C6.16418 19.1446 6.58376 19.4028 7.0767 19.5935C7.55496 19.7784 8.10072 19.9075 8.89881 19.9427C9.69983 19.9779 9.9551 19.9867 11.9943 19.9867C14.0336 19.9867 14.2888 19.9779 15.0899 19.9427C15.888 19.9075 16.4366 19.7784 16.912 19.5935C17.4049 19.4028 17.8245 19.1446 18.2411 18.728C18.6578 18.3113 18.916 17.8917 19.1067 17.3988C19.2916 16.9205 19.4207 16.3748 19.4559 15.5767C19.4911 14.7757 19.4999 14.5204 19.4999 12.4812C19.4999 10.4419 19.4911 10.1867 19.4559 9.38563C19.4207 8.58754 19.2916 8.03885 19.1067 7.56352C18.9219 7.06472 18.6666 6.64513 18.247 6.22848C17.8304 5.81183 17.4108 5.55363 16.9178 5.36291C16.4396 5.17806 15.8938 5.04895 15.0957 5.01374C14.2918 4.9756 14.0365 4.9668 11.9973 4.9668Z" fill="white" /><path d="M11.9971 8.61987C9.86689 8.61987 8.13867 10.3481 8.13867 12.4783C8.13867 14.6085 9.86689 16.3367 11.9971 16.3367C14.1273 16.3367 15.8555 14.6085 15.8555 12.4783C15.8555 10.3481 14.1273 8.61987 11.9971 8.61987ZM11.9971 14.9811C10.6151 14.9811 9.49425 13.8603 9.49425 12.4783C9.49425 11.0963 10.6151 9.97545 11.9971 9.97545C13.3791 9.97545 14.4999 11.0963 14.4999 12.4783C14.4999 13.8603 13.3791 14.9811 11.9971 14.9811Z" fill="white" /><path d="M16.909 8.46719C16.909 8.966 16.5041 9.36798 16.0082 9.36798C15.5094 9.36798 15.1074 8.96306 15.1074 8.46719C15.1074 7.96839 15.5123 7.56641 16.0082 7.56641C16.5041 7.56641 16.909 7.97132 16.909 8.46719Z" fill="white" /></svg></a>
                            <a href="" className='mx-1.5 hover:cursor-pointer' target='_blank'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.479004" width="24" height="24" rx="12" fill="#001A71" /><path d="M19.8406 9.27822C19.8406 9.27822 19.6844 8.1751 19.2031 7.69072C18.5938 7.05322 17.9125 7.0501 17.6 7.0126C15.3625 6.8501 12.0031 6.8501 12.0031 6.8501H11.9969C11.9969 6.8501 8.6375 6.8501 6.4 7.0126C6.0875 7.0501 5.40625 7.05322 4.79688 7.69072C4.31563 8.1751 4.1625 9.27822 4.1625 9.27822C4.1625 9.27822 4 10.5751 4 11.8688V13.0813C4 14.3751 4.15937 15.672 4.15937 15.672C4.15937 15.672 4.31562 16.7751 4.79375 17.2595C5.40313 17.897 6.20313 17.8751 6.55938 17.9438C7.84063 18.0657 12 18.1032 12 18.1032C12 18.1032 15.3625 18.097 17.6 17.9376C17.9125 17.9001 18.5938 17.897 19.2031 17.2595C19.6844 16.7751 19.8406 15.672 19.8406 15.672C19.8406 15.672 20 14.3782 20 13.0813V11.8688C20 10.5751 19.8406 9.27822 19.8406 9.27822ZM10.3469 14.5532V10.0563L14.6687 12.3126L10.3469 14.5532Z" fill="white" /></svg></a>
                        </div>
                        <ResentBlogListComponent />
                        <div className='related-card'>
                            <div className="text-mckblue text-sofia-bold font-extrabold text-lg mb-6" id='blog-label-010'>Related Products</div>
                            {BlogListingContent?.data[0].relatedProducts.expandedValue?.map((item: any, index: number) => (
                                <div key={index} className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4">
                                    <figure className='w-full text-center'>
                                        <Image
                                            src={item.image.expandedValue.url}
                                            className="px-5 lg:px-0 m-auto"
                                            alt='Allergy Relief Product'
                                            id='blog-img-006'
                                            width={200}
                                            height={200}
                                        />
                                    </figure>
                                    <figcaption>
                                        <div className="content p-6">
                                            <div
                                                className="bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='blog-label-010-01'
                                                style={{
                                                    backgroundColor: item.recommendedProductButtonColor.value,
                                                    color: item.recommendedProductButtonText.value
                                                }}
                                            >
                                                {item.productType.value[0].name}
                                            </div>

                                            <a href=""
                                                className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 no-underline"
                                                aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report"
                                                id='blog-label-010-02'>
                                                {item.name}
                                            </a>
                                            <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='blog-label-010-03' dangerouslySetInnerHTML={{ __html: item.description.value }}></p>
                                        </div>
                                    </figcaption>
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default memo(BlogDetailsComponent);
