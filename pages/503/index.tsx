import ServiceUnavailableCoumponent from "@/components/503/503";
import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderNoStickyComponent from "@/components/header_nosticky";

function FiveOhThree() {
  return (
    <>
      <GoogleTagManager/>
      <div className="grid">
        <HeaderNoStickyComponent />
        <ServiceUnavailableCoumponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default FiveOhThree;
