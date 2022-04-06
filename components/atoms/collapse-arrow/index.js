import React from "react";

import classNames from "classnames";

import { IoIosArrowBack } from "react-icons/io";

import { Styles } from "./styles";

const CallapseArrow = ({ collapsed, onClick, size, fill }) => {
  let currentSize = size ? size : "1em";
  let currentFill = fill ? fill : "var(--gray-14)";
  return (
    <Styles>
      <div
        className={classNames("collapse-arrow", {
          collapsed,
        })}
      >
        <IoIosArrowBack fill={currentFill} size={currentSize} onClick={onClick} />
      </div>
    </Styles>
  );
};

export default CallapseArrow;
