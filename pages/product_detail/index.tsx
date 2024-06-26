import React, { useState, useEffect } from "react";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import PdpCarousel from "@/components/pdp_carousel";
import PdpDetail from "@/components/pdp_details";
import DOMPurify from "isomorphic-dompurify";
import PdpLocation from "@/components/pdp_location";
import GoogleTagManager from "@/components/google_tag_manager";
import Head from "next/head";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (
      Response &&
      Response.data &&
      Response.data.length > 0 &&
      Response.data[0].title &&
      Response.data[0].title.value
    ) {
      fetch("https://api.example.com/data")
        .then((response: Response) => {
          if (!response.ok) {
            throw new Error("Request failed");
          }
          return response.json();
        })
        .then((data: any) => {
          let title = "Product Details Page";
          if (data && data.length > 0 && data[0].title && data[0].title.value) {
            document.title = DOMPurify.sanitize(data[0].title.value);
          }
            document.title = title;
          
        })
        .catch((error: Error) => {
          document.title =  "Product Details Page";
        });
    } else {
      document.title =  DOMPurify.sanitize("Product Details Page");
    }
  }, [JSON.stringify(Response)]);

  return (
    <>
      <Head>
        <title>McKesson</title>
        <link rel="icon" href="/favicon_mck.ico" />
      </Head>
      <GoogleTagManager />
      <div className="wrapper">
      <HeaderComponent />
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div
            className="relative"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Image
              src={gifImage}
              alt="loading-image"
              width={400}
              height={400}
              loading="eager"
            />
          </div>
        </div>
      )}
      {!isLoading && (
        <div id="carouselExampleCaptions" className="product-detail-page grid lg:grid-flow-col container lg:px-72 my-18">
          <div className="left-column overflow-hidden lg:overflow-visible">
            <div className="pdp-slider">
              <PdpCarousel />
            </div>
            <div className="hidden lg:block">
              <PdpLocation index={1} />
            </div>
          </div>
          <PdpDetail />
          <div className="lg:hidden">
            <PdpLocation index={2} />
          </div>
        </div>
      )}
      <FooterComponent />
      </div>
    </>
  );
}

export default ProductDetails;
