import FooterComponent from "@/components/footer";
import ResultComponent from "@/components/search_results/";
//import HeaderComponent from "@/components/header";
import HeaderNoStickyComponent from "@/components/header_nosticky";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function SearchResultComponent() {
    return (
        <>
        <GoogleTagManager/>
        <HeaderNoStickyComponent />
        <ResultComponent />
        <FooterComponent />
    </>
    )
    
}
export default SearchResultComponent;