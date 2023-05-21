import { useEffect } from "react";
import SignUpComponent from "../signup";
import { useRouter } from "next/router";

export default function HomePageSectionComponent({ sectionData }: any) {
  const router = useRouter();

  const handleCTABtn = (url: string) => {
    router.push({
      pathname: url,
    });
  };

  const signfrom = (
    <div className="p-5 lg:p-16 my-auto inner-col image-form form-grid-none grid md:grid-cols-2">
      <div className="">
        <img className="w-full h-full" src="images/email_signup.png" alt="" />
      </div>
      <div className="sign-up-form  orange-light p-20">
        <h4 className="text-4xl blue-txt text-left text-gtl-med ">
          Sign up Today!
        </h4>
        <p className="jsx-290076256 text-2xl text-sofia-reg text-center lg:text-left">
          Get the latest updates & promotions.
        </p>
        <SignUpComponent />
        <p className="hint">
          By signing up you agree to receive email marketing.
        </p>
      </div>
    </div>
  );
  return (
    <>
      <div>
        <div>{sectionData.video?.value?.url ? <div
          id="learning-section"
          className={`${sectionData?.assetPosition?.value === "Right"
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
              dangerouslySetInnerHTML={{ __html: sectionData?.description?.value }}
              tabIndex={0}
              id={sectionData?.description?.value}
            ></div>
            {sectionData?.buttonText?.value && (
              <div
                className={`${sectionData?.assetPosition?.value === "Right" ? "mx-auto" : "ml-0"
                  } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-0`}
                style={{
                  backgroundColor: `${sectionData?.assetPosition?.value === "Right"
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
          : sectionData?.image?.value?.url ?
            <div
              id="learning-section"
              className={`${sectionData?.assetPosition?.value === "Right"
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
                  dangerouslySetInnerHTML={{ __html: sectionData?.description?.value }}
                  tabIndex={0}
                  id={sectionData?.description?.value}
                ></div>
                {sectionData?.buttonText?.value && (
                  <div
                    className={`${sectionData?.assetPosition?.value === "Right" ? "mx-auto" : "ml-0"
                      } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-0`}
                    style={{
                      backgroundColor: `${sectionData?.assetPosition?.value === "Right"
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
            </div> : null
        }</div>
      </div>
      {/* {sectionData?.map((ele: any) => {
        if (ele?.video?.value?.url) {
          return (
            <div
              id="learning-section"
              className={`${
                ele?.assetPosition?.value === "Right"
                  ? "flex-row-reverse text-center"
                  : "text-left"
              } container mx-auto grid lg:flex w-full lg:py-6 mb-6`}
              style={{ backgroundColor: ele?.backgroundColor?.value }}
              key={ele?.image?.value?.id}
            >
              <div
                className={`${ele?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 pt-6 col-span-1`}
              >
                <video
                  className="w-full px-5 lg:px-0"
                  src={ele?.video?.value?.url}
                  controls
                />
              </div>
              <div className="lg:p-5 p-4 lg:pr-9 lg:pl-9 my-auto col-span-1 w-full lg:w-1/2">
                <h2
                  className="lg:pb-6 pb-4 text-2xl text-54 text-gtl-med text-left blue-txt"
                  tabIndex={0}
                  id={ele?.title?.value}
                >
                  {ele?.title?.value}
                </h2>
                <div
                  className="jsx-290076256 text-lg font-normal text-sofia-reg text-left lg:pb-6 pb-4 text-mcknormalgrey"
                  dangerouslySetInnerHTML={{ __html: ele?.description?.value }}
                  tabIndex={0}
                  id={ele?.description?.value}
                ></div>
                {ele?.buttonText?.value && (
                  <div
                    className={`${
                      ele?.assetPosition?.value === "Right" ? "mx-auto" : "ml-0"
                    } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-0`}
                    style={{
                      backgroundColor: `${
                        ele?.assetPosition?.value === "Right"
                          ? ele?.buttonColorCode?.value
                          : ele?.buttonColorCode?.value
                      }`,
                    }}
                    tabIndex={0}
                    id={ele?.buttonText?.value}
                    role="button"
                    onClick={() => handleCTABtn(ele?.buttonUrl?.value)}
                  >
                    {ele?.buttonText?.value}
                  </div>
                )}
              </div>
            </div>
          );
        } else if (ele?.image?.value?.url) {
          return (
            <div
              id="learning-section"
              className={`${
                ele?.assetPosition?.value === "Right"
                  ? "flex-row-reverse text-center"
                  : "text-left"
              } container mx-auto grid lg:flex w-full lg:py-6 mb-6`}
              style={{ backgroundColor: ele?.backgroundColor?.value }}
              key={ele?.image?.value?.id}
            >
              <div
                className={`${ele?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:px-9 lg:pt-0 pt-6 col-span-1`}
              >
                <img
                  className="w-full px-5 lg:px-0"
                  src={ele?.image?.value?.url}
                  tabIndex={0}
                  id={ele?.image?.value?.url}
                  alt="learning image"
                />
              </div>
              <div className="lg:p-5 p-4 lg:pr-9 lg:pl-9 my-auto col-span-1 w-full lg:w-1/2">
                <h2
                  className="lg:pb-6 pb-4 text-2xl text-54 text-gtl-med text-left blue-txt"
                  tabIndex={0}
                  id={ele?.title?.value}
                >
                  {ele?.title?.value}
                </h2>
                <div
                  className="jsx-290076256 text-lg font-normal text-sofia-reg text-left lg:pb-6 pb-4 text-mcknormalgrey"
                  dangerouslySetInnerHTML={{ __html: ele?.description?.value }}
                  tabIndex={0}
                  id={ele?.description?.value}
                ></div>
                {ele?.buttonText?.value && (
                  <div
                    className={`${
                      ele?.assetPosition?.value === "Right" ? "mx-auto" : "ml-0"
                    } jsx-290076256 w-[139px] leading-5 pd-12 h-[44px] text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-0`}
                    style={{
                      backgroundColor: `${
                        ele?.assetPosition?.value === "Right"
                          ? ele?.buttonColorCode?.value
                          : ele?.buttonColorCode?.value
                      }`,
                    }}
                    tabIndex={0}
                    id={ele?.buttonText?.value}
                    role="button"
                    onClick={() => handleCTABtn(ele?.buttonUrl?.value)}
                  >
                    {ele?.buttonText?.value}
                  </div>
                )}
              </div>
            </div>
          );
        }
      })} */}
    </>
  );
}
