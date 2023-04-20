import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ProductDropComponent from "../productdrop";
import AboutDropComponent from "../aboutdrop";

function NavBar({ isVisible }: Props) {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  return (
    <>
      <div className="container flex w-8/12  ml-auto">
        <div className=" mx-auto flex ">
          <div className="group">
            <Link className="text-lg text-sofia-reg text-center font-medium flex my-3" href="/products">
              Products
              <img className="w-2 h-1 relative top-1 ml-1 my-4 mr-9" src="images/menu_down.png" />
            </Link>
            <div className="hidden group-hover:block">
              <ProductDropComponent />
            </div>
          </div>
          <div className="group">
          <Link className="text-lg text-sofia-reg text-center font-medium flex my-3" href="/products">
              Health Needs
              <img className="w-2 h-1 relative top-1 ml-1 my-4 mr-9" src="images/menu_down.png" />
            </Link>
            <div className="hidden group-hover:block">
              <AboutDropComponent />
            </div>
          </div>
          <Link className="text-lg text-sofia-reg text-center font-medium my-3 ml-7 whitespace-nowrap" href="/why_f&T">
            Why F&T
          </Link>
          <Link className="text-lg text-sofia-reg text-center font-medium my-3 ml-7 whitespace-nowrap" href="/wheretobuy">
            Where to Buy
          </Link>
          <Link className="text-lg text-sofia-reg text-center font-medium my-3 ml-7 whitespace-nowrap" href="/blog">
            Blog
          </Link>
          <Link className="text-lg text-sofia-reg text-center font-medium my-3 ml-7 whitespace-nowrap" href="/healthcareprofessionals">
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
