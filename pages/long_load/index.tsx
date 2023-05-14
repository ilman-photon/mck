import FooterComponent from "@/components/footer";
import GoogleTagManager from "@/components/google_tag_manager";
import HeaderComponent from "@/components/header";
import LongLoadComponent from "@/components/long_load/longload";

function LongLoad() {
  return (
    <>
      <div className="grid">
        <GoogleTagManager/>
        <HeaderComponent />
        <LongLoadComponent/>
        <FooterComponent />
      </div>
    </>
  );
}

export default LongLoad;
