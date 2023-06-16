import React, { useState, useEffect, memo } from "react";
import { LinkComponent } from "../global/LinkComponent";
import { ImageComponent } from "../global/ImageComponent";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from 'isomorphic-dompurify';

const SocialMediaIconComponent = () => {

    const [SocialMediaIcon, setSocialMediaIcon] = useState<any>();

    useEffect(() => {
        fetchResentBlogListing();
    }, []);
    const fetchResentBlogListing = async () => {
        const response = await axiosInstance.get(
            `${process.env.API_URL}/api/episerver/v3.0/content/268?expand=*`, { headers: { 'Accept-Language': 'en' } },
        );
        setSocialMediaIcon(response.data.socialMediaLinkBlock);
    };

    return (
        <div className='flex w-fit mx-auto lg:p-6 py-6'>
            {SocialMediaIcon?.expandedValue.map((item: any, index: any) => (
                <React.Fragment key={item?.contentLink?.id}>
                    <LinkComponent
                        className="text-sofia-reg text-lg text-mcknormalgrey"
                        rel="stylesheet"
                        href={DOMPurify.sanitize(item?.socialMediaUrl.value)}
                        id={`link-${index}${item?.contentLink?.id}`}
                        aria-label={DOMPurify.sanitize(item?.socialMediaUrl?.value)}
                        ariahidden={false} 
                        tabIndex={0}
                    >
                        <ImageComponent
                            src={DOMPurify.sanitize(item?.socialMediaImage?.expandedValue?.thumbnail?.value?.url)}
                            alt={DOMPurify.sanitize(item?.socialMediaImage?.expandedValue?.altText?.value)}
                            id={`social-Img-${index}${item?.contentLink?.id}`}
                            ariahidden={false}
                            className="pr-10"
                       />
                    </LinkComponent>
                </React.Fragment>
            ))}
        </div>
    );
};

export default memo(SocialMediaIconComponent);
