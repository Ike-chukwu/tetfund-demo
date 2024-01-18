import React from "react";
import styles from "../../../../public/styles/mission.module.css";

const Mission = () => {
  return (
    <section className={styles.missonParent}>
      <div className={styles.leftSide}>
        <img src="/left.png" className={styles.gridPic} alt="" />
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.subTitle}>our mission</h2>
        <p className={styles.brief}>
          Etiam condimentum duis molestie malesuada volutpat pellentesque sed.
          Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis
          massa tellus imperdiet aenean nulla id.
        </p>
        <div className={styles.lastAspect}>
          <span className={styles.blueText}>See how it helped others</span>
          <img src="/grey.png" alt="" className={styles.rightArrow} />
        </div>
      </div>
    </section>
  );
};

export default Mission;
