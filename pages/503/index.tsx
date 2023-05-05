import ServiceUnavailableCoumponent from "@/components/503/503";
import FooterComponent from "@/components/footer";
import HeaderNoStickyComponent from "@/components/header_nosticky";

function FourOhFour() {
  return (
    <>
      <div className="grid">
        <HeaderNoStickyComponent />
        <ServiceUnavailableCoumponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default FourOhFour;
