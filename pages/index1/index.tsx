import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import CarouselComponent from "@/components/carousel";
import CategoryComponent from "@/components/category";
import LearningSectionComponent from "@/components/learning_section";
import CookiesComponent from "@/components/cookies";
import GoogleTagManager from "@/components/google_tag_manager";

export default function Index1Page() {
  return (
    <>
      {/* <CookiesComponent /> */}
      <GoogleTagManager/>
      <HeaderComponent />
      <CarouselComponent />
      <CategoryComponent />
      <LearningSectionComponent />
      <FooterComponent />
    </>
  );
}
