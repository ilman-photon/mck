import { useState, useEffect, memo } from "react";
import axios from "axios";
import Link from "next/link";
const SocialMediaIconComponent = () => {

    const [SocialMediaIcon, setSocialMediaIcon] = useState<any>();

    useEffect(() => {
        fetchResentBlogListing();
    }, []);
    const fetchResentBlogListing = async () => {
        const response = await axios.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/268?expand=*`, { headers: { 'Accept-Language': 'en' } },
        );
        setSocialMediaIcon(response.data.socialMediaLinkBlock);
        console.table(response.data.socialMediaLinkBlock.expandedValue)


    };

    return (
        <div className='flex w-fit mx-auto lg:p-6 py-6'>
            {SocialMediaIcon?.expandedValue.map((item: any, index: any) => (
                <Link
                    className="text-sofia-reg text-lg text-mcknormalgrey"
                    rel="stylesheet"
                    href={item?.socialMediaUrl.value}
                    key={item?.contentLink?.id}
                    id={item?.contentLink?.id}
                >
                    <img src={item?.socialMediaImage?.expandedValue?.thumbnail?.value?.url} alt={item?.socialMediaImage?.expandedValue?.altText?.value}></img>
                </Link>
            ))}
        </div>
    );
}
export default memo(SocialMediaIconComponent);
