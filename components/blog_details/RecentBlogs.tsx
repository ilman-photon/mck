import { useState, useEffect, memo } from "react";
import axios from "axios";
import { LinkComponent } from "../global/LinkComponent";
import axiosInstance from "@/utils/axiosInstance";
const ResentBlogListComponent = () => {

    const [ResentBlogList, setResentBlogList] = useState<any>();

    useEffect(() => {
        fetchResentBlogListing();
    }, []);
    const fetchResentBlogListing = async () => {
        const response = await axiosInstance.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage')&top=5&expand=*&orderby=changed desc`, { headers: { 'Accept-Language': 'en' } },
        );
        setResentBlogList(response.data.results);
    };


    return (

        <div className='m-4'>
            {ResentBlogList?.map((item: any, index: string) => (
                <div key={index} className={`${ResentBlogList.length==index+1?'':'border'} border-t-0 border-x-0 py-1`}>
                    <LinkComponent
                        href={{
                            pathname: "/blog_details",
                            query: { id: item.routeSegment },
                        }}
                        className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
                    >
                       <div className='text-mcknormalgrey' key={index}> {`${item?.title?.value}`}</div>
                    </LinkComponent>
                </div>
            ))}
        </div>
    );
}
export default memo(ResentBlogListComponent);
