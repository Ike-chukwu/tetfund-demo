import React from "react";
import PTemplate from "../components/picturetemplate/PTemplate";
import styles from "../../public/styles/contact.module.css";
import Form from "../components/contact/Form";

const page = () => {
  return (
    <>
      <PTemplate image="contact.png" title="contact" />
      <section>
        <Form />
      </section>
    </>
  );
};

export default page;
