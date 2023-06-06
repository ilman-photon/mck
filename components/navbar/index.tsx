import Link from "next/link";
import { useEffect, useState } from "react";
import ProductDropComponent from "../productdrop";
import { useRouter } from "next/router";

function NavBar({ menuData, isMobileMenuActive }: Props) {
  const router = useRouter();
  const [active, setActive] = useState(null);
  return (
    <>
      <div
        id="nav-bar"
        className={`md:flex container lg:flex ml-auto mobile-customenav ${
          isMobileMenuActive ? "mobile-overlay-wrapper" : ""
        }`}
      >
        <div
          className={`lg:mx-auto lg:flex xl:mx-auto xl:flex isMobileUi mobile-navwrapper lg:bg-transparent ${
            isMobileMenuActive ? "active bg-mcklightyellow text-mckblue" : ""
          }`}
        >
          {isMobileMenuActive && (
            <div
              className="group lg:ml-9 lg:mr-9 xl:ml-9 xl:mr-9 whitespace-nowrap mainmenu-items"
              key={Math.random()}
            >
              <div className="relative megamenu-row">
                <Link
                  className="text-lg text-sofia-reg text-center font-medium flex my-3 hover:border-b-2 hover:border-mckwhite seperatemenu-hover lg:relative mainmenu-link"
                  href="/"
                >
                  Home
                </Link>
                <span
                  className={`lg:hidden xl:hidden`}
                  aria-hidden={true}
                ></span>
              </div>
            </div>
          )}
          {menuData?.map((item: any) => {
            return (
              <div
                className="group lg:ml-9 lg:mr-9 xl:ml-9 xl:mr-9 whitespace-nowrap mainmenu-items"
                key={Math.random()}
              >
                <div className="relative megamenu-row">
                  <Link
                    className="text-lg text-sofia-reg text-center font-medium flex my-3 hover:border-b-2 hover:border-mckwhite seperatemenu-hover lg:relative mainmenu-link"
                    href={item?.menuItemUrl?.value ?? ""}
                  >
                    {item?.menuItemName?.value}
                  </Link>
                  <span
                    onClick={() => setActive(item)}
                    className={`${
                      item?.subMenuContentBlockArea?.value == null
                        ? "lg:hidden xl:hidden"
                        : "icon-arrow hidden lg:block xl:block lg:-right-5 lg:top-2.5"
                    } ${active == item ? "open" : ""}`}
                    aria-hidden={true}
                  ></span>
                </div>
                <div
                  className={`hidden secondmenu ${
                    item?.subMenuContentBlockArea?.value == null
                      ? "hidden"
                      : "group-hover:block focus:block focus-visible:block"
                  }`}
                >
                  <ProductDropComponent
                    subMenuData={item?.subMenuContentBlockArea?.value}
                  />
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
  menuData: any;
  isMobileMenuActive: any;
};

export default NavBar;
