import React from "react";

import classNames from "classnames";

import { Link } from "components/atoms";

import { Styles } from "./styles";

const BreadCrumbs = ({ items }) => {
  return (
    <Styles>
      <section className="bread-crumbs full-width-container">
        {items?.map(({ label, href }, index) => (
          <div key={index} className="d-flex align-items-center">
            <Link
              href={href}
              className={classNames("link", { "link--last": index + 1 === items.length })}
            >
              {label}
            </Link>

            {index + 1 !== items.length && <div className="vertical-column"></div>}
          </div>
        ))}
      </section>
    </Styles>
  );
};

export default BreadCrumbs;
