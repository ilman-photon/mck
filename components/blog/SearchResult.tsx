import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { GetTime } from "../CommonUtil/time";
import OtherArtical from "./OtherArtical";
interface CatogaryComponentProps {
    id: string;
    data: [];
    NoMatchesFound: boolean
}

const SearchResult: React.FC<CatogaryComponentProps> = ({ id, data, NoMatchesFound }) => {
    const [ArticleContent, setArticleContent] = useState<any>();

    const fetchBlogHeroArticale = async () => {
        const responseid = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage') and topBlog/value eq 1&top=1&expand=*`, { headers: { 'Accept-Language': 'en' } },
        );
        console.log(JSON.stringify(responseid.data.results[0]))
        setArticleContent(responseid);
    };
    useEffect(() => {
        fetchBlogHeroArticale();
    }, []);

    return (<>
        {NoMatchesFound ? <div className='lg:col-span-2 col-start-1 col-end-7'>
            < div className='w-full lg:pb-11 pb-5' >
                <h1 className="lg:text-54 text-32 text-gtl-med text-mckblue font-medium lg:pb-12 pb-1" id="srnf-label-001">No Matches Found for “CoverMyMeds”</h1>
                <div className="text-lg text-sofia-reg text-mckback font-normal lg:pb-px pb-1" id="srnf-label-002">Showing results for <strong className='text-mckblue'><i>CoverMyMeds</i></strong></div>
                <div className="text-base text-sofia-reg text-mckback font-normal lg:pb-px pb-3" id="srnf-label-001">Search for <strong className='text-mckred'><i>CoverMyMeds</i></strong></div>
                <div className='text-lg text-sofia-reg text-mcknormalgrey font-normal' id="srnf-label-003">Showing 12 results</div>
            </div >
        </div > : <OtherArtical
            ArticleList={data}
        />}

    </>
    )
}
export default memo(SearchResult);
