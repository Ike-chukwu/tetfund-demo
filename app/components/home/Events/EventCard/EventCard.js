import React from "react";
import styles from "../../../../../public/styles/eventcard.module.css";

const EventCard = () => {
  return (
    <div className={styles.eventCard}>
      <img src="/event.png" alt="" className={styles.eventImg} />
      <div className={styles.eventBrief}>
        <h3 className={styles.cardHeading}>Event 1</h3>
        <p className={styles.cardBrief}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit
          in....
        </p>
        <button className={styles.btn}>Learn more</button>
      </div>
    </div>
  );
};

export default EventCard;
