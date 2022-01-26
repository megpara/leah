import axios from "axios";
import Footer from "../components/Footer";
import SecondaryHeader from "../components/SecondaryHeader";
import Layout from "../components/Layout";
import styles from "../styles/Order.module.css";
import { useState } from "react";

const buttonText = {
  LOADING: "Loading...",
  IDLE: "Submit",
  SUCCESS: "Complete",
  ERROR: "Uh oh",
};

const items = [
  "Basic Dozen - $35",
  "Daily Dozen - $40",
  "Deluxe - $45",
  "S'mores Cookies - $20",
  "Chocolate Chip Cookies - $25",
  "Butterscotch Pretzel Chocolate Chip Cookies - $20",
  "Pumpkin Cinnamon Rolls - $30",
  "Pumpkin Bread - $15",
  "Kamut Bread - $30",
  "Cakes - Starting at $45",
];

export default function Order() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [customization, setCustomization] = useState("");

  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const contact = async (e) => {
    setState("LOADING");
    setErrorMessage(null);
    e.preventDefault();

    let data = {
      name,
      email,
      item,
      quantity,
      customization,
    };

    try {
      console.log(JSON.stringify(data));
      const response = await axios.post("/api/contact", data);
      console.log(response);
      setState("SUCCESS");
    } catch (postError) {
      setErrorMessage(
        `Oops, something went wrong... Email me at leah05miller@gmail.com to place your order.`
      );
      console.log(postError);
      setState("ERROR");
    }
  };

  return (
    <Layout>
      <SecondaryHeader />
      <div className={styles.order}>
        <div className={styles.heading}>Place an order</div>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              name="name"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              name="email"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="item">Item</label>
            <select
              id="item"
              onChange={(e) => {
                setItem(e.currentTarget.value);
              }}
              name="item"
              className={styles.inputField}
            >
              <option>Select</option>
              {items.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              onChange={(e) => {
                setQuantity(e.currentTarget.value);
              }}
              name="quantity"
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="customization">Customization</label>
            <textarea
              rows="10"
              onChange={(e) => {
                setCustomization(e.currentTarget.value);
              }}
              name="customization"
              className={styles.inputField}
            />
          </div>

          <button
            className={styles.submit}
            onClick={(e) => {
              contact(e);
            }}
            disabled={state === "LOADING"}
          >
            {buttonText[state]}
          </button>
          {state === "ERROR" && (
            <p className={styles.notification}>{errorMessage}</p>
          )}
          {state === "SUCCESS" && (
            <p className={styles.notification}>Thank you!</p>
          )}
        </form>
      </div>
      <Footer />
    </Layout>
  );
}
