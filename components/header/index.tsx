import { useState, useRef, useEffect } from "react";
import Search from "../search";
import NavBar from "../navbar";
import { useRouter } from "next/router";
import NavDropComponent from "../navdrop";

function HeaderComponent() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const headerImgRef = useRef(null);
  const [imgWidth, setImgWidth] = useState(null);
  const [divHeight, setDivHeight] = useState(null);
  const handleScroll = (elTopOffset: any, elHeight: any) => {
    const style = {
      width: '120px',
      position: 'absolute',
      bottom: '10px'
    };
    const style1 = {
      margin:0
    };

    if (window.pageYOffset > elTopOffset + elHeight) {
      setImgWidth(style);
      setDivHeight(style1);
    } else {
      setImgWidth(null);
      setDivHeight(null);
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
      <div className="container sticky mx-auto header-bg-white hover:bg-violet-700 blue-txt hover:text-white">
        <div className="w-full my-10" style={divHeight} >
          <img
            className="mobile-nav"
            src="images/mobile_nav.png"
            onClick={handleClick}
          />
          <div ref={headerImgRef} className="brand-logo pl-5" onClick={handleOnCLickLogo}>
            <img src="images/logo.png" alt="logo" style={imgWidth} />
          </div>
        </div>
        <div className="w-full flex">
          <NavBar isVisible={isVisible} />
          <Search />
        </div>
        {/* <NavDropComponent/> */}
      </div>

    </>
  );
}

export default HeaderComponent;