import React, { useEffect, useState } from "react";
import FooterComponent from "@/components/footer";
import FaqComponent from "@/components/faq/FaqComponent";
import HeaderComponent from "@/components/header";
import GoogleTagManager from "@/components/google_tag_manager";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
function Faq() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to show the loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
        <FaqComponent />
      )}
      <FooterComponent />
    </>
  );
}

export default Faq;
