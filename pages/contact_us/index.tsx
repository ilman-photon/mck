import FooterComponent from "@/components/footer";
import ContactUsComponent from "@/components/contactus/ContactUsComponent";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function Contactus() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderComponent />
        <ContactUsComponent />
        <FooterComponent />
    </>
    )
    
}
export default Contactus;