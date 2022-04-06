import React from "react";

import classNames from "classnames";

import { Styles } from "./styles";

const Radio = ({ id, label, checked, onChange, setChecked }) => {
  const handleClick = () => {
    setChecked(id);
    onChange(id);
  };

  return (
    <Styles>
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

export default Radio;
