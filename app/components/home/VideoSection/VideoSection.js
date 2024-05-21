'use client'
import React from "react";
import styles from "../../../../public/styles/videosection.module.css";

const VideoSection = () => {
  return (
    <section className={styles.videoParent}>
      <h2 className={styles.subTitle}>our mission</h2>
      <div className={styles.videoWrapper}>
        <img src="/video.png" className={styles.video} alt="" />
      </div>
    </section>
  );
};

export default VideoSection;
