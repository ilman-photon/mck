import Head from "next/head";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import CarouselComponent from "@/components/carousel";
import CategoryComponent from "@/components/category";
import LearningSectionComponent from "@/components/learning_section/index1.js";
import CookiesComponent from "@/components/cookies";

export default function Home() {
  return (
    <>
      <Head>
        <title>McKession</title>
        <meta name="description" content="Created by Mckession" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <CookiesComponent /> */}
      <HeaderComponent />
      {/* <CarouselComponent /> */}
      {/* <CategoryComponent /> */}
      <LearningSectionComponent />
      <FooterComponent />
    </>
  );
}
