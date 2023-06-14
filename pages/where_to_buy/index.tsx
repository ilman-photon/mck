import FooterComponent from "@/components/footer";
import WhereComponent from "@/components/where_to_buy";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function WhereToBuy() {
    return (
        <>
            <GoogleTagManager />
            <div className="wrapper">
                <HeaderComponent />
                <WhereComponent />
                <FooterComponent />
            </div>
        </>
    )

}
export default WhereToBuy;