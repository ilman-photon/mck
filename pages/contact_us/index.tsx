import FooterComponent from "@/components/footer";
import ContactUsComponent from "@/components/contactus/ContactUsComponent";
import HeaderNoStickyComponent from "@/components/header_nosticky";
//import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function Contactus() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderNoStickyComponent />
        <ContactUsComponent />
        <FooterComponent />
    </>
    )
    
}
export default Contactus;