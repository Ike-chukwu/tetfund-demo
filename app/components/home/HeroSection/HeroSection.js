
import React from "react";
import styles from "../../../../public/styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSectionMainWrapper}>
      <div className={styles.heroSectionContainer}>
        <section className={styles.innerHeroSectionContainer}>
          <div className={styles.leftPart}>
            <h1 className={styles.title}>Empowering Tomorrows Innovators</h1>
            <p className={styles.brief}>
              TETFund Centre of Excellence in Digital Literacy and Emerging
              Technology (TCoEx-DILET) is a place where Digital Literacy and
              Emerging Technology Unite for Excellence...
            </p>
            <button className={styles.btn}>Read more</button>
          </div>
          <div className={styles.rightPart}>
            <img src="/heroPic.png" className={styles.heroPic} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
