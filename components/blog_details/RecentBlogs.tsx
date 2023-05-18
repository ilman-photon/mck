import { useState, useEffect, memo } from "react";
import axios from "axios";
import Link from "next/link"
const ResentBlogListComponent = () => {

    const [ResentBlogList, setResentBlogList] = useState<any>();

    useEffect(() => {
        fetchResentBlogListing();
    }, []);
    const fetchResentBlogListing = async () => {
        console.log(`${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage')&top=5&expand=*&orderby=changed desc`)
        const response = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage')&top=5&expand=*&orderby=changed desc`, { headers: { 'Accept-Language': 'en' } },
        );
        setResentBlogList(response.data.results);
    };
    const HandelURLToId = (data: any) => {
        const expectedURL = data.slice(data.indexOf("blog/") + 5, data.length - 1)
        return expectedURL
    }

    return (

        <div className='m-4'>
            {ResentBlogList?.map((item: any, index: number) => (
                <div key={index} className='border border-t-0 border-x-0 py-1'>
                    <Link
                        href={{
                            pathname: "/blog_details",
                            query: { id: `${HandelURLToId(item.contentLink.url)}` },
                        }}
                        className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline'
                    >
                        {item.title.value}
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default memo(ResentBlogListComponent);
