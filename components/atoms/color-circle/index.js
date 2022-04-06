import React from "react";

import classNames from "classnames";

import { Styles } from "./styles";

const ColorCircle = ({ color, selected, className, onClick }) => {
  return (
    <Styles color={color} selected={selected}>
      <div role="presentation" className={classNames("color-circle", className)} onClick={onClick}>
        <div className="outer-circle">
          <div className="inner-circle"></div>
        </div>
      </div>
    </Styles>
  );
};

export default ColorCircle;
