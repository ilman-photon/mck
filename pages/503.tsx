import FooterComponent from "@/components/footer";
import HeaderNoStickyComponent from "@/components/header_nosticky";

function fiveOhthree() {
  return (
    <>
      <HeaderNoStickyComponent />
      <div className="five-oh-three container flex flex-row mx-auto">
        <div className="width-396">
        <div className="heading pb-3 font-medium text-gtl-med" id="err-503-label-001">Hmmm!</div>
        <div className="pb-6 lg:text-4xl text-2xl font-medium text-gtl-med" id="err-503-label-002">
          It looks like the service is temporarily unavailable.
        </div>
        <div className="text-sofia-reg font-medium lg:text-lg text-base text-mckblue" id="err-503-label-003"><a href="#">Please try again later</a></div>
        </div>
        <div className="bg-logo-right-503 overflow-hidden lg:relative absolute"><img src="images/Oops.svg" alt="503" id="err-503-img-005"/></div>
      </div>
      <FooterComponent />
    </>
  );
}

export default fiveOhthree;
