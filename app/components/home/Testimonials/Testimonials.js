import React from "react";
import styles from "../../../../public/styles/testimonials.module.css";
import { testimonialContent } from "../../../constants/testimonialVars";

const Testimonials = () => {
  return (
    <section className={styles.testimonialParent}>
      <div className={styles.testimonialContent}>
        <h2 className={styles.subtitle}>testimonials</h2>
        <div className={styles.testimonialContentSecondChild}>
          <img src="/circle.png" alt="" className={styles.mainImg} />
          <div className={styles.morePersonalContent}>
            <h3 className={styles.name}>
              <span className={styles.realName}>mark smith</span> / ceo forbes{" "}
            </h3>
            <p className={styles.starts}>⭐⭐⭐⭐⭐</p>
            <p className={styles.moreBriefing}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className={styles.progressIndicators}>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <img src="/al2.png" className={styles.move} alt="" />
        </div>
        <div className={styles.right}>
          <img src="/aleft.png" className={styles.move} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
