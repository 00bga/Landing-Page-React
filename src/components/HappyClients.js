import React, { useState } from "react";
import styles from "./HappyClients.module.css";
import mainClient from "./images/e07f39545f813753424891ecd6c754b5.jpg";
import clientOne from "./images/1.jpg";
import clientTwo from "./images/2.jpg";
import clientThree from "./images/3.jpg";
import clientFour from "./images/4.jpg";

function HappyClients() {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionSelect = (event) => {
    setSelectedOption(parseInt(event.target.id));
  };

  const images = [
    {
      image: mainClient,
      name: "Matthew Paul",
      review:
        "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
    },
    {
      image: clientOne,
      name: "Maria Rodriguez",
      review:
        "Great service, I am very happy with the result. The team was professional and communicative throughout the whole process.",
    },
    {
      image: clientTwo,
      name: "Jane Doe",
      review:
        "I had a great experience working with this company. The team was very talented and efficient, and the end result was even better than I had hoped for.",
    },
    {
      image: clientThree,
      name: "David Lee",
      review:
        "I highly recommend this service. They went above and beyond my expectations and delivered excellent work in a timely manner.",
    },
    {
      image: clientFour,
      name: "John Smith",
      review:
        "I am extremely satisfied with the service provided. The team was friendly and professional, and the final product was exactly what I wanted.",
    },
  ];

  return (
    <>
      <div className={styles["happy-clients__header"]}>
        <div className={styles["happy-clients__header--content"]}>
          <h2>What our happy clients say</h2>
          <p>Several selected clients, who already believe in our service.</p>
        </div>
      </div>
      <div className={styles["happy-clients"]}>
        <div className={styles["happy-clients__reviews"]}>
          <div className={styles["main-image"]}>
            <img
              src={images[selectedOption - 1].image}
              alt="Client review"
              className={styles["happy-clients__image"]}
            ></img>
            <div className={styles["decoration-image__circle"]}></div>
            <div className={styles["decoration-image__dots"]}></div>
          </div>
          <div className={styles["happy-clients__description"]}>
            <h3>{images[selectedOption - 1].name}</h3>
            <p>{images[selectedOption - 1].review}</p>
            <div className={styles.buttons}>
              <input
                id="1"
                name="ball"
                type="radio"
                onClick={handleOptionSelect}
                checked={selectedOption === 1}
              />
              <label htmlFor="1"></label>
              <input
                id="2"
                name="ball"
                type="radio"
                onClick={handleOptionSelect}
                checked={selectedOption === 2}
              />
              <label htmlFor="2"></label>
              <input
                id="3"
                name="ball"
                type="radio"
                onClick={handleOptionSelect}
                checked={selectedOption === 3}
              />
              <label htmlFor="3"></label>
              <input
                id="4"
                name="ball"
                type="radio"
                onClick={handleOptionSelect}
                checked={selectedOption === 4}
              />
              <label htmlFor="4"></label>
              <input
                id="5"
                name="ball"
                type="radio"
                onClick={handleOptionSelect}
                checked={selectedOption === 5}
              />
              <label htmlFor="5"></label>
            </div>
          </div>
          <div className={styles["happy-clients__wheel"]}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            <div className={styles.four}></div>
            <div className={styles.five}></div>
            <div className={styles.six}></div>
            <div className={styles.seven}></div>
            <div className={styles.eight}></div>
            <div className={styles["decoration-wheel__circle"]}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HappyClients;
