import FooterComponent from "@/components/footer";
import HeaderNoStickyComponent from "@/components/header_nosticky";
import LongLoadComponent from "@/components/long_load/longload";

function LongLoad() {
  return (
    <>
      <div className="grid">
        <HeaderNoStickyComponent />
        <LongLoadComponent/>
        <FooterComponent />
      </div>
    </>
  );
}

export default LongLoad;
