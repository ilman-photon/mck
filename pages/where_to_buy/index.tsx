import FooterComponent from "@/components/footer";
import WhereComponent from "@/components/where_to_buy";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";
import Head from "next/head";

function WhereToBuy() {
    return (
        <>
            <Head>
                <title>McKesson</title>
                <link rel="icon" href="/favicon_mck.ico" />
            </Head>
            <GoogleTagManager />
            <div className="wrapper">
                <HeaderComponent />
                <WhereComponent />
                <FooterComponent />
            </div>
        </>
    )

}
export default WhereToBuy;