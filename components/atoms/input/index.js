import React from "react";

import { Styles } from "./styles";

const Input = ({ name, label, type, value, required, onChange, onKeyDown }) => {
  return (
    <Styles value={value}>
      <div className="input">
        {type === "textarea" && (
          <textarea
            name={name}
            type={type}
            value={value}
            required={required}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        )}

        {type !== "textarea" && (
          <input
            name={name}
            type={type}
            value={value}
            required={required}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        )}

        <span className="highlight"></span>
        <span className="bar"></span>
        <label htmlFor={name}>{label}</label>
      </div>
    </Styles>
  );
};

export default Input;
