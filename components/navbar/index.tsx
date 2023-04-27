import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductDropComponent from "../productdrop";
import AboutDropComponent from "../aboutdrop";

function NavBar({ isVisible }: Props) {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  return (
    <>
      <div
        id="nav-bar"
        className="hidden md:flex container lg:flex w-8/12  ml-auto"
      >
        <div className=" mx-auto flex ">
          <div className="group ml-9 mr-9 whitespace-nowrap">
            <Link
              className="text-lg text-sofia-reg text-center font-medium flex my-3 border-b-3 border-transparent hover:border-solid hover:border-mcklightyellow"
              href="/all_product_category"
            >
              Products
              <svg
                className="w-4 h-2 relative ml-1 my-3"
                viewBox="0 0 15 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.00041 0.834357L7.71415 5.5481L12.4279 0.834357C12.9017 0.360553 13.6671 0.360553 14.1409 0.834357C14.6147 1.30816 14.6147 2.07354 14.1409 2.54734L8.56457 8.12365C8.09076 8.59746 7.32539 8.59746 6.85158 8.12365L1.27527 2.54734C0.801471 2.07354 0.801471 1.30816 1.27527 0.834357C1.74908 0.372702 2.5266 0.360553 3.00041 0.834357Z"
                  fill="#001A71"
                />
              </svg>
              {/* <img  src="images/menu_down.png" /> */}
            </Link>
            <div className="hidden group-hover:block">
              <ProductDropComponent />
            </div>
          </div>
          <div className="group mr-9 whitespace-nowrap">
            <Link
              className="text-lg text-sofia-reg text-center font-medium flex my-3 border-b-3 border-transparent hover:border-solid hover:border-mcklightyellow"
              href="/products"
            >
              Health Needs
              <svg
                className="w-4 h-2 relative ml-1 my-3"
                viewBox="0 0 15 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.00041 0.834357L7.71415 5.5481L12.4279 0.834357C12.9017 0.360553 13.6671 0.360553 14.1409 0.834357C14.6147 1.30816 14.6147 2.07354 14.1409 2.54734L8.56457 8.12365C8.09076 8.59746 7.32539 8.59746 6.85158 8.12365L1.27527 2.54734C0.801471 2.07354 0.801471 1.30816 1.27527 0.834357C1.74908 0.372702 2.5266 0.360553 3.00041 0.834357Z"
                  fill="#001A71"
                />
              </svg>
              {/* <img className="w-2 h-1 relative top-1 ml-1 my-4 mr-9" src="images/menu_down.png" /> */}
            </Link>
            <div className="hidden group-hover:block">
              <AboutDropComponent />
            </div>
          </div>
          <Link
            className="text-lg text-sofia-reg text-center font-medium my-3 mr-9 whitespace-nowrap"
            href="/why_f&T"
          >
            Why F&T
          </Link>
          <Link
            className="text-lg text-sofia-reg text-center font-medium my-3 mr-9 whitespace-nowrap"
            href="/wheretobuy"
          >
            Where to Buy
          </Link>
          <Link
            className="text-lg text-sofia-reg text-center font-medium my-3 mr-9 whitespace-nowrap"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="text-lg text-sofia-reg text-center font-medium my-3 mr-9 whitespace-nowrap"
            href="/healthcareprofessionals"
          >
            Health Care Professionals
          </Link>
        </div>
      </div>
    </>
  );
}

type Props = {
  isVisible: boolean;
};

export default NavBar;
