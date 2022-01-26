import Footer from "../components/Footer";
import SecondaryHeader from "../components/SecondaryHeader";
import Layout from "../components/Layout";
import styles from "../styles/Info.module.css";
import { motion } from "framer-motion";

const cookies = [
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
  {
    title: "S'mores Cookies - $20",
  },
  {
    title: "Chocolate Chip Cookies - $25",
  },
  {
    title: "Butterscotch Pretzel Chocolate Chip Cookies - $20",
  },
  {
    title: "Pumpkin Cinnamon Rolls - $30",
  },
];

const extras = [
  {
    title: "Pumpkin Bread - $15",
    description: "Optional maple glaze",
  },
  {
    title: "Kamut Bread - $30",
    description: "Recipe developed from The Food Nanny",
  },
  {
    title: "Cakes - $45",
    description: "Price varies upon order",
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
        <div className={styles.heading}>Pricing & Info</div>
        <div className={styles.title}>By the dozen</div>
        {cookies.map((option) => (
          <div className={styles.blurb}>
            <div className={styles.subtitle}>{option.title}</div>
            <div className={styles.text}>{option.description}</div>
          </div>
        ))}
        <div className={styles.title}>Other treats</div>
        {extras.map((option) => (
          <div className={styles.blurb}>
            <div className={styles.subtitle}>{option.title}</div>
            <div className={styles.text}>{option.description}</div>
          </div>
        ))}
        <div
          className={styles.text}
          style={{ textAlign: "center", paddingTop: "50px" }}
        >
          Don't see what you're looking for? Just ask!
        </div>
      </motion.div>
      <Footer />
    </Layout>
  );
}
