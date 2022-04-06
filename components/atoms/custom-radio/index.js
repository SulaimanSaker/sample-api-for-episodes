import React from "react";
import { Styles } from "./styles";

function CustomRadio({ id, label, name, value, checked, setChecked }) {
  return (
    <Styles>
      <div className="radio-item">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checke={checked}
          onChange={() => setChecked(id)}
        />
        <label htmlFor={id} className="font-size-18">
          {label}
        </label>
      </div>
    </Styles>
  );
}

export default CustomRadio;
