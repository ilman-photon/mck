import { useState, useEffect, memo } from "react";
import { useRouter } from "next/router"
import axios, { AxiosError } from "axios";
import ResentBlogListComponent from "./RecentBlogs";
import CarouselComponent from "./Carousel";
import CommentComponent from './Comment'
import { GetTime } from "../CommonUtil/time";
import RelatedProducts from "./RelatedProducts";
import SocialMediaIconComponent from './SocialMediaIcon'

const BlogDetailsComponent = () => {
    const router = useRouter()
    const {
        query: { id },
    } = router

    const [BlogListingContent, setBlogListingContent] = useState<any>();
    console.log(id)
    useEffect(() => {
        fetchBlogListing();
    }, [id]);
    const fetchBlogListing = async () => {
        const response = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/${id}/&expand=*`, { headers: { 'Accept-Language': 'en' } },
        );

        setBlogListingContent(response);
    };


    return (
        <>
            <div className='container w-full lg:p-7 lg:pb-0 p-4 pt-6  mx-auto lg:mt-36 mt-16'>
                <div className='col-start-1 col-end-7 rounded-lg overflow-hidden'>
                    <img className='m-auto'
                        src={BlogListingContent?.data[0]?.image.expandedValue.url}
                        alt={BlogListingContent?.data[0]?.image.expandedValue.name}
                        id={BlogListingContent?.data[0]?.image.expandedValue.name}
                    />
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 lg:pt-10'>
                    <div className='lg:col-span-2 col-start-1 col-end-7 lg:pl-4'>
                        <article className='mb-6'>
                            <div className='content lg:p-6 pb-0 p-4 px-0'>
                                <h1 className='lg:text-54 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-center' id='blog-link-001' >{BlogListingContent?.data[0]?.title.value}</h1>
                                <div className='grid lg:grid-cols-2 lg:gap-4 lg:pt-0 pt-3 lg:pb-6 pb-4'>
                                    <div className='lg:pb-0 pb-4'>
                                        <span className='text-mckblue text-sofia-reg font-normal text-base pr-2 border-solid shade-grey-right-border' id='blog-label-001'>{GetTime(BlogListingContent?.data[0]?.startPublish)}</span>
                                        <span className='text-mckblue text-sofia-reg font-normal text-base px-2 border-solid shade-grey-right-border' id='blog-label-002'>{BlogListingContent?.data[0]?.readMinute.value}</span>
                                        <span className='text-mckblue text-sofia-reg font-normal text-base pl-2' id='blog-label-003'>76.6K views</span>
                                    </div>
                                    <div className='flex lg:justify-end'>
                                        {BlogListingContent?.data[0]?.tag.value.map((item: any, index: any) => (
                                            <div
                                                key={index}
                                                style={{
                                                    backgroundColor: BlogListingContent?.data[0]?.tagBackgroundColorCode.value,
                                                }}
                                                className='categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'
                                                id='blog-label-006'>{item.description}</div>

                                        ))}
                                    </div>
                                </div>

                                <div dangerouslySetInnerHTML={{ __html: BlogListingContent?.data[0]?.description.value }}></div>
                            </div>
                        </article>
                        <CarouselComponent
                            title={BlogListingContent?.data[0]?.relatedArticleHeading.value}
                            ProductList={BlogListingContent?.data[0]?.relatedProducts.expandedValue}
                            OnRelatedProductClick={(e) => console.log(e)}
                        />
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
                            BlogListingContent={BlogListingContent?.data[0]?.relatedProducts.expandedValue}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
export default memo(BlogDetailsComponent);
