import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';;

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

  const headers: {
    'Accept-Language': string
    'Content-Type': string;
    Authorization?: string;
  } = {
    'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json',
    "Accept-Language":'en'
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

  return axios(axiosProps)
    .then(response => {
      return response || {};
    })
    .catch((err: AxiosError) => {
      const { response } = err;
      return response || {};
    });
};
