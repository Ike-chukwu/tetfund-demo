import React from "react";
import styles from "../../../../../public/styles/post.module.css";

const Post = () => {
  return (
    <div className={styles.post}>
      <img src="/p1.png" alt="" className={styles.eventImg} />
      <div className={styles.postBrief}>
        <h3 className={styles.cardHeading}>Title</h3>
        <p className={styles.cardBrief}>
          Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
        </p>
        <div className={styles.lastAspect}>
          <span className={styles.blueText}>Read article</span>
          <img src="/grey.png" alt="" className={styles.rightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Post;
