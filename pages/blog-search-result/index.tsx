import FooterComponent from "@/components/footer";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";
import BlogSearchComponent from "@/components/blog/blog-search-result";

function Faq() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderComponent />
        <BlogSearchComponent/>
        <FooterComponent />
    </>
    )
    
}
export default Faq;