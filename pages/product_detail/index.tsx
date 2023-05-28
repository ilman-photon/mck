import React, { useState, useEffect } from 'react';
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import PdpCarousel from "@/components/pdp_carousel";
import PdpDetail from "@/components/pdp_details";
import HeaderNoStickyComponent from "@/components/header_nosticky";
import PdpLocation from "@/components/pdp_location";
import GoogleTagManager from "@/components/google_tag_manager";
import Head from "next/head";
interface MyComponentProps {
    Response: {
      data: {
        title: {
          value: string;
        };
      }[];
    };
  }
  
function ProductDetails({ Response }: MyComponentProps): React.ReactElement {

    const [apiRespond, setApiRespond] = useState<any>();

    useEffect(() => {
      document.documentElement.lang = 'en';
    }, []);
  
    useEffect(() => {
        if (Response && Response.data && Response.data.length > 0 && Response.data[0].title && Response.data[0].title.value) {
          fetch('https://api.example.com/data')
            .then((response: Response) => {
              if (!response.ok) {
                throw new Error('Request failed');
              }
              return response.json();
            })
            .then((data: any) => {
              if (data && data.length > 0 && data[0].title && data[0].title.value) {
                document.title = data[0].title.value;
              } else {
                document.title = "Product Details Page";
              }
            })
            .catch((error: Error) => {
              console.log(error.message);
              document.title = "Product Details Page";
            });
        } else {
          document.title = "Product Details Page";
        }
      }, [JSON.stringify(Response)]);

    return (
        <>
        <Head>
            <title>Your Page Title</title>
          </Head>
            <GoogleTagManager/>
            {/* <HeaderNoStickyComponent /> */}
            <HeaderComponent />
            <div className="product-detail-page grid lg:grid-flow-col container lg:px-72 lg:mx-4 lg:mx-auto mt-18">
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
