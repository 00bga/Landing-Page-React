import React from "react";
import styles from "./Description.module.css";
import presentation from "./images/presentation.jpg";

function Description() {
  return (
    <div className={styles.description}>
      <div className={styles["description-text"]}>
        <div>
          <h1>A Digital Product Agency</h1>
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
          <button className={styles["contact-now"]}>Contact Now</button>
        </div>
        <div className={styles["decoration-dots"]}></div>
      </div>
      <div className={styles["description-image"]}>
        <img src={presentation} alt="a guy presenting at an office"></img>
      </div>
      <div className={styles["decoration-top"]}></div>
      <div className={styles["decoration-bottom"]}></div>
    </div>
  );
}

export default Description;
