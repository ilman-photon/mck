import FooterComponent from "@/components/footer";
import PdpCarousel from "@/components/pdp_carousel";
import PdpDetail from "@/components/pdp_deatils";
import HeaderNoStickyComponent from "@/components/header_nosticky";
import PdpLocation from "@/components/pdp_location";

function ProductDetails() {  

    return (
        <>
            <HeaderNoStickyComponent />
            <div className="grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4 container mx-4 lg:mx-auto mt-18">
                <PdpCarousel/>
                <PdpLocation />
                <PdpDetail/>
            </div>
            <FooterComponent />
        </>
    );
}

export default ProductDetails;
