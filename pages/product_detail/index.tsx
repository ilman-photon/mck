import useAxios from "@/hooks/useApi";
import axios from "axios";
import { useRouter } from "next/router";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import PdpCarousel from "@/components/pdp_carousel";
import PdpDetail from "@/components/pdp_deatils";
import PdpLocation from "@/components/pdp_location";
import { useEffect, useState } from "react";


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
            <HeaderComponent />
            <div className="grid grid-rows-2 grid-flow-col gap-4 container mx-auto mt-18">
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
