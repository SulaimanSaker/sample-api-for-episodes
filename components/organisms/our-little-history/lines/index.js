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
    return "485";
  }

  if (q1440to1536) {
    return "525";
  }

  if (q1536to1600) {
    return "550";
  }

  if (q1600to1680) {
    return "562";
  }

  if (q1680to1920) {
    return "576";
  }

  if (qMax1920) {
    return "640";
  }

  return "0";
};

const Lines = () => {
  const mediaQueries = useMediaQuery();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let contentElement = document.getElementById("our-little-history");

    const handlScroll = () => {
      if (contentElement.offsetTop + 150 < window.pageYOffset + window.innerHeight) {
        if (!scrolled) {
          setScrolled(true);
        }
      }
    };

    window.addEventListener("scroll", handlScroll);

    return () => window.removeEventListener("scroll", handlScroll);
  }, [scrolled]);

  return (
    <Styles
      suppressHydrationWarning
      scrolled={scrolled}
      horizontalLineWidth={getWidth(mediaQueries)}
    >
      {process.browser && (
        <div className="lines">
          <div className="lines__circle">
            <svg viewBox="0 0 2 2">
              <circle cx="1" cy="1" r="1" />
            </svg>
          </div>

          <div className="lines__vertical-line">
            <svg viewBox="0 0 1 450">
              <rect width="1" height="450" />
            </svg>
          </div>

          <div className="lines__horizontal-line" style={{ width: `${getWidth(mediaQueries)}px` }}>
            <svg viewBox={`0 0 ${getWidth(mediaQueries)} 1`}>
              <rect width={getWidth(mediaQueries)} height="1" />
            </svg>
          </div>
        </div>
      )}
    </Styles>
  );
};

export default Lines;
