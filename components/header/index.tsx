import { useState } from "react";
import { NextPage } from "next";
import Search from "../search";
import NavBar from "../navbar";

function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
    console.log("handleClick", isVisible);
  };
  return (
    <>
      <div className="header">
        <img
          className="mobile-nav"
          src="images/mobile_nav.png"
          onClick={handleClick}
        />
        <div className="logo-img">
          <img src="images/logo.png" alt="logo" />
        </div>

        <Search />
      </div>
      <NavBar isVisible={isVisible} />
    </>
  );
}

export default Header;
