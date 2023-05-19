import React, { memo } from "react";
import LandingLayout from "@/components/Layout/LandingLayout";
import BlogComponent from "@/components/blog/blog";

const BlogLanding = () => {
    return (
        <LandingLayout>
            <BlogComponent />
        </LandingLayout>
    )

}
export default memo(BlogLanding);