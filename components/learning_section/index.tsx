import { useEffect } from "react";
import styles from "@/styles/learningSection.module.scss";
import SignUpComponent from "../signup";

export default function LearningSectionComponent() {
  useEffect(() => {
    console.log("btn", styles);
  });
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 text-center">
          <div className={styles.heading_color}>
            We’re Foster & Thrive and we’re with you for life
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 m-auto">
          <div className={styles.heading_color}>Why Foster & Thrive</div>
          <div className={styles.paragraph_color}>
            At Foster & Thrive we believe over the counter products should go
            beyond the box, and that wellness and being well go hand in hands.
            So we make our own products with high quality ingredients.
          </div>
          <div className={styles.btn}>LEARN MORE</div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
          <img
            className={styles.img}
            src="images/desktop_why_foster_thrive.png"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
          <img
            className={styles.img}
            src="images/desktop_where_to_buy.png"
            alt=""
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 m-auto">
          <div className={styles.heading_color}>Where to buy</div>
          <div className={styles.paragraph_color}>
            You can find our products at many of the major outlets including
            Walmart, CVS, Wallgreens, Amazon, Target and more.
          </div>
          <div className={styles.btn}>LEARN MORE</div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 m-auto">
          <div className={styles.heading_color}>Quality That Matters</div>
          <div className={styles.paragraph_color}>
            In health as in life. You get out what you put in. At Foster &
            Thrive, we put care in all we do. With products formulated for your
            needs. Fit your budget and made to make you well. Because when you
            start with good. You get better. Foster & Thrive. With you for life.
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
          <img
            className={styles.img}
            src="images/desktop_where_to_buy.png"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
          <img
            className={styles.img}
            src="images/desktop_email_signup image.png"
            alt=""
          />
          <SignUpComponent styles={styles} />
          {/* <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              
            </div>
          </div> */}
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 m-auto">
          <div className={styles.heading_color}>Sign up & Save</div>
          <div className={styles.paragraph_color}>
            Sign up today to receive tips, personal content, and exclusive
            offers from Foster & Thrive.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 m-auto">
          <div className={styles.heading_color}>Care that’s uniquely you</div>
          <div className={styles.paragraph_color}>
            At Foster & Thrive, we know that care can take many forms. We’ve
            considered care from all angles., so that you can make sure you care
            for yourself in the best possible way. Your health is your business,
            and helping you be your best is ours.
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
          <img
            className={styles.img}
            src="images/desktop_care_image.png"
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center my-3">
          <div className={styles.heading_color}>
            Products worthy of you and yours
          </div>
          <div className={styles.paragraph_color}>
            When it comes to caring for those you love, you need products that
            you can trust to help heal and thrive. At Foster & Thrive,
            consistent quality and efficiency is our top priority.
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img className={styles.img} src="images/F&T_logo_acute.png" />

          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto text-center">
              <img className={styles.img} src="images/allergy_relief.png" />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className={styles.paragraph_color}>
                Allergy relief that starts working fast on the first day you
                take it. Each antihistamine tablet contains 10 mg Cetirizine HCl
                to relieve your worst allergy symptoms, indoors and out, for a
                full 24 hours.
              </div>
              <div className={`${styles.floatRight} ${styles.btn}`}>
                Where to buy
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img className={styles.img} src="images/F&T_logo_every Day.png" />
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto text-center">
              <img className={styles.img} src="images/vitamin_D3.png" />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
              <div className={styles.paragraph_color}>
                Get an extra strength dose for bone, teeth, muscle, and immune
                health support. Foster & Thrieve Extra Strength Vitamin D3 is
                formulated with 5000 IU (125 mcg) for those with higher Vitamin
                D needs and/or deficiency as determined by healthcare
                professionals.
              </div>
              <div className={`${styles.floatRight} ${styles.btn}`}>
                Where to buy
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img className={styles.img} src="images/F&T_logo_diagnostic.png" />

          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto text-center">
              <img className={styles.img} src="images/adhesive_bandages.png" />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
              <div className={styles.paragraph_color}>
                For every ouch, oops, and uh-oh, there are Foster & Thrive
                Adhesive Bandages. Find the right adhesive bandage for your
                specific needs.
              </div>
              <div className={`${styles.floatRight} ${styles.btn}`}>
                Where to buy
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <img className={styles.img} src="images/F&T_logo_preventative.png" />

          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto text-center">
              <img
                className={styles.img}
                src="images/blood_pressure_monitor.png"
              />
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 my-auto">
              <div className={styles.paragraph_color}>
                Get an extra strength dose for bone, teeth, muscle, and immune
                health support. Foster & Thrieve Extra Strength Vitamin D3 is
                formulated with 5000 IU (125 mcg) for those with higher Vitamin
                D needs and/or deficiency as determined by healthcare
                professionals.
              </div>
              <div className={`${styles.floatRight} ${styles.btn}`}>
                Where to buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
