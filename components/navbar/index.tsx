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
    <div className="container flex mx-auto">
      <div className={`navBar ${isVisible ? "show" : "hide"}`}>
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
      </div>
      <div
        className={`submenu-container" ${subMenuVisible ? "show" : "hide"}`}
      ></div>
      </div>
    </>
  );
}

type Props = {
  isVisible: boolean;
};

export default NavBar;
