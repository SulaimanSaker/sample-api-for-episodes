import React from "react";

import { Range } from "rc-slider";

import { Styles } from "./styles";

import "rc-slider/assets/index.css";

const PricesController = ({ min, max, from, to, onChange }) => {
  return (
    <Styles>
      <div className="prices w-100">
        <div className="prices-range">
          <Range min={min} max={max} onChange={onChange} value={[from || min, to || max]} />
        </div>

        <div className="prices-value">
          <div>$ {from || min}</div>
          <div>$ {to || max}</div>
        </div>
      </div>
    </Styles>
  );
};

export default PricesController;
