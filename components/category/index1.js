import axios from "axios";
import { useEffect, useState } from "react";
export default function CategoryComponent({ sectionData }) {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);

  function idRequests() {
    return sectionData[0]?.contentBlockArea?.value?.map((item) => {
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
    axios
      .all(idRequests())
      .then((responses) => {
        setLoading(false);
        setResponse(responses);
        console.log("category", response);
      })
      .catch((error) => {
        setLoading(true);
      });
  }, []);

  return (
    <div className="container w-full mx-auto my-10 lg:my-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {loading && <p>Loading...</p>}

      {!loading &&
        response &&
        response.map((item) => {
          return (
            <div key={item?.data?.contentLink?.id}>
              <div className="mx-auto w-36 lg:w-52 h-36 lg:h-52 border">
                <style jsx>{`
                  .border {
                    border: 2px solid ${item?.data?.backgroundColor?.value};
                  }
                `}</style>
                <img src={item?.data?.productCategoryImage?.value?.url} />
              </div>
              <div className="text-center text-gtl-med text-xl lg:text-2xl mt-7 lg:mt-10 text-mckblue">
                {item?.data?.name}
              </div>
              <div
                className="text-center text-sofia-reg w-3/4 mx-auto text-base lg:text-lg text-mcknormalgrey"
                dangerouslySetInnerHTML={{
                  __html: item?.data?.productCategoryDescription?.value,
                }}
              ></div>
            </div>
          );
        })}
    </div>
  );
}
