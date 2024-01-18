import React from "react";
import styles from "../../../public/styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navParent}>
      <img src="/logo.png" className={styles.logoPic} alt="" />
      <div className={styles.middlePart}>
        <Link href="/" style={{ textDecoration: "none", color: "unset" }}>
          <span className={styles.link}>home</span>
        </Link>
        <Link
          href="/programs"
          style={{ textDecoration: "none", color: "unset" }}
        >
          <span className={styles.link}>programs</span>
        </Link>
        <Link
          href="/facilities"
          style={{ textDecoration: "none", color: "unset" }}
        >
          <span className={styles.link}>facilities</span>
        </Link>
        <Link href="/faq" style={{ textDecoration: "none", color: "unset" }}>
          <span className={styles.link}>faq</span>
        </Link>
        <Link
          href="/contact"
          style={{ textDecoration: "none", color: "unset" }}
        >
          <span className={styles.link}>Contact</span>
        </Link>
      </div>
      <button className={styles.btn}>
        Get in touch{" "}
        <img src="/arrow-right.png" className={styles.arrow} alt="" />
      </button>
      {/* <div className={styles.borderBottomLine}></div> */}
    </div>
  );
};

export default Navbar;
