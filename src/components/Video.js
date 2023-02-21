import React from "react";
import styles from "./Video.module.css";

function Video() {
  return (
    <div className={styles.since}>
      <div className={styles.video}>
        <button className={styles.playButton}>
          <div className={styles.triangle}></div>
        </button>
        <div className={styles["decoration-video__circle"]}></div>
      </div>
      <div className={styles["video-description"]}>
        <div>
          <h2>Great Digital Product Agency since 2016</h2>
          <p>
            Our Business Plan is a written document describing a company's core
            business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Video;
