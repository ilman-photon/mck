import { useState, useEffect, memo, useCallback, useReducer } from "react";
import { useRouter } from "next/router"
import axios, { AxiosError } from "axios";
import ResentBlogListComponent from "./RecentBlogs";
import CarouselComponent from "./Carousel";
import CommentComponent from './Comment'
import RelatedProducts from "./RelatedProducts";
import SocialMediaIconComponent from './SocialMediaIcon'
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import { GetTime } from "../global/CommonUtil";
import { fetchApplicationSetting } from "../blog/BlogAPI";


const BlogDetailsComponent = () => {
    const router = useRouter()
    const { id } = router.query;
    const [response, setResponse] = useState<any>();
    const [blogID, setblogID] = useState<any>();
    const [AppSetting, setAppSetting] = useState<any>();
    const [loading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
         HandleAppSetting()
        if (router.query) {
            setblogID(id);
        }
    }, [router.query]);
    function fetchBlogetails() {
        return axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/${blogID}/&expand=*`,
            {
                headers: { "Accept-Language": "en" },
            }
        );
    }
    useEffect(() => {
        if (blogID) {
            fetchBlogetails()
                .then((res) => {
                    setResponse(res)
                    setIsLoading(false);
                })
                .catch((e: Error | AxiosError) => {
                    console.log(e);
                    setIsLoading(false);
                })
        } else {
            setIsLoading(false)
        }
    }, [blogID]);
    const HandleAppSetting = () => {
        fetchApplicationSetting()
            .then((res) => {
                setAppSetting(res.data[0].categoryMapping.expandedValue)
                setIsLoading(false);
            })
            .catch((e: Error | AxiosError) => {
                console.log(e);
                setIsLoading(false);
            })
    }
    const handleProductClick = (data: any) => {
        const title = data.routeSegment;
        router.push({
            pathname: "/product_detail",
            query: { data: title },
        });
    };

    useEffect(() => {
        // Set the lang attribute to "en" on the <html> element
        document.documentElement.lang = "en";
    }, []);

    useEffect(() => {
        // Set the title of the document dynamically
        document.title = response?.data[0]?.title.value || "Blog Details Page";
    }, [JSON.stringify(response)]);

    return (
        <>{loading ?
            (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-75"></div>
                    <div
                        className="relative"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                    >
                        <Image
                            src={gifImage}
                            alt="coba-image"
                            width={400}
                            height={400}
                            loading="eager"
                        />
                    </div>
                </div>
            ) :
            (<div className='container blog-details-container w-full lg:px-0  lg:py-72 lg:pb-0 p-4 pt-6  mx-auto lg:mt-44 md:mt-16'>
                <div className='col-start-1 col-end-7 rounded-lg overflow-hidden'>
                    <img className='m-auto w-full'
                        src={response?.data[0]?.image.expandedValue.url}
                        alt={response?.data[0]?.image.expandedValue.name}
                        id={response?.data[0]?.image.expandedValue.name}
                        style={{ display: response?.data[0]?.image.expandedValue.url ? 'block' : 'none' }}
                    />
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 lg:pt-10'>
                    <div className='lg:w-966 lg:col-span-2 col-start-1 col-end-7 lg:pl-4'>
                        <article className='mb-6'>
                            <div className='content lg:p-6 pb-0 p-4 px-0'>
                                <h1 className='lg:text-54  lg:leading-61  max-[576px]:leading-9 text-32 text-gtl-med text-mckblue lg:pb-6 text-center' id='blog-link-001'>{response?.data[0]?.title?.value}</h1>
                                <div className='grid lg:grid-cols-2 lg:gap-4 lg:pt-0 pt-4 lg:pb-6 pb-4'>
                                    <div className='lg:pb-0 pb-4'>
                                        <span className={`text-mckblue text-sofia-reg font-normal text-base pr-2 border-solid ${response?.data[0]?.readMinute?.value ? 'shade-grey-right-border' : ''}`} id='blog-label-001'>{GetTime(response?.data[0]?.startPublish)}</span>
                                        <span className={`text-mckblue text-sofia-reg font-normal text-base px-2 border-solid ${false ? 'shade-grey-right-border' : ''}`} id='blog-label-002'>{response?.data[0]?.readMinute?.value}</span>
                                        {/* <span className='text-mckblue text-sofia-reg font-normal text-base pl-2' id='blog-label-003'>76.6K views</span> */}
                                    </div>
                                    <div className='flex flex-wrap'>
                                        {response?.data[0]?.tag.value.map((item: any, index: any) => (
                                            <div
                                                key={index}
                                                style={{
                                                    backgroundColor: response?.data[0]?.tagBackgroundColorCode.value,
                                                }}
                                                className='categoryTag mb-1.5 text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'
                                                id='blog-label-006'>{item.description}</div>

                                        ))}
                                    </div>
                                </div>

                                <div className="text-sofia-reg text-color text-lg leading-27" dangerouslySetInnerHTML={{ __html: response?.data[0]?.description.value }}></div>
                            </div>
                        </article>
                        <CarouselComponent
                            title={response?.data[0]?.relatedArticleHeading.value}
                            relatedArticle={response?.data[0]?.relatedArticle.expandedValue}
                            OnRelatedArticleClick={(e) => console.log(e)}
                        />
                        {/* <CommentComponent /> */}
                    </div>
                    <div className='lg:w-306 lg:ml-100 lg:col-span-1 col-start-1 col-end-7'>
                        <SocialMediaIconComponent />
                        <div className='category-card shade-blue-border rounded-lg overflow-hidden mb-6'>
                            <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg leading-27" id='blog-label-009'>Recent Blogs</div>
                            <ResentBlogListComponent />
                        </div>
                        {AppSetting &&<RelatedProducts
                           AppSetting={AppSetting}
                            OnRelatedProductClick={(e) => handleProductClick(e)}
                            title={response?.data[0]?.relatedProductHeading.value}
                            BlogListingContent={response?.data[0]?.relatedProducts.expandedValue}
                        />}
                    </div>
                </div>
            </div>)}
        </>
    );
}
export default memo(BlogDetailsComponent);
