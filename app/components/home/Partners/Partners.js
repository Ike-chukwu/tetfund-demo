import React from "react";
import styles from "../../../../public/styles/partners.module.css";

const Partners = () => {
  return (
    <section className={styles.partnerSection}>
      <h2 className={styles.subTitle}>partners</h2>
      <div className={styles.partnerPack}>
        <img src="/tripa.png" className={styles.logo} alt="" />
        <img src="/ex.png" className={styles.logo} alt="" />
        <img src="/book.png" className={styles.logo} alt="" />
        <img src="/air.png" className={styles.logo} alt="" />
        <img src="/gab.png" className={styles.logo} alt="" />
      </div>
    </section>
  );
};

export default Partners;
