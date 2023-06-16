import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import Head from "next/head";

function DoNotSellMyInformation() {
  return (
    <>
      <Head>
        <title>McKesson</title>
        <link rel="icon" href="/favicon_mck.ico" />
      </Head>
      <div className="wrapper">
        <HeaderComponent />
        <div>Welcome to Do Not Sell My Information Page</div>
        <FooterComponent />
      </div>
    </>
  );
}

export default DoNotSellMyInformation;
