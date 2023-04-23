import FourOhFourCoumponent from "@/components/404/404";
import FooterComponent from "@/components/footer";
import HeaderNoStickyComponent from "@/components/header_nosticky";

function FourOhFour() {
  return (
    <>
      <div className="grid">
        <HeaderNoStickyComponent />
        <FourOhFourCoumponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default FourOhFour;
