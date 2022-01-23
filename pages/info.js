import Footer from "../components/Footer";
import SecondaryHeader from "../components/SecondaryHeader";
import Layout from "../components/Layout";
import styles from "../styles/Info.module.css";

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
      <div className={styles.info}>
        {prices.map((price) => (
          <div className={styles.blurb}>
            <div className={styles.subtitle}>{price.title}</div>
            <div className={styles.text}>{price.description}</div>
          </div>
        ))}
      </div>
      <div
        className={styles.text}
        style={{ textAlign: "center", paddingBottom: "100px" }}
      >
        Don't see what you're looking for? Just ask!
      </div>
      <Footer />
    </Layout>
  );
}
