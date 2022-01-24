import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/Grid.module.css";

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

const Image = ({ image }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!inView) {
      controls.start("hidden");
    }
  }, [inView]);

  const siteVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0.9 },
  };

  return (
    <motion.img
      src={image}
      key={image}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={siteVariants}
    />
  );
};

export default function Gallery() {
  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Baked to order by Leah, with love</div>
        <a href="/order">
          <button className={styles.orderButton}>Place an order</button>
        </a>
      </div>
      <div className={styles.gallery}>
        {images.map((image) => (
          <Image image={image} key={image} />
        ))}
      </div>
    </div>
  );
}
