import FooterComponent from "@/components/footer";
import PageNotFound from "@/components/page_not_found";
import HeaderComponent from "@/components/header";
import React from "react";

function NotFound() {
    return (
        <>
            <div className="wrapper">
                <HeaderComponent />
                <PageNotFound />
                <FooterComponent />
            </div>
        </>
    )

}
export default NotFound;