import React from "react";
import styles from "../../public/styles/facilities.module.css";
import PTemplate from "../components/picturetemplate/PTemplate";
import Link from "next/link";
import FacilitiesCard from "../components/facilities/FacilitiesCard";

const page = () => {
  return (
    <>
      <PTemplate image="/facilites.png" title="facilities" />
      <section>
        <h1 className={styles.title}>Facilities in ICT building</h1>

        <div className={styles.cardContainer}>
          <Link
            href="/facilities/1"
            style={{ textDecoration: "none", color: "unset" }}
          >
            <FacilitiesCard />
          </Link>
          <FacilitiesCard />
          <FacilitiesCard />
          <FacilitiesCard />
        </div>
      </section>
    </>
  );
};

export default page;
