import React, { memo } from "react";
import LandingLayout from "@/components/Layout/LandingLayout";
import BlogDetailsComponent from "@/components/blog_details/BlogDetailsComponent";


const BlogDetailsLanding = () => {
    return (
        <LandingLayout>
            <BlogDetailsComponent />
        </LandingLayout>
    )

}
export default memo(BlogDetailsLanding);