import styles from "../styles/SecondaryHeader.module.css";
import Header from "./Header";

export default function SecondaryHeader() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <a href="/">
          <div className={styles.title}>C x L L </div>
        </a>
        <div className={styles.menu}>
          <a className={styles.menuItem} href="/gallery">
            Gallery
          </a>

          <a href="/info">
            <div className={styles.menuItem}>Info</div>
          </a>

          <a href="/order">
            <div className={styles.menuItem}>Order</div>
          </a>
        </div>
        <div className={styles.icons}>
          <a
            target="_blank"
            href="https://www.instagram.com/cookiesby_leahlane/"
          >
            <img className={styles.icon} src="/insta-logo-white.png" />
          </a>
        </div>
      </div>
    </div>
  );
}
