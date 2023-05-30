import React, { useEffect, useState } from "react";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
function CookiesSetting() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
        <>
      <div className="lg:mt-44">Welcome to Cookies Setting Page</div>
          <FooterComponent />
        </>
      )}
    </>
  );
}

export default CookiesSetting;
