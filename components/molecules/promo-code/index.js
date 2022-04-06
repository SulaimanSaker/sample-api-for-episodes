import React, { useState } from "react";

import { CallapseArrow } from "components/atoms";

import { Styles } from "./styles";

const PromoCode = ({ onChange }) => {
  const [collapsed, setCollapsed] = useState();

  const handleCollapse = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <Styles collapsed={collapsed}>
      <div className="promo-code">
        <div className="d-flex justify-content-between font-size-18">
          <div className="promo-code__text ">Enter Your Promo Code</div>
          <CallapseArrow collapsed={collapsed} onClick={handleCollapse} />
        </div>

        <div className="list-header__search-container">
          <input
            type="text"
            className="list-header__search-input"
            value="Monaisthebest2021"
            onChange={onChange}
          />
        </div>
      </div>
    </Styles>
  );
};

export default PromoCode;
