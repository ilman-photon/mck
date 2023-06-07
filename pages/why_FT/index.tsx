import React, { useState } from "react";
import WhyFTComponent from "@/components/why_FT/WhyFTComponent";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";

function FTComponent() {
  const [isCarusonAvible, setisCarusonAvible] = useState<boolean>(false);

  return (
    <>
      <GoogleTagManager />
      <HeaderComponent isCarusolAvaible={isCarusonAvible} />
      <WhyFTComponent isCarusolAvaibleProps={setisCarusonAvible} />
      <FooterComponent />
    </>
  );
}
export default FTComponent;
