import { useState, useRef, useEffect } from "react";
import Search from "../search";
import NavBar from "../navbar";
import { useRouter } from "next/router";
import NavDropComponent from "../navdrop";

function HeaderNoStickyComponent() {
  const logogrey = "images/logo.svg";
  const logowhite = "images/beige.svg";
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isSmall, setIsSmall] = useState(logogrey);
  const headerImgRef = useRef<HTMLDivElement>(null);
  const [imgWidth, setImgWidth] = useState({});
  const [divHeight, setDivHeight] = useState({});
  const [megaMenuShow, seMegaMenuShow] = useState(false);
  const handleScroll = (elTopOffset: any, elHeight: any) => {
    const style = {
      width: "180px",
      position: "absolute",
      marginTop: "12px",
      zIndex: "9",
      fill: "#fff",
      height: "auto",
    };
    const style1 = {
      margin: 0,
      background: "#001a71",
      color: "#fff",
      position: "absolute",
      top: "0",
    };

    if (window.pageYOffset > elTopOffset + elHeight) {
      setImgWidth(style);
      setDivHeight(style1);
      setIsSmall(logowhite);
    } else {
      setImgWidth({});
      setDivHeight({});
      setIsSmall(logogrey);
    }
  };
  useEffect(() => {
    var header = headerImgRef.current!.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  function handleOnCLickLogo() {
    router.push({
      pathname: "/",
    });
  }

  return (
    <>
      <div className="flex lg:grid container mx-auto bg-transparent blue-txt">
        <div className="w-full mb-12 flex" style={divHeight}>
          <div className="mobile-nav px-5 py-5">
            <img
              className="w-full"
              src="images/mobile_nav.png"
              onClick={handleClick}
            />
          </div>
          <div
            ref={headerImgRef}
            className="brand-logo"
            onClick={handleOnCLickLogo}
          >
            <img
              
              src={isSmall}
              alt="logo"
              className="mt-1 lg:mt-7 ml-3"
              style={imgWidth}
            />
          </div>
        </div>
        <div
          className="lg:w-full flex border-0 lg:border-b border-mcknormalgrey w-18"
          style={divHeight}
        >
          {/* <NavBar /> */}
          <Search />
        </div>
      </div>
    </>
  );
}

export default HeaderNoStickyComponent;
