import styles from "../styles/SecondaryHeader.module.css";
import Header from "./Header";

export default function SecondaryHeader() {
  return (
    <div className={styles.header}>
      <a href="/">
        <div className={styles.title}>Cookies by Leah Lane</div>
      </a>
      <Header />
    </div>
  );
}
