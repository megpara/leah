import styles from "../styles/Modal.module.css";

export default function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.exit}>X</div>
      <div className={styles.title}>Say hello!</div>
      <a href="mailto:leah05miller@gmail.com">
        <img src="email_icon_white.png" />
      </a>
      <div className={styles.text}>Reach out, I'd love to hear from you.</div>
    </div>
  );
}
