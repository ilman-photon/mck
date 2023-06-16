import React, { Fragment, ReactElement, memo } from "react";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import GoogleTagManager from "@/components/google_tag_manager";
import Head from "next/head";

interface CatogaryComponentProps {
    children: ReactElement;
}

const LandingLayout: React.FC<CatogaryComponentProps> = ({ children }) => {

    return (
        <Fragment>
            <Head>
                <title>McKesson</title>
                <link rel="icon" href="/favicon_mck.ico" />
            </Head>
            <GoogleTagManager />
            <div className="wrapper">
                <HeaderComponent />
                {children}
                <FooterComponent />
            </div>
        </Fragment>

    )
}
export default memo(LandingLayout);
