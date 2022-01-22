import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <a
          className={styles.menuItem}
          onClick={() => {
            console.log(hello);
          }}
        >
          Gallery
        </a>
        <div className={styles.menuItem}>Info</div>
        <div className={styles.menuItem}>Order</div>
      </div>
      <div className={styles.icons}>
        <a target="_blank" href="https://www.instagram.com/cookiesby_leahlane/">
          <img className={styles.icon} src="/insta-logo-blue.png" />
        </a>
      </div>
    </div>
  );
}
