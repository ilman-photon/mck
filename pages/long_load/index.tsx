import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";
import LongLoadComponent from "@/components/long_load/longload";
import Head from "next/head";

function LongLoad() {
  return (
    <>
      <Head>
        <title>McKesson</title>
        <link rel="icon" href="/favicon_mck.ico" />
      </Head>
      <div className="grid">
        <GoogleTagManager />
        <div className="wrapper">
          <HeaderComponent />
          <LongLoadComponent />
          <FooterComponent />
        </div>
      </div>
    </>
  );
}

export default LongLoad;
