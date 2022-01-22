import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <div className={styles.menuItem}>Gallery</div>
        <div className={styles.menuItem}>Info</div>
        <div className={styles.menuItem}>Order</div>
      </div>
      <div className={styles.icons}>
        {/* <img className={styles.icon} src="/email_icon_copy.png" /> */}
        <img className={styles.icon} src="/insta-logo-blue.png" />
      </div>
    </div>
  );
}
