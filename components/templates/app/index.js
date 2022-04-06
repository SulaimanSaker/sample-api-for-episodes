import React from "react";

import { Styles } from "./styles";

const AppTemplate = ({ header, hero, nav, children, footer, headerNotFixed }) => {
  return (
    <Styles hero={hero} headerNotFixed={headerNotFixed}>
      {header && <div className="app-template__header">{header}</div>}
      {hero && <div className="app-template__hero">{hero}</div>}
      {nav && <div className="app-template__nav">{nav}</div>}
      {children && <div className="app-template__content">{children}</div>}
      {footer && <div className="app-template__footer">{footer}</div>}
    </Styles>
  );
};

export default AppTemplate;
