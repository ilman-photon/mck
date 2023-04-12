import { useEffect } from "react";
import styles from "@/styles/learningSection.module.scss";
import SignUpComponent from "../signup";

export default function LearningSectionComponent() {
  return (
    <>
      <div className="container mx-auto grid md:grid-cols-2 w-full">
        <div className="p-5 lg:p-16 my-auto">
          <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">Why Foster & Thrive</h2>
          <p className="text-base text-sofia-reg lg:pr-5 py-5 text-center lg:text-left">
            At Foster & Thrive we believe over the counter products should
            go beyond the box, and that wellness and being well go hand in
            hands. So we make our own products with high quality
            ingredients.
          </p>
          <div className="btn w-[124px] h-[44px] mx-auto lg:mx-0">LEARN MORE</div>
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
          <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">Where to buy</h2>
          <p className="text-base text-sofia-reg lg:pr-5 py-5 text-center lg:text-left">
            You can find our products at many of the major outlets including Walmart, CVS, Wallgreens, Amazon, Target and more.
          </p>
          <div className="btn w-[124px] h-[44px] mx-auto lg:mx-0">LEARN MORE</div>
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 w-full">
        <div className="p-5 lg:p-16 my-auto">
          <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">Quality That Matters</h2>
          <p className="text-base text-sofia-reg lg:pr-5 py-5 text-center lg:text-left">
            In health as in life. You get out what you put in. At Foster &
            Thrive, we put care in all we do. With products formulated for
            your needs. Fit your budget and made to make you well. Because
            when you start with good. You get better. Foster & Thrive. With
            you for life.
          </p>
        </div>
        <div className="h-auto w-full p-5 lg:px-20 lg:my-10">
          <img src="images/desktop_where_to_buy.png" />
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 w-full">
        <div className="p-5 lg:p-16 my-auto inner-col image-form form-grid-none grid md:grid-cols-2">
          <div className="">
            <img className="w-full h-full" src="images/email_signup.png" alt="" />
          </div>
          <div className="sign-up-form  orange-light p-20">
            <h4 className="text-4xl blue-txt text-left text-gtl-med ">Sign up Today!</h4>
            <p  className="text-base text-sofia-reg lg:pr-5 py-5 text-center lg:text-left">Get the latest updates & promotions.</p>
            <SignUpComponent />
            <p className="hint">
              By signing up you agree to receive email marketing.
            </p>
          </div>
        </div>
        <div className="h-auto w-full px-20 my-auto">
          <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">Sign up & Save</h2>
          <p className="text-base text-sofia-reg lg:pr-5 py-5 text-center lg:text-left">
            Sign up today to receive tips, personal content, and exclusive
            offers from Foster & Thrive.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 w-full orange-light">
        <div className="p-5 lg:p-16 my-auto">
          <h2 className="text-2xl lg:text-5xl text-gtl-med text-center lg:text-left blue-txt">Care that’s uniquely you</h2>
          <p className="text-base text-sofia-reg lg:pr-5 py-5 text-center lg:text-left">
            At Foster & Thrive, we know that care can take many forms. We’ve
            considered care from all angles., so that you can make sure you
            care for yourself in the best possible way. Your health is your
            business, and helping you be your best is ours.
          </p>
        </div>
        <div className="h-auto w-full p-5 lg:px-20 lg:my-10">
          <img src="images/desktop_care_image.png" />
        </div>
      </div>

      <div className="pramotional-container">
        <h5>Products worthy of you and yours</h5>
        <p>
          When it comes to caring for those you love, you need products that you
          can trust to help heal and thrive. At Foster & Thrive, consistent
          quality and efficiency is our top priority.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="pramotion-product-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <div className="product-container p-1">
              <div className="logo-img">
                <img
                  className="h-auto max-w-full"
                  src="images/F&T_logo_acute.png"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                <div className="left-col">
                  <img
                    className="h-auto max-w-full"
                    src="images/allergy_relief.png"
                  />
                </div>
                <div className="right-col">
                  <p>
                    Allergy relief that starts working fast on the first day you
                    take it. Each antihistamine tablet contains 10 mg Cetirizine
                    HCl to relieve your worst allergy symptoms, indoors and out,
                    for a full 24 hours.
                  </p>
                  <div className="btn">Where to buy</div>
                </div>
              </div>
            </div>

            <div className="product-container p-2">
              <div className="logo-img">
                <img
                  className="h-auto max-w-full"
                  src="images/F&T_logo_preventative.png"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                <div className="left-col">
                  <img
                    className="h-auto max-w-full"
                    src="images/vitamin_D3.png"
                  />
                </div>
                <div className="right-col">
                  <p>
                    Get an extra strength dose for bone, teeth, muscle, and
                    immune health support. Foster & Thrieve Extra Strength
                    Vitamin D3 is formulated with 5000 IU (125 mcg) for those
                    with higher Vitamin D needs and/or deficiency as determined
                    by healthcare professionals.
                  </p>
                  <div className="btn">Where to buy</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <div className="product-container p-3">
              <div className="logo-img">
                <img
                  className="h-auto max-w-full"
                  src="images/F&T_logo_every_day.png"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                <div className="left-col">
                  <img
                    className="h-auto max-w-full"
                    src="images/adhesive_bandages.png"
                  />
                </div>
                <div className="right-col">
                  <p>
                    For every ouch, oops, and uh-oh, there are Foster & Thrive
                    Adhesive Bandages. Find the right adhesive bandage for your
                    specific needs.
                  </p>
                  <div className="btn">Where to buy</div>
                </div>
              </div>
            </div>
            <div className="product-container p-4">
              <div className="logo-img">
                <img
                  className="h-auto max-w-full"
                  src="images/F&T_logo_diagnostic.png"
                />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2">
                <div className="left-col">
                  <img
                    className="h-auto max-w-full"
                    src="images/blood_pressure_monitor.png"
                  />
                </div>
                <div className="right-col">
                  <p>
                    Get an extra strength dose for bone, teeth, muscle, and
                    immune health support. Foster & Thrieve Extra Strength
                    Vitamin D3 is formulated with 5000 IU (125 mcg) for those
                    with higher Vitamin D needs and/or deficiency as determined
                    by healthcare professionals.
                  </p>
                  <div className="btn">Where to buy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
