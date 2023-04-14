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
      <div className="container grid sticky mx-auto header-bg-white hover:bg-violet-700 blue-txt hover:text-white">
        <div className="w-full my-10 ml-10">
          <img
            className="mobile-nav"
            src="images/mobile_nav.png"
            onClick={handleClick}
          />
          <div className="brand-logo" onClick={handleOnCLickLogo}>
            <img src="images/logo.png" alt="logo" />
          </div>
        </div>
        <div className="w-full flex">
          <NavBar isVisible={isVisible} />
          <Search />
        </div>
      </div>

    </>
  );
}

export default HeaderComponent;