import React from "react";
import styles from "../../../public/styles/footer.module.css";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className={styles.footerParent}>
      <div className={styles.innerFooterParent}>
        <div className={styles.firstChild}>
          <p className={styles.firstChildHeading}>about us</p>
          <p className={styles.brief}>
            We aim to create a regionally- recognized and acknowledged model
            that is driven by high quality postgraduate education for uptake and
            commercialization of research and technology to advance the growth
            of the ICT industry.
          </p>
        </div>

        <div className={styles.otherChild}>
          <p className={styles.blueHeading}>Important Links</p>
          <p className={styles.blackLink}>TCOX</p>
          <p className={styles.blackLink}>Programs</p>
          <p className={styles.blackLink}>Facilities</p>
          <p className={styles.blackLink}>FAQS</p>
          <p className={styles.blackLink}>Contact Us</p>
        </div>

        <div className={styles.otherChild}>
          <p className={styles.blueHeading}>Quick Download</p>
          <p className={styles.blackLink}>Students Handbook</p>
          <p className={styles.blackLink}>Financial Manual</p>
          <p className={styles.blackLink}>Procedurement Manual</p>
          <p className={styles.blackLink}>Implementation Plan</p>
          <p className={styles.blackLink}>Scholarship Policy</p>
          <p className={styles.blackLink}>Sexual Harassment Policy</p>
        </div>

        <div className={styles.otherChild}>
          <p className={styles.blueHeading}>Contact Us</p>
          <p className={styles.blackLink}>
            <span style={{ fontWeight: "bold" }}>Office Address</span>
            <br />
            Africa Center of Excellence, ICT Center, OAU Ile-Ife Nigeria
          </p>
          <p className={styles.blackLink}>
            <span style={{ fontWeight: "bold" }}>Phone</span> (+234)803-887-6008
          </p>
          <p className={styles.blackLink}>
            <span style={{ fontWeight: "bold" }}>Email</span>
            info@ace.oauife.edu.ng
          </p>
        </div>
      </div>
      <hr className="hr-line" />
      <div className={styles.lastParent}>
        <p className={styles.blackLink}>
          TCOX| © Copyright 2021, All Rights Reserved
        </p>

        <div className={styles.iconContainer}>
          <TfiTwitter size={25} />
          <AiOutlineInstagram size={25} />
          <MdOutlineFacebook size={25} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
