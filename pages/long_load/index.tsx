import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderNoStickyComponent from "@/components/header_nosticky";
import LongLoadComponent from "@/components/long_load/longload";

function LongLoad() {
  return (
    <>
      <div className="grid">
        <GoogleTagManager/>
        <HeaderNoStickyComponent />
        <LongLoadComponent/>
        <FooterComponent />
      </div>
    </>
  );
}

export default LongLoad;
