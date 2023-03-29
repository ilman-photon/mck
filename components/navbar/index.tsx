import Link from "next/link";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { flattenDiagnosticMessageText } from "typescript";

const NavBar: NextPage = ({ isVisible }) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  useEffect(() => {
    console.log("isVisible", isVisible);
  }, [isVisible]);

  const handleClick = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  return (
    <>
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
    </>
  );
};

export default NavBar;
