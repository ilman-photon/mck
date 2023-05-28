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
      // position: "absolute",
      // top: "0",
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
  const [logoSrc, setLogoSrc] = useState("images/logo.svg");
  function handleHeaderMouseEnter() {
    if (!isMobile) {
      setLogoSrc("images/logo_beige.svg");
    }
  }
  function handleHeaderMouseLeave() {
    setLogoSrc("images/logo.svg");
  }


  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Adjust the scroll position value as per your requirements
      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
        id="header"
        className={`header sticky mx-auto blue-txt border-b bg-white lg:bg-transparent lg:border-b border-mcknormalgrey ${isSticky ? 'isStickyActive' : 'isNotSticky'}`}
        style={!isMobile ? divHeight : undefined}
      >
        <div className="container mx-auto lg:grid contents align-content-center">
          <div className="flex">
            {/* Hamburger menu starts */}
            <div
              className="hamburger-menu lg:hidden xl:hidden"
              onClick = {()=>handleHamburgerClick()}
            >
              <div className={`bar ${isBarAnimated ? "animate" : ""}`}></div>
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
              tabIndex={0}
              src={logoSrc}
              alt="logo of Foster Thrive logo"
              className="lg:mt-7"
              style={isMobile ? undefined : imgWidth}
              role="img"
            />
          </div>
          <div
            className="lg:w-full flex border-0 w-18 header-sticky"
          >
            <NavBar menuData={menuData} isMobileMenuActive={isMobileMenuActive} />
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
