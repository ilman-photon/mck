import FooterComponent from "@/components/footer";
import ResultComponent from "@/components/search_results/";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";
import Head from "next/head";

function SearchResultComponent() {
  return (
    <>
      <Head>
        <title>McKesson</title>
        <link rel="icon" href="/favicon_mck.ico" />
      </Head>
      <GoogleTagManager />
      <div className="wrapper min-h-screen flex flex-col">
        <HeaderComponent />
        <div className="felx flex-col flex-grow">
          <ResultComponent />
        </div>
        <FooterComponent />
      </div>
    </>
  );
}
export default SearchResultComponent;
