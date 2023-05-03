import FooterComponent from "@/components/footer";
import FaqComponent from "@/components/faq/FaqComponent";
import HeaderNoStickyComponent from "@/components/header_nosticky";
//import HeaderComponent from "@/components/header";
import React from "react";

function Faq() {
    return (
        <>
        <HeaderNoStickyComponent />
        <FaqComponent />
        <FooterComponent />
    </>
    )
    
}
export default Faq;