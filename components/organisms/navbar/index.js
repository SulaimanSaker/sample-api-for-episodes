import React, { useEffect, useState } from "react";

import { Image, Button, Hamburger } from "components/atoms";

import { Styles } from "./styles";

const Navbar = ({ hamburger, setHamburger, alwaysNotCollapsed }) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handlScroll = () => {
      if (!alwaysNotCollapsed && window.scrollY >= 50) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", handlScroll);

    return () => window.removeEventListener("scroll", handlScroll);
  }, [alwaysNotCollapsed]);

  return (
    <Styles collapsed={collapsed}>
      <div className="navbar pt-8">
        <div className="navbar__logo">
          <Image alt="" className="logo" src="/images/logo3.svg" />
        </div>

        <div className="navbar__actions">
          <Button primary small={collapsed} className="btn-nav">
            Advertise with us
          </Button>

          <svg className="search-icon mr-4" fill="var(--gray-6)" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>

        <div className="navbar__hamburger">
          <Hamburger
            open={hamburger}
            collapsed={collapsed}
            onClick={() => setHamburger(!hamburger)}
          />
        </div>
      </div>
    </Styles>
  );
};

export default Navbar;
