import Header from "../components/Header";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>Cookies by Leah Lane</div>
        </div>
        <div className={styles.titleContainer}>
          <img src="headshot.JPG" style={{ width: "350px" }} />
        </div>
        <div className={styles.colorBlock}>
          <Header />
        </div>
        <div className={styles.colorBlock} style={{ backgroundColor: "white" }}>
          <div className={styles.scrollContainer}>
            <div className={styles.scroll}>(Scroll)</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
