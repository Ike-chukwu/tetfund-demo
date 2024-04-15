"use client";
import React, { useState } from "react";
import styles from "../../../public/styles/Navbar.module.css";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const pathname = usePathname();

  return (
    <div className={styles.navParent}>
      <img src="/logo.png" className={styles.logoPic} alt="" />
      <div
        className={
          isNavActive
            ? `${styles.middlePart} ${styles.active}`
            : `${styles.middlePart}`
        }
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: pathname !== "/" ? "white" : "unset",
          }}
        >
          <span className={styles.link}>home</span>
        </Link>
        <Link
          href="/programs"
          style={{
            textDecoration: "none",
            color: pathname !== "/" ? "white" : "unset",
          }}
        >
          <span className={styles.link}>programs</span>
        </Link>
        <Link
          href="/facilities"
          style={{
            textDecoration: "none",
            color: pathname !== "/" ? "white" : "unset",
          }}
        >
          <span className={styles.link}>facilities</span>
        </Link>
        <Link
          href="/faq"
          style={{
            textDecoration: "none",
            color: pathname !== "/" ? "white" : "unset",
          }}
        >
          <span className={styles.link}>faq</span>
        </Link>
        <Link
          href="/contact"
          style={{
            textDecoration: "none",
            color: pathname !== "/" ? "white" : "unset",
          }}
        >
          <span className={styles.link}>Contact</span>
        </Link>
      </div>
      <button className={styles.btn}>
        Get in touch{" "}
        <img src="/arrow-right.png" className={styles.arrow} alt="" />
      </button>
      <FaBars
        className={styles.menu}
        size={20}
        onClick={() => setIsNavActive(!isNavActive)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Navbar;
