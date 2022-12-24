import React from "react";
import s from "./Button.module.css";
const Button = ({ type, name }) => {
  return (
    <button type={type} className={s.btn}>
      {name}
    </button>
  );
};

export default Button;
