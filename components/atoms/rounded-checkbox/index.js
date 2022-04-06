import React from "react";
import { Styles } from "./styles";

const RoundedCheckbox = ({ id }) => {
  return (
    <Styles>
      <div className="round">
        <input type="checkbox" id={id} />
        <label htmlFor={id} />
      </div>
    </Styles>
  );
};

export default RoundedCheckbox;
