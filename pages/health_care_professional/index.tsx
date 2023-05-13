import FooterComponent from "@/components/footer";
import HealthCareProfessionalComponent from "@/components/health_care_professional";
// import HeaderNoStickyComponent from "@/components/header_nosticky";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function Terms() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderComponent />
        <HealthCareProfessionalComponent />
        <FooterComponent />
    </>
    )
    
}
export default Terms;