import React from "react";
import styles from "../../../public/styles/form.module.css";

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.leftSide}>
        <div className={styles.division}>
          <h1 className={styles.title}>lets talk</h1>
          <p className={styles.moreTalk}>
            Have some big idea or brand to develop and need help? Then reach out
            we would love to hear about your project and provide help
          </p>
        </div>
        <div className={styles.division}>
          <h1 className={styles.title}>email</h1>
          <p className={styles.moreTalk}>beebs@gmail.com </p>
        </div>
        <div className={styles.division}>
          <h1 className={styles.title}>socials</h1>
          <p className={styles.moreTalk}>instagram</p>
          <p className={styles.moreTalk}>twitter</p>
          <p className={styles.moreTalk}>facebook</p>
        </div>
      </div>
      <form className={styles.rightSide}>
        <div className={styles.inputPack}>
          <label htmlFor="" className={styles.label}>
            Name
          </label>
          <input type="text" className={styles.inputField} />
        </div>
        <div className={styles.inputPack}>
          <label htmlFor="" className={styles.label}>
            Email
          </label>
          <input type="text" className={styles.inputField} />
        </div>
        <div className={styles.inputPack}>
          <label htmlFor="" className={styles.label}>
            What service are you interested in?
          </label>
          <input type="text" className={styles.inputField} />
        </div>
        <div className={styles.inputPack}>
          <label htmlFor="" className={styles.label}>
            Budget
          </label>
          <input type="text" className={styles.inputField} />
        </div>
        <div className={styles.inputPack}>
          <label htmlFor="" className={styles.label}>
            Message
          </label>
          <textarea
            type="text"
            className={styles.inputField}
            rows={10}
            cols={10}
          />
        </div>
        <button className={styles.btn}>submit</button>
      </form>
    </div>
  );
};

export default Form;
