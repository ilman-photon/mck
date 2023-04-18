import useAxios from "@/hooks/useApi";

export default function LearningSectionComponent() {
  const { response, error, loading } = useAxios({
    method: "GET",
    url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/home/&expand=*",
    headers: {
      "Accept-Language": "en",
    },
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading &&
        !error &&
        response &&
        response?.data[0]?.blockArea?.expandedValue?.map((ele) => {
          return (
            <div
              className="container mx-auto grid md:grid-cols-2 w-full"
              key={ele?.image?.value?.id}
            >
              <div className="h-auto w-full p-5 lg:px-20 lg:my-10">
                <img src={ele?.image?.value?.url} />
              </div>
              <div className="p-5 lg:p-16 my-auto">
                <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">
                  {ele?.name}
                </h2>
                <p className="text-base text-sofia-reg lg:pr-5 py-5 text-center lg:text-left">
                  {ele?.description?.value}
                </p>
                <div className="btn w-[124px] h-[44px] mx-auto lg:mx-0">
                  {ele?.buttonText?.value}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
