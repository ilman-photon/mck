import FooterComponent from "@/components/footer";
import ContactUsCoumponent from "@/components/contactus"; 
import HeaderNoStickyComponent from "@/components/header_nosticky";
//import HeaderComponent from "@/components/header";
import React from "react";

function Contactus() {
    return (
        <>
        <HeaderNoStickyComponent />
        <ContactUsCoumponent />
        <FooterComponent />
    </>
    )
    
}
export default Contactus;