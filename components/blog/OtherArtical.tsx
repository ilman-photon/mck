import React, { memo } from "react";
import { GetTime } from "../CommonUtil/time";
import Link from "next/link";
interface OtherArticalProps {
    ArticleList: any;
    OnArticleSelect: (e: any) => void;
}

const OtherArtical: React.FC<OtherArticalProps> = ({ ArticleList, OnArticleSelect }) => {
    const HandelURLToId = (data: any) => {
        const expectedURL = data.slice(data.indexOf("blog/") + 5, data.length - 1)
        return expectedURL
    }
    return (
        <div className='grid lg:grid-cols-2 gap-x-6 grid-cols-1'>
            {ArticleList?.map((item: any, index: any) => (
                  <Link
                  href={{
                      pathname: "/blog_details",
                      query: { id: `${HandelURLToId(item.contentLink.url)}` },
                  }}
                  className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
              >
                <article key={index} className='shadow-md rounded-lg lg:mb-12 mb-6' onClick={(e) => OnArticleSelect(item)}>
                    <figure>
                        <img src={item.image.expandedValue.url} className='w-full' alt={item.image.expandedValue.name} id={item.image.expandedValue.name} />
                    </figure>
                    <figcaption>
                        <div className='content lg:p-6 p-4'>
                            <a href="" className='articleTitle lg:text-32 text-xl text-gtl-med text-mckblue pb-3 no-underline' aria-labelledby={item.title.value}>{item.title.value}</a>
                            <div className='pb-3 lg:pt-0 pt-3'>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pr-2 border-solid shade-grey-right-border'>{GetTime(item.startPublish)}</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm px-2 border-solid shade-grey-right-border'>65 min read</span>
                                <span className='text-mckblue text-sofia-reg font-normal lg:text-base text-sm pl-2'>1.3K views</span>
                            </div>
                            <div className='flex flex-wrap'>
                                {item.tag.value.map((item: any, index: any) => (
                                    <div key={index}
                                        style={{
                                            backgroundColor: item.recommendedProductButtonColor?.value,
                                            color: item.recommendedProductButtonText?.value
                                        }}
                                        className='mb-1 categoryTag text-mckblue text-sofia-reg font-extrabold text-xs rounded-lg w-fit py-0.5 px-2 ml-1 border-solid shade-blue-border'>{item.description}</div>
                                ))}
                            </div>
                        </div>
                    </figcaption>
                </article>
                </Link>
            ))}
        </div>

    )
}
export default memo(OtherArtical);
