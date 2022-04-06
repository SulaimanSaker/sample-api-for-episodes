import React from "react";
import { Styles } from "./styles";

function HorizentalLine() {
  return (
    <Styles>
      <div className="lines__horizontal-line">
        <svg viewBox="0 0 3000 1">
          <rect width="3000" height="1" />
        </svg>
      </div>
    </Styles>
  );
}

export default HorizentalLine;
