import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Search from "../search";
import NavBar from "../navbar";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { HeaderComponentType } from "./index.type";
import axiosInstance from "@/utils/axiosInstance";
import { useHeaderStore } from "../navbar/Store/useNavBarStore";

function HeaderComponent({ isCarusolAvaible }: HeaderComponentType) {
  const router = useRouter();
  const headerImgRef = useRef<HTMLDivElement>(null);
  const [imgWidth, setImgWidth] = useState({});
  const [divHeight, setDivHeight] = useState({});
  const [headerData, setHeaderData] = useState<any>();
  
  const logoSrc = useHeaderStore(state => state.currentusedLogo)
  const firstLogo = useHeaderStore(state => state.logoSrc1)
  const setLogo = useHeaderStore(state => state.setLogoSrc)
  const onMouseEnterToHeader = useHeaderStore(state => state.onMouseEnter)
  
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
    };

    if (window.pageYOffset > elTopOffset + elHeight) {
      setImgWidth(style);
      setDivHeight(style1);
    } else {
      setImgWidth({});
      setDivHeight({});
    }
  };

  useLayoutEffect(() => {
      setLogo()
  },[])

  useEffect(() => {
    let header = headerImgRef.current!.getBoundingClientRect();
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
    axiosInstance
      .get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/application-settings/&expand=*`)
      .then((res) => {
        setHeaderData(res.data[0]);
        // setMenuData(
        //   res.data[0].headerMegaMenu.expandedValue[0].contentBlockArea
        //     .expandedValue
        // );
        // console.log(res?.data[0])
        // setLogoSrc(res.data[0]?.logoImage?.expandedValue?.url);
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
  
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1024); // set breakpoint as per your requirement
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  function handleHeaderMouseEnter() {
    if (!isMobile) {
      onMouseEnterToHeader()
    }
  }

  function handleHeaderMouseLeave() {
    setLogo()
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const hamburgerMenu = document.querySelector(".hamburger-menu");
      const hamburgerMenuActive = document.querySelector(
        ".hamburger-menu.active"
      );
      const a = document.getElementById('nav-bar')?.firstChild;

      if (
        hamburgerMenu &&
        hamburgerMenuActive &&
        !hamburgerMenu.contains(event.target as Node) &&
        !hamburgerMenuActive.contains(event.target as Node)
      ) {
        // setIsMobileMenuActive(false);
        setIsBarAnimated(false);
      }
      // if(a?.contains(event.target as Node)){
      //   setIsMobileMenuActive(false);
      // }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <a className="skip-main" href="#carouselExampleCaptions">
        Skip to main content
      </a>
      <div
        onMouseEnter={handleHeaderMouseEnter}
        onMouseLeave={handleHeaderMouseLeave}
        id="header"
        className={`header ${
          isCarusolAvaible ? "sticky lg:bg-beige50 lg:bg-opacity-70" : isSticky ? "sticky" : "relative z-40"
        }  mx-auto blue-txt border-b bg-mckbeige lg:border-b border-mcknormalgrey ${
          isSticky ? "isStickyActive" : "isNotSticky"
        }`}
        style={!isMobile ? divHeight : undefined}
      >
        <div className="container mx-auto lg:grid contents align-content-center">
          <div className="flex">
            {/* Hamburger menu starts */}
            <div
              className={`hamburger-menu lg:hidden xl:hidden ${
                isMobileMenuActive ? "active" : ""
              }`}
              onClick={() => handleHamburgerClick()}
            >
              <div className={`bar ${isBarAnimated ? "animate" : ""}`}></div>
            </div>
            {/* Hamburger menu ends */}
          </div>

          <div
            ref={headerImgRef}
            className="brand-logo lg:max-w-[300px]"
            role="banner"
            onClick={handleOnClickLogo}
          >
            <img
              id="logo-image"
              src={logoSrc || firstLogo}
              alt={headerData?.secondLogoImage?.expandedValue?.altText?.value}
              className="logo-image lg:mt-7"
              style={isMobile ? undefined : imgWidth}
              tabIndex={0}
              role="navigation"
            />
          </div>
          <div className="lg:w-full flex border-0 w-18 header-sticky">
            <NavBar isMobileMenuActive={isMobileMenuActive} setIsMobileMenuActive={setIsMobileMenuActive}/>
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
