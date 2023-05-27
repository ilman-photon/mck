import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import PdpCarousel from "@/components/pdp_carousel";
import PdpDetail from "@/components/pdp_details";
import HeaderNoStickyComponent from "@/components/header_nosticky";
import PdpLocation from "@/components/pdp_location";
import GoogleTagManager from "@/components/google_tag_manager";

function ProductDetails() {  

    return (
        <>
            <GoogleTagManager/>
            {/* <HeaderNoStickyComponent /> */}
            <HeaderComponent />
            <div className="product-detail-page grid lg:grid-flow-col container lg:mx-4 lg:mx-auto mt-18">
                <div className="left-column overflow-hidden lg:overflow-visible">
                <div className="pdp-slider">
                <PdpCarousel/>
                </div>
                <div className="hidden lg:block">
                <PdpLocation index={1}/>    
                </div>
                </div>
                <PdpDetail/>
                <div className="lg:hidden">
                <PdpLocation index={2}/>    
                </div>
            </div>
            <FooterComponent />
        </>
    );
}

export default ProductDetails;
