import styles from "../styles/Modal.module.css";

export default function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.exit}>X</div>
      <div className={styles.title}>Say hello!</div>
      <img src="email_icon_white.png" />
      <div className={styles.text}>Reach out, I'd love to hear from you.</div>
    </div>
  );
}
