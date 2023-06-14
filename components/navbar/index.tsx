import Link from "next/link";
import { useState, useLayoutEffect, useEffect } from "react";
import ProductDropComponent from "../productdrop";
import { useHeaderStore } from "./Store/useNavBarStore";

function NavBar({ isMobileMenuActive, setIsMobileMenuActive }: Props) {
  const [active, setActive] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const getHeaderData = useHeaderStore((state) => state.getData);

  const menuData = useHeaderStore((state) => state.headerData);
  const [menuData_, setMenuData_] = useState(menuData ?? []);

  const getRandomNumber = () => {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0];
  };

  useLayoutEffect(() => {
    if(menuData === null){
      getHeaderData();
    }
  }, [menuData]);

  useEffect(() => {
    if(menuData !== null){
      const a = menuData?.map((m: any) => ({ ...m, flag: false }));
      setMenuData_(a);
    }
  }, [menuData]);
 
  const handleMenuOpen = (idx: number, value: any, item: any) => {
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
    setMenuData_(a);
  };

  return (
    <>
      <div
        id="nav-bar"
        role="navigation"
        className={`md:flex container lg:flex ml-auto mobile-customenav ${
          isMobileMenuActive ? "mobile-overlay-wrapper" : ""
        }`}
      >
        <div
          // onMouseLeave={() => setIsMobileMenuActive(false)}
          className={`lg:mx-auto lg:flex xl:mx-auto xl:flex isMobileUi mobile-navwrapper lg:bg-transparent ${
            isMobileMenuActive ? "active bg-mcklightyellow text-mckblue" : ""
          }`}
        >
          {isMobileMenuActive && (
            <div
              className="group lg:ml-9 lg:mr-9 xl:ml-9 xl:mr-9 whitespace-nowrap mainmenu-items"
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
                className="group lg:ml-9 lg:mr-9 xl:ml-9 xl:mr-9 whitespace-nowrap mainmenu-items"
                key={`mgmen${idx}`}
              >
                <div className="relative megamenu-row">
                <div className="pr-2.5">
                  <Link
                    className="text-lg text-sofia-reg text-center font-medium flex my-3 hover:border-b-2 hover:border-mckwhite seperatemenu-hover lg:relative mainmenu-link"
                    href={item?.menuItemUrl?.value ?? ""}
                  >
                    {item?.menuItemName?.value}
                  </Link>
                  </div>
                  <span
                    onClick={() => {
                      handleMenuOpen(idx, item?.menuItemName?.value, item);
                    }}
                    className={`${
                      item?.subMenuContentBlockArea?.value == null
                        ? "lg:hidden xl:hidden"
                        : "icon-arrow hidden lg:block xl:block lg:-right-5 lg:-right-[10px] lg:top-2.5"
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
                    menuData_ && menuData_[idx] && menuData_[idx].flag
                      ? "block"
                      : "hidden"
                  } secondmenu ${
                    item?.subMenuContentBlockArea?.value == null
                      ? "hidden"
                      : "group-hover:block"
                  }
                  `}
                >
                  {menuData_ && menuData_[idx] && menuData_[idx].flag ? (
                    <ProductDropComponent
                      subMenuData={item.subMenuContentBlockArea.value}
                    />
                  ) : (
                    <ProductDropComponent
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
