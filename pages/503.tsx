import FooterComponent from "@/components/footer";
import HeaderNoStickyComponent from "@/components/header_nosticky";

function fiveOhthree() {
  return (
    <>
      <HeaderNoStickyComponent />
      <div className="five-oh-three container mx-auto">
        <div className="heading">Hmmm! </div>
        <div className="text">
          It looks like the service is temporarily unavailable.
        </div>
        <div className="hint">Please try again later</div>
      </div>
      <FooterComponent />
    </>
  );
}

export default fiveOhthree;
