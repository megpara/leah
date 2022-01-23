import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.main}>
        <Modal />
        <div className={styles.titleContainer}>
          <div className={styles.title}>Cookies by Leah Lane</div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.smallImgContainer}>
            <img src="cake.JPG" className={styles.smallImg} />
          </div>
          <img src="headshot.JPG" className={styles.headshot} />
        </div>
        <Header />
        <div className={styles.scrollContainer}>
          <div className={styles.scroll}>(Scroll)</div>
        </div>
      </div>
      <Gallery />
      <Footer />
    </Layout>
  );
}
