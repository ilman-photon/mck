import FooterComponent from "@/components/footer";
import BlogDetailsComponent from "@/components/blog_details/BlogDetailsComponent";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function Terms() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderComponent />
        <BlogDetailsComponent />
        <FooterComponent />
    </>
    )
    
}
export default Terms;