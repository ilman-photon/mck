import FooterComponent from "@/components/footer";
import PageNotFound from "@/components/page_not_found";
import HeaderComponent from "@/components/header";
import React from "react";

function NotFound() {
    return (
        <>
        <HeaderComponent />
        <PageNotFound /> 
        <FooterComponent />
    </>
    )
    
}
export default NotFound;