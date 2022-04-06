import React from "react";

import useMediaQuery from "components/particles/hooks/with-media-query";

import { Styles } from "./styles";

const RoundedRectangle = () => {
  const { q1366to1440, q1440to1536, q1536to1600 } = useMediaQuery();

  if (q1366to1440 || q1440to1536 || q1536to1600) {
    return (
      <Styles suppressHydrationWarning>
        {process.browser && (
          <svg className="rounded-rectangle" width="134.2" height="76" viewBox="0 0 134.2 76">
            <path
              d="M38.4,0c-0.1,0-0.3,0-0.3,0c-0.2,0-0.4,0-0.4,0c-8.7-0.2-23,4.1-31.6,16.9C4.7,19-0.5,27.1,0.1,38
            c0.7,27.6,22.7,38,37.6,38c0.2,0,0.4,0,0.4,0c0.1,0,0.3,0,0.3,0C58,75.8,76.1,60.3,76.1,38C76.1,15.8,58.3,0.2,38.4,0z"
            />
          </svg>
        )}
      </Styles>
    );
  }

  return (
    <Styles suppressHydrationWarning>
      {process.browser && (
        <svg className="rounded-rectangle" width="183" height="104" viewBox="0 0 183 104">
          <path d="M52.3637 -1.07279e-07C52.2273 -1.07279e-07 51.9546 -1.07279e-07 51.9546 -1.07279e-07C51.6818 -1.07279e-07 51.4091 -1.07279e-07 51.4091 -1.07279e-07C39.5455 -0.273684 20.0455 5.61053 8.31819 23.1263C6.4091 26 -0.68181 37.0842 0.136372 52C1.09092 89.7684 31.0909 104 51.4091 104C51.6818 104 51.9546 104 51.9546 104C52.0909 104 52.3637 104 52.3637 104C79.0909 103.726 103.773 82.5158 103.773 52C103.773 21.6211 79.5 0.273684 52.3637 -1.07279e-07Z" />
        </svg>
      )}
    </Styles>
  );
};

export default RoundedRectangle;
