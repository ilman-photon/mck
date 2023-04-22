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
      console.log("idRequests");
      return axios.get(
        `https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/${item?.contentLink?.id}`,
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
        console.log("RecommendationalProductComponent", responses);
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
    <div className="container mx-auto">
      <div className="pramotion-product-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-2">
          {!loading &&
            response &&
            response.map((ele: any, index: number) => {
              return (
                <div
                  className="bg-color m-3 p-9"
                  key={ele?.data?.contentLink?.id}
                >
                  <style jsx>{`
                    .bg-color {
                      background-color: ${ele?.data?.backgroundColor?.value};
                    }
                  `}</style>
                  <div className="logo-img mb-3">
                    <img
                      className="h-auto max-w-full"
                      src={ele?.data?.imageTitle?.value?.url}
                      alt={ele?.data?.title?.value}
                    />
                  </div>
                  <div className="lg:flex grid grid-cols-none lg:grid-cols-3 gap-4 pr-3 my-auto text-justify">
                    <div className="mx-auto my-auto h-full w-full pr-4">
                      <img
                        className="my-auto h-full w-full"
                        src={ele?.data?.image?.value.url}
                      />
                    </div>
                    <div className="text-justify pr-9">
                      <div className="text-lg text-sofia-reg text-center col-span-2 lg:text-left"
                        dangerouslySetInnerHTML={{
                          __html: ele?.data?.description?.value,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="w-[124px] h-[44px] m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex  ml-0 lg:ml-auto mr-9"
                    onClick={() =>
                      handleCTABtn(ele?.data?.buttonUrl?.value)
                    }
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
