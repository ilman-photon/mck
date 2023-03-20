import styles from "@/styles/Header.module.scss";
export default function Search() {
  return (
    <>
      <input
        className={styles.search}
        type="text"
        alt="Search"
        placeholder="Search"
      />
    </>
  );
}
