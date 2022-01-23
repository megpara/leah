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

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <img src={image} />
      ))}
    </div>
  );
}
