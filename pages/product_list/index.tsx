import useAxios from "@/hooks/useApi";
import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import CarouselComponent from "@/components/carousel";
import { useEffect } from "react";
import axios, { AxiosError } from "axios";

function ProductListPage() {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/home/&expand=*&Select=blockArea",
    headers: {
      "Accept-Language": "en",
    },
  });

  function filteredData(valueType: string) {
    return response?.data[0]?.blockArea?.expandedValue?.filter((ele: any) => {
      return ele.contentType.some((arrEle: string) => {
        return arrEle == valueType;
      });
    });
  }

  function FetchProducts() {
    const res = axios.get(
      `http://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/search/content?filter=genderCategory/value/name eq 'Male'`,
      {
        headers: {
          "Accept-Language": "en",
        },
      }
    );

    console.log("res", res);

    return res;
  }

  useEffect(() => {
    FetchProducts()
      .then((res) => {
        console.log("fetch", res);
      })
      .catch((e: Error | AxiosError) => console.log(e));
  }, []);

  return (
    <>
      <HeaderComponent />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && response && (
        <CarouselComponent sectionData={filteredData("CarouselBlock")} />
      )}
      <div>PLP</div>
      <FooterComponent />
    </>
  );
}

export default ProductListPage;
