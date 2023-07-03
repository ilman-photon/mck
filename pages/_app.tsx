import "@/styles/globals.scss";
import axios from "axios";

import type { AppProps } from "next/app";
import { useLayoutEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const generateAccessToken = async () => {
    try {
      if(typeof window !== 'undefined'){
        const gettoken = localStorage.getItem("access_token");
        if(!gettoken){
          const response = await axios.post('/api/get-token');
          console.log(response, 'response')
      
          const { access_token } = response.data;
          // Store the access token in localStorage or a secure cookie
          localStorage.setItem('access_token', access_token);
        }
      }
    } catch (error) {
      console.error('Failed to generate access token', error);
    }
  };

  useLayoutEffect(() => {generateAccessToken()},[])


  return <Component {...pageProps} />;
}
