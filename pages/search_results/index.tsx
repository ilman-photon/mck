import FooterComponent from "@/components/footer";
import ResultComponent from "@/components/search_results/";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function SearchResultComponent() {
    return (
        <>
            <GoogleTagManager />
            <div className="wrapper">
                <HeaderComponent />
                <ResultComponent />
                <FooterComponent />
            </div>
        </>
    )

}
export default SearchResultComponent;