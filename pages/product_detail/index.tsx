import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import PdpCarousel from "@/components/pdp_carousel";
import PdpDetail from "@/components/pdp_deatils";
import HeaderNoStickyComponent from "@/components/header_nosticky";
import PdpLocation from "@/components/pdp_location";
import GoogleTagManager from "@/components/google_tag_manager";

function ProductDetails() {  

    return (
        <>
            <GoogleTagManager/>
            {/* <HeaderNoStickyComponent /> */}
            <HeaderComponent />
            <div className="product-detail-page grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4 container mx-4 lg:mx-auto mt-18">
                <PdpCarousel/>
                <PdpLocation />
                <PdpDetail/>
            </div>
            <FooterComponent />
        </>
    );
}

export default ProductDetails;
