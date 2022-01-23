import Footer from "../components/Footer";
import SecondaryHeader from "../components/SecondaryHeader";
import Layout from "../components/Layout";
import styles from "../styles/Info.module.css";
import { motion } from "framer-motion";

const prices = [
  {
    title: "Basic Dozen - $35",
    description: "3 designs, 4 colors",
  },
  {
    title: "Daily Dozen - $40",
    description: "5 designs, 6 colors, gold included",
  },
  {
    title: "Deluxe - $45",
    description: "unlimited designs & colors, gold included & airbrushing",
  },
];

export default function Info() {
  return (
    <Layout>
      <SecondaryHeader />
      <motion.div
        className={styles.info}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: "0.5" }}
      >
        {prices.map((price) => (
          <div className={styles.blurb}>
            <div className={styles.subtitle}>{price.title}</div>
            <div className={styles.text}>{price.description}</div>
          </div>
        ))}
        <div
          className={styles.text}
          style={{ textAlign: "center", paddingTop: "100px" }}
        >
          Don't see what you're looking for? Just ask!
        </div>
      </motion.div>
      <Footer />
    </Layout>
  );
}
