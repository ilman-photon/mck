import FourOhFourCoumponent from "@/components/404/404";
import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";
import Head from "next/head";

function FourOhFour() {
  return (
    <>
      <GoogleTagManager />
      <Head>
        <title>McKesson</title>
        <link rel="icon" href="/favicon_mck.ico" />
      </Head>
      <div className="grid">
        <HeaderComponent />
        <FourOhFourCoumponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default FourOhFour;
