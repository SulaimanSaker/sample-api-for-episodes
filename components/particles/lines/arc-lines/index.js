import React, { useEffect, useState } from "react";

import useMediaQuery from "components/particles/hooks/with-media-query";

import { Styles } from "./styles";

const getWidth = ({
  q1366to1440,
  q1440to1536,
  q1536to1600,
  q1600to1680,
  q1680to1920,
  qMax1920,
}) => {
  if (q1366to1440) {
    return "1246";
  }

  if (q1440to1536) {
    return "1286";
  }

  if (q1536to1600) {
    return "1370";
  }

  if (q1600to1680) {
    return "1430";
  }

  if (q1680to1920) {
    return "1500";
  }

  if (qMax1920) {
    return "1704";
  }

  return "0";
};

const ArcLines = ({ scrolled, linesHeight }) => {
  const mediaQueries = useMediaQuery();

  const [loaded, setLoded] = useState(false);

  useEffect(() => {
    let stateCheck = setInterval(() => {
      if (document.readyState === "complete") {
        clearInterval(stateCheck);
        setLoded(true);
      }
    }, 100);
  }, [scrolled]);

  return (
    <Styles
      linesHeight={linesHeight || 0}
      suppressHydrationWarning
      scrolled={scrolled && loaded}
      horizontalLineWidth={getWidth(mediaQueries)}
    >
      {process.browser && (
        <div className="lines">
          <div className="lines__circle-left">
            <svg viewBox="0 0 2 2">
              <circle cx="1" cy="1" r="1" />
            </svg>
          </div>

          <div className="lines__vertical-line-left">
            <svg viewBox="0 0 1 115">
              <rect width="1" height="115" />
            </svg>
          </div>

          <div className="lines__horizontal-line" style={{ width: `${getWidth(mediaQueries)}px` }}>
            <svg viewBox={`0 0 ${getWidth(mediaQueries)} 1`}>
              <rect width={getWidth(mediaQueries)} height="1" />
            </svg>
          </div>

          <div className="lines__circle-right">
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
      )}
    </Styles>
  );
};

export default ArcLines;
