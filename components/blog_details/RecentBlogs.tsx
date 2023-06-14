import { memo } from "react";
import { LinkComponent } from "../global/LinkComponent";
const ResentBlogListComponent = ({ ResentBlogList }: any) => {
    return (

        <div className='m-4'>
            {ResentBlogList?.expandedValue?.map((item: any, index: string) => (
                <div key={index} className={`${ResentBlogList.expandedValue.length == index + 1 ? '' : 'border'} border-t-0 border-x-0 py-1`}>
                    <LinkComponent
                        id={`blog-recent-0${index}`}
                        key={`blog-recent-0${index}`}
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
