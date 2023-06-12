import React, { useEffect, useState } from "react";
import CatogaryComponent from "./Catogory";
import SearchComponent from "./Search";
import ResentBlogListComponent from "../blog_details/RecentBlogs";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from "isomorphic-dompurify";
import SearchResult from "./SearchResult";

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
          {" "}
          <div 
          className="container mx-auto w-full py-3"
          >
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
          <div className="container grid grid-cols-3 gap-4 w-full lg:mt-12 lg:px-9 lg:pb-0 p-4 lg:pt-0 mx-auto">
              <SearchResult
                placeHolders={BlogListingContent?.data[0]}
                ArticleContent={ArticleList}
                searchString={searchInfo.SearchString}
              />
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
