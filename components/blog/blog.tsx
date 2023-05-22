import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedProducts from "../blog_details/RelatedProducts";
import CatogaryComponent from './Catogory'
import SearchComponent from './Search'
import ResentBlogListComponent from '../blog_details/RecentBlogs'
import { useRouter } from "next/router";
import SearchResult from "./SearchResult";
import useAxios from "@/hooks/useApi";
import BlogListContainer from "./BlogListContainer";
import OtherArtical from "./OtherArtical";
function BlogComponent() {
    const [ArticleContent, setArticleContent] = useState<any>();
    const [ActiveSearch, setActiveSearch] = useState<boolean>(false);
    const [searchString, setSearchString] = useState<any>();
    const [RelatedBlog, setRelatedBlog] = useState<any>();
    const [FilterBlogList, setFilterBlogList] = useState<any>(false);
    const [currentScreen, setCurrentScreen] = useState<any>('List');

    const router = useRouter()
    useEffect(() => {
        fetchRelatedProducts();
    }, [ActiveSearch]);
    const { response, error, loading } = useAxios({
        method: "GET",
        url: `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog-listing-setting/&expand=*`,
        headers: {
            "Accept-Language": "en",
        },
    });
    const fetchRelatedProducts = async () => {
        const responseid = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/blog-page-are-your-medications-causing-you-to-lose-nutrients/&expand=*`, { headers: { 'Accept-Language': 'en' } },
        );

        setRelatedBlog(responseid);
    };
    useEffect(() => {
        fetchRelatedProducts();
    }, []);

    const handleProductClick = (data: any) => {
        const title = data.routeSegment;
        router.push({
            pathname: "/product_detail",
            query: { data: title },
        });
    };
    const filterBlogList = async (data: any) => {
        const response = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage') and tag/value/name eq '${data.name}' &expand=*`, { headers: { 'Accept-Language': 'en' } },
        );
        setFilterBlogList(response.data.results)
        setCurrentScreen('Filter')
    }

    const HandelSearch = (data: any, searchString: any) => {
        setSearchString(searchString)
        setArticleContent(data)
        setActiveSearch(true)
        setCurrentScreen('Search')
    }
    return (
        <>
            <div className='container grid grid-cols-3 gap-6 w-full lg:py-72 lg:px-7 lg:pb-0 p-4 pt-6 mx-auto lg:mt-36 mt-16'>

            <div className='lg:col-span-2 col-start-1 col-end-7'>
                    <div id="search"
                        className={`lg:${!ActiveSearch && 'hidden'} block w-full relative flex items-center content-center mb-6`}
                    >
                    <SearchComponent
                        placeholder={response?.data[0].blogSearchPlaceholderText.value}
                        handleClick={(e, searchstring) => HandelSearch(e, searchstring)}
                    />
                </div>
             
                {(() => {
                    switch (currentScreen) {
                        case 'Search':
                            return <SearchResult placeHolders={response?.data[0]} ArticleContent={ArticleContent} searchString={searchString} />
                        case 'Filter':
                            return <OtherArtical ArticleList={FilterBlogList} />
                        case 'List':
                            return <BlogListContainer />
                        default:
                            return null
                    }
                })()}
            </div>
            <div className='lg:col-span-1 col-start-1 col-end-7'>
                {!ActiveSearch && <div id="search" className="lg:block hidden relative flex items-center content-center mb-6">
                    <SearchComponent
                        placeholder={response?.data[0].blogSearchPlaceholderText.value}
                        handleClick={(e, searchstring) => HandelSearch(e, searchstring)}
                    />
                </div>}
                <CatogaryComponent
                    CatogaryListing={response?.data[0].categoryFilter.expandedValue}
                    Catogarytitle={response?.data[0].categoryHeadingText.value}
                    OnCatogarySelcete={(e) => filterBlogList(e)}
                />
                <div className='category-card shade-blue-border rounded-lg overflow-hidden mb-6'>
                    <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg" id='blog-label-009'>{response?.data[0].trendingBlogHeadingText.value}</div>
                    <ResentBlogListComponent />
                </div>
                <RelatedProducts
                    OnRelatedProductClick={(e) => handleProductClick(e)}
                    title={response?.data[0].relatedProductHeadingText.value}
                    BlogListingContent={RelatedBlog?.data[0].relatedProducts.expandedValue}
                />

            </div>
        </div>
        </>
    );
}
export default BlogComponent;