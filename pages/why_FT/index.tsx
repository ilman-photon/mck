import React, { useState } from "react";
import WhyFTComponent from "@/components/why_FT/WhyFTComponent";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import Head from "next/head";

function FTComponent() {
  const [isCarusonAvible, setisCarusonAvible] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>McKesson</title>
        <link rel="icon" href="/favicon_mck.ico" />
      </Head>
      <GoogleTagManager />
      <div className="wrapper">
        <HeaderComponent isCarusolAvaible={isCarusonAvible} />
        <WhyFTComponent isCarusolAvaibleProps={setisCarusonAvible} />
        <FooterComponent />
      </div>
    </>
  );
}
export default FTComponent;
