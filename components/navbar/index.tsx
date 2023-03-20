import Link from "next/link";
import styles from "@/styles/Home.module.scss";
export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <Link className={styles.link} href="/">
        Home
      </Link>

      <Link className={styles.link} href="/products">
        Products
      </Link>
      <Link className={styles.link} href="/health_needs">
        Health Needs
      </Link>
      <Link className={styles.link} href="/why_f&T">
        Why F&T
      </Link>
      <Link className={styles.link} href="/wheretobuy">
        Where to Buy
      </Link>
      <Link className={styles.link} href="/blog">
        Blog
      </Link>
      <Link className={styles.link} href="/healthcareprofessionals">
        Health Care Professionals
      </Link>
    </div>
  );
}
