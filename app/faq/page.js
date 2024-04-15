"use client";
import React, { useState } from "react";
import styles from "../../public/styles/faqs.module.css";
import PTemplate from "../components/picturetemplate/PTemplate";
import { FaPlus } from "react-icons/fa";
import Dropdown from "../components/faqs/dropdown/Dropdown";

const page = () => {
  const questions = [
    {
      id: 0,
      question: "Lorem ipsum dolor sit amet consectet?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam esse dolorum quaerat magni eos. Ea fugiat aut voluptatem incidunt distinctio ducimus error sapiente, recusandae molestiae!",
    },
    {
      id: 1,
      question: "Lorem ipsum dolor sit amet consectet?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam esse dolorum quaerat magni eos. Ea fugiat aut voluptatem incidunt distinctio ducimus error sapiente, recusandae molestiae!",
    },
    {
      id: 2,
      question: "Lorem ipsum dolor sit amet consectet?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam esse dolorum quaerat magni eos. Ea fugiat aut voluptatem incidunt distinctio ducimus error sapiente, recusandae molestiae!",
    },
    {
      id: 3,
      question: "Lorem ipsum dolor sit amet consectet?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam esse dolorum quaerat magni eos. Ea fugiat aut voluptatem incidunt distinctio ducimus error sapiente, recusandae molestiae!",
    },
  ];

  return (
    <>
      <PTemplate image="/faq.png" title="FAQS" />
      <section>
        <h2 className={styles.mainTitle}>
          frequently ask <span className={styles.blueTitle}>questions</span>
        </h2>

        <div className={styles.dropdownParent}>
          {questions.map((item) => (
            <Dropdown
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
