import FooterComponent from "@/components/footer";
import BlogComponent from "@/components/blog/blog";
// import BlogSearchComponent from "@/components/blog/blog-search-result";
// import BlogNoMatchesFoundComponent from "@/components/blog/BlogNoMatchesFoundComponent";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function Terms() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderComponent />
        <BlogComponent />
        <FooterComponent />
    </>
    )
    
}
export default Terms;