import FourOhFourCoumponent from "@/components/404/404";
import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderNoStickyComponent from "@/components/header_nosticky";

function FourOhFour() {
  return (
    <>
      <GoogleTagManager/>
      <div className="grid">
        <HeaderNoStickyComponent />
        <FourOhFourCoumponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default FourOhFour;
