import axios from "axios";
import React, { memo, useState } from "react";
import OtherArtical from "./OtherArtical";
interface CatogaryComponentProps {
    placeHolders: any;
    ArticleContent: [];
    searchString:string
}

const SearchResult: React.FC<CatogaryComponentProps> = ({ placeHolders, ArticleContent ,searchString}) => {

    return (<>
        {ArticleContent.length === 0 ? <div className='lg:col-span-2 col-start-1 col-end-7'>
            < div className='w-full lg:pb-11 pb-5' >
                <h1 className='lg:text-32 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-left' id='blog-link-001' >{`${placeHolders.noMatchFoundText.value} “${searchString}”`} </h1>
                <div className="text-base text-sofia-reg text-mckback font-normal lg:pb-px pb-3" id="srnf-label-001">{placeHolders.searchForText.value} <strong className='text-mckred'><i>{searchString}</i></strong></div>
                <div className='text-lg text-sofia-reg text-mcknormalgrey font-normal' id="srnf-label-003">{placeHolders.showResultsText.value}</div>
            </div >
        </div > :
            <>
                <h1 className='lg:text-32 text-3xl leading-linemax max-[576px]:leading-9 sm:text-32 text-gtl-med text-mckblue lg:pb-6 text-left' id='blog-link-001' >{`${ArticleContent.length} ${placeHolders.showingResultsText.value} “${searchString}“`} </h1>
                <div className="text-lg text-sofia-reg text-mckback font-normal lg:pb-px pb-1" id="srnf-label-002">{placeHolders.showingResultsText.value} <strong className='text-mckblue'><i>{searchString}</i></strong></div>
                <div className='text-lg text-sofia-reg text-mcknormalgrey font-normal' id="srnf-label-003">{placeHolders.showResultsText.value.replace(/#/g, ArticleContent.length)}</div>
                <br />
                <OtherArtical ArticleList={ArticleContent} />
            </>
        }

    </>
    )
}
export default memo(SearchResult);
