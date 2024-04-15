import React from "react";
import styles from "../../../public/styles/faqs.module.css";

const PTemplate = (props) => {
  return (
    <div className={styles.image}>
      <img src={props.image} alt="" className={styles.image} />
      <div className={styles.title}>{props.title}</div>
    </div>
  );
};

export default PTemplate;
