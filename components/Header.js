import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <a
          className={styles.menuItem}
          onClick={() => {
            window.scrollTo(0, window.innerHeight);
          }}
        >
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
        <a target="_blank" href="https://www.instagram.com/cookiesby_leahlane/">
          <img className={styles.icon} src="/insta-logo-white.png" />
        </a>
      </div>
    </div>
  );
}
