import React, { memo } from "react";
import { GetTime, handleBGColor } from "../CommonUtil/time";
import Link from "next/link";
interface OtherArticalProps {
    ArticleList: any;
}

const OtherArtical: React.FC<OtherArticalProps> = ({ ArticleList }) => {
    const HandelURLToId = (data: any) => {
        const expectedURL = data.slice(data.indexOf("blog/") + 5, data.length - 1)
        return expectedURL
    }
    return (
        <div className='grid lg:grid-cols-2 gap-x-6 grid-cols-1'>
            {ArticleList ? ArticleList?.map((item: any, index: any) => (
                <Link
                    key={index}
                    href={{
                        pathname: "/blog_details",
                        query: { id: item.routeSegment },
                    }}
                    className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
                >
                    <article className='shadow-md rounded-lg lg:mb-12 mb-6 overflow-hidden'>
                        <figure className='lg:h-80 overflow-hidden'>
                            <img src={item.image.expandedValue.url} className='w-full lg:h-414 object-cover' alt={item.image.expandedValue.name} id={item.image.expandedValue.name} />
                        </figure>
                        <figcaption>
                            <div className='content lg:p-6 p-4'>
                                <div className='lg:h-28'><a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline lg:leading-8 h-36' aria-labelledby={item.title.value}>{item.title.value}</a></div>
                                <div className='pb-3 pt-3'>
                                    <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border'>{GetTime(item.startPublish)}</span>
                                    <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border'>{item.readMinute.value}</span>
                                    {/* <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2'>1.3K views</span> */}
                                </div>
                                <div className='flex flex-wrap [&>*:nth-child(1)]:ml-0 min-h-52'>
                                    {item.tag.value.map((tagitem: any, idx: any) => (
                                        <div key={index}
                                            style={{
                                                backgroundColor: handleBGColor(idx, item.tagBackgroundColorCode?.value),
                                                color: item.recommendedProductButtonText?.value
                                            }}
                                            className='mb-1 categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border h-fit'>{tagitem.description}</div>
                                    ))}
                                </div>
                            </div>
                        </figcaption>
                    </article>
                </Link>
            )) : null}
        </div>

    )
}
export default memo(OtherArtical);
