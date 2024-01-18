import React from "react";
import styles from "../../../../public/styles/vision.module.css";

const Vision = () => {
  return (
    <section className={styles.visionContainer}>
      <div className={styles.leftPart}>
        <h1 className={styles.subTitle}>Our Vision</h1>
        <p className={styles.brief}>
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque
          pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis
          ac turpis at amet. Purus malesuada placerat arcu at enim elit in
          accumsan.
        </p>
        <div className={styles.lastAspect}>
          <span className={styles.blueText}>Read more</span>
          <img src="/grey.png" alt="" className={styles.rightArrow} />
        </div>
      </div>
      <div className={styles.rightPart}>
        <img src="/starPic.png" className={styles.starPic} alt="" />
      </div>
    </section>
  );
};

export default Vision;
