import { useRouter } from "next/router";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import PdpCarousel from "@/components/pdp_carousel";
import PdpDetail from "@/components/pdp_deatils";
import PdpLocation from "@/components/pdp_location";

function ProductDetails() {
    const router = useRouter();

    return (
        <>
            <HeaderComponent />
            <div className="grid grid-rows-2 grid-flow-col gap-4 container mx-auto mt-18">
                <PdpCarousel />
                {/* <PdpLocation/> */}
                <PdpDetail />
            </div>
            <FooterComponent />
        </>
    );
}

export default ProductDetails;
