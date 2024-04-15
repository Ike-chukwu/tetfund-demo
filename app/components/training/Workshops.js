import React from "react";
import styles from "../../../public/styles/workshops.module.css";

const Workshops = () => {
  return (
    <div className={styles.events}>
      <h1 className={styles.title}>Trainings and Workshops</h1>
      <div className={styles.aspects}>
        <div className={styles.aspect}>
          <div className={styles.imgContainer}>
            <img src="/greenHand.png" className={styles.image} alt="" />
          </div>
          <div className={styles.techPark}>
            <p className={styles.smallTitle}>
              Technology Orientation and Induction Training
            </p>
            <p className={styles.midTitle}>
              Rome, Italy Rome, Italy Rome, ItalyRome, ItalyRome, Italy
            </p>
            <div className={styles.side}>
              <span className={styles.little}>4.8</span>
              <span>⭐</span>
              <span className={styles.little}>(250)</span>
            </div>
          </div>
        </div>
        <div className={styles.aspect}>
          <div className={styles.imgContainer}>
            <img src="/comp.png" className={styles.image} alt="" />
          </div>
          <div className={styles.techPark}>
            <p className={styles.smallTitle}>
              Technology Orientation and Induction Training
            </p>
            <p className={styles.midTitle}>
              Rome, Italy Rome, Italy Rome, ItalyRome, ItalyRome, Italy
            </p>
            <div className={styles.side}>
              <span className={styles.little}>4.8</span>
              <span>⭐</span>
              <span className={styles.little}>(250)</span>
            </div>
          </div>
        </div>
        <div className={styles.aspect}>
          <div className={styles.imgContainer}>
            <img src="marker.png" className={styles.image} alt="" />
          </div>
          <div className={styles.techPark}>
            <p className={styles.smallTitle}>
              Technology Orientation and Induction Training
            </p>
            <p className={styles.midTitle}>
              Rome, Italy Rome, Italy Rome, ItalyRome, ItalyRome, Italy
            </p>
            <div className={styles.side}>
              <span className={styles.little}>4.8</span>
              <span>⭐</span>
              <span className={styles.little}>(250)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
