import FooterComponent from "@/components/footer";
import TermsComponent from "@/components/termsofuse/TermsofuseComponent";
import HeaderNoStickyComponent from "@/components/header_nosticky";
//import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function Terms() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderNoStickyComponent />
        <TermsComponent />
        <FooterComponent />
    </>
    )
    
}
export default Terms;