import React from "react";
import { FaChevronRight } from "react-icons/fa";
import styles from "../../../public/styles/programs.module.css";

const UpcomingEvents = () => {
  return (
    <section className={styles.events}>
      <h1 className={styles.title}>upcoming events</h1>
      <div className={styles.pictures}>
        <div className={styles.picture}>
          <p className={styles.smallTitle}>Ipsum</p>
          <p className={styles.midTitle}>Varius est diam</p>
          <div className={styles.imgContainer}>
            <img src="/pic.png" className={styles.image} alt="" />
          </div>
          <div className={styles.side}>
            <span className={styles.little}>buy tickets</span>
            <FaChevronRight color="#2563EB" />
          </div>
        </div>
        <div className={styles.picture}>
          <p className={styles.smallTitle}>Ipsum</p>
          <p className={styles.midTitle}>Varius est diam</p>
          <div className={styles.imgContainer}>
            <img src="/pic.png" className={styles.image} alt="" />
          </div>
          <div className={styles.side}>
            <span className={styles.little}>buy tickets</span>
            <FaChevronRight color="#2563EB" />
          </div>
        </div>
        <div className={styles.picture}>
          <p className={styles.smallTitle}>Ipsum</p>
          <p className={styles.midTitle}>Varius est diam</p>
          <div className={styles.imgContainer}>
            <img src="/pic.png" className={styles.image} alt="" />
          </div>
          <div className={styles.side}>
            <span className={styles.little}>buy tickets</span>
            <FaChevronRight color="#2563EB" />
          </div>
        </div>
        <div className={styles.picture}>
          <p className={styles.smallTitle}>Ipsum</p>
          <p className={styles.midTitle}>Varius est diam</p>
          <div className={styles.imgContainer}>
            <img src="/pic.png" className={styles.image} alt="" />
          </div>
          <div className={styles.side}>
            <span className={styles.little}>buy tickets</span>
            <FaChevronRight color="#2563EB" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
