import React from "react";

import { Image } from "components/atoms";
import { SectionHeader, SalesItem } from "components/molecules";

import { Styles } from "./styles";
import useMediaQuery from "components/particles/hooks/with-media-query";

const getVerticalLineHeight = ({
  qMax1366,
  q1366to1440,
  q1440to1536,
  q1536to1600,
  q1600to1680,
  q1680to1920,
  qMin1920,
}) => {
  if (qMax1366) {
    return "600";
  }

  if (q1366to1440) {
    return "620";
  }

  if (q1440to1536) {
    return "645";
  }

  if (q1536to1600) {
    return "660";
  }

  if (q1600to1680) {
    return "700";
  }

  if (q1680to1920) {
    return "778";
  }

  if (qMin1920) {
    return "790";
  }

  return "0";
};
const getCustomLines = (mediaQueries) =>
  mediaQueries.qMin961 && (
    <div className="lines">
      <div className="lines__circle">
        <svg viewBox="0 0 2 2">
          <circle cx="1" cy="1" r="1" />
        </svg>
      </div>

      <div className="lines__vertical-line">
        <svg viewBox={`0 0 1 ${getVerticalLineHeight(mediaQueries)} `}>
          <rect width="1" height={getVerticalLineHeight(mediaQueries)} />
        </svg>
      </div>

      <div className="lines__horizontal-line">
        <svg viewBox="0 0 3000 1">
          <rect width="3000" height="1" />
        </svg>
      </div>
    </div>
  );
const Sales = () => {
  const mediaQueries = useMediaQuery();
  return (
    <Styles>
      <section className="sales">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="sales__header">
              <SectionHeader
                viewAllButton
                className="mb-6 pb-1"
                title="Double Beat Sales"
                customLines={getCustomLines(mediaQueries)}
                subTitle="Great begins with small"
              />
            </div>
          </div>

          <div className="sales__grid">
            <SalesItem src="/images/temp/item/thumbs-carousel/1.png" alt="" />
            <SalesItem src="/images/temp/item/thumbs-carousel/2.png" alt="" />
            <Image
              width="100%"
              height="100%"
              src="/images/temp/sales3.jpg"
              alt=""
              className="box-three"
            />
            <SalesItem src="/images/temp/item/thumbs-carousel/3.png" alt="" />
            <SalesItem src="/images/temp/item/thumbs-carousel/4.png" alt="" />
            <SalesItem src="/images/temp/item/thumbs-carousel/5.png" alt="" />
            <SalesItem src="/images/temp/item/thumbs-carousel/6.png" alt="" />
            <Image
              width="100%"
              height="100%"
              src="/images/temp/sales8.jpg"
              alt=""
              className="box-eight"
            />
            <SalesItem src="/images/temp/item/thumbs-carousel/1.png" alt="" />
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default Sales;
