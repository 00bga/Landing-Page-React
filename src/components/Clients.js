import React from "react";
import styles from "./Clients.module.css";
import google from "./images/google.png";
import airbnb from "./images/airbnb.png";
import uberEats from "./images/uber-eats.svg";
import amazon from "./images/Amazon_logo.svg.png";

function Clients() {
  return (
    <div className={styles.clients}>
      <div className={styles["clients-description"]}>
        <h2>Our Clients</h2>
        <p className={styles["clients-text"]}>
          Several selected clients, who already believe in our service.
        </p>
      </div>
      <div className={styles["clients-images"]}>
        <img src={google} alt="google logo"></img>
        <img src={airbnb} alt="airbnb logo "></img>
        <img src={uberEats} alt="uber eats logo"></img>
        <img src={amazon} alt="amazon logo"></img>
      </div>
    </div>
  );
}

export default Clients;
