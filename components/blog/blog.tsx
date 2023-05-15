import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
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
                        <input
                            className="w-full text-sofia-reg font-normal text-base text-mckblue placeholder:text-mckblue pl-4 py-3 pr-12 focus:border active:border border border-blue focus:outline-none rounded" type="text"
                            placeholder={BlogListingContent?.data[0].blogSearchPlaceholderText.value}
                        />
                        <svg className="absolute right-4 z-10 cursor-pointer" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7549 11.734H11.9649L11.6849 11.464C12.6649 10.324 13.2549 8.84401 13.2549 7.23401C13.2549 3.64401 10.3449 0.734009 6.75488 0.734009C3.16488 0.734009 0.254883 3.64401 0.254883 7.23401C0.254883 10.824 3.16488 13.734 6.75488 13.734C8.36488 13.734 9.84488 13.144 10.9849 12.164L11.2549 12.444V13.234L16.2549 18.224L17.7449 16.734L12.7549 11.734ZM6.75488 11.734C4.26488 11.734 2.25488 9.72401 2.25488 7.23401C2.25488 4.74401 4.26488 2.73401 6.75488 2.73401C9.24488 2.73401 11.2549 4.74401 11.2549 7.23401C11.2549 9.72401 9.24488 11.734 6.75488 11.734Z" fill="#001A71" /></svg>
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
                            <h1 className='lg:text-54 text-32 text-gtl-med text-mckblue lg:pb-6 text-center' id='blog-link-001' dangerouslySetInnerHTML={{ __html:ArticleContent?.data[0].relatedArticleHeading.value }}></h1>
                                <div className='pb-3 lg:pt-0 pt-3'>
                                    <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border' id='blog-label-001'>February 18, 2022</span>
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
                                <img src="images/blog-oldarticle1.png" className='w-full' alt='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report article'  id='blog-img-002'/>
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
                        <input
                            className="w-full text-sofia-reg font-normal text-base text-mckblue placeholder:text-mckblue pl-4 py-3 pr-12 focus:border active:border border border-blue focus:outline-none rounded" type="text"
                            placeholder="Cough and cold"
                        />
                        <svg className="absolute top-4 right-4 z-10 cursor-pointer" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7549 11.734H11.9649L11.6849 11.464C12.6649 10.324 13.2549 8.84401 13.2549 7.23401C13.2549 3.64401 10.3449 0.734009 6.75488 0.734009C3.16488 0.734009 0.254883 3.64401 0.254883 7.23401C0.254883 10.824 3.16488 13.734 6.75488 13.734C8.36488 13.734 9.84488 13.144 10.9849 12.164L11.2549 12.444V13.234L16.2549 18.224L17.7449 16.734L12.7549 11.734ZM6.75488 11.734C4.26488 11.734 2.25488 9.72401 2.25488 7.23401C2.25488 4.74401 4.26488 2.73401 6.75488 2.73401C9.24488 2.73401 11.2549 4.74401 11.2549 7.23401C11.2549 9.72401 9.24488 11.734 6.75488 11.734Z" fill="#001A71" /></svg>
                    </div>

                    <div className='category-card shade-blue-border rounded-lg overflow-hidden pb-4 mb-6'>

                        {BlogListingContent?.data[0].categoryFilter.expandedValue.map((item: any, index: number) => (
                            <div className='lg:px-6 px-2' key={index}>
                                <div className="tab text-mckblue w-full overflow-hidden lg:border-none sm:border-none xs:border-none">
                                    <React.Fragment>
                                        <input type="checkbox" id={item.categoryDisplayName.value} />
                                        <label className="tab-label py-2 px-4 flex cursor-pointer text-sofia-bold font-extrabold text-base relative" htmlFor={item.categoryDisplayName.value}>
                                            <svg className='mr-3' width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9549 16.5989C11.6189 17.3649 11.0229 19.4429 10.4909 20.8109C9.99288 22.0869 8.73688 23.2669 7.26888 23.2649C5.62888 23.2629 4.01488 22.0089 4.01288 20.1989C4.00888 17.6249 6.31288 16.5049 7.23288 15.6809C9.52688 13.6289 13.5509 11.4409 13.5469 7.92688C13.5429 4.35888 10.5049 1.69688 7.22888 1.69288C4.03288 1.68888 0.938875 4.10488 0.942875 7.91088C0.946875 11.0869 4.19087 12.9149 7.23487 15.6789C9.68487 17.9029 12.0589 20.4529 15.0589 23.2269" stroke="#001A71" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                            {item.categoryDisplayName.value}
                                        </label>
                                    </React.Fragment>
                                    <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
                                        {item.subCategory.value.map((item: any, index: number) => (
                                            <button  key={index} className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1'>{item.description}</button>
                                        ))}
                                    </div>
                                </div>
                            </div>))}


                    </div>
                    <div className='category-card shade-blue-border rounded-lg overflow-hidden mb-6'>
                        <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg" id='blog-label-009'>{BlogListingContent?.data[0].trendingBlogHeadingText.value}</div>
                        <div className='m-4'>
                            <div className='border border-t-0 border-x-0 py-1'>
                                <a href='' className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline' aria-label='Four Ways Pharmacies Can Benefit from Central Fill as a Service' id='blog-label-009-01'>Four Ways Pharmacies Can Benefit from Central Fill as a Service</a>
                            </div>
                            <div className='border border-t-0 border-x-0 py-1'>
                                <a href='' className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline' aria-label='CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report' id='blog-label-009-02'>CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report</a>
                            </div>
                            <div className='border border-t-0 border-x-0 py-1'>
                                <a href='' className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline' aria-label='How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021' id='blog-label-009-03'>How COVID-19 has impacted the role of pharmacists around the world, National Library of Medicine, Feb. 22, 2021</a>
                            </div>
                        </div>
                    </div>

                    <div className='related-card'>
                        <div className="text-mckblue text-sofia-bold font-extrabold text-lg mb-6" id='blog-label-010'>{BlogListingContent?.data[0].relatedProductHeadingText.value}</div>
                        <div className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4">
                            <figure className='w-full text-center'>
                                <img src="images/r-p-list.png" className="px-5 lg:px-0 m-auto" alt='Allergy Relief Product' id='blog-img-006' />
                            </figure>
                            <figcaption>
                                <div className="content p-6">
                                    <div className="bg-acuteblue text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='blog-label-010-01'>Acute Care</div>
                                    <a href="" className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report" id='blog-label-010-02'>Allergy Relief</a>
                                    <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='blog-label-010-03'>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>
                                </div>
                            </figcaption>
                        </div>

                        <div className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4">
                            <figure className='w-full text-center'>
                                <img src="images/r-blood-pressure.png" className="px-5 lg:px-0 m-auto" alt='Blood Pressure Monitor Product' id='blog-img-007' />
                            </figure>
                            <figcaption>
                                <div className="content p-6">
                                    <div className="bg-diagnosticgreen text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='blog-label-010-04'>Diagnostic Care</div>
                                    <a href="" className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report" id='blog-label-010-05'>Blood Pressure Monitor</a>
                                    <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='blog-label-010-06'>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>
                                </div>
                            </figcaption>
                        </div>

                        <div className="shade-blue-border rounded-lg overflow-hidden lg:mb-6 mb-4 pt-4">
                            <figure className='w-full text-center'>
                                <img src="images/r-vitamin.png" className="px-5 lg:px-0 m-auto" alt='Vitamin D3 Product' id='blog-img-008' />
                            </figure>
                            <figcaption>
                                <div className="content p-6">
                                    <div className="bg-preventiveyellow text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 mb-3" id='blog-label-010-07'>Preventive Care</div>
                                    <a href="" className="articleTitle text-xl text-sofia-reg font-extrabold text-mckblue mt-3 no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report" id='blog-label-010-08'>Vitamin D3</a>
                                    <p className="text-sofia-reg font-noraml text-mcknormalgrey text-base" id='blog-label-010-09'>Antihistamine Loratadine oral solution USP, 5 mg/5 ml</p>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BlogComponent;