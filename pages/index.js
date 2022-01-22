import Header from "../components/Header";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";

const images = [
  "/IMG_3000.JPG",
  "/IMG_3170.JPG",
  "/IMG_3175.JPG",
  "/IMG_3423.JPG",
  "/IMG_3988.JPG",
  "/IMG_4472.JPG",
  "/IMG_4924.JPG",
  "/IMG_4938.JPG",
  "/IMG_4977.JPG",
];

export default function Home() {
  return (
    <Layout>
      <div className={styles.main}>
        <Modal />
        <div className={styles.titleContainer}>
          <div className={styles.title}>Cookies by Leah Lane</div>
        </div>
        <div className={styles.titleContainer}>
          <img
            src="headshot.JPG"
            style={{ width: "350px", borderRadius: "25px" }}
          />
        </div>
        <div
          className={styles.colorBlock}
          style={{ backgroundColor: "#efcb9b" }}
        >
          <Header />
        </div>
        <div className={styles.colorBlock} style={{ backgroundColor: "white" }}>
          <div className={styles.scrollContainer}>
            <div className={styles.scroll}>(Scroll)</div>
          </div>
        </div>
      </div>
      <div className={styles.gallery}>
        {images.map((image) => (
          <img src={image} />
        ))}
      </div>
    </Layout>
  );
}
