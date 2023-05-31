import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

function RecommendationalProductComponent({ sectionData, indexs }: any) {
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
    const tempUrl = url.split("=")[1];
    const encodedValue = encodeURIComponent(tempUrl);
    const desiredURL = `/selected_product_category?filter=${encodedValue}/${encodedValue}`;
    router.push(desiredURL);
  };
  const tempResponse = [
    {
      data: {
        contentLink: {
          id: 133,
          workId: 0,
          guidValue: "1ab653f8-f0d8-47b8-9485-1348150e55c2",
          providerName: null,
          url: null,
          expanded: null,
        },
        name: "Foster & Thrive1",
        language: {
          link: null,
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: null,
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: null,
          displayName: "English",
          name: "en",
        },
        contentType: ["Block", "RecommendedProductItemsBlock"],
        parentLink: {
          id: 3,
          workId: 0,
          guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
          expanded: null,
        },
        routeSegment: null,
        url: null,
        changed: "2023-04-20T18:02:34Z",
        created: "2023-04-20T18:01:23Z",
        startPublish: "2023-04-20T18:02:34Z",
        stopPublish: null,
        saved: "2023-05-27T09:29:53Z",
        status: "Published",
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        internalTitle: {
          value: "<p>You partner in care.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        imageTitle: {
          value: {
            id: 262,
            workId: 0,
            guidValue: "7c0e3992-570f-455c-8ebf-803357bc620f",
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
            expanded: null,
          },
          propertyDataType: "PropertyContentReference",
        },
        description: {
          value:
            "<p>You&rsquo;re in touch with your health, able to pinpoint what you need. With Foster &amp; Thrive, you can easily target and treat your precise needs Test.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        image: {
          value: {
            id: 214,
            workId: 0,
            guidValue: "0dee127f-3e91-45d4-9599-973257e134f0",
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/allergy_relief-.png",
            expanded: null,
          },
          propertyDataType: "PropertyContentReference",
        },
        buttonText: {
          value: "SEE PRODUCTS",
          propertyDataType: "PropertyLongString",
        },
        buttonUrl: {
          value: "/selected_product_category?filter=Acute Care",
          propertyDataType: "PropertyUrl",
        },
        buttonColor: {
          value: "#001A71",
          propertyDataType: "PropertyLongString",
        },
        backgroundColor: {
          value: "#CCD1E3",
          propertyDataType: "PropertyLongString",
        },
        backgroundImage: {
          value: null,
          propertyDataType: "PropertyContentReference",
        },
      },
      status: 200,
      statusText: "OK",
      headers: {
        "cache-control": "public, s-maxage=5, stale-while-revalidate=2",
        "content-type": "application/json; charset=utf-8",
      },
      config: {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false,
        },
        adapter: ["xhr", "http"],
        transformRequest: [null],
        transformResponse: [null],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {},
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en",
        },
        method: "get",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/133",
      },
      request: {},
    },
    {
      data: {
        contentLink: {
          id: 134,
          workId: 0,
          guidValue: "648f2bac-4508-49c0-80f4-2863e30953f5",
          providerName: null,
          url: null,
          expanded: null,
        },
        name: "Foster & Thrive2",
        language: {
          link: null,
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: null,
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: null,
          displayName: "English",
          name: "en",
        },
        contentType: ["Block", "RecommendedProductItemsBlock"],
        parentLink: {
          id: 3,
          workId: 0,
          guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
          expanded: null,
        },
        routeSegment: null,
        url: null,
        changed: "2023-04-20T18:04:41Z",
        created: "2023-04-20T18:03:32Z",
        startPublish: "2023-04-20T18:04:41Z",
        stopPublish: null,
        saved: "2023-05-20T13:07:26Z",
        status: "Published",
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        internalTitle: {
          value: "<p>Prepared for what&rsquo;s next.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        imageTitle: {
          value: {
            id: 262,
            workId: 0,
            guidValue: "7c0e3992-570f-455c-8ebf-803357bc620f",
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
            expanded: null,
          },
          propertyDataType: "PropertyContentReference",
        },
        description: {
          value:
            "<p>Everybody deserves optimal health, and nobody is immune to everything. With Foster &amp; Thrive, you can be prepared for almost anything.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        image: {
          value: {
            id: 200,
            workId: 0,
            guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            expanded: null,
          },
          propertyDataType: "PropertyContentReference",
        },
        buttonText: {
          value: "SEE PRODUCTS",
          propertyDataType: "PropertyLongString",
        },
        buttonUrl: {
          value: "/selected_product_category/?filter=Preventative Care",
          propertyDataType: "PropertyUrl",
        },
        buttonColor: {
          value: "#001A71",
          propertyDataType: "PropertyLongString",
        },
        backgroundColor: {
          value: "#FFEABC",
          propertyDataType: "PropertyLongString",
        },
        backgroundImage: {
          value: null,
          propertyDataType: "PropertyContentReference",
        },
      },
      status: 200,
      statusText: "OK",
      headers: {
        "cache-control": "public, s-maxage=5, stale-while-revalidate=2",
        "content-type": "application/json; charset=utf-8",
      },
      config: {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false,
        },
        adapter: ["xhr", "http"],
        transformRequest: [null],
        transformResponse: [null],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {},
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en",
        },
        method: "get",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/134",
      },
      request: {},
    },
    {
      data: {
        contentLink: {
          id: 134,
          workId: 0,
          guidValue: "648f2bac-4508-49c0-80f4-2863e30953f5",
          providerName: null,
          url: null,
          expanded: null,
        },
        name: "Foster & Thrive2",
        language: {
          link: null,
          displayName: "English",
          name: "en",
        },
        existingLanguages: [
          {
            link: null,
            displayName: "English",
            name: "en",
          },
        ],
        masterLanguage: {
          link: null,
          displayName: "English",
          name: "en",
        },
        contentType: ["Block", "RecommendedProductItemsBlock"],
        parentLink: {
          id: 3,
          workId: 0,
          guidValue: "e56f85d0-e833-4e02-976a-2d11fe4d598c",
          providerName: null,
          url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/",
          expanded: null,
        },
        routeSegment: null,
        url: null,
        changed: "2023-04-20T18:04:41Z",
        created: "2023-04-20T18:03:32Z",
        startPublish: "2023-04-20T18:04:41Z",
        stopPublish: null,
        saved: "2023-05-20T13:07:26Z",
        status: "Published",
        category: {
          value: [],
          propertyDataType: "PropertyCategory",
        },
        internalTitle: {
          value: "<p>Prepared for what&rsquo;s next.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        imageTitle: {
          value: {
            id: 262,
            workId: 0,
            guidValue: "7c0e3992-570f-455c-8ebf-803357bc620f",
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/ft_logo_acute.png",
            expanded: null,
          },
          propertyDataType: "PropertyContentReference",
        },
        description: {
          value:
            "<p>Everybody deserves optimal health, and nobody is immune to everything. With Foster &amp; Thrive, you can be prepared for almost anything.</p>",
          propertyDataType: "PropertyXhtmlString",
        },
        image: {
          value: {
            id: 200,
            workId: 0,
            guidValue: "86b7383a-4b4a-427e-b87c-d1ce8aa6404c",
            providerName: null,
            url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/globalassets/vitamin_d3.png",
            expanded: null,
          },
          propertyDataType: "PropertyContentReference",
        },
        buttonText: {
          value: "SEE PRODUCTS",
          propertyDataType: "PropertyLongString",
        },
        buttonUrl: {
          value: "/selected_product_category/?filter=Preventative Care",
          propertyDataType: "PropertyUrl",
        },
        buttonColor: {
          value: "#001A71",
          propertyDataType: "PropertyLongString",
        },
        backgroundColor: {
          value: "#FFEABC",
          propertyDataType: "PropertyLongString",
        },
        backgroundImage: {
          value: null,
          propertyDataType: "PropertyContentReference",
        },
      },
      status: 200,
      statusText: "OK",
      headers: {
        "cache-control": "public, s-maxage=5, stale-while-revalidate=2",
        "content-type": "application/json; charset=utf-8",
      },
      config: {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false,
        },
        adapter: ["xhr", "http"],
        transformRequest: [null],
        transformResponse: [null],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {},
        headers: {
          Accept: "application/json, text/plain, */*",
          "Accept-Language": "en",
        },
        method: "get",
        url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content/134",
      },
      request: {},
    },
  ];

  return (
    <div id="promotion-container" className="container mx-auto lg:pl-6">
      <div className="pramotion-product-container">
        <div className="md:grid lg:grid xl:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 [&>*:nth-last-child(1):nth-child(odd)]:col-span-2">
          {!loading &&
            tempResponse &&
            tempResponse.map((ele: any, index: number) => {
              let colSpan = "col-span-1 scale-80";
              let rowSpan = "";
              if (tempResponse.length === 1) {
                colSpan = "col-span-2";
              } else if (tempResponse.length % 2 === 1 && index === 0) {
                colSpan = "col-span-1";
                // rowSpan = "row-span-2";
              }
              return (
                <div
                  className={`bg-color  lg:p-9 xl:p-9 p-4 sm:m-0 sm:mb-4 sm:last:mb-0 sm:ml-4 lg:m-0 lg:mb-6 lg:ml-6 mb-4 bg-red odd:ml-0 ${colSpan} ${rowSpan} `}
                  key={ele?.data?.contentLink?.id}
                >
                  <style jsx>{`
                    .bg-color {
                      background-color: ${ele?.data?.backgroundColor?.value};
                    }
                  `}</style>

                  <div
                    className={`grid h-full ${
                      colSpan === "col-span-2" ? "place-items-center" : ""
                    }`}
                  >
                    <div className="w-full lg:w-44 lg:mb-8 mb-6 lg:min-h-57">
                      <img
                        className="h-auto lg:max-w-fit mx-auto lg:w-338 w-270"
                        src={ele?.data?.imageTitle?.value?.url}
                        alt={ele?.data?.imageTitle?.value?.url}
                        tabIndex={0}
                        id={"home-product-image" + indexs + index + 1}
                      />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 lg:gap-4 xl:gap-4 lg:pr-0 my-auto text-justify">
                      <div className="pb-4 lg:pb-0 col-span-1">
                        <div className="mx-auto my-auto lg:h-60 object-contain">
                          <img
                            className="mx-auto lg:my-auto"
                            src={ele?.data?.image?.value?.url}
                            tabIndex={0}
                            id={"home-product-image01" + indexs + index + 1}
                            alt="promotion image"
                            role="img"
                          />
                        </div>
                      </div>

                      <div
                        id={"p-text" + indexs + index + 1}
                        className={`text-justify pr-0 lg:pr-0 col-span-2 ${
                          colSpan === "col-span-2"
                            ? "flex justify-center items-center"
                            : ""
                        }`}
                      >
                        <div
                          className="text-lg text-sofia-reg text-mcknormalgrey font-normal text-left mb-4 text-sixcontent-ellipsis"
                          dangerouslySetInnerHTML={{
                            __html: ele?.data?.description?.value,
                          }}
                          tabIndex={0}
                          id={"p-text 01" + indexs + index + 1}
                        ></div>
                      </div>
                    </div>

                    {ele?.data?.buttonText?.value && (
                      <div
                        className="lg:min-w-[139px] w-max leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-auto lg:mr-0 ml-auto"
                        onClick={() =>
                          handleCTABtn(ele?.data?.buttonUrl?.value)
                        }
                        tabIndex={0}
                        role="button"
                        id={"home-product-button" + indexs + index + 1}
                        style={{
                          backgroundColor: ele?.data?.buttonColor?.value,
                        }}
                      >
                        {ele?.data?.buttonText?.value}
                      </div>
                    )}
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
