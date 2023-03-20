import styles from "@/styles/Header.module.scss";

import Image from "next/image";
import Search from "../search";

export default function Header() {
  return (
    <div className={`${styles.header}`}>
      <Image src="/images/logo.png" width="332" height="58" alt="logo" />
      <Search />
    </div>
  );
}
