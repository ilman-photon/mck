import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from 'isomorphic-dompurify';

function PrivacyComponent() {
  const [apiRespond, setApiRespond] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  function fetchPrivacyNotice() {
    return axiosInstance.get(
      `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/privacy-notice/&expand=*`);
  }

  useEffect(() => {
    setIsLoading(true); // Set loading to true before making the API request
    fetchPrivacyNotice()
      .then((res) => {
        console.info("Get in", res);
        setApiRespond(res);
      })
      .catch((e: Error | AxiosError) => console.log(e))
      .finally(() => {
        setIsLoading(false); // Set loading to false when the API request is completed
      });
  }, []);

  useEffect(() => {
    // Set the lang attribute to "en" on the <html> element
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    // Set the title of the document dynamically
    document.title = DOMPurify.sanitize(apiRespond?.data[0]?.title?.value) || "Privacy Notice";
  }, [apiRespond]);

  return (
    <div className="privacypolicy container flex flex-col lg:p-72 lg:pb-0 p-4 pt-6 pb-0 mx-auto">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div
            className="relative"
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Image
              src={gifImage}
              alt="loading-image"
              width={400}
              height={400}
              loading="eager"
            />
          </div>
        </div>
      ) : (
        <>
          <h1 className="lg:text-54 text-27 text-gtl-med text-mckblue pb-3 text-center">
            {DOMPurify.sanitize(apiRespond?.data[0]?.title?.value)}
          </h1>
          <div
            className="text pb-6 font-medium text-2xl text-mckblue text-gtl-med"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(apiRespond?.data[0]?.description?.value),
            }}
          ></div>
        </>
      )}
    </div>
  );
}

export default PrivacyComponent;
