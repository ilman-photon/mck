import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import gifImage from "../../public/images/FT-2593651-0423 Foster & Thrive Animated gif_circle.gif";
import Image from "next/image";
function TermsComponent() {
  const [apiRespond, setApiRespond] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  function fetchTermsAndCondition() {
    return axios.get(
      `${process.env.API_URL}/api/episerver/v3.0/content?ContentUrl=${process.env.API_URL}/en/generic/Terms-of-Use/&expand=*`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );
  }

  useEffect(() => {
    setIsLoading(true);
    fetchTermsAndCondition()
      .then((res) => {
        setApiRespond(res);
      })
      .catch((e: Error | AxiosError) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  useEffect(() => {
    document.title = apiRespond?.data[0]?.title.value || "Terms of Use";
  }, [apiRespond]);

  return (
    <div className="terms container flex flex-col lg:p-72 p-4 pt-0 pb-0 mx-auto lg:mt-36 mt-16">
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
            {apiRespond?.data[0]?.title.value}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: apiRespond?.data[0]?.description.value,
            }}
          ></div>
        </>
      )}
    </div>
  );
}

export default TermsComponent;
