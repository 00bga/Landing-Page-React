import React from "react";
import styles from "./About.module.css";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import linkedIn from "./images/linkedin.png";

function About() {
  return (
    <div className={styles.end}>
      <div className={styles["about-description"]}>
        <h3>
          <span className={styles.aPlus}>A+</span>Studio
        </h3>
        <p>
          Leading digital agency with solid design and development expertise. We
          build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="facebook icon"></img>
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <img src={twitter} alt="twitter icon"></img>
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={linkedIn} alt="linkedIn icon"></img>
          </a>
        </div>
      </div>
      <div className={styles["about-items"]}>
        <div className={styles["about-item"]}>
          <h3>What We Do</h3>
          <a href="">Web Design</a>
          <a href="">App Design</a>
          <a href="">Social Media Manage</a>
          <a href="">Market Analysis Project</a>
        </div>
        <div className={styles["about-item"]}>
          <h3>Company</h3>
          <a href="">About Us</a>
          <a href="">Career</a>
          <a href="">Become Investor</a>
        </div>
        <div className={styles["about-item"]}>
          <h3>Support</h3>
          <a href="">FAQ</a>
          <a href="">Policy</a>
          <a href="">Business</a>
        </div>
        <div className={styles["about-item"]}>
          <h3>Contact</h3>
          <a href="">WhatsApp</a>
          <a href="">Support 24</a>
        </div>
      </div>
      <script
        src="https://kit.fontawesome.com/2458988e9b.js"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default About;
