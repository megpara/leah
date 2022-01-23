import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.title}>
          <a href="/">Cookies by Leah Lane </a>
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
