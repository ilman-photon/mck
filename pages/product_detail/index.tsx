import useAxios from "@/hooks/useApi";
import axios from "axios";
import { useRouter } from "next/router";
import FooterComponent from "@/components/footer";
import PdpCarousel from "@/components/pdp_carousel";
import PdpDetail from "@/components/pdp_deatils";
import PdpLocation from "@/components/pdp_location";
import { useEffect, useState } from "react";
import HeaderNoStickyComponent from "@/components/header_nosticky";

function ProductDetails() {
    const router = useRouter();
    const [responceValue, setResponceValue] = useState();
    const [prodResponse, setProdResponse] = useState();
    useEffect(() => {
        return () => {
            axios.get(
                `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/pdp/vitamin-d3-50-mcg-2000/&expand=*`
            ).then((response) => {
                setResponceValue(response.data);
            })
        }
    }, []);
    useEffect(() => {
        return () => {
            axios.get(
                `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/pdp/vitamin-d3-50-mcg-2000/&expand=productImages`
            ).then((prodResponse) => {
                setProdResponse(prodResponse.data);
            })
        }
    }, []);
    

    return (
        <>
            <HeaderNoStickyComponent />
            <div className="grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4 container mx-4 lg:mx-auto mt-18">
                {prodResponse && <PdpCarousel value={prodResponse} />}
                <PdpLocation />
                {/* <PdpDetail sectionData={ProductData("ProductBlock")}/> */}
                {responceValue && <PdpDetail value={responceValue} />}
            </div>
            <FooterComponent />
        </>
    );
}

export default ProductDetails;
