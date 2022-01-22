import styles from "../styles/Footer.module.css";
import Header from "./Header";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.title}>Cookies by Leah Lane</div>
      <Header />
    </div>
  );
}
