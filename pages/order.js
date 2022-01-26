import Footer from "../components/Footer";
import SecondaryHeader from "../components/SecondaryHeader";
import Layout from "../components/Layout";
import styles from "../styles/Order.module.css";

export default function Order() {
  return (
    <Layout>
      <SecondaryHeader />
      <div className={styles.order}>
        <div className={styles.heading}>Place an order</div>
        <form className={styles.form}>
          <formGroup className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className={styles.inputField} />
          </formGroup>
          <formGroup className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" className={styles.inputField} />
          </formGroup>
          <formGroup className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <input type="text" name="message" className={styles.inputField} />
          </formGroup>
          <input type="submit" className={styles.submit} />
        </form>
      </div>
      <Footer />
    </Layout>
  );
}
