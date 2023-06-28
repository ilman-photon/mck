import FooterComponent from "@/components/footer";
import WhereComponent from "@/components/where_to_buy";
import HeaderComponent from "@/components/header";
import React from "react";
import GoogleTagManager from "@/components/google_tag_manager";
import Head from "next/head";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

function WhereToBuy() {
  const [storeSettings,setStoreSettings] = useState<any>()
    useEffect(() => {
        axios.get(
         `${process.env.API_URL}/api/episerver/v3.0/content/?ContentUrl=${process.env.API_URL}/en/store-settings/&expand=%2a`
       )
         .then(res => {
            setStoreSettings(res.data)
           
         })
         .catch(error => {
           console.error('Error fetching API key:', error);
         });
     }, []);
    return (
        <>
            <Head>
                <title>McKesson</title>
                <link rel="icon" href="/favicon_mck.ico" />
            </Head>
            <GoogleTagManager />
            <div className="wrapper">
                <HeaderComponent />
                {storeSettings?.length>0 ? 
                <WhereComponent  storeSettings ={storeSettings}/>
                :null}
                <FooterComponent />
            </div>
        </>
    )

}
export default WhereToBuy;