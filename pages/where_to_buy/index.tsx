import FooterComponent from "@/components/footer";
import WhereComponent from "@/components/where_to_buy";
import HeaderNoStickyComponent from "@/components/header_nosticky";
//import HeaderComponent from "@/components/header";
import React from "react";

function WhereToBuy() {
    return (
        <>
        <HeaderNoStickyComponent />
        <WhereComponent />
        <FooterComponent />
    </>
    )
    
}
export default WhereToBuy;