import React from "react";
import { Styles } from "./styles";

function CustomCheckBox({ checked }) {
  return (
    <Styles checked={checked}>
      <div className="check-icon"></div>
    </Styles>
  );
}

export default CustomCheckBox;
