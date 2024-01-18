import React from "react";
import styles from "../../../../public/styles/event.module.css";
import EventCard from "./EventCard/EventCard";

const Events = () => {
  return (
    <section className={styles.eventContainer}>
      <h2 className={styles.subTitle}>events</h2>
      <div className={styles.eventCardPack}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
};

export default Events;
