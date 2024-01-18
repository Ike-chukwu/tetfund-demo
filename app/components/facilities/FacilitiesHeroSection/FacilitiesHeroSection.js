import React from "react";
import styles from "../../../../public/styles/FacilitiesHeroSection.module.css";

const FacilitiesHeroSection = () => {
  return (
    <div className={styles.facilityMainWrapper}>
      <div className={styles.facilitySectionContainer}>
        <section className={styles.innerFacilityHeroSectionContainer}>
          <div className={styles.mainHeading}>facilities</div>
        </section>
      </div>
    </div>
  );
};

export default FacilitiesHeroSection;
