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
                      src=""
                      alt={ele?.data?.title?.value}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2">
                    <div className="pr-3 my-auto">
                      <img
                        className="h-auto w-auto"
                        src={ele?.data?.image?.value.url}
                      />
                    </div>
                    <div className="text-justify">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: ele?.data?.description?.value,
                        }}
                      ></div>
                      <div
                        className="w-36 text-center blue-bg rounded text-white align-middle py-3 mt-5 font-bold"
                        onClick={() =>
                          handleCTABtn(ele?.data?.buttonUrl?.value)
                        }
                      >
                        {ele?.data?.buttonText?.value}
                      </div>
                    </div>
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
