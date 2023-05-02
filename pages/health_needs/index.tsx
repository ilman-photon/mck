import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import HealthNeedsCategories from "@/components/health_needs";
//import CarouselComponent from "@/components/carousel";

function HealthNeeds() {
  return (
    <>
      <div className="grid">
        <HeaderComponent />
        {/* <CarouselComponent /> */}
        <HealthNeedsCategories />
        <FooterComponent />
      </div>
    </>
  );
}

export default HealthNeeds;
