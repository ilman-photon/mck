import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";

function FourOhFour() {
  return (
    <>
      <HeaderComponent />
      <div className="four-oh-four">
        <div className="heading">Oops! </div>
        <div className="text">We can’t find the page you are looking for.</div>
        <div className="hint">Not to worry...</div>
        <div className="table-container">
          <div className="table-heading">Here’s what you can do.</div>
          <div className="table-text normal-text">Retype the URL</div>
          <div className="table-text">Home</div>
          <div className="table-text">Sitemap</div>
          <div className="table-text">FAQ</div>
          <div className="table-text">Send Feedback</div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}

export default FourOhFour;
