import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

function RecommendationalProductComponent({ sectionData }: any) {
  const router = useRouter();
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(true);
  const dataFetchedRef = useRef(false);

  function idRequests() {
    return sectionData[0]?.contentBlockArea?.value?.map((item: any) => {
      return axios.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/${item?.contentLink?.id}`,
        {
          headers: {
            "Accept-Language": "en",
          },
        }
      );
    });
  }

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    axios
      .all(idRequests())
      .then((responses) => {
        setLoading(false);
        setResponse(responses);
      })
      .catch((error) => {
        setLoading(true);
      });
  }, []);

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: "",
    });
  };

  return (
    <div id="promotion-container" className="container mx-auto lg:px-14">
      <div className="pramotion-product-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 [&>*:nth-last-child(1):nth-child(odd)]:col-span-2">
          {!loading &&
            response &&
            response.map((ele: any, index: number) => {
              return (
                <div
                  className="bg-color lg:m-3 m-0 lg:p-9 p-4 mb-4"
                  key={ele?.data?.contentLink?.id}
                >
                  <style jsx>{`
                    .bg-color {
                      background-color: ${ele?.data?.backgroundColor?.value};
                    }
                  `}</style>
                  <div className="w-full lg:w-44 lg:mb-8 mb-4">
                    <img
                      // id="logo"
                      className="h-auto max-w-fit mx-auto w-80"
                      src={ele?.data?.imageTitle?.value?.url}
                      alt={ele?.data?.title?.value} tabIndex={0} id={ele?.data?.imageTitle?.value?.url}
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:pr-3 my-auto text-justify">
                    <div className="mx-auto my-auto lg:h-60 lg:w-48 lg:pr-4 pb-4 lg:pb-0 object-contain col-span-1">
                      <img
                        //id="image"
                        className="mx-auto lg:my-auto"
                        src={ele?.data?.image?.value.url} tabIndex={0} id={ele?.data?.image?.value.url} alt="promotion image"
                      />
                    </div>
                    <div id="p-text" className="text-justify pr-0 lg:pr-9  col-span-2">
                      <div
                        className="text-lg text-sofia-reg text-center text-mcknormalgrey font-normal col-span-2 lg:text-left pb-4"
                        dangerouslySetInnerHTML={{
                          __html: ele?.data?.description?.value,
                        }} tabIndex={0} id={ele?.data?.description?.value}
                      ></div>
                    </div>
                  </div>
                  <div
                    //id="cta-btn"
                    className="lg:min-w-[139px] w-max leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex  lg:ml-auto lg:mr-9 mx-auto"
                    onClick={() => handleCTABtn(ele?.data?.buttonUrl?.value)} tabIndex={0} role="button" id={ele?.data?.buttonText?.value}
                  >
                    {ele?.data?.buttonText?.value}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default RecommendationalProductComponent;
