import React from "react";

import classNames from "classnames";

import { Styles } from "./styles";

const Button = ({
  primary,
  secondary,
  big,
  small,
  rounded,
  block,
  width,
  className,
  onClick,
  children,
  ...props
}) => {
  return (
    <Styles width={width}>
      <button
        onClick={onClick}
        className={classNames(
          "btn",
          { "btn-primary": primary, "btn-secondary": secondary, small, big, rounded, block },
          className
        )}
        {...props}
      >
        {children}
      </button>
    </Styles>
  );
};

export default Button;
