import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  // Configurations for your Axios instance
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const url:any = config.url;
    let accesstoken:any = "";
    if(url.indexOf("ContentUrl") != -1 || url.indexOf("References") != -1 || url.indexOf("expand") != -1 || url.indexOf("content") != -1){
        accesstoken = localStorage.getItem("token")
      
     }
    if(url.indexOf("filter") != -1){
       accesstoken = localStorage.getItem("searchtoken")
       
      
     }
    const headers:any = { ...config.headers };
    headers['Authorization'] = `Bearer ${accesstoken}`;
    headers['Accept-Language'] = "en";
    return { ...config, headers };
    
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default axiosInstance;