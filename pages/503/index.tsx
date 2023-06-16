import ServiceUnavailableCoumponent from "@/components/503/503";
import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";
import Head from "next/head";

function FiveOhThree() {
  return (
    <>
      <Head>
        <title>McKesson</title>
        <link rel="icon" href="/favicon_mck.ico" />
      </Head>
      <GoogleTagManager />
      <div className="grid wrapper">
        <HeaderComponent />
        <ServiceUnavailableCoumponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default FiveOhThree;
