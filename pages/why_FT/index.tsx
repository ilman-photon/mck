import FooterComponent from "@/components/footer";
import WhyFTComponent from "@/components/why_FT/WhyFTComponent";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function FTComponent() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderComponent />
        <WhyFTComponent />
        <FooterComponent />
    </>
    )
    
}
export default FTComponent;