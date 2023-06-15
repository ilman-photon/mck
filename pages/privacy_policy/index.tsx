import FooterComponent from "@/components/footer";
import PrivacypolicyComponent from "@/components/privacy_policy/PrivacypolicyComponent";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";
import Head from "next/head";

function Terms() {
    return (
        <>
            <Head>
                <title>McKesson</title>
                <link rel="icon" href="/favicon_mck.ico" />
            </Head>
            <GoogleTagManager />
            <div className="wrapper">
                <HeaderComponent />
                <PrivacypolicyComponent />
                <FooterComponent />
            </div>
        </>
    )

}
export default Terms;