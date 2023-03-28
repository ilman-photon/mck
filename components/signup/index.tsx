import { NextPage } from "next";

const SignUpComponent: NextPage = () => {
  return (
    <div className="sign-form">
      <input className="input-box" type="string" placeholder="First Name" />
      <input className="input-box" type="string" placeholder="Email" />
      <div className="btn">SUBMIT</div>
    </div>
  );
};

export default SignUpComponent;
