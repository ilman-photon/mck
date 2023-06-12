import { useState, useEffect, memo } from "react";
import { useRouter } from "next/router";
import ResentBlogListComponent from "./RecentBlogs";
import CarouselComponent from "./Carousel";
import CommentComponent from "./Comment";
import RelatedProducts from "./RelatedProducts";
import SocialMediaIconComponent from "./SocialMediaIcon";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import { GetTime } from "../global/CommonUtil";
import { fetchApplicationSetting, fetchBlogDetails } from "../blog/BlogAPI";
import { ImageComponent } from "../global/ImageComponent";
import TagsComponent from "../blog/Tags";
import DOMPurify from 'isomorphic-dompurify';

const BlogDetailsComponent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [BlogInfo, setBlogInfo] = useState<any>();
  const [appSetting, setAppSetting] = useState<any>();
  const [loading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (id) {
      fetchBlodDetails();
    }
  }, [id]);

  const fetchBlodDetails = async () => {
    try {
      const [BlodDetails, AppSetting] = await Promise.all([
        fetchBlogDetails(id),
        fetchApplicationSetting(),
      ]);
      const Blogdata = await BlodDetails;
      const APPdata = await AppSetting.data[0].categoryMapping.expandedValue;
      setIsLoading(false);
      setBlogInfo(Blogdata.data[0]);
      setAppSetting(APPdata);
    } catch (error) {
      console.error("Error fetching Blog data:", error);
    }
  };
  const handleProductClick = (data: any) => {
    const title = data.routeSegment;
    router.push({
      pathname: "/product_detail",
      query: { data: title },
    });
  };
  const handleBlogClick = (rout: any) => {
    router.push({
      pathname: "/blog_details",
      query: { id: rout },
    });
  };

  useEffect(() => {
    // Set the lang attribute to "en" on the <html> element
    // Set the title of the document dynamically
    document.documentElement.lang = "en";
    document.title = DOMPurify.sanitize(BlogInfo?.title?.value) || "Blog Details Page";
  }, []);

  return (
    <>
      {loading ? (
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
      ) : (
        <div
          className="container blog-details-container w-full lg:px-0  lg:py-72 lg:pb-0 p-4 pt-6  mx-auto "
          id="carouselExampleCaptions"
        >
          <div
            className="col-start-1 col-end-7 rounded-lg overflow-hidden"
            aria-hidden="true"
            style={{
              display: BlogInfo.image?.expandedValue?.url ? "block" : "none",
            }}
          >
            <ImageComponent
              className="m-auto w-full"
              src={BlogInfo.image?.expandedValue?.url}
              alt={BlogInfo.image?.expandedValue?.name}
              id={BlogInfo.image?.expandedValue?.name}
            />
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-4 lg:pt-10">
            <div className="lg:w-966 lg:col-span-2 col-start-1 col-end-7 lg:pl-4">
              <article className="mb-6">
                <div className="content lg:p-6 pb-0 p-4 px-0">
                  <h1
                    className="lg:text-54  lg:leading-61  max-[576px]:leading-9 text-32 text-gtl-med text-mckblue lg:pb-6 text-center"
                    id="blog-link-001"
                  >
                    {DOMPurify.sanitize(BlogInfo.title?.value)}
                  </h1>
                  <div className="grid lg:grid-cols-2 lg:gap-4 lg:pt-0 pt-4 lg:pb-6 pb-4">
                    <div className="lg:pb-0 pb-4">
                      <span
                        className={`text-mckblue text-sofia-reg font-normal text-base pr-2 border-solid ${
                          BlogInfo.readMinute?.value
                            ? "shade-grey-right-border"
                            : ""
                        }`}
                        id="blog-label-001"
                      >
                        {GetTime(BlogInfo.startPublish)}
                      </span>
                      <span
                        className={`text-mckblue text-sofia-reg font-normal text-base px-2 border-solid ${
                          false ? "shade-grey-right-border" : ""
                        }`}
                        id="blog-label-002"
                      >
                        {DOMPurify.sanitize(BlogInfo.readMinute?.value)}
                      </span>
                      {/* <span className='text-mckblue text-sofia-reg font-normal text-base pl-2' id='blog-label-003'>76.6K views</span> */}
                    </div>
                    <TagsComponent BlogInfo={BlogInfo} />
                  </div>

                  <div
                    className="text-sofia-reg text-color text-lg leading-27"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(BlogInfo.description?.value),
                    }}
                  ></div>
                </div>
              </article>
              <div className="relative">
                <CarouselComponent
                  title={BlogInfo.relatedArticleHeading?.value}
                  relatedArticle={BlogInfo.relatedArticle?.expandedValue}
                  OnRelatedArticleClick={(e) => handleBlogClick(e)}
                />
                {/* <CommentComponent /> */}
              </div>
            </div>
            <div className="lg:w-306 lg:ml-100 lg:col-span-1 col-start-1 col-end-7">
              <SocialMediaIconComponent />
              <div className="category-card shade-blue-border rounded-lg overflow-hidden mb-6">
                <div
                  className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg leading-27"
                  id="blog-label-009"
                >
                  Recent Blogs
                </div>
                <ResentBlogListComponent />
              </div>
              <RelatedProducts
                AppSetting={appSetting}
                OnRelatedProductClick={(e) => handleProductClick(e)}
                title={BlogInfo.relatedProductHeading?.value}
                BlogListingContent={BlogInfo.relatedProducts?.expandedValue}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default memo(BlogDetailsComponent);
