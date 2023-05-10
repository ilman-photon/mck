import FooterComponent from "@/components/footer";
import PrivacypolicyComponent from "@/components/privacy_policy/PrivacypolicyComponent";
import HeaderNoStickyComponent from "@/components/header_nosticky";
//import HeaderComponent from "@/components/header";
import React from "react";

function Terms() {
    return (
        <>
        <HeaderNoStickyComponent />
        <PrivacypolicyComponent />
        <FooterComponent />
    </>
    )
    
}
export default Terms;