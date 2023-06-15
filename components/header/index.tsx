import { useState, useRef, useEffect, useLayoutEffect } from "react";
import Search from "../search";
import NavBar from "../navbar";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { HeaderComponentType } from "./index.type";
import axiosInstance from "@/utils/axiosInstance";
import { useHeaderStore } from "../navbar/Store/useNavBarStore";
import DOMPurify from "isomorphic-dompurify";

function HeaderComponent({ isCarusolAvaible, children }: HeaderComponentType) {
  const router = useRouter();
  const headerImgRef = useRef<HTMLDivElement>(null);
  const [imgWidth, setImgWidth] = useState({});
  const [divHeight, setDivHeight] = useState({});
  const [headerData, setHeaderData] = useState<any>();

  const firstLogo = useHeaderStore((state) => state.logoSrc1);
  const beigeLogo = useHeaderStore((state) => state.logoSrc2);
  const setLogo = useHeaderStore((state) => state.setLogoSrc);
  const onMouseEnterToHeader = useHeaderStore((state) => state.onMouseEnter);
  const isDataExist = useHeaderStore((state) => state.headerData);

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
      margin: "0 auto",
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
    if (isDataExist === null) {
      fetchHeaderData();
    }
  }, [isDataExist]);

  function fetchHeaderData() {
    axiosInstance
      .get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/application-settings/&expand=*`
      )
      .then((res) => {
        setHeaderData(res.data[0]);
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

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Adjust the scroll position value as per your requirements
      if (offset > 28) {
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
      const a = document.getElementById("nav-bar")?.firstChild;

      if (
        hamburgerMenu &&
        hamburgerMenuActive &&
        !hamburgerMenu.contains(event.target as Node) &&
        !hamburgerMenuActive.contains(event.target as Node)
      ) {
        setIsBarAnimated(false);
      }
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
        id="header"
        className={`header ${
          isCarusolAvaible
            ? "sticky lg:bg-beige50 lg:bg-opacity-70 "
            : isSticky
            ? "sticky"
            : "relative z-40"
        } flex lg:grid container mx-auto blue-txt border-b bg-mckbeige lg:border-b border-mcknormalgrey ${
          isSticky ? "isStickyActive" : "isNotSticky"
        }`}
        style={!isMobile ? divHeight : undefined}
      >
        <div className="flex">
          <div
            className={`hamburger-menu lg:hidden xl:hidden ${
              isMobileMenuActive ? "active" : ""
            }`}
            onClick={() => handleHamburgerClick()}
          >
            <div className={`bar ${isBarAnimated ? "animate" : ""}`}></div>
          </div>
        </div>

        <div
          ref={headerImgRef}
          className="brand-logo lg:max-w-[300px]"
          role="banner"
          onClick={handleOnClickLogo}
        >
          <img
            id="logo-image-bgcolor"
            src={DOMPurify.sanitize(firstLogo)}
            alt="Foster Thrive Logo image Link"
            className="logo-image lg:mt-7"
            style={isMobile ? undefined : imgWidth}
            tabIndex={0}
            width={500}
            height={500}
          />
          <img
            id="logo-image-beige"
            src={DOMPurify.sanitize(beigeLogo)}
            alt="Foster Thrive Logo image Link"
            className="logo-image lg:mt-7 hidden"
            style={isMobile ? undefined : imgWidth}
            tabIndex={0}
          />
        </div>
        <div className={`lg:w-full flex border-0 w-18 header-sticky`}>
          <NavBar
            isMobileMenuActive={isMobileMenuActive}
            setIsMobileMenuActive={setIsMobileMenuActive}
          />
          <Search />
        </div>
      </div>
      {children}
    </>
  );
}

export default HeaderComponent;
