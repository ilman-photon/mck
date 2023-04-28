import { useState, useRef, useEffect } from "react";
import Search from "../search";
import NavBar from "../navbar";
import { useRouter } from "next/router";
import NavDropComponent from "../navdrop";

function HeaderComponent() {
  const logogrey = "images/logo.png";
  const logowhite = "images/logo.png";
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
      background: "#FFF6ED",
      color: "#001a71",
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

  function handleOnClickLogo() {
    router.push({
      pathname: "/",
    });
  }

  return (
    <>
      <div
        id="header"
        className="flex lg:grid container sticky mx-auto bg-transparent blue-txt"
      >
        <div className="w-full mb-12 flex" style={divHeight}>
          <div className="mobile-nav px-5 py-5">
            <img
              id="logo-image"
              className="w-full"
              src="images/mobile_nav.png"
              onClick={handleClick}
            />
          </div>
          <div
            ref={headerImgRef}
            className="brand-logo pl-5 ml-auto lg:ml-0"
            onClick={handleOnClickLogo}
          >
            <img
              id="logo-image"
              src={isSmall}
              alt="logo"
              className="lg:h-14 h-auto mt-1 lg:mt-7"
              style={imgWidth}
            />
          </div>
        </div>
        <div
          className="lg:w-full flex border-0 lg:border-b border-mcknormalgrey w-18"
          style={divHeight}
        >
          <NavBar isVisible={isVisible} />
          <Search />
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
