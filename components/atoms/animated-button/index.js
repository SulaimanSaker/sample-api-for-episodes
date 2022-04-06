import React from "react";

import classNames from "classnames";

import { Styles } from "./styles";

const AnimatedButton = ({ type, onClick, small, children }) => {
  return (
    <Styles>
      <div className={classNames("animated-button", { small })}>
        <button type={type} onClick={onClick}>
          {children}
        </button>

        <div className="link-border">
          <svg width="102" height="1" viewBox="0 0 102 1">
            <rect x="22" width="80" height="1" />
            <rect x="-114.4" width="116.4" height="1" />
            <rect x="4" width="16" height="1" />
          </svg>
        </div>
      </div>
    </Styles>
  );
};

export default AnimatedButton;
