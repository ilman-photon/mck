import { memo, useEffect, useState } from 'react';
import axios from 'axios';
import { GetTime } from '../CommonUtil/time';
import Link from 'next/link';

interface CarouselComponentProps {
    ProductList: any;
    title: string;
    OnRelatedProductClick: (e: string) => void;
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ ProductList, title, OnRelatedProductClick }) => {
    const [BlogListingContent, setBlogListingContent] = useState<any>();
    const fetchBlogListing = async () => {
        const response = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage')&orderby=changed desc&top=2`, { headers: { 'Accept-Language': 'en' } },
        );
        setBlogListingContent(response);
    };
    useEffect(() => {
        fetchBlogListing();
    }, []);

    const HandelURLToId = (data: string) => {
        const expectedURL = data.slice(data.indexOf("blog/") + 5, data.length - 1)
        return expectedURL
    }
    return (
        <div className='lg:pb-0 lg:p-6 lg:pt-0 pt-0 p-4'>
            <h3 className='text-gtl-med text-mckblue text-32 font-medium lg:pb-6' dangerouslySetInnerHTML={{ __html: title }}></h3>
            <div className='grid lg:grid-cols-2 gap-4 lg:relative'>
                {BlogListingContent?.data.results.map((item1: any, index: any) => (
                    <Link
                        href={{
                            pathname: "/blog_details",
                            query: { id: `${HandelURLToId(item1.contentLink.url)}` },
                        }}
                        className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
                    >
                        <article className="shadow-md rounded-lg lg:mb-12 mb-6"
                            key={index}>
                            <figure>
                                <img
                                    src={item1.image.value.url}
                                    alt={item1.image.value.id}
                                    id={item1.image.value.id}
                                    className="w-full"
                                />
                            </figure>
                            <figcaption>
                                <div className="content lg:p-6 p-4">
                                    <a href="" className="articleTitle lg:text-32 leading-10 max-[576px]:leading-8 sm:text-32 text-xl text-gtl-med text-mckblue no-underline" aria-labelledby="CoverMyMeds Leaders Analyze 4 Key Trends from Medication Access Report">{item1.title.value}</a>
                                    <div className="pb-3 pt-3">
                                        <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border">{GetTime(item1.startPublish)}</span>
                                        <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border">{item1.readMinute.value}</span>
                                        <span className="text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2">2.3K views</span>
                                    </div>
                                    <div className="flex flex-wrap">
                                        {item1.tag.value.map((item: any, index: any) => (
                                            <div
                                                style={{
                                                    backgroundColor: item1.tagBackgroundColorCode?.value
                                                }}
                                                key={index}
                                                className='mb-1 categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'>{item.description}</div>
                                        ))}
                                    </div>
                                </div>
                            </figcaption>
                        </article>
                    </Link>
                ))}


                <div className='carousel-button w-full lg:absolute flex items-center justify-center top-72'>
                    <div className='carousel-prev lg:absolute -left-6 cursor-pointer'>
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#4D5F9C" /><path d="M28.9401 18.7106L27.0601 16.8306L19.0601 24.8306L27.0601 32.8306L28.9401 30.9506L22.8334 24.8306L28.9401 18.7106Z" fill="black" /></svg>
                    </div>
                    <div className='lg:hidden text-sofia-reg text-xl font-normal px-3'>1/3</div>
                    <div className='carousel-next lg:absolute -right-6 cursor-pointer'>
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.8306" r="24" fill="#001A71" /><path d="M20.9401 16.8306L19.0601 18.7106L25.1667 24.8306L19.0601 30.9506L20.9401 32.8306L28.9401 24.8306L20.9401 16.8306Z" fill="black" /></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default memo(CarouselComponent);
