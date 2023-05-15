import ServiceUnavailableCoumponent from "@/components/503/503";
import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";

function FiveOhThree() {
  return (
    <>
      <GoogleTagManager/>
      <div className="grid">
        <HeaderComponent />
        <ServiceUnavailableCoumponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default FiveOhThree;
