import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import DOMPurify from 'isomorphic-dompurify';

export default function CategoryComponent({ sectionData }: any) {
  const router = useRouter();
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [isNull,setIsNull] = useState(false)
  
  function idRequests() {
    return sectionData[0]?.contentBlockArea?.value?.map((item: any) => {
      return axiosInstance.get(
        `${process.env.API_URL}/api/episerver/v3.0/content/${item?.contentLink?.id}`);
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
        console.log("error", error);
        setLoading(true);
      });
  }, []);

  function handleClickOnCategory(url: string) {
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
    <>
    {!loading && response && !isNull && (
      <div className="container w-full mx-auto my-6 mb-0 lg:mt-20 lg:mb-12 px-4 lg:px-0">
        <div className="flex flex-wrap justify-center">
          {response.map((item: any, index: number) =>{
            if(!item?.data?.productCategoryImage?.value?.url){
               setIsNull(true)
            }
            return (
              <div
                key={item?.data?.contentLink?.id}
                role="button"
                  tabIndex={0}
                  onClick={() =>
                    handleClickOnCategory(item?.data?.productCategoryUrl?.value)
                  }
                className={`mb-6 cursor-pointer ${
                  index < 4 ? "w-1/2 lg:w-1/4" : "w-full lg:w-1/2"
                }`}
              >
                <div
                  id={`category_0${index}`}
                  className="mx-auto w-36 lg:w-52 h-36 lg:h-52"
                  
                >
                  <style jsx>{`
                    .border {
                      border: 2px solid ${item?.data?.backgroundColor?.value};
                    }
                  `}</style>
                  <img
                    src={DOMPurify.sanitize(item?.data?.productCategoryImage?.value?.url)}
                    alt={DOMPurify.sanitize(`category_${index}`)}
                    id={item?.data?.productCategoryImage?.value?.url}
                    
                  />
                </div>
                <div
                  className="text-center text-gtl-med text-xl lg:text-2xl mt-6 lg:mt-10 text-mckblue cursor-pointer text-oneline-ellipsis"
                  id={`category_name_0${index}`}
                >
                  <Link
                    href={`/selected_product_category?type=${item?.data?.productCategoryType?.value[0].name}`}
                  >
                    {DOMPurify.sanitize(item?.data?.name)}
                  </Link>
                </div>
                <div
                  
                  className="text-center text-sofia-reg font-normal w-full lg:w-3/4 xl:w-3/4 mx-auto text-base lg:text-lg text-mcknormalgrey text-heading-ellipsis"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item?.data?.productCategoryDescription?.value),
                  }}
                  id={`category_Titel_0${index}`}
                ></div>
              </div>
            )
          } )}
        </div>
    </div>
      )}
    </>
  );
}
