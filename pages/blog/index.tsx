import FooterComponent from "@/components/footer";
import BlogComponent from "@/components/blog/blog";
// import BlogSearchComponent from "@/components/blog/blog-search-result";
// import BlogNoMatchesFoundComponent from "@/components/blog/BlogNoMatchesFoundComponent";
import HeaderNoStickyComponent from "@/components/header_nosticky";
//import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function Terms() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderNoStickyComponent />
        <BlogComponent />
        <FooterComponent />
    </>
    )
    
}
export default Terms;