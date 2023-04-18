import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function NavBar({ isVisible }: Props) {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const handleClick = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  return (
    <>
      <div className="container flex w-9/12 ml-auto">
        <div className="mx-auto flex">
          <Link className="text-lg text-sofia-reg text-center font-semibold flex my-auto" href="/products">
            Products
            <img className="w-2 h-1 relative top-1 ml-1 my-auto mr-9" src="images/menu_down.png" />
          </Link>
          <Link className="text-lg text-sofia-reg text-center font-semibold flex my-auto" href="/products">
            Health Needs
            <img className="w-2 h-1 relative top-1 ml-1 my-auto mr-9" src="images/menu_down.png" />
          </Link>
          <Link className="text-lg text-sofia-reg text-center font-semibold my-auto mr-9" href="/why_f&T">
            Why F&T
          </Link>
          <Link className="text-lg text-sofia-reg text-center font-semibold my-auto mr-9" href="/wheretobuy">
            Where to Buy
          </Link>
          <Link className="text-lg text-sofia-reg text-center font-semibold my-auto mr-9" href="/blog">
            Blog
          </Link>
          <Link className="text-lg text-sofia-reg text-center font-semibold my-auto mr-9" href="/healthcareprofessionals">
            Health Care Professionals
          </Link>
        </div>
      </div>

      {/* <div className="container flex mx-auto">
      <div className={`navBar ${isVisible ? "show" : "hide"}`}>
        <div>
        <Link className="link" href="/">
          Home
        </Link>

        <Link className="link arrow" onClick={handleClick} href="/products">
          Products
        </Link>
        <Link className="link arrow" onClick={handleClick} href="/health_needs">
          Health Needs
        </Link>
        <Link className="link" href="/why_f&T">
          Why F&T
        </Link>
        <Link className="link" href="/wheretobuy">
          Where to Buy
        </Link>
        <Link className="link" href="/blog">
          Blog
        </Link>
        <Link className="link" href="/healthcareprofessionals">
          Health Care Professionals
        </Link>
      </div></div>
      <div
        className={`submenu-container" ${subMenuVisible ? "show" : "hide"}`}
      ></div>
      </div> */}
    </>
  );
}

type Props = {
  isVisible: boolean;
};

export default NavBar;
