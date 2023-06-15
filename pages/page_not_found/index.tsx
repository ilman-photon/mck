import FooterComponent from "@/components/footer";
import PageNotFound from "@/components/page_not_found";
import HeaderComponent from "@/components/header";
import Head from "next/head";
import React from "react";

function NotFound() {
    return (
        <>
            <Head>
                <title>McKesson</title>
                <link rel="icon" href="/favicon_mck.ico" />
            </Head>
            <div className="wrapper">
                <HeaderComponent />
                <PageNotFound />
                <FooterComponent />
            </div>
        </>
    )

}
export default NotFound;