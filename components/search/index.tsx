import { useState } from "react";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");
  let textInput: any

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

  const handleKey = (e: any) => {
    if (e.key === 'Enter') {
        textInput = e.target.value
        router.push(
          {
            pathname: "/search_results",
            // query: { search: e.target.value },
          },
        )   
    }
}

  return (
    <>
         <div className="relative search-box lg:mr-11 lg:w-auto w-64" >
        <button className="btn-search w-12 h-12 bg-transparent right-4 absolute cursor-pointer outline-none font-black border-0" aria-label="search-icon"></button>
 
        <input type={textInput} onKeyDown={(e) => handleKey(e)} 
         className="input-search outline-0 h-12 w-12 border-none text-sofia-reg placeholder:text-sofia-reg text-base placeholder:text-base font-normal placeholder:font-normal tracking-normal placeholder:tracking-normal rounded px-3 py-4 pr-10 bg-transparent absolute inset-y-0 right-3.5 blue-txt focus:w-80 focus:bg-white focus:top-1   " placeholder="Search..." aria-label="search-bar"/>
 
 

        <svg className="search-icon absolute lg:top-4 -top-1 lg:right-6 right-2 " width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="search-icon">

          <path d="M12.7549 11.734H11.9649L11.6849 11.464C12.6649 10.324 13.2549 8.84401 13.2549 7.23401C13.2549 3.64401 10.3449 0.734009 6.75488 0.734009C3.16488 0.734009 0.254883 3.64401 0.254883 7.23401C0.254883 10.824 3.16488 13.734 6.75488 13.734C8.36488 13.734 9.84488 13.144 10.9849 12.164L11.2549 12.444V13.234L16.2549 18.224L17.7449 16.734L12.7549 11.734ZM6.75488 11.734C4.26488 11.734 2.25488 9.72401 2.25488 7.23401C2.25488 4.74401 4.26488 2.73401 6.75488 2.73401C9.24488 2.73401 11.2549 4.74401 11.2549 7.23401C11.2549 9.72401 9.24488 11.734 6.75488 11.734Z" fill="#001A71" />
        </svg>
      </div>
      {/* <div id="search" className="w-2/12 h-12 lg:block hidden">
      <svg className="search-icon" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.7549 11.734H11.9649L11.6849 11.464C12.6649 10.324 13.2549 8.84401 13.2549 7.23401C13.2549 3.64401 10.3449 0.734009 6.75488 0.734009C3.16488 0.734009 0.254883 3.64401 0.254883 7.23401C0.254883 10.824 3.16488 13.734 6.75488 13.734C8.36488 13.734 9.84488 13.144 10.9849 12.164L11.2549 12.444V13.234L16.2549 18.224L17.7449 16.734L12.7549 11.734ZM6.75488 11.734C4.26488 11.734 2.25488 9.72401 2.25488 7.23401C2.25488 4.74401 4.26488 2.73401 6.75488 2.73401C9.24488 2.73401 11.2549 4.74401 11.2549 7.23401C11.2549 9.72401 9.24488 11.734 6.75488 11.734Z" fill="#001A71" />
        </svg> */}
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
      {/* </div>
      <div className="mobile-search grid ml-auto">
        <img className="px-5 py-5" src="images/search_btn.png" />
      </div> */}
    </>
  );
}
