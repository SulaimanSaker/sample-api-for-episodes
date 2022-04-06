import React from "react";

import classNames from "classnames";

import { Styles } from "./styles";

const Hamburger = ({ open, collapsed, onClick }) => {
  return (
    <Styles collapsed={collapsed}>
      <div role="presentation" className={classNames("menu-btn", { open })} onClick={onClick}>
        <div className="menu-btn__burger"></div>
      </div>
    </Styles>
  );
};

export default Hamburger;
