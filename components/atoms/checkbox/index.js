import React from "react";

import classNames from "classnames";

import { Styles } from "./styles";

const Checkbox = ({ label, checked, onChange }) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <Styles label={label}>
      <span
        className={classNames("checkmark", { checked })}
        role="presentation"
        onClick={handleClick}
      ></span>
      <span className="space"></span>
      <span className={classNames("label", { checked })}>{label}</span>
    </Styles>
  );
};

export default Checkbox;
