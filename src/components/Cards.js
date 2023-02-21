import React from "react";
import styles from "./Cards.module.css";
import businessIcon from "./images/icon1.png";
import financialIcon from "./images/icon2.png";
import developmentIcon from "./images/icon3.png";
import marketIcon from "./images/icon4.png";

function Cards() {
  return (
    <div className={styles.cards}>
      <div className={styles["cards-description"]}>
        <div className={styles["cards-description__inner"]}>
          <h2>How can we help your Business?</h2>
          <p>
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <div className={styles["decoration-title"]}></div>
        </div>
      </div>
      <div className={styles["cards-grid"]}>
        <div className={styles.left}>
          <div className={styles.card}>
            <img
              src={businessIcon}
              alt="business icon"
              className={styles.business}
            ></img>
            <h3>Business Idea Planning</h3>
            <p>We present you a proposal and discuss niffty-gritty like</p>
          </div>
          <div className={styles.card}>
            <img
              src={developmentIcon}
              alt="development icon"
              className={styles["card right"]}
            ></img>
            <h3>Development Website and App</h3>
            <p>Communication protocols apart from engagement models</p>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.card}>
            <img
              src={financialIcon}
              alt="financial icon"
              className={styles.financial}
            ></img>
            <h3>Financial Planning System</h3>
            <p>Protocols apart from aengage models, pricing billing</p>
          </div>
          <div className={styles.card}>
            <img
              src={marketIcon}
              alt="market analysis icon"
              className={styles.market}
            ></img>
            <h3>Market Analysis Project</h3>
            <p>Protocols apart from aengage models, pricing billing</p>
          </div>
        </div>
      </div>
      <div className={styles["decoration-cards__big"]}></div>
      <div className={styles["decoration-cards__circle"]}></div>
      <div className={styles["decoration-cards__dots"]}></div>
    </div>
  );
}

export default Cards;
