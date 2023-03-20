import styles1 from "@/styles/Header.module.scss";

import { NextPage } from "next";
import { useEffect } from "react";

const SignUpComponent: NextPage = ({ styles }) => {
  const { btn } = styles;

  return (
    <div>
      <input
        className={styles1.search}
        type="string"
        placeholder="First Name"
      />
      <input className={styles1.search} type="string" placeholder="Email" />
      <div className={btn}>SUBMIT</div>
    </div>
  );
};

export default SignUpComponent;
