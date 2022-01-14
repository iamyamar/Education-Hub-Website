import React from "react";
import Styles from "./Button.module.css";

const Button = ({ text, onclick }) => {
  return (
    <button onClick={onclick} className={Styles.button}>
      <span>{text}</span>
      <img
        className={Styles.arrow}
        src="/images/arrow-forward.png"
        alt="arrow"
      />
    </button>
  );
};

export default Button;
