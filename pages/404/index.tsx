import FourOhFourCoumponent from "@/components/404/404";
import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";

function FourOhFour() {
  return (
    <>
      <GoogleTagManager/>
      <div className="grid">
        <HeaderComponent />
        <FourOhFourCoumponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default FourOhFour;
