import { GETBLOGSETTING } from "@/hooks/ApiContent";
import axiosInstance from "@/utils/axiosInstance";

export const fetchBlogList = () => {
    return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage')&orderby=changed desc&top=10&skip=0`);
}

export const fetchBlogSetting = () => {
    return axiosInstance.get(GETBLOGSETTING);
}

export const fetchBlogFilter = (filter: any) => {
    const StringParam = filter.name.toString().toLowerCase();

    return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage') and contains(tolower(tag/value/name), '${StringParam}')&expand=*`,
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

export const fetchBlogDetails = (id: string) => {
    return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/${id}/&expand=*`);
}