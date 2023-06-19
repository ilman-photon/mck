import Link from "next/link";
import { useState, useLayoutEffect, useEffect, useRef } from "react";
import ProductDropComponent from "../productdrop";
import { useHeaderStore } from "./Store/useNavBarStore";
import { useOutsideClick } from "@/hooks/useClickOutside";
import { useWindowResize } from "@/hooks/useWindowResize";

function NavBar({ isMobileMenuActive, setIsMobileMenuActive }: Props) {
  const [active, setActive] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false)


  const menuData = useHeaderStore((state) => state.headerData);
  const [menuData_, setMenuData_] = useState(menuData ?? []);
  const [windowWidth] = useWindowResize();
  const [isMobile, setIsMobile] = useState(windowWidth >= 968 ? false : true);
  
    const wrapperRef = useRef(null);
    const [isOutsideClicked] = useOutsideClick(isMobileMenuActive ? wrapperRef : null);

  console.log("isOutsideClicked  --1234567-> ", isOutsideClicked, isMobileMenuActive);
  useEffect(() => {
    if(isOutsideClicked){
      setIsMobileMenuActive(!isOutsideClicked)
    }
  }, [isOutsideClicked])
  useEffect(() => {
    setIsMobile(windowWidth >= 968 ? false : true);
  }, [windowWidth]);
  const getRandomNumber = () => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0];
  };

  useEffect(() => {
    const a = menuData?.map((m: any) => ({ ...m, flag: false, hoverFlag: false }));
    setMenuData_(a);
  }, [menuData]);
  const handleMenuOpen = (value: any, item: any) => {
    const findex = menuData?.findIndex(
      (md: any) => md?.menuItemName?.value === value
    );
    setActive(item);
    const a =
      menuData_.length > 0 &&
      menuData_.map((m: any, idx: number) => {
        if (findex === idx) {
          m.flag = !m.flag;
        } else {
          m.flag = false;
        }
        return m;
      });
    const check = a?.some((aa: any) => aa.flag);
    setIsOpen(check);
    console.log("idx a -->", a);
    setMenuData_(a);
  };
  const onMouseHover = (value: any) => {
    const findex = menuData?.findIndex(
      (md: any) => md?.menuItemName?.value === value
    );
    console.log("handle hover --->", isHovered)
    setIsHovered(true)
    const a =
    menuData_.length > 0 &&
    menuData_.map((m: any, idx: number) => {
      if (findex === idx) {
        m.hoverFlag = true;
      } else {
        m.hoverFlag = false;
        m.flag = false
      }
      return m;
    });
    setMenuData_(a);
  }
  const onMouseLeave = (value: any) => {
    const findex = menuData?.findIndex(
      (md: any) => md?.menuItemName?.value === value
    );
    const a =
    menuData_.length > 0 &&
    menuData_.map((m: any, idx: number) => {
      if (findex === idx) {
        m.hoverFlag = false;
      } 
      return m;
    });
    setMenuData_(a);
  }
  return (
    <>
      <div
        id="nav-bar"
        role="navigation"
        className={`md:flex container lg:flex ml-auto mobile-customenav ${
          isMobileMenuActive ? "mobilelarge:top-16 mobilelarge:left-0 mobilelarge:w-full mobilelarge:h-full mobilelarge:fixed mobilelarge:overflow-y-auto mobilelarge:pl-0 mobilelarge:pb-16 mobilelarge:z-9997 mobilelarge:bg-mckoverlaygrey" : ""
        }`}
      >
        <div
          // onMouseLeave={() => setIsMobileMenuActive(false)}
          className={`lg:mx-auto lg:flex xl:mx-auto xl:flex isMobileUi lg:bg-transparent mobilelarge:top-16 mobilelarge:max-w-[75%] mobilesm:max-w-[85%] mobilelarge:-left-full mobilelarge:fixed ${
            isMobileMenuActive ? "active bg-mcklightyellow text-mckblue" : ""
          }`}
          ref={wrapperRef}
        >
          {isMobileMenuActive && (
            <div
              className="group lg:ml-7 lg:mr-6 whitespace-nowrap mainmenu-items"
              key={getRandomNumber()}
            >
              <div className="relative megamenu-row">
                <div className="pr-2.5">
                <Link
                  className="text-lg text-sofia-reg text-center font-medium flex my-3 hover:border-b-2 hover:border-mckwhite seperatemenu-hover lg:relative mainmenu-link"
                  href="/"
                >
                  Home
                </Link>
                </div>
                <span
                  className={`lg:hidden xl:hidden`}
                  aria-hidden={true}
                ></span>
              </div>
            </div>
          )}
          {menuData?.map((item: any, idx: number) => {
            return (
              <div
                className="group lg:ml-7 lg:mr-6 whitespace-nowrap mainmenu-items"
                key={`mgmen${idx}`}
              >
                <div className="relative megamenu-row">
                  <div className="lg:pr-2.5 mobilelarge:py-0"
                  onMouseOverCapture={() => {
                    handleMenuOpen(item?.menuItemName?.value,item) // ** need to check individually
                  }}
                  onMouseOutCapture={() => {
                    handleMenuOpen(item?.menuItemName?.value,item) //** need to check individually
                  }}
                  id={`header-menu-0${idx+1}`}
                  >
                  <Link
                      className="text-lg text-sofia-reg text-center font-medium flex my-3 lg:border-b-2 lg:border-transparent hover:border-b-2 hover:border-mckwhite seperatemenu-hover lg:relative mainmenu-link"
                    href={item?.menuItemUrl?.value ?? ""}
                    onMouseEnter={() => onMouseHover(item?.menuItemName?.value)}
                    onMouseLeave={() => onMouseLeave(item?.menuItemName?.value)}
                  >
                    {item?.menuItemName?.value}
                  </Link>
                  </div>
                  <span
                    onClick={() => {
                      handleMenuOpen(item?.menuItemName?.value, item);
                    }}
                    className={`${
                      item?.subMenuContentBlockArea?.value == null
                        ? "lg:hidden xl:hidden"
                      : "icon-arrow hidden lg:block xl:block lg:-right-[10px] lg:top-2.5"
                    } 
                    ${
                      menuData_ && menuData_[idx] && menuData_[idx].flag
                        ? "open"
                        : ""
                    }
                    `}
                    aria-hidden={true}
                  ></span>
                </div>
                <div
                  className={`${
                
                    'block'
                  } secondmenu ${
                    item?.subMenuContentBlockArea?.value == null
                      ? "hidden"
                      : 
                      ((menuData_ && menuData_[idx] && menuData_[idx].hoverFlag) || (menuData_ && menuData_[idx] && menuData_[idx].flag))  ? 'block' : 'hidden'
                  }
                  `}
                >
                  {menuData_ && menuData_[idx] && menuData_[idx].flag ? (
                    <ProductDropComponent
                      handleClick={setIsMobileMenuActive}
                      subMenuData={item.subMenuContentBlockArea.value}
                    />
                  ) : (
                    <ProductDropComponent
                      handleClick={setIsMobileMenuActive}
                      subMenuData={item.subMenuContentBlockArea.value}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

type Props = {
  menuData?: any;
  isMobileMenuActive: any;
  setIsMobileMenuActive: any;
};

export default NavBar;
