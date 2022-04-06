import React from "react";

import classNames from "classnames";

import { Styles } from "./styles";

const Nav = ({ items }) => {
  return (
    <Styles>
      <nav className="full-width-container">
        <ul className="nav">
          {items.map(({ id, label, href, active }) => (
            <li key={id} className="nav-item">
              <a className={classNames("nav-link", { active })} href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Styles>
  );
};

export default Nav;
