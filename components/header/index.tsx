import { useState, useRef, useEffect } from "react";
import Search from "../search";
import NavBar from "../navbar";
import { useRouter } from "next/router";
import NavDropComponent from "../navdrop";

function HeaderComponent() {
  const logogrey = "images/logo.png";
  const logowhite = "images/logo_white.png";
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isSmall, setIsSmall] = useState(logogrey);
  const headerImgRef = useRef(null);
  const [imgWidth, setImgWidth] = useState(null);
  const [divHeight, setDivHeight] = useState(null);
  const [megaMenuShow, seMegaMenuShow] = useState(false)
  const handleScroll = (elTopOffset: any, elHeight: any) => {    

    const style = {
      width: '120px',
      position: 'absolute',
      'margin-top': '10px',
      'z-index': '9',
      'fill': '#fff'
    };
    const style1 = {
      margin: 0,
      background: '#001A71',
      color: '#fff',
      position: 'absolute',
      top: '-28px'
    };

    if (window.pageYOffset > elTopOffset + elHeight) {
      setImgWidth(style);
      setDivHeight(style1);
      setIsSmall(logowhite);
    } else {
      setImgWidth(null);
      setDivHeight(null);
      setIsSmall(logogrey);
    }

  };
  useEffect(() => {
    var header = headerImgRef.current.getBoundingClientRect();
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
      <div className="hidden lg:block container sticky mx-auto bg-transparent blue-txt">
        <div className="w-full my-10" style={divHeight} >
          <img
            className="mobile-nav"
            src="images/mobile_nav.png"
            onClick={handleClick}
          />
          <div ref={headerImgRef} className="brand-logo pl-5" onClick={handleOnCLickLogo}>
            <img src={isSmall} alt="logo" style={imgWidth} />
          </div>
        </div>
        <div className="w-full flex  border-b-2 border-mcknormalgrey" style={divHeight}>
          <NavBar isVisible={isVisible} />
          <Search />
        </div>
      </div>
    </>

  );
}

export default HeaderComponent;