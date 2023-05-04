import FooterComponent from "@/components/footer";
import HeaderNoStickyComponent from "@/components/header_nosticky";

function fiveOhthree() {
  return (
    <>
      <HeaderNoStickyComponent />
      <div className="five-oh-three container">
        <div className="heading pb-3" id="err-503-label-001">Hmmm!</div>
        <div className="text pb-6" id="err-503-label-002">
          It looks like the service is temporarily unavailable.
        </div>
        <div className="hint" id="err-503-label-003">Please try again later</div>
      </div>
      <FooterComponent />
    </>
  );
}

export default fiveOhthree;
