import React, { memo } from "react";
interface CatogaryComponentProps {
    CatogaryListing: any;
    Catogarytitle: string;
    OnCatogarySelcete: (e: string) => void;
}

const CatogaryComponent: React.FC<CatogaryComponentProps> = ({ CatogaryListing, Catogarytitle, OnCatogarySelcete }) => {

    return (
             <div className='category-card shade-blue-border rounded-lg overflow-hidden pb-4 mb-6'>
             <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg" id="blog-label-008">{Catogarytitle}</div>
             {CatogaryListing?.map((item: any, index: number) => (
                 <div className='lg:px-6 px-2' key={index}>
                     <div className="tab text-mckblue w-full overflow-hidden lg:border-none sm:border-none xs:border-none">
                         <React.Fragment>
                             <input type="checkbox" id={item.categoryDisplayName.value}
                                 style={{ top: 34, position: 'relative', left: 5, width: '14px', height: '14px' }}
                             />
                             <label
                                 style={{ marginLeft: '1rem' }}
                                 className="tab-label py-2 px-4 flex cursor-pointer text-sofia-bold font-extrabold text-base relative" htmlFor={item.categoryDisplayName.value}>
                                 <svg className='mr-3' width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9549 16.5989C11.6189 17.3649 11.0229 19.4429 10.4909 20.8109C9.99288 22.0869 8.73688 23.2669 7.26888 23.2649C5.62888 23.2629 4.01488 22.0089 4.01288 20.1989C4.00888 17.6249 6.31288 16.5049 7.23288 15.6809C9.52688 13.6289 13.5509 11.4409 13.5469 7.92688C13.5429 4.35888 10.5049 1.69688 7.22888 1.69288C4.03288 1.68888 0.938875 4.10488 0.942875 7.91088C0.946875 11.0869 4.19087 12.9149 7.23487 15.6789C9.68487 17.9029 12.0589 20.4529 15.0589 23.2269" stroke="#001A71" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                 {item.categoryDisplayName.value}
                             </label>
                         </React.Fragment>
                         <div className="tab-content text-sofia-reg font-normal text-base text-mcknormalgrey">
                             {item.subCategory.value.map((item: any, index: number) => (
                                 <button key={index} className='w-full list-none text-sofia-reg text-base font-normal text-mckblue cursor-pointer text-left hover:bg-shadesblue pl-2 py-1'>{item.description}</button>
                             ))}
                         </div>
                     </div>
                 </div>))}
         </div>

    )
}
export default memo(CatogaryComponent);
