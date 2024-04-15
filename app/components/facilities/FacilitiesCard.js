import React from "react";
import styles from "../../../public/styles/facilitiescard.module.css";

const FacilitiesCard = () => {
  return (
    <div className={styles.recentCard}>
      <div className={styles.image}>
        <img src="/bg.jpg" className={styles.eventImage} alt="" />
      </div>
      <div className={styles.eventSummary}>
        <h1 className={styles.recentEventDetail}>Lorem ipsum dolor sit amet</h1>
        <p className={styles.moreDetails}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue.
        </p>
        <p className={styles.date}>12th june,2023</p>
        {/* <Link href={`/`}> */}
        <span className={styles.readMore}>
          <span className={styles.read}>See more</span>
          <i className="fas fa-chevron"></i>
        </span>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default FacilitiesCard;
