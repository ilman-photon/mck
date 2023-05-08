import FooterComponent from "@/components/footer";
import TermsComponent from "@/components/termsofuse/TermsofuseComponent";
import HeaderNoStickyComponent from "@/components/header_nosticky";
//import HeaderComponent from "@/components/header";
import React from "react";

function Terms() {
    return (
        <>
        <HeaderNoStickyComponent />
        <TermsComponent />
        <FooterComponent />
    </>
    )
    
}
export default Terms;