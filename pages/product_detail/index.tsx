import React, { useState, useEffect } from "react";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import PdpCarousel from "@/components/pdp_carousel";
import PdpDetail from "@/components/pdp_details";
import HeaderNoStickyComponent from "@/components/header_nosticky";
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

  const [apiRespond, setApiRespond] = useState<any>();

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);
  useEffect(() => {
    // Simulating a delay to show the loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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
          if (data && data.length > 0 && data[0].title && data[0].title.value) {
            document.title = data[0].title.value;
          } else {
            document.title = "Product Details Page";
          }
        })
        .catch((error: Error) => {
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
      <GoogleTagManager />
      <HeaderComponent />
      {isLoading ? (
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
      ) : (
        <div className="product-detail-page grid lg:grid-flow-col container lg:px-72 lg:mx-4 lg:mx-auto my-18 ">
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
    </>
  );
}

export default ProductDetails;
