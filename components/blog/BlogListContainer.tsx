import React, { memo, useState, Fragment } from "react";
import { useEffect } from "react";
import HeroArticle from "./HeroArticle";
import DOMPurify from 'isomorphic-dompurify';
import OtherArtical from "./OtherArtical";
import { fetchBlogList } from "./BlogAPI";
import { AxiosError } from "axios";

const BlogListContainer = () => {
    const [BlogList, setBlogList] = useState<any>([]);
    useEffect(() => {
        fetchBlogList()
            .then((res) => {
                setBlogList(res?.data?.results);
            })
            .catch((e: Error | AxiosError) => {
                console.log(e)
            });
    }, []);
    useEffect(() => {
        // Set the lang attribute to "en" on the <html> element
        document.documentElement.lang = "en";
    }, []);

    useEffect(() => {
        // Set the title of the document dynamically
        document.title = DOMPurify.sanitize(BlogList?.title?.value) || "Blog Listing Page";
    }, [JSON.stringify(BlogList)]);

    return (
        <Fragment>
            <HeroArticle data={BlogList?.[0]} />
            <OtherArtical ArticleList={BlogList.slice(1)} />
        </Fragment>
    )
}
export default memo(BlogListContainer);
