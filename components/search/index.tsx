import { useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");

  function navigation() {
    router.push(
      {
        pathname: "/product_search",
        query: { search: searchText },
      },
      `/product search?search=${searchText}`
    );
  }

  function handleSearch() {
    if (searchText) {
      navigation();
    }
  }

  function handleKeyDown(e: any) {
    if (searchText && e.keyCode === 13) {
      navigation();
    }
  }

  return (
    <>
      <div id="search" className="w-2/12 h-12 lg:block hidden">
        <img className="flex ml-auto  px-5 py-5" src="images/search_btn.png" />
        {/* <input
          className="search my-4 flex ml-auto hover:border-none focus:border-none active:border-none border-none"
          type=""
          alt=""
          placeholder=""
          onChange={(e) => setSearchText(e.target.value)}
          onClick={handleSearch}
          onKeyDown={(e) => handleKeyDown(e)}
          value={searchText}
        /> */}
      </div>
      <div className="mobile-search grid ml-auto">
        <img className="px-5 py-5" src="images/search_btn.png" />
      </div>
    </>
  );
}
