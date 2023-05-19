import { useState, useRef, useEffect } from "react";
import Search from "../search";
import NavBar from "../navbar";
import { useRouter } from "next/router";
import NavDropComponent from "../navdrop";
import axios, { AxiosError } from "axios";

function HeaderComponent() {
  const logogrey = "images/logo.png";
  const logowhite = "images/logo_beige.png";
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isSmall, setIsSmall] = useState(logogrey);
  const headerImgRef = useRef<HTMLDivElement>(null);
  const [imgWidth, setImgWidth] = useState({});
  const [divHeight, setDivHeight] = useState({});
  const [megaMenuShow, seMegaMenuShow] = useState(false);
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

  useEffect(() => {
    fetchHeaderData();
  }, []);

  function fetchHeaderData() {
    interface Item {
      // Define the properties of an item
    }
    const items: Item[] = JSON.parse(localStorage.getItem("items") || "[]");
    console.log("items fetchHeaderData", items);
    if (items.length === 0) {
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
          localStorage.setItem(
            "items",
            JSON.stringify(
              res.data[0].headerMegaMenu.expandedValue[0].contentBlockArea
                .expandedValue
            )
          );
          const items: Item[] = JSON.parse(localStorage.getItem("items") || "[]");          
          setMenuData(items);
        })
        .catch((e: Error | AxiosError) => console.log(e));
    }
  }

  function fetchHeaderMenu() {}

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  function handleOnClickLogo() {
    router.push({
      pathname: "/",
    });
  }

  ("react");

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
  const [logoSrc, setLogoSrc] = useState("images/logo.png");
  function handleHeaderMouseEnter() {
    if (!isMobile) {
      setLogoSrc("images/logo_beige.png");
    }
  }
  function handleHeaderMouseLeave() {
    setLogoSrc("images/logo.png");
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
          {/* <div className="mobile-nav px-5 py-5">
            <img
              id="logo-image"
              className="w-full"
              src="images/mobile_nav.png"
              onClick={handleClick}
            />
          </div> */}

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

        <div ref={headerImgRef} className="brand-logo">
          <img
            id="logo-image"
            src={logoSrc}
            // src={isSmall}
            alt="logo"
            className="lg:mt-7"
            style={isMobile ? undefined : imgWidth}
          />
        </div>

        {/* <div className="lg:w-full flex border-0 lg:border-b border-mcknormalgrey w-18 header-sticky"> */}
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
