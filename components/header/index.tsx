import { useState } from "react";
import Search from "../search";
import NavBar from "../navbar";
import { useRouter } from "next/router";

function HeaderComponent() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  function handleOnCLickLogo() {
    router.push({
      pathname: "/",
    });
  }

  return (
    <>
      <div className="container flex mx-auto header">
        <img
          className="mobile-nav"
          src="images/mobile_nav.png"
          onClick={handleClick}
        />
        <div className="brand-logo" onClick={handleOnCLickLogo}>
          <img src="images/logo.png" alt="logo" />
        </div>

        <Search />
      </div>
      <NavBar isVisible={isVisible} />
    </>
  );
}

export default HeaderComponent;