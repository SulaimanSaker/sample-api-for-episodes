import React, { useState } from "react";

import { Navbar, SideNav } from "components/organisms";

import { Styles } from "./styles";

const Header = ({ navbarNotCollapsed }) => {
  const [hamburger, setHamburger] = useState(false);

  return (
    <Styles>
      <header className="header">
        <Navbar
          hamburger={hamburger}
          setHamburger={setHamburger}
          alwaysNotCollapsed={navbarNotCollapsed}
        />

        <SideNav hamburger={hamburger} />
      </header>
    </Styles>
  );
};

export default Header;
