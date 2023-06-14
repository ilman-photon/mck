import FooterComponent from "@/components/footer";
import TermsComponent from "@/components/termsofuse/TermsofuseComponent";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function Terms() {
    return (
        <>
            <GoogleTagManager />
            <div className="wrapper">
                <HeaderComponent />
                <TermsComponent />
                <FooterComponent />
            </div>
        </>
    )

}
export default Terms;