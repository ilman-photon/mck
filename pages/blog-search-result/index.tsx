import FooterComponent from "@/components/footer";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";
import Head from "next/head";
import BlogSearchComponent from "@/components/blog/blog-search-result";

function Faq() {
    return (
        <>
            <Head>
                <title>McKesson</title>
                <link rel="icon" href="/favicon_mck.ico" />
            </Head>
            <GoogleTagManager />
            <div className="wrapper">
                <HeaderComponent />
                <BlogSearchComponent />
                <FooterComponent />
            </div>
        </>
    )

}
export default Faq;