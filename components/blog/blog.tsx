import React, { useState, useEffect, memo } from "react";
import { AxiosError } from "axios";
import RelatedProducts from "../blog_details/RelatedProducts";
import CatogaryComponent from "./Catogory";
import SearchComponent from "./Search";
import ResentBlogListComponent from "../blog_details/RecentBlogs";
import { useRouter } from "next/router";
import SearchResult from "./SearchResult";
import OtherArtical from "./OtherArtical";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { fetchApplicationSetting, fetchBlogFilter, fetchBlogSetting } from "./BlogAPI";

const BlogList = dynamic(
  () => import('./BlogListContainer'),
  {
    loading: () => <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <div className="relative">
        <Image src={gifImage} alt="coba-image" />{" "}
      </div>
    </div>,
  },
);
const BlogComponent = () => {
  const [ArticleContent, setArticleContent] = useState<any>();
  const [FilterBlogList, setFilterBlogList] = useState<any>(false);
  const [ActiveSearch, setActiveSearch] = useState<any>(false);
  const [currentScreen, setCurrentScreen] = useState<any>("List");
  const [response, setResponse] = useState<any>();
  const [loading, setIsLoading] = useState<any>();
  const [AppSetting, setAppSetting] = useState<any>();

  const [searchInfo, setSeachInfo] = useState<any>({
    ActiveSearch: true,
    SearchString: '',
    searchResult: [],
    noSearchResult: false
  });
  const router = useRouter();

  useEffect(() => {
    HandleAppSetting()

    setIsLoading(true);
    fetchBlogSetting()
      .then((res) => {
        setResponse(res)
        setIsLoading(false);

      })
      .catch((e: Error | AxiosError) => {
        console.log(e);
        setIsLoading(false);
      })
  }, []);
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

  const filterBlogList = async (Filterstring: any) => {
    fetchBlogFilter(Filterstring)
      .then((res) => {
        setFilterBlogList(res.data.results);
        setCurrentScreen("Filter");
        setIsLoading(false)
      })
      .catch((e: Error | AxiosError) => {
        console.log(e);
        setIsLoading(false);
      })
  };

  const HandelSearch = (data: any, searchString: string) => {
    setSeachInfo((prevState: any) => ({
      ...prevState,
      searchResult: data,
      SearchString: searchString,
      ActiveSearch: false
    }));
    setActiveSearch(true)
    setArticleContent(data);
    setCurrentScreen("Search");
  };
  const HandleSearchClose = () => {
    setCurrentScreen('List')
    setSeachInfo((prevState: any) => ({
      ...prevState,
      searchResult: [],
      SearchString: '',
      ActiveSearch: true
    }));
    setActiveSearch(false)
  }

  return (
    <div id="carouselExampleCaptions" className="container flex lg:flex-row flex-col gap-6 w-full lg:p-72 lg:px-7 lg:pb-0 p-4 pb-0 pt-6 mx-auto ">
      <div className="lg:w-966 w-full">
        <div
          id="search"
          className={`lg:${!ActiveSearch && "hidden"
            } block w-full relative flex items-center content-center mb-6`}
        >
          <SearchComponent
            placeholder={response?.data[0].blogSearchPlaceholderText.value}
            searchText={searchInfo.SearchString}
            ActiveSearch={searchInfo.ActiveSearch}
            handleResponse={(e, str) => HandelSearch(e, str)}
            handleClose={() => HandleSearchClose()}
          />
        </div>
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
          (() => {
            switch (currentScreen) {
              case "Search":
                return (
                  <SearchResult
                    placeHolders={response?.data[0]}
                    ArticleContent={ArticleContent}
                    searchString={searchInfo.SearchString}
                  />
                );
              case "Filter":
                return <OtherArtical ArticleList={FilterBlogList} />;
              case "List":
                return <BlogList />;
              default:
                return null;
            }
          })()
        )}
      </div>
      <div className="lg:w-306 w-full blogright-sidebar">
        {!ActiveSearch && (
          <div
            id="search"
            role="search"
            className="lg:block hidden relative flex items-center content-center mb-6"
          >
            <SearchComponent
              placeholder={response?.data[0].blogSearchPlaceholderText.value}
              searchText={searchInfo.searchText}
              ActiveSearch={searchInfo.ActiveSearch}
              handleResponse={(e, str) => HandelSearch(e, str)}
              handleClose={() => HandleSearchClose()}
            />
          </div>
        )}
        <CatogaryComponent
          CatogaryListing={response?.data[0].categoryFilter.expandedValue}
          Catogarytitle={response?.data[0].categoryHeadingText.value}
          OnCatogarySelcete={(e) => filterBlogList(e)}
        />
        <div className="category-card shade-blue-border rounded-lg overflow-hidden mb-6">
          <div
            className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg"
            id="blog-label-009"
          >
            {response?.data[0].trendingBlogHeadingText.value}
          </div>
          <ResentBlogListComponent />
        </div>
        <RelatedProducts
          AppSetting={AppSetting}
          OnRelatedProductClick={(e) => handleProductClick(e)}
          title={response?.data[0].relatedProductHeadingText.value}
          BlogListingContent={response?.data[0].recommendedProducts?.expandedValue}
        />
      </div>
    </div>
  );
}
export default memo(BlogComponent);
