import axiosInstance from "@/utils/axiosInstance";
import axios from "axios";

export const fetchBlogDetails = (blogID: any) => {
    const StringParam = blogID.toString().toLowerCase();
    return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/${StringParam}/&expand=*`);
}

export const fetchBlogSetting = () => {
    return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog-listing-setting/&expand=*`);
}

export const fetchBlogFilter = (filter: any) => {
    const StringParam = filter.name.toString().toLowerCase();

    return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage') and tag/value/name eq '${StringParam}' &expand=*`,
        {
            headers: { "Accept-Language": "en" },
        }
    );
}

export const fetchBlogSearch = (search: string) => {
    const StringParam = search.toString().toLowerCase();

    return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage') and (contains(tolower(title/value), '${StringParam}') or contains(tolower(description/value), '${StringParam}'))&expand=*`,
        {
            headers: { "Accept-Language": "en" },
        }
    );
}

export const fetchApplicationSetting = () => {
    return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/application-settings/&expand=*`);
}
export const fetchBlogetails = (id: string) => {
    return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/${id}/&expand=*`);
}