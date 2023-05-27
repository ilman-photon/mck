import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductDropComponent from "../productdrop";
import AboutDropComponent from "../aboutdrop";

function NavBar({ menuData, isMobileMenuActive }: Props) {

  const [active, setActive] = useState(null)

  return (
    <>
      <div
        id="nav-bar"
        className={`md:flex container lg:flex ml-auto mobile-customenav ${isMobileMenuActive ? "active bg-mcklightyellow text-mckblue" : ""}`}
        
      >
        <div className="lg:mx-auto lg:flex xl:mx-auto xl:flex isMobileUi">
          {menuData?.map((item: any) => {
            return (
              <div
                className="group lg:ml-9 lg:mr-9 xl:ml-9 xl:mr-9 whitespace-nowrap"
                key={Math.random()}
              >
                <Link
                  className="text-lg text-sofia-reg text-center font-medium flex my-3 border-b-3 border-transparent hover:border-solid hover:border-mcklightyellow seperatemenu-hover lg:relative"
                  href={item?.menuItemUrl?.value?item?.menuItemUrl?.value:''}
                >
                  {item?.menuItemName?.value}
                  <span
                  onClick={() => setActive(item)}
                  className={`${item?.subMenuContentBlockArea?.value == null? "lg:hidden xl:hidden" : "icon-arrow hidden lg:block xl:block lg:-right-5 lg:top-2.5"} ${active == item ? 'open' : ''}` } 
                ></span>
                </Link>
                
                <div
                  className={`hidden secondmenu ${
                    item?.subMenuContentBlockArea?.value == null
                      ? "hidden"
                      : "group-hover:block"
                  }`}
                >                  
                  <ProductDropComponent
                    subMenuData={item?.subMenuContentBlockArea?.value}
                  />
                </div>
                
                <span
                  onClick={() => setActive(item)}
                  className={`${item?.subMenuContentBlockArea?.value == null? "lg:hidden xl:hidden" : "icon-arrow lg:hidden xl:hidden"} ${active == item ? 'open' : ''}` } 
                > 
              </span>
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
