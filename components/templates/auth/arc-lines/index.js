import React, { useState, useEffect, useRef } from "react";

import { Styles } from "./styles";

const ArcLines = ({ scrolled, width }) => {
  const [horizontalLineWidth, setHorizontalLineWidth] = useState(0);

  const randomKey = useRef(Math.random());

  useEffect(() => {
    if (process.browser) {
      setHorizontalLineWidth(
        document.getElementById(`${randomKey.current}-circle-right`).getBoundingClientRect().left -
          document.getElementById(`${randomKey.current}-circle-left`).getBoundingClientRect().left
      );
    }
  }, []);

  return (
    <Styles scrolled={scrolled} width={width} horizontalLineWidth={horizontalLineWidth}>
      <div className="lines">
        <div id={`${randomKey.current}-circle-left`} className="lines__circle-left">
          <svg viewBox="0 0 2 2">
            <circle cx="1" cy="1" r="1" />
          </svg>
        </div>

        <div className="lines__vertical-line-left">
          <svg viewBox="0 0 1 115">
            <rect width="1" height="115" />
          </svg>
        </div>

        <div className="lines__horizontal-line" style={{ width: `${horizontalLineWidth}px` }}>
          <svg viewBox={`0 0 ${horizontalLineWidth} 1`}>
            <rect width={horizontalLineWidth} height="1" />
          </svg>
        </div>

        <div id={`${randomKey.current}-circle-right`} className="lines__circle-right">
          <svg viewBox="0 0 2 2">
            <circle cx="1" cy="1" r="1" />
          </svg>
        </div>

        <div className="lines__vertical-line-right">
          <svg viewBox="0 0 1 115">
            <rect width="1" height="115" />
          </svg>
        </div>
      </div>
    </Styles>
  );
};

export default ArcLines;
