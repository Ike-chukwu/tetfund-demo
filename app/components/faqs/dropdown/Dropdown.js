"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus, FaSubscript } from "react-icons/fa";
import styles from "../../../../public/styles/dropdown.module.css";

const Dropdown = (props) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <div className={styles.dropdownMain}>
      <div className={styles.topPart}>
        <p className={styles.mainBold}>01</p>
        <p className={styles.mainQuestion}>{props.question}</p>
        {isDropdownActive ? (
          <div
            className={styles.blueBg}
            onClick={() => setIsDropdownActive(false)}
          >
            <FaMinus color="white" size={10} style={{ cursor: "pointer" }} />
          </div>
        ) : (
          <div
            className={styles.blueBg}
            onClick={() => setIsDropdownActive(true)}
          >
            <FaPlus size={10} color="white" style={{ cursor: "pointer" }} />
          </div>
        )}
      </div>
      <div
        className={
          isDropdownActive
            ? `${styles.bottomPart} ${styles.active}`
            : `${styles.bottomPart}`
        }
      >
        <p className={styles.brief}>{props.answer}</p>
      </div>
    </div>
  );
};

export default Dropdown;
