import axios from "axios";
import React, { memo, useState } from "react";
interface CatogaryComponentProps {
    placeholder: any;
    handleClick: (e: any, searchstring: any) => void;
    handleLoading: (value: any) => void;
}

const SearchComponent: React.FC<CatogaryComponentProps> = ({ placeholder, handleClick, handleLoading }) => {
    const [searchData, setSearchData] = useState<string>();
    const fetchSearchBlog = async () => {
        handleLoading(true);
        const SearchResult = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage') and (contains(tolower(title/value), ${searchData?.toLowerCase()}) or contains(tolower(description/value), ${searchData?.toLowerCase()}))&expand=*`, { headers: { 'Accept-Language': 'en' } },
        );
        handleClick(SearchResult.data.results, searchData)
        handleLoading(false);
    };


    return (
        <>
            <input
                className="w-full text-sofia-reg font-normal text-base text-mckblue placeholder:text-mckblue placeholder:text-opacity-50 pl-4 py-3 pr-12 focus:border active:border border border-blue focus:outline-none rounded" type="text"
                placeholder={placeholder}
                onChange={(e) => setSearchData(e.target.value)}
                onKeyDown={(e:any) => e.keyCode === 13 && fetchSearchBlog()}
            />
            <svg onClick={fetchSearchBlog} className="absolute top-4 right-4 z-8 cursor-pointer" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.7549 11.734H11.9649L11.6849 11.464C12.6649 10.324 13.2549 8.84401 13.2549 7.23401C13.2549 3.64401 10.3449 0.734009 6.75488 0.734009C3.16488 0.734009 0.254883 3.64401 0.254883 7.23401C0.254883 10.824 3.16488 13.734 6.75488 13.734C8.36488 13.734 9.84488 13.144 10.9849 12.164L11.2549 12.444V13.234L16.2549 18.224L17.7449 16.734L12.7549 11.734ZM6.75488 11.734C4.26488 11.734 2.25488 9.72401 2.25488 7.23401C2.25488 4.74401 4.26488 2.73401 6.75488 2.73401C9.24488 2.73401 11.2549 4.74401 11.2549 7.23401C11.2549 9.72401 9.24488 11.734 6.75488 11.734Z" fill="#001A71" /></svg>

        </>

    )
}
export default memo(SearchComponent);