import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import CarouselComponent from "@/components/carousel";
import CategoryComponent from "@/components/category";
import LearningSectionComponent from "@/components/learning_section";
import CookiesComponent from "@/components/cookies";

export default function Index1Page() {
  return (
    <>
      {/* <CookiesComponent /> */}
      <HeaderComponent />
      <CarouselComponent />
      <CategoryComponent />
      <LearningSectionComponent />
      <FooterComponent />
    </>
  );
}
