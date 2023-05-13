import FooterComponent from "@/components/footer";
import PrivacypolicyComponent from "@/components/privacy_policy/PrivacypolicyComponent";
import HeaderNoStickyComponent from "@/components/header_nosticky";
//import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function Terms() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderNoStickyComponent />
        <PrivacypolicyComponent />
        <FooterComponent />
    </>
    )
    
}
export default Terms;