import { useRouter } from "next/router";

export default function ImageVideoAndTextSection({ sectionData }: any) {
  const router = useRouter();

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  return (
    <>
      <div>
        <div>
          {sectionData.video?.value?.url ? (
            <div
              id="learning-section"
              className={`${
                sectionData?.assetPosition?.value === "Right"
                  ? "flex-row-reverse text-center"
                  : "text-left"
              } container mx-auto grid lg:flex w-full lg:py-6 mb-6`}
              style={{ backgroundColor: sectionData?.backgroundColor?.value }}
              key={sectionData?.image?.value?.id}
            >
              <div
                className={`${sectionData?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 pt-6 col-span-1`}
              >
                <video
                  className="w-full px-5 lg:px-0"
                  src={sectionData?.video?.value?.url}
                  controls
                />
              </div>
              <div className="lg:p-5 p-4 lg:pr-9 lg:pl-9 my-auto col-span-1 w-full lg:w-1/2">
                <h2
                  className="lg:pb-6 pb-4 text-2xl text-54 text-gtl-med text-left blue-txt"
                  tabIndex={0}
                  id={sectionData?.title?.value}
                >
                  {sectionData?.title?.value}
                </h2>
                <div
                  className="jsx-290076256 text-lg font-normal text-sofia-reg text-left lg:pb-6 pb-4 text-mcknormalgrey"
                  dangerouslySetInnerHTML={{
                    __html: sectionData?.description?.value,
                  }}
                  tabIndex={0}
                  id={sectionData?.description?.value}
                ></div>
                {sectionData?.buttonText?.value && (
                  <div
                    className={`${
                      sectionData?.assetPosition?.value === "Right"
                        ? "mx-auto"
                        : "ml-0"
                    } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-0`}
                    style={{
                      backgroundColor: `${
                        sectionData?.assetPosition?.value === "Right"
                          ? sectionData?.buttonColorCode?.value
                          : sectionData?.buttonColorCode?.value
                      }`,
                    }}
                    tabIndex={0}
                    id={sectionData?.buttonText?.value}
                    role="button"
                    onClick={() => handleCTABtn(sectionData?.buttonUrl?.value)}
                  >
                    {sectionData?.buttonText?.value}
                  </div>
                )}
              </div>
            </div>
          ) : sectionData?.image?.value?.url ? (
            <div
              id="learning-section"
              className={`${
                sectionData?.assetPosition?.value === "Right"
                  ? "flex-row-reverse text-center"
                  : "text-left"
              } container mx-auto grid lg:flex w-full lg:py-6 mb-6`}
              style={{ backgroundColor: sectionData?.backgroundColor?.value }}
              key={sectionData?.image?.value?.id}
            >
              <div
                className={`${sectionData?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 pt-6 col-span-1`}
              >
                <img
                  className="w-full px-5 lg:px-0"
                  src={sectionData?.image?.value?.url}
                  tabIndex={0}
                  id={sectionData?.image?.value?.url}
                  alt="learning image"
                />
              </div>
              <div className="lg:p-5 p-4 lg:pr-9 lg:pl-9 my-auto col-span-1 w-full lg:w-1/2">
                <h2
                  className="lg:pb-6 pb-4 text-2xl text-54 text-gtl-med text-left blue-txt"
                  tabIndex={0}
                  id={sectionData?.title?.value}
                >
                  {sectionData?.title?.value}
                </h2>
                <div
                  className="jsx-290076256 text-lg font-normal text-sofia-reg text-left lg:pb-6 pb-4 text-mcknormalgrey"
                  dangerouslySetInnerHTML={{
                    __html: sectionData?.description?.value,
                  }}
                  tabIndex={0}
                  id={sectionData?.description?.value}
                ></div>
                {sectionData?.buttonText?.value && (
                  <div
                    className={`${
                      sectionData?.assetPosition?.value === "Right"
                        ? "mx-auto"
                        : "ml-0"
                    } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-0`}
                    style={{
                      backgroundColor: `${
                        sectionData?.assetPosition?.value === "Right"
                          ? sectionData?.buttonColorCode?.value
                          : sectionData?.buttonColorCode?.value
                      }`,
                    }}
                    tabIndex={0}
                    id={sectionData?.buttonText?.value}
                    role="button"
                    onClick={() => handleCTABtn(sectionData?.buttonUrl?.value)}
                  >
                    {sectionData?.buttonText?.value}
                  </div>
                )}
              </div>
            </div>
          ) : sectionData.backgroundImage?.expandedValue?.url ? (
            <>
              <img
                id="image0_992_146329"
                src={sectionData.backgroundImage?.expandedValue?.url}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
