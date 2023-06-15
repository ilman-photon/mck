import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import axiosInstance from './axiosInstance';

export interface CallAPIOptions {
  checkToken: boolean;
  method: Method;
  withToken: boolean;
  isMultipart: boolean;
  isBlob: boolean;
}

interface CallAPI {
  <Req, Res>(url: string, requestData: Req, options?: Partial<CallAPIOptions>): Promise<Partial<AxiosResponse<Res>>>;
}

export const callAPI: CallAPI = async (url, requestData, options) => {
  const { isMultipart = false, method = 'post', isBlob = false } = options || {};
  if (typeof window !== 'undefined') {
    const gettoken = localStorage.getItem("token");
    const expiry:any = localStorage.getItem("expiry");
    const searchtoken = localStorage.getItem("searchtoken");
    const searchexpiry:any = localStorage.getItem("expiry");
  
  const now:any = new Date();
  if (now.getTime() > expiry) {
    localStorage.removeItem("token");
  }
  if (now.getTime() > searchexpiry) {
    localStorage.removeItem("searchtoken");
  }

  if(!gettoken){
    await generatecontenttoken("epi_content_delivery");
  }

  if(!searchtoken){
    await generatecontenttoken("epi_content_search_api");
  }
}
  function generatecontenttoken(scope:any) {
    return new Promise((resolve, reject) => {
      // Perform some asynchronous operation
      const data = {
        'grant_type': 'password',
        'client_id': 'frontend',
        'client_secret': process.env.CLIENT_SECRET,
        'username': process.env.USERNAME,
        'password': process.env.PASSWORD,
        'scope': scope
      };
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.API_URL}/api/episerver/connect/token`,
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded', 
          'Accept-Language': 'en', 
          'Accept': 'application/json',
          'Cookie': 'ARRAffinity=cb79aa5049bb9bd823327e24b0080031232b95313a54505f0c2af5ae05753f50; ARRAffinitySameSite=cb79aa5049bb9bd823327e24b0080031232b95313a54505f0c2af5ae05753f50; EPiStateMarker=true'
        },
        data : data
      };
      
      axios.request(config)
      .then((response:any) => {
        const now:any = new Date();
        if (typeof window !== 'undefined') {
          if(scope === "epi_content_delivery"){
            localStorage.setItem("token",response.data.access_token);
            localStorage.setItem("expiry",now.getTime() + response.data.expires_in * 1000);
          }else if(scope === "epi_content_search_api"){
            localStorage.setItem("searchtoken",response.data.access_token);
            localStorage.setItem("searchexpiry",now.getTime() + response.data.expires_in * 1000);
          }
        }
      
        resolve(response.data.accesstoken);
       
      })
      .catch((error:any) => {
        reject(false);
        //console.log(error);
      });
    });
  }
  let accesstoken:any = "";
  if(url.indexOf("ContentUrl") != -1 || url.indexOf("References") != -1 || url.indexOf("expand") != -1){
     accesstoken = localStorage.getItem("token")
   
  }else if(url.indexOf("filter") != -1){
    accesstoken = localStorage.getItem("searchtoken")
    
   
  }
  const headers: {
    'Accept-Language': string
    'Content-Type': string;
    'Authorization': string;
    'Access-Control-Allow-Origin':string;
  } = {
    'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
    "Accept-Language":'en',
    "Authorization":`Bearer ${accesstoken}`,
    "Access-Control-Allow-Origin":"*"
  };  
 
  
  const axiosProps: AxiosRequestConfig = {
    headers,
    method,
    timeout: 15000, // Timeout 15 seconds
    url,
    paramsSerializer: {
      indexes: null,
      serialize: (params: Record<string, any>) => {
        return Object.keys(params)
          .map(key => key + '=' + (params[key] === 'null' || params[key] === 'undefined' ? '' : params[key] || ''))
          .join('&');
      },
    },
  }; 

  if (isBlob) {
    axiosProps.responseType = 'blob';
  }

  if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put' || method.toLowerCase() === 'delete') {
    axiosProps.data = requestData;
  } else if (method.toLowerCase() === 'get') {
    axiosProps.params = requestData;
  }

  return axiosInstance(axiosProps)
    .then((response: any) => {
      return response || {};
    })
    .catch((err: AxiosError) => {
      const { response } = err;
      return response || {};
    });
 
};
