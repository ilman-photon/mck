import React, { useState } from "react";
import WhyFTComponent from "@/components/why_FT/WhyFTComponent";
import LandingLayout from "@/components/Layout/LandingLayout";
import FooterComponent from "@/components/footer";
import HealthCareProfessionalComponent from "@/components/health_care_professional";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";

function FTComponent() {
  const [isCarusonAvible, setisCarusonAvible] = useState(false);
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
