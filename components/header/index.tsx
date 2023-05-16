import { useState, useRef, useEffect } from "react";
import Search from "../search";
import NavBar from "../navbar";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";

function HeaderComponent() {
  const router = useRouter();
  const headerImgRef = useRef<HTMLDivElement>(null);
  const [imgWidth, setImgWidth] = useState({});
  const [divHeight, setDivHeight] = useState({});
  const [headerData, setHeaderData] = useState<any>();
  const [menuData, setMenuData] = useState<any>();
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
    } else {
      setImgWidth({});
      setDivHeight({});
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

  useEffect(() => {
    fetchHeaderData();
  }, []);

  useEffect(() => {
    setLogoSrc(headerData?.logoImage?.expandedValue?.url);
  }, [headerData]);

  function fetchHeaderData() {
    axios
      .get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/application-settings/&expand=*`,
        {
          headers: {
            "Accept-Language": "en",
          },
        }
      )
      .then((res) => {
        setHeaderData(res.data[0]);
        setMenuData(
          res.data[0].headerMegaMenu.expandedValue[0].contentBlockArea
            .expandedValue
        );
      })
      .catch((e: Error | AxiosError) => console.log(e));
  }

  function handleOnClickLogo() {
    router.push({
      pathname: "/",
    });
  }

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

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1024); // set breakpoint as per your requirement
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // logo onhover
  const [logoSrc, setLogoSrc] = useState(
    headerData?.logoImage?.expandedValue?.url
  );
  function handleHeaderMouseEnter() {
    if (!isMobile) {
      setLogoSrc(headerData?.secondLogoImage?.expandedValue?.url);
    }
  }
  function handleHeaderMouseLeave() {
    setLogoSrc(headerData?.logoImage?.expandedValue?.url);
  }

  return (
    <>
      <div
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
        id="header"
        className="header flex lg:grid container sticky mx-auto lg:bg-transparent blue-txt bg-mckwhite border-b border-mckblue"
      >
        {/* <div className="flex"> */}
        <div className="flex" style={!isMobile ? divHeight : undefined}>
          {/* Hamburger menu starts */}
          <div
            className="hamburger-menu lg:hidden xl:hidden"
            onClick={handleHamburgerClick}
          >
            <div className={`bar ${isBarAnimated ? "animate" : ""}`}></div>
          </div>
          <div
            className={`mobile-menu bg-mcklightyellow text-mckblue ${
              isMobileMenuActive ? "active" : ""
            }`}
          >
            <ul className="main-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="has-children" onClick={handleProductsClick}>
                <a href="#">Products</a>
                <span
                  className={`icon-arrow ${isProductsOpen ? "open" : ""}`}
                ></span>
                {isProductsOpen && (
                  <ul className="sub-menu open">
                    <li>
                      <a href="#">Acute Care</a>
                    </li>
                    <li>
                      <a href="#">Preventative Care</a>
                    </li>
                    <li>
                      <a href="#">Every Day Care</a>
                    </li>
                    <li>
                      <a href="#">Diagnostic Care</a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="has-children" onClick={handleHealthNeedsClick}>
                <a href="#">Health needs</a>
                <span
                  className={`icon-arrow ${isHealthNeedsOpen ? "open" : ""}`}
                ></span>
                {isHealthNeedsOpen && (
                  <ul className="sub-menu open">
                    <li>
                      <a href="#">Beauty</a>
                    </li>
                    <li>
                      <a href="#">Bone</a>
                    </li>
                    <li>
                      <a href="#">Digestion</a>
                    </li>
                    <li>
                      <a href="#">Energy</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#">Why F&T</a>
              </li>
              <li>
                <a href="#">Where to Buy</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Health Care Professionals</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Hambuger menu ends */}

        <div
          ref={headerImgRef}
          className="brand-logo"
          onClick={handleOnClickLogo}
        >
          <img
            id="logo-image"
            src={logoSrc}
            alt="logo"
            className="lg:mt-7"
            style={isMobile ? undefined : imgWidth}
          />
        </div>
        <div
          className="lg:w-full flex border-0 lg:border-b border-mcknormalgrey w-18 header-sticky"
          style={!isMobile ? divHeight : undefined}
        >
          <NavBar menuData={menuData} />
          <Search />
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
