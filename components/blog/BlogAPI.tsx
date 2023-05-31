import axios from "axios";

export const fetchBlogDetails = (blogID: string) => {
    const StringParam = blogID.toString().toLowerCase();
    return axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog/${StringParam}/&expand=*`,
        {
            headers: { "Accept-Language": "en" },
        }
    );
}

export const fetchBlogSetting = () => {
    return axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog-listing-setting/&expand=*`,
        {
            headers: { "Accept-Language": "en" },
        }
    );
}

export const fetchBlogFilter = (filter: any) => {
    const StringParam = filter.name.toString().toLowerCase();

    return axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage') and tag/value/name eq '${StringParam}' &expand=*`,
        {
            headers: { "Accept-Language": "en" },
        }
    );
}

export const fetchBlogSearch = (search: string) => {
    const StringParam = search.toString().toLowerCase();

    return axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage') and tag/value/name eq '${StringParam}' &expand=*`,
        {
            headers: { "Accept-Language": "en" },
        }
    );
}
