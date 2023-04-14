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
      <div className="desktop-search w-2/12">
        <input
          className="input-box search"
          type="text"
          alt="Search"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
          onClick={handleSearch}
          onKeyDown={(e) => handleKeyDown(e)}
          value={searchText}
        />
      </div>
      <div className="mobile-search">
        <img src="images/search_btn.png" />
      </div>
    </>
  );
}
