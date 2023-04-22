import { NextPage } from "next";

const SignUpComponent: NextPage = () => {
  return (
    <div className="sign-form grid">
      <input className="input-box mt-3" type="string" placeholder="First Name" />
      <input className="input-box mt-3" type="string" placeholder="Last Name" />
      <input className="input-box mt-3" type="string" placeholder="Email" />
      <div className="mt-3 bg-mckgreen text-sofia-bold text-base text-center text-mckblue rounded-lg text-uppercase py-3">SUBMIT</div>
    </div>
  );
};

export default SignUpComponent;
