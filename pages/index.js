import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeModal = () => setIsModalOpen(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    function onScroll() {
      if (window.scrollY == 0) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    }
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <Layout>
      <div className={styles.main}>
        <AnimatePresence>
          {!scroll && isModalOpen && <Modal closeModal={closeModal} />}
        </AnimatePresence>
        <div className={styles.titleContainer}>
          <motion.div
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: "1" }}
          >
            Cookies by Leah Lane
          </motion.div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.smallImgContainer}>
            <img src="cake.JPG" className={styles.smallImg} />
          </div>
          <img src="headshot.JPG" className={styles.headshot} />
        </div>
        <Header />
        <AnimatePresence>
          {!scroll && (
            <motion.div
              className={styles.scrollContainer}
              initial={false}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeOut", duration: "0.5" }}
            >
              <div className={styles.scroll}>(Scroll)</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Grid />
      <Footer />
    </Layout>
  );
}
