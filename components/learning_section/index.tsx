import SignUpComponent from "../signup";
import useAxios from "@/hooks/useApi";

export default function LearningSectionComponent() {
  // const { response, error, loading } = useAxios({
  //   method: "GET",
  //   url: "https://mcco02mstrub73kinte.dxcloud.episerver.net/api/episerver/v3.0/content?ContentUrl=https://mcco02mstrub73kinte.dxcloud.episerver.net/en/home/&expand=*",
  //   headers: {
  //     "Accept-Language": "en",
  //   },
  // });

  return (
    <>
      {/* {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!loading &&
        !error &&
        response &&
        response?.data[0]?.blockArea?.expandedValue?.map((ele: any) => {
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
                <p className="jsx-290076256 text-lg text-sofia-reg text-center lg:text-left">
                  {ele?.description?.value}
                </p>
                <div className="btn w-[124px] h-[44px] mx-auto lg:mx-0">
                  {ele?.buttonText?.value}
                </div>
              </div>
            </div>
          );
        })} */}

      <div className="container mx-auto grid md:grid-cols-2 w-full">
        <div className="p-5 lg:p-16 my-auto">
          <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">
            Why Foster & Thrive
          </h2>
          <p className="jsx-290076256 text-lg text-sofia-reg text-center lg:text-left">
            At Foster & Thrive we believe over the counter products should go
            beyond the box, and that wellness and being well go hand in hands.
            So we make our own products with high quality ingredients.
          </p>
          <div className="jsx-290076256 w-[124px] h-[44px] m-3 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">
            LEARN MORE
          </div>
        </div>
        <div className="h-auto w-full p-5 lg:px-20 lg:my-10">
          <img src="images/desktop_why_foster_thrive.png" />
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 w-full green-light">
        <div className="h-auto w-full p-5 lg:px-20 lg:my-10">
          <img src="images/desktop_where_to_buy.png" />
        </div>
        <div className="p-5 lg:p-16 my-auto">
          <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">
            Where to buy
          </h2>
          <p className="jsx-290076256 text-lg text-sofia-reg text-center lg:text-left">
            You can find our products at many of the major outlets including
            Walmart, CVS, Wallgreens, Amazon, Target and more.
          </p>
          <div className="jsx-290076256 w-[124px] h-[44px] m-3 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">
            LEARN MORE
          </div>
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 w-full">
        <div className="p-5 lg:p-16 my-auto">
          <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">
            Quality That Matters
          </h2>
          <p className="jsx-290076256 text-lg text-sofia-reg text-center lg:text-left">
            In health as in life. You get out what you put in. At Foster &
            Thrive, we put care in all we do. With products formulated for your
            needs. Fit your budget and made to make you well. Because when you
            start with good. You get better. Foster & Thrive. With you for life.
          </p>
        </div>
        <div className="h-auto w-full p-5 lg:px-20 lg:my-10">
          <img src="images/desktop_where_to_buy.png" />
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 w-full">
        <div className="p-5 lg:p-16 my-auto inner-col image-form form-grid-none grid md:grid-cols-2">
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
            <p className="jsx-290076256 text-lg text-sofia-reg text-center lg:text-left">
              Get the latest updates & promotions.
            </p>
            <SignUpComponent />
            <p className="hint">
              By signing up you agree to receive email marketing.
            </p>
          </div>
        </div>
        <div className="h-auto w-full px-20 my-auto">
          <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">
            Sign up & Save
          </h2>
          <p className="jsx-290076256 text-lg text-sofia-reg text-center lg:text-left">
            Sign up today to receive tips, personal content, and exclusive
            offers from Foster & Thrive.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 w-full orange-light">
        <div className="p-5 lg:p-16 my-auto">
          <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">
            Care that’s uniquely you
          </h2>
          <p className="jsx-290076256 text-lg text-sofia-reg text-center lg:text-left">
            At Foster & Thrive, we know that care can take many forms. We’ve
            considered care from all angles., so that you can make sure you care
            for yourself in the best possible way. Your health is your business,
            and helping you be your best is ours.
          </p>
        </div>
        <div className="h-auto w-full p-5 lg:px-20 lg:my-10">
          <img src="images/desktop_care_image.png" />
        </div>
      </div>

      {/* <div className="w-full container pb-20 text-center mx-auto">
        <h5 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">
          Products worthy of you and yours
        </h5>
        <p className=" mx-auto w-full lg:w-1/2 px-3 text-lg text-sofia-reg grey-txt">
          When it comes to caring for those you love, you need products that you
          can trust to help heal and thrive. At Foster & Thrive, consistent
          quality and efficiency is our top priority.
        </p>
      </div> */}
      <div className="container mx-auto">
        <div className="pramotion-product-container">
          <div className="grid grid-cols-none md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-mckthingrey m-3 p-9">
              <div className="logo-img mb-3">
                <img
                  className="h-auto max-w-full"
                  src="images/F&T_logo_acute.png"
                />
              </div>
              <div className="grid lg:flex grid-cols-none lg:grid-cols-3 gap-4 pr-3 my-auto text-justify">
                <div className="pr-3 my-auto">
                  <img
                    className="h-auto w-auto"
                    src="images/allergy_relief.png"
                  />
                </div>
                <div className="text-lg text-sofia-reg text-center col-span-2 lg:text-left">
                  <p>
                    Allergy relief that starts working fast on the first day you
                    take it. Each antihistamine tablet contains 10 mg Cetirizine
                    HCl to relieve your worst allergy symptoms, indoors and out,
                    for a full 24 hours.
                  </p>
                </div>
              </div>              
              <div className="jsx-290076256 w-[124px] h-[44px] m-3 text-sofia-bold justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer flex ml-0 lg:ml-auto">
                    Where to buy
                  </div>
            </div>

            <div className="yellow-bg m-3 p-9">
              <div className="logo-img mb-3">
                <img
                  className="h-auto max-w-full"
                  src="images/F&T_logo_preventative.png"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                <div className="pr-3 my-auto">
                  <img className="h-auto w-auto" src="images/vitamin_D3.png" />
                </div>
                <div className="text-justify">
                  <p>
                    Get an extra strength dose for bone, teeth, muscle, and
                    immune health support. Foster & Thrieve Extra Strength
                    Vitamin D3 is formulated with 5000 IU (125 mcg) for those
                    with higher Vitamin D needs and/or deficiency as determined
                    by healthcare professionals.
                  </p>
                  <div className="jsx-290076256 w-[124px] h-[44px] m-3 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">
                    Where to buy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <div className="grey-light-bg m-3 p-9">
              <div className="logo-img mb-3">
                <img
                  className="h-auto max-w-full"
                  src="images/F&T_logo_every_day.png"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                <div className="pr-3 my-auto">
                  <img
                    className="h-auto w-auto"
                    src="images/adhesive_bandages.png"
                  />
                </div>
                <div className="text-justify">
                  <p>
                    For every ouch, oops, and uh-oh, there are Foster & Thrive
                    Adhesive Bandages. Find the right adhesive bandage for your
                    specific needs.
                  </p>
                  <div className="jsx-290076256 w-[124px] h-[44px] m-3 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">
                    Where to buy
                  </div>
                </div>
              </div>
            </div>

            <div className="grey-thick-bg  m-3 p-9">
              <div className="logo-img mb-3">
                <img
                  className="h-auto max-w-full"
                  src="images/F&T_logo_diagnostic.png"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                <div className="pr-3 my-auto">
                  <img
                    className="h-auto w-auto"
                    src="images/blood_pressure_monitor.png"
                  />
                </div>
                <div className="text-justify">
                  <p>
                    Get an extra strength dose for bone, teeth, muscle, and
                    immune health support. Foster & Thrieve Extra Strength
                    Vitamin D3 is formulated with 5000 IU (125 mcg) for those
                    with higher Vitamin D needs and/or deficiency as determined
                    by healthcare professionals.
                  </p>
                  <div className="jsx-290076256 w-[124px] h-[44px] m-3 text-sofia-bold flex justify-center items-center text-center text-white bg-mckblue hover:bg-mckblue-90 rounded-lg uppercase cursor-pointer">
                    Where to buy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
