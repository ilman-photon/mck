import SignUpComponent from "../signup";

function NavDropComponent() {
  return (
    <div className="w-full flex mx-auto absolute bg-white z-10">
      <ul className="w-11/12 flex mx-auto ">
        <li className="w-1/5">
          <div className="border-l border-black">
            <a
              href=""
              className="text-gtl-med text-2xl text-mckblue text-left pl-2"
            >
              Acute
            </a>
            <ul>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Allergy Relief
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Pain Relief
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Cough, Cold & Flu Relief
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Digestion Health
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Smoking Cessation
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Ear Care
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Sinus Care
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Oral Care
              </li>
            </ul>
          </div>
        </li>
        <li className="w-1/5">
          <div className="border-l border-black">
            <a
              href=""
              className="text-gtl-med text-2xl text-mckblue text-left pl-2"
            >
              Preventative Care
            </a>
            <ul>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Immunity
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Nutrition
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Vitamins
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Heart Health
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Probiotics
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Prenatal Health
              </li>
            </ul>
          </div>
        </li>
        <li className="w-1/5">
          <div className="border-l border-black">
            <a
              href=""
              className="text-gtl-med text-2xl text-mckblue text-left pl-2"
            >
              Every Day Care
            </a>
            <ul>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                First Aid
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Daily Living Support
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Cosmetics
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Skin Care
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                First Aid
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Foot Care
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Ankle Braces
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Muscle Soreness
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                First Aid
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Foot Insoles
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Facial Cleaner
              </li>
            </ul>
          </div>
        </li>
        <li className="w-1/5">
          <div className="border-l border-black">
            <a
              href=""
              className="text-gtl-med text-2xl text-mckblue text-left pl-2"
            >
              Diagnostic Care
            </a>
            <ul>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Diagnostic Care
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Thermometers
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Gloves & Masks
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Family Planning
              </li>
              <li className="text-mckblue text-left text-sofia-reg py-3 pl-2">
                Blood Testing
              </li>
            </ul>
          </div>
        </li>
        {/* <li className="w-1/5 signup-form">
          <div className="px-0 py-0 mb-7 whitespace-normal">
            <div className="px-3 py-3 lg:px-3 bg-white rounded-lg border-mcknormalgrey border-solid border">
              <h5 className="m-0 pb-3 px-0 text-2xl text-sofia-reg text-mckblue">
                Email Signup & Rewards
              </h5>
              <div className="px-0 text-lg text-sofia-reg text-mcknormalgrey">
                Want to receive tips, personalized content and exclusive offers
                from Foster & Thrive?
              </div>
              <div className="py-3 px-0 text-lg text-sofia-reg text-mcknormalgrey">
                Sign up today!
              </div>
              <SignUpComponent />
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default NavDropComponent;
