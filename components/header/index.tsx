import {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import Search from "../search";
import NavBar from "../navbar";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import { HeaderComponentType } from "./index.type";
import axiosInstance from "@/utils/axiosInstance";
import { useHeaderStore } from "../navbar/Store/useNavBarStore";
import DOMPurify from "isomorphic-dompurify";
import { useHealthNeedsStore } from "../health_needs/components/Store/useHealthNeedsStore";
import { useSelectedProductCategoryStore } from "../product_list/Store/useSelectedProductCategoryStore";
import { useAllProductStore } from "../all_products_category/Store/useAllProductsStore";

function HeaderComponent({ isCarusolAvaible, children }: HeaderComponentType) {
  const router = useRouter();

  const onClearAllHealthNeeds = useHealthNeedsStore(
    (state) => state.onClearAll
  );
  const onClearSelectedProductCat = useSelectedProductCategoryStore(
    (state) => state.onClearAll
  );
  const onClearAllProductCat = useAllProductStore((state) => state.onClearAll);
  const onSelectedSetFilter = useHeaderStore(
    (state) => state.onSelectedSetFilter
  );

  const handleClearAll = useCallback(() => {
    onClearAllHealthNeeds();
    onClearAllProductCat();
    onClearSelectedProductCat();
    onSelectedSetFilter(null);
  }, []);

  const checkEnableButton = () => {
    return router.pathname;
  };
  const headerImgRef = useRef<HTMLDivElement>(null);
  const [imgWidth, setImgWidth] = useState({});
  const [divHeight, setDivHeight] = useState({});

  const firstLogo = useHeaderStore((state) => state.logoSrc1);
  const beigeLogo = useHeaderStore((state) => state.logoSrc2);
  const isDataExist = useHeaderStore((state) => state.headerData);
  const getHeaderData = useHeaderStore((state) => state.getData);

  useLayoutEffect(() => {
    if (isDataExist === null) {
      getHeaderData(checkEnableButton());
    }
  }, [isDataExist]);
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

  function handleOnClickLogo() {
    handleClearAll();
    router.push({
      pathname: "/",
    });
  }

  // hamburger menu
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  function handleHamburgerClick() {
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
      if (offset > 0) {
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

  return (
    <>
      <a className="skip-main" href="#carouselExampleCaptions">
        Skip to main content
      </a>
      <div
        // onMouseEnter={handleHeaderMouseEnter}
        // onMouseLeave={handleHeaderMouseLeave}
        id="header"
        className={`header ${
          isCarusolAvaible
            ? "sticky lg:bg-beige50 lg:bg-opacity-70"
            : isSticky
            ? "sticky"
            : "relative z-40 pb-[200px]"
        } flex lg:grid container mx-auto text-mckblue border-b bg-mckbeige lg:border-b border-mcknormalgrey lg:pb-1 ${
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
            <div className={`bar ${isMobileMenuActive ? "animate" : ""}`}></div>
          </div>
        </div>

        <div
          ref={headerImgRef}
          className="brand-logo lg:max-w-[300px] mobilelarge:w-[183px] cursor-pointer z-9999"
          role="banner"
          onClick={handleOnClickLogo}
        >
          {firstLogo && (
            <div>
              <img
                id="logo-image-bgcolor"
                src={DOMPurify.sanitize(firstLogo)}
                alt="Foster Thrive Logo image Link"
                className="logo-image lg:mt-7"
                style={isMobile ? undefined : imgWidth}
                tabIndex={0}
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
          )}
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
