import { useEffect } from "react";
import SignUpComponent from "../signup";

export default function LearningSectionComponent({ sectionData }) {
  useEffect(() => {
    console.log("LearningSectionComponent", sectionData);
    console.log("hoi", sectionData[3].contentBlockArea.value[0].contentLink.id);
  });

  // const data = sectionData.name.contentBlockArea.value;
  // console.log(data);

  const signfrom = <div className="p-5 lg:p-16 my-auto inner-col image-form form-grid-none grid md:grid-cols-2" >
    <div className="">
      <img
        className="w-full h-full"
        src="images/email_signup.png"
        alt=""
      />
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
  </div >


  return (
    <>
      {sectionData?.map((ele, index) => {
        console.log("ele", ele);
        return (
          <div
            className={`${ele?.assetPosition?.value === "Right" ? "flex-row-reverse" : ""
              } container mx-auto grid lg:flex w-full`}
            key={ele?.image?.value?.id}
          >

            <div className={`${ele?.assetPosition?.value} w-full lg:w-1/2 h-auto lg:py-9 lg:px-9 col-span-1`}>
              {ele?.name === "Sign up & Save" ?
                <div className="m-5 lg:m-0 my-auto inner-col form-grid-none grid md:grid-cols-2 lg:grid-cols-2 border-mcknormalgrey border rounded-lg" >
                  <div className="w-full">
                    <img
                      className="w-full h-full"
                      src="images/email_signup.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full bg-mcklightyellow rounded rounded-r-xl rounded-b-xl px-6 py-6">
                    <h4 className="text-4xl blue-txt text-left text-gtl-med ">
                      Sign up Today!
                    </h4>
                    <p className="text-2xl text-sofia-reg text-center lg:text-left pt-3 font-bold text-mcknormalgrey">
                      Get the latest updates & promotions.
                    </p>
                    <SignUpComponent />
                    <p className="hint py-3">
                      By signing up you agree to receive email marketing.
                    </p>
                  </div>
                </div > : <img className="w-full px-5 lg:px-0" src={ele?.image?.value?.url} />}
            </div>
            <div className="p-5 lg:pr-9 lg:pl-9 my-auto col-span-1 w-full lg:w-1/2">
              <h2 className="pb-6 text-2xl lg:text-54 text-gtl-med text-center lg:text-left blue-txt">
                {ele?.title?.value}
              </h2>
              <div
                className="jsx-290076256 text-2xl text-sofia-reg text-center lg:text-left pb-6"
                dangerouslySetInnerHTML={{ __html: ele?.description?.value }}
              >
              </div>
              {ele?.buttonText?.value && (
                <div className="jsx-290076256 w-[124px] h-[44px] m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex lg:ml-0">
                  {ele?.buttonText?.value}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
