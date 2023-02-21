import React from "react";
import styles from "./Newsletter.module.css";

function Newsletter() {
  return (
    <div className={styles["newsletter"]}>
      <div className={styles["newsletter-description"]}>
        <h2>Subscribe Newsletter</h2>
        <p>I will update good news and promotion service not spam</p>
      </div>
      <div className={styles["newsletter-email"]}>
        <div className={styles["newsletter-input"]}>
          <input type="email" placeholder="Enter your email address.."></input>
          <button className={styles["contact-now"]}>Contact Now</button>
        </div>
      </div>
      <div className={styles["blue-background"]}></div>
      <div className={styles["decoration-newsletter__bottom"]}></div>
      <div className={styles["decoration-newsletter__dots"]}></div>
    </div>
  );
}

export default Newsletter;
