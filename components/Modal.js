import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles/Modal.module.css";

export default function Modal({ closeModal }) {
  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: "0.5" }}
    >
      <div className={styles.exit} onClick={closeModal}>
        X
      </div>
      <div className={styles.title}>Say hello!</div>
      <a href="mailto:leah05miller@gmail.com">
        <img src="email_icon_white.png" />
      </a>
      <div className={styles.text}>Reach out, I'd love to hear from you.</div>
    </motion.div>
  );
}
