import { useState } from "react";
import Search from "../search";
import NavBar from "../navbar";

function HeaderComponent() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
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

export default HeaderComponent;
