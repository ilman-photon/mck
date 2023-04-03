import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";

function fiveOhthree() {
  return (
    <>
      <HeaderComponent />
      <div className="five-oh-three">
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
