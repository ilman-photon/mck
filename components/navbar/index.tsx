import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductDropComponent from "../productdrop";
import AboutDropComponent from "../aboutdrop";

function NavBar({ menuData }: Props) {
  return (
    <>
      <div
        id="nav-bar"
        className="hidden md:flex container lg:flex w-8/12  ml-auto"
      >
        <div className="mx-auto flex">
          {menuData?.map((item: any) => {
            return (
              <div
                className="group ml-9 mr-9 whitespace-nowrap"
                key={Math.random()}
              >
                <Link
                  className="text-lg text-sofia-reg text-center font-medium flex my-3 border-b-3 border-transparent hover:border-solid hover:border-mcklightyellow"
                  href={item?.menuItemUrl?.value}
                >
                  {item?.menuItemName?.value}
                </Link>
                <div
                  className={`hidden  ${
                    item?.subMenuContentBlockArea?.value == null
                      ? "hidden"
                      : "group-hover:block"
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
};

export default NavBar;
