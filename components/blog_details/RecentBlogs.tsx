import { useState, useEffect, memo } from "react";
import axios from "axios";
const ResentBlogListComponent = () => {

    const [ResentBlogList, setResentBlogList] = useState<any>();

    useEffect(() => {
        fetchResentBlogListing();
    }, []);
    const fetchResentBlogListing = async () => {
        const response = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage')&top=5&expand=*&orderby=changed desc`, { headers: { 'Accept-Language': 'en' } },
        );
        setResentBlogList(response.data.results);
    };

    return (
        <div className='category-card shade-blue-border rounded-lg overflow-hidden mb-6'>
            <div className="text-mckblue shade-blue-bg py-3 px-4 text-sofia-bold font-extrabold text-lg" id='blog-label-009'>Recent Blogs</div>
            <div className='m-4'>
                {ResentBlogList?.map((item: any, index: number) => (
                    <div key={index} className='border border-t-0 border-x-0 py-1'>
                        <a href={item.contentLink.url} className='articletitle-link w-full text-sofia-reg text-base font-normal text-mckblue cursor-pointer no-underline' aria-label='Four Ways Pharmacies Can Benefit from Central Fill as a Service' id='blog-label-009-01'>{item.title.value}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default memo(ResentBlogListComponent);
