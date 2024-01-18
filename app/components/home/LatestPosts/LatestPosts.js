import React from "react";
import styles from "../../../../public/styles/latestPosts.module.css";
import Post from "./Post/Post";

const LatestPosts = () => {
  return (
    <section className={styles.postContainer}>
      <h2 className={styles.subTitle}>latest posts</h2>
      <div className={styles.postsPack}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default LatestPosts;
