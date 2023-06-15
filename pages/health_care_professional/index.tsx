import FooterComponent from "@/components/footer";
import HealthCareProfessionalComponent from "@/components/health_care_professional";
// import HeaderNoStickyComponent from "@/components/header_nosticky";
import HeaderComponent from "@/components/header";
import Head from "next/head";
import React, { useState } from "react";
import GoogleTagManager from "@/components/google_tag_manager";

function Terms() {
  const [isCarusonAvible, setisCarusonAvible] = useState(true);

  return (
    <>
      <Head>
        <title>McKesson</title>
        <link rel="icon" href="/favicon_mck.ico" />
      </Head>
      <GoogleTagManager />
      <div className="wrapper">
        <HeaderComponent isCarusolAvaible={isCarusonAvible} />
        <HealthCareProfessionalComponent
          isCarusolAvaible={isCarusonAvible}
          isCarusolAvaibleProps={setisCarusonAvible}
        />
        <FooterComponent />
      </div>
    </>
  );
}
export default Terms;
