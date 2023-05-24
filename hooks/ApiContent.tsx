// Blog API
export const GETBLOGSETTING = `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/blog-listing-setting/&expand=*`
export const GETBLOGLIST = `${process.env.API_URL}/api/episerver/v3.0/search/content?filter=ContentType/any(t:t eq 'BlogPage')&orderby=changed desc&top=10&skip=0`