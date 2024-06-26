import { AxiosError } from "axios";
import React, { memo, useState, useEffect, useRef, LegacyRef, MutableRefObject, RefObject } from "react";
import { fetchBlogSearch } from "./BlogAPI";
interface CatogaryComponentProps {
  placeholder: any;
  searchText: string;
  ActiveSearch: boolean;
  handleResponse: (e: any, search: string) => void;
  handleClose: (value: any) => void;
  inputRef?: RefObject<HTMLInputElement>;
}
const SearchComponent: React.FC<CatogaryComponentProps> = ({
  placeholder,
  searchText,
  ActiveSearch,
  handleResponse,
  inputRef
}) => {
  const [error, setError] = useState<boolean>(false);
  const [search, setsearch] = useState<any>();
  const [ActiveClose, setActiveClose] = useState<any>(true);

  useEffect(() => {
    if (searchText) {
      setsearch(searchText);
      setActiveClose(ActiveSearch);
    }
  }, [searchText]);

  const fetchSearchBlog = async () => {
    if (search === undefined || search === "") {
      handleResponse([], search);
      setsearch("");
      setActiveClose(true);
    } else {
      if (search != "") {
        fetchBlogSearch(search)
          .then((res) => {
            setActiveClose(false);
            handleResponse(res?.data?.results, search);
          })
          .catch((e: Error | AxiosError) => {
            setError(true);
          });
      }
    }
  };
  const HandleChange = (event: any) => {
    const { value } = event.target;
    if (value?.length === 0 || value === undefined) {
      setActiveClose(true);
      setsearch("");
    } else {
      setsearch(value);
    }
  };
  return (
    <>
      <input
        style={{ border: error ? "2px solid red" : "2px solid #001A71" }}
        className="w-full text-sofia-reg font-normal text-base text-mckblue placeholder:text-mckblue placeholder:text-opacity-50 pl-4 py-3 pr-12 focus:border active:border border border-blue focus:outline-none rounded"
        type="text"
        placeholder={placeholder}
        role="search"
        value={search}
        ref={inputRef}
        onChange={HandleChange}
        onKeyDown={(e: any) => e.keyCode === 13 && fetchSearchBlog()}
      />
      {ActiveClose ? (
                <button
                className="absolute right-2.5 top-4"
                onClick={fetchSearchBlog}
              >
        <svg
          id={`blog-search-icon-inactive`}
          aria-label="search icon"
          className="focus:outline-0 group-focus:outline-1 top-4 right-4 z-8 cursor-pointer"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            d="M12.7549 11.734H11.9649L11.6849 11.464C12.6649 10.324 13.2549 8.84401 13.2549 7.23401C13.2549 3.64401 10.3449 0.734009 6.75488 0.734009C3.16488 0.734009 0.254883 3.64401 0.254883 7.23401C0.254883 10.824 3.16488 13.734 6.75488 13.734C8.36488 13.734 9.84488 13.144 10.9849 12.164L11.2549 12.444V13.234L16.2549 18.224L17.7449 16.734L12.7549 11.734ZM6.75488 11.734C4.26488 11.734 2.25488 9.72401 2.25488 7.23401C2.25488 4.74401 4.26488 2.73401 6.75488 2.73401C9.24488 2.73401 11.2549 4.74401 11.2549 7.23401C11.2549 9.72401 9.24488 11.734 6.75488 11.734Z"
            fill="#001A71"
          />
        </svg>
        </button>
      ) : (
        <button
          className="absolute right-2.5"
          onClick={() => {
            setsearch("");
            handleResponse([], "");
            setActiveClose(true);
          }}
        >
          <svg
            className="focus:outline-0 top-4 right-4 z-8 cursor-pointer"
            aria-label="close icon"
            width="18"
            id={`blog-search-icon-active`}
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <path
              d="M14 1.889L12.59 0.479004L7 6.069L1.41 0.479004L0 1.889L5.59 7.479L0 13.069L1.41 14.479L7 8.889L12.59 14.479L14 13.069L8.41 7.479L14 1.889Z"
              fill="#001A71"
            />
          </svg>
        </button>
      )}
    </>
  );
};
export default memo(SearchComponent);
