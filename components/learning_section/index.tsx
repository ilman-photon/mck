import { useEffect } from "react";
import styles from "@/styles/learningSection.module.scss";
import SignUpComponent from "../signup";

export default function LearningSectionComponent() {
  return (
    <>
      <div className="container">
        <div className="learning-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <div className="m-auto inner-col">
              <h5>Why Foster & Thrive</h5>
              <p>
                At Foster & Thrive we believe over the counter products should
                go beyond the box, and that wellness and being well go hand in
                hands. So we make our own products with high quality
                ingredients.
              </p>
              <div className="btn w-[124px] h-[44px]">LEARN MORE</div>
            </div>
            <div className="inner-col">
              <img
                className="h-auto max-w-full"
                src="images/desktop_why_foster_thrive.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="learning-container-bg">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            <div className="inner-col">
              <img
                className="h-auto max-w-full"
                src="images/desktop_where_to_buy.png"
                alt=""
              />
            </div>
            <div className="inner-col">
              <h5>Where to buy</h5>
              <p>
                You can find our products at many of the major outlets including
                Walmart, CVS, Wallgreens, Amazon, Target and more.
              </p>
              <div className="btn w-[124px] h-[44px]">LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="learning-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <div className="inner-col">
              <h5>Quality That Matters</h5>
              <p>
                In health as in life. You get out what you put in. At Foster &
                Thrive, we put care in all we do. With products formulated for
                your needs. Fit your budget and made to make you well. Because
                when you start with good. You get better. Foster & Thrive. With
                you for life.
              </p>
            </div>
            <div className="inner-col">
              <img
                className="h-auto max-w-full"
                src="images/desktop_where_to_buy.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="learning-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <div className="inner-col image-form">
              {/* <div className=""> */}
              {/* <img
                className="h-auto max-w-full"
                src="images/email_signup.png"
                alt=""
              /> */}
              {/* </div> */}
              <div className="sign-up-form">
                <h4>Sign up Today!</h4>
                <p>Get the latest updates & promotions.</p>
                <SignUpComponent />
                <p className="hint">
                  By signing up you agree to receive email marketing.
                </p>
              </div>
            </div>
            <div className="inner-col">
              <h5>Sign up & Save</h5>
              <p>
                Sign up today to receive tips, personal content, and exclusive
                offers from Foster & Thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="learning-container-bg">
          <div className="grid md:grid-cols-2 lg:grid-cols-2">
            <div className="inner-col">
              <h5>Care that’s uniquely you</h5>
              <p>
                At Foster & Thrive, we know that care can take many forms. We’ve
                considered care from all angles., so that you can make sure you
                care for yourself in the best possible way. Your health is your
                business, and helping you be your best is ours.
              </p>
            </div>
            <div className="inner-col">
              <img
                className="h-auto max-w-full"
                src="images/desktop_care_image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pramotional-container text-center">
        <h5>Products worthy of you and yours</h5>
        <p>
          When it comes to caring for those you love, you need products that you
          can trust to help heal <br /> and thrive. At Foster & Thrive,
          consistent quality and efficiency is our top priority.
        </p>
      </div>
      <div className="container">
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
