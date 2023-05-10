import FooterComponent from "@/components/footer";
import BlogComponent from "@/components/blog/blog";
// import BlogSearchComponent from "@/components/blog/blog-search-result";
// import BlogNoMatchesFoundComponent from "@/components/blog/BlogNoMatchesFoundComponent";
import HeaderNoStickyComponent from "@/components/header_nosticky";
//import HeaderComponent from "@/components/header";
import React from "react";

function Terms() {
    return (
        <>
        <HeaderNoStickyComponent />
        <BlogComponent />
        <FooterComponent />
    </>
    )
    
}
export default Terms;