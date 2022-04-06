import React from "react";

export const getVerticalLineHeight = ({
  q1366to1440,
  q1440to1536,
  q1536to1600,
  q1600to1680,
  q1680to1920,
  q960to1100,
  qMin1920,
  qMax1366,
}) => {
  if (q960to1100) {
    return "560";
  }

  if (qMax1366) {
    return "590";
  }
  if (q1366to1440) {
    return "620";
  }

  if (q1440to1536) {
    return "650";
  }

  if (q1536to1600) {
    return "665";
  }

  if (q1600to1680) {
    return "680";
  }

  if (q1680to1920) {
    return "730";
  }

  if (qMin1920) {
    return "750";
  }

  return "0";
};

export const getHorizontalLineWidth = ({
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

export const getCarouselLines = (mediaQueries) => (
  <div className="lines">
    <div className="lines__carousel-circle-left">
      <svg viewBox="0 0 2 2">
        <circle cx="1" cy="1" r="1" />
      </svg>
    </div>

    <div className="lines__carousel-vertical-line-left">
      <svg viewBox="0 0 1 115">
        <rect width="1" height="115" />
      </svg>
    </div>

    <div
      className="lines__carousel-horizontal-line"
      style={{ width: `${getHorizontalLineWidth(mediaQueries)}px` }}
    >
      <svg viewBox={`0 0 ${getHorizontalLineWidth(mediaQueries)} 1`}>
        <rect width={getHorizontalLineWidth(mediaQueries)} height="1" />
      </svg>
    </div>

    <div className="lines__carousel-circle-right">
      <svg viewBox="0 0 2 2">
        <circle cx="1" cy="1" r="1" />
      </svg>
    </div>

    <div className="lines__carousel-vertical-line-right">
      <svg viewBox="0 0 1 115">
        <rect width="1" height="115" />
      </svg>
    </div>

    {mediaQueries.qMin961 && (
      <div className="lines__carousel-line-under-buttons">
        <svg viewBox="0 0 200 1">
          <rect width="200" height="1" />
        </svg>
      </div>
    )}
  </div>
);
