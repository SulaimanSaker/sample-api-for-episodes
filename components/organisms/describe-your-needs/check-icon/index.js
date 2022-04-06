import React from "react";

import { Styles } from "./styles";

const CheckIcon = ({ phases, phase }) => {
  return (
    <Styles checked={phases.find((p) => p.id === phase && p.selected)}>
      <div className="check-icon"></div>
    </Styles>
  );
};

export default CheckIcon;
