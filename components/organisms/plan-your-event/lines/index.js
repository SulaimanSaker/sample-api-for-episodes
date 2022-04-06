import React from "react";

import useMediaQuery from "components/particles/hooks/with-media-query";

import { Styles } from "./styles";

const verticalLineHeight = ({
  q1366to1440,
  q1440to1536,
  q1536to1600,
  q1600to1680,
  q1680to1920,
  qMin1920,
  qMax1366,
}) => {
  if (qMax1366) {
    return "780";
  }
  if (q1366to1440) {
    return "785";
  }

  if (q1440to1536) {
    return "790";
  }

  if (q1536to1600) {
    return "788";
  }

  if (q1600to1680) {
    return "795";
  }

  if (q1680to1920) {
    return "805";
  }

  if (qMin1920) {
    return "810";
  }

  return "0";
};

const horizontalLineHeight = ({
  q1366to1440,
  q1440to1536,
  q1536to1600,
  q1600to1680,
  q1680to1920,
  qMax1920,
}) => {
  if (q1366to1440) {
    return "1100";
  }

  if (q1440to1536) {
    return "1100";
  }

  if (q1536to1600) {
    return "1200";
  }

  if (q1600to1680) {
    return "1270";
  }

  if (q1680to1920) {
    return "1300";
  }

  if (qMax1920) {
    return "1500";
  }

  return "0";
};

const PlanYourEventLines = () => {
  const mediaQueries = useMediaQuery();

  return (
    <Styles suppressHydrationWarning>
      {process.browser && (
        <div className="lines">
          <div className="lines__circle">
            <svg viewBox="0 0 2 2">
              <circle cx="1" cy="1" r="1" />
            </svg>
          </div>

          <div className="lines__vertical-line">
            <svg viewBox={`0 0 1 ${verticalLineHeight(mediaQueries)}`}>
              <rect width="1" height={verticalLineHeight(mediaQueries)} />
            </svg>
          </div>

          <div
            className="lines__horizontal-line"
            style={{ width: `${horizontalLineHeight(mediaQueries)}px` }}
          >
            <svg viewBox={`0 0 ${horizontalLineHeight(mediaQueries)} 1`}>
              <rect width={horizontalLineHeight(mediaQueries)} height="1" />
            </svg>
          </div>
        </div>
      )}
    </Styles>
  );
};

export default PlanYourEventLines;
