import React, { useEffect, useState } from "react";
import CatogaryComponent from "./Catogory";
import SearchComponent from "./Search";
import ResentBlogListComponent from "../blog_details/RecentBlogs";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from "isomorphic-dompurify";
import SearchResult from "./SearchResult";
import { fetchBlogSearch } from "./BlogAPI";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import OtherArtical from "./OtherArtical";

function BlogSearchComponent() {
  const [BlogListingContent, setBlogListingContent] = useState<any>();
  const [ArticleList, setArticleList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchInfo, setSeachInfo] = useState<any>({
    ActiveSearch: true,
    SearchString: "",
    searchResult: [],
    noSearchResult: false,
  });
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchBlogSearch(id.toString())
        .then((res) => {
          setArticleList(res.data.results);
          setSeachInfo((prevState: any) => ({
            ...prevState,
            SearchString: id,
            ActiveSearch: false,
          }));
          setIsLoading(false);
        })
        .catch((e: Error | AxiosError) => {
          setIsLoading(false);
        });
    }
  }, [id]);

  const fetchBlogListing = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog-listing-setting/&expand=*`
      );

      setBlogListingContent(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogListing();
  }, []);

  const HandelSearch = (data: any, searchString: string) => {
    setSeachInfo((prevState: any) => ({
      ...prevState,
      searchResult: data,
      SearchString: searchString,
      ActiveSearch: false,
    }));
    setArticleList(data);
  };
  const HandleSearchClose = () => {
    setSeachInfo((prevState: any) => ({
      ...prevState,
      searchResult: [],
      SearchString: "",
      ActiveSearch: true,
    }));
  };
  return (
    <>
      {isLoading ? ( // Render loading indicator while loading
        <div>Loading...</div>
      ) : (
        <>
        <div className="container  mx-auto py-3">
            <div
              id="search"
              className="w-full relative flex items-center content-center"
            >
              <SearchComponent
                placeholder={
                  BlogListingContent?.data[0].blogSearchPlaceholderText.value
                }
                searchText={searchInfo.SearchString}
                ActiveSearch={searchInfo.ActiveSearch}
                handleResponse={(e, str) => HandelSearch(e, str)}
                handleClose={() => HandleSearchClose()}
              />
            </div>
            </div>
          <div className="container flex lg:flex-row flex-col gap-6 w-full lg: lg:px-7 lg:pb-0 p-4 pb-0 pt-6 mx-auto ">

          <div className="lg:w-966 w-full">
              <div className="w-full lg:pb-11 pb-5">
                {false ? (
                  <>
                    <h1
                      className="lg:text-32 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-left"
                      id="blog-link-001"
                    >
                      {`${BlogListingContent?.data[0].noMatchFoundText.value} “${searchInfo.SearchString}”`}{" "}
                    </h1>
                    <div
                      className="text-base text-sofia-reg text-mckback font-normal lg:pb-px pb-3"
                      id="srnf-label-001"
                    >
                      {BlogListingContent?.data[0].searchForText.value}{" "}
                      <strong className="text-mckred">
                        <i>{searchInfo.SearchString}</i>
                      </strong>
                    </div>
                    <div
                      className="text-lg text-sofia-reg text-mcknormalgrey font-normal"
                      id="srnf-label-003"
                    >
                      {BlogListingContent?.data[0].showResultsText.value.replace(
                        /#/g,
                        0
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <h1
                      className="lg:text-32 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-left"
                      id="blog-link-001"
                    >
                      {`${ArticleList.length} ${BlogListingContent?.data[0].showingResultsText.value} “${searchInfo.SearchString}“`}{" "}
                    </h1>
                    <div
                      className="text-lg text-sofia-reg text-mckback font-normal lg:pb-px pb-1"
                      id="srnf-label-002"
                    >
                      {BlogListingContent?.data[0].showingResultsText.value}{" "}
                      <strong className="text-mckblue">
                        <i>{searchInfo.SearchString}</i>
                      </strong>
                    </div>
                    <div
                      className="text-lg text-sofia-reg text-mcknormalgrey font-normal"
                      id="srnf-label-003"
                    >
                      {BlogListingContent?.data[0].showResultsText.value.replace(
                        /#/g,
                        ArticleList.length
                      )}
                    </div>
                    <br />
                  </>
                )}
              </div>
              <OtherArtical ArticleList={ArticleList} />
            </div>
            <div
              className="lg:w-306 w-full blogright-sidebar"
              // className="lg:col-span-1 col-start-1 col-end-7"
            >
              <CatogaryComponent
                CatogaryListing={
                  BlogListingContent?.data[0].categoryFilter.expandedValue
                }
                Catogarytitle={
                  BlogListingContent?.data[0].categoryHeadingText.value
                }
                OnCatogarySelcete={(e) => null}
              />
              <div className="category-card shade-blue-border rounded-lg overflow-hidden mb-6">
                <div
                  className="text-mcknormalgrey shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg"
                  id="blog-label-009"
                >
                  {DOMPurify.sanitize(
                    BlogListingContent?.data[0]?.trendingBlogHeadingText?.value
                  )}
                </div>
                <ResentBlogListComponent />
              </div>
            </div>
            </div>

        </>
      )}
    </>
  );
}

export default BlogSearchComponent;
