import React from "react";
import PTemplate from "../components/picturetemplate/PTemplate";
import UpcomingEvents from "../components/training/UpcomingEvents";
import Workshops from "../components/training/Workshops";

const page = () => {
  return (
    <>
      <PTemplate image="/program.png" title="Programs" />
      <section>
        <UpcomingEvents />
        <Workshops />
      </section>
    </>
  );
};

export default page;
