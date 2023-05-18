import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function CategoryComponent({ sectionData }) {
  const router = useRouter();
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);

  function idRequests() {
    return sectionData[0]?.contentBlockArea?.value?.map((item) => {
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

  function handleClickOnCategory(url) {
    let f = "?filter=";
    let splitPath = url !== null ? url?.split(f) : "";
    router.push({
      pathname: splitPath[0],
      query: {
        filter: splitPath[1],
      },
    });
  }

  return (
    <div className="container w-full mx-auto my-6 mb-0 lg:mt-20 lg:mb-12 grid grid-cols-2 gap-4 lg:grid-cols-4 px-4 lg:px-0">
      {loading && <p>Loading...</p>}

      {!loading &&
        response &&
        response.map((item) => {
          return (
            <div
              id="category"
              key={item?.data?.contentLink?.id}
              className="mb-6 cursor-pointer"
            >
              <div
                className="mx-auto w-36 lg:w-52 h-36 lg:h-52"
                onClick={() =>
                  handleClickOnCategory(item?.data?.productCategoryUrl?.value)
                }
              >
                <style jsx>{`
                  .border {
                    border: 2px solid ${item?.data?.backgroundColor?.value};
                  }
                `}</style>
                <img
                  src={item?.data?.productCategoryImage?.value?.url}
                  alt="category image"
                  id={item?.data?.productCategoryImage?.value?.url}
                  tabIndex={0}
                />
              </div>
              <div
                className="text-center text-gtl-med text-xl lg:text-2xl mt-6 lg:mt-10 text-mckblue cursor-pointer"
                tabIndex={0}
                id={item?.data?.name}
              >
                {item?.data?.name}
              </div>
              <div
                className="text-center text-sofia-reg font-normal w-3/4 mx-auto text-base lg:text-lg text-mcknormalgrey"
                dangerouslySetInnerHTML={{
                  __html: item?.data?.productCategoryDescription?.value,
                }}
                tabIndex={0}
                id={item?.data?.productCategoryDescription?.value}
              ></div>
            </div>
          );
        })}
    </div>
  );
}
