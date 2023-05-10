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

  'react';

  // hamburger menu
  const [isBarAnimated, setIsBarAnimated] = useState(false);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  function handleHamburgerClick() {
    setIsBarAnimated(!isBarAnimated);
    setIsMobileMenuActive(!isMobileMenuActive);
  }

  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isHealthNeedsOpen, setIsHealthNeedsOpen] = useState(false);

  function handleProductsClick() {
    setIsProductsOpen(!isProductsOpen);
  }

  function handleHealthNeedsClick() {
    setIsHealthNeedsOpen(!isHealthNeedsOpen);
  }

  // logo onhover
  const [logoSrc, setLogoSrc] = useState('images/logo.png');
  function handleHeaderMouseEnter() {
    setLogoSrc('images/logo_white.png');
  }
  function handleHeaderMouseLeave() {
    setLogoSrc('images/logo.png');
  }

  return (
    <>
      <div onMouseEnter={handleHeaderMouseEnter} onMouseLeave={handleHeaderMouseLeave}
        id="header"
        className="header flex lg:grid container sticky mx-auto bg-transparent blue-txt bg-mckwhite border-b border-mckblue"
      >
        <div className="flex" style={divHeight}>
          {/* <div className="mobile-nav px-5 py-5">
            <img
              id="logo-image"
              className="w-full"
              src="images/mobile_nav.png"
              onClick={handleClick}
            />
          </div> */}

          {/* Hamburger menu starts */}
            <div className="hamburger-menu md:hidden sm:hidden lg:hidden xl:hidden" onClick={handleHamburgerClick}>
              <div className={`bar ${isBarAnimated ? 'animate' : ''}`}></div>
            </div>
            <div className={`mobile-menu bg-mcklightyellow text-mckblue ${isMobileMenuActive ? 'active' : ''}`}>
              <ul className="main-menu">
                <li><a href="#">Home</a></li>
                <li className="has-children" onClick={handleProductsClick}>
                  <a href="#">Products</a>
                  <span className={`icon-arrow ${isProductsOpen ? 'open' : ''}`}></span>
                  {isProductsOpen && (
                    <ul className="sub-menu open">
                      <li><a href="#">Acute Care</a></li>
                      <li><a href="#">Preventative Care</a></li>
                      <li><a href="#">Every Day Care</a></li>
                      <li><a href="#">Diagnostic Care</a></li>
                    </ul>
                  )}
                </li>
                <li className="has-children" onClick={handleHealthNeedsClick}>
                  <a href="#">Health needs</a>
                  <span className={`icon-arrow ${isHealthNeedsOpen ? 'open' : ''}`}></span>
                  {isHealthNeedsOpen && (
                    <ul className="sub-menu open">
                      <li><a href="#">Beauty</a></li>
                      <li><a href="#">Bone</a></li>
                      <li><a href="#">Digestion</a></li>
                      <li><a href="#">Energy</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="#">Why F&T</a></li>
                <li><a href="#">Where to Buy</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Health Care Professionals</a></li>
              </ul>
            </div>
          </div>
          {/* Hambuger menu ends */}
        
        <div
            ref={headerImgRef}
            className="brand-logo hidden"
            onClick={handleOnClickLogo}
          >
            <img id="logo-image" src={logoSrc}
              // src={isSmall}
              alt="logo"
              className="mt-1 lg:mt-7 ml-3"
              style={imgWidth}
            />
          </div>
          <div
            ref={headerImgRef}
            className="brand-logo"
          >
            <img id="logo-image" src={logoSrc}
              // src={isSmall}
              alt="logo"
              className="lg:mt-7"
              style={imgWidth}
            />
          </div>

        <div
          className="lg:w-full flex border-0 lg:border-b border-mcknormalgrey w-18 header-sticky"
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
