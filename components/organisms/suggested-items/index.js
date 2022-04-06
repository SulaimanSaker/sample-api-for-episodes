import React from "react";

import useMediaQuery from "components/particles/hooks/with-media-query";

import { Image } from "components/atoms";
import { SectionHeader, SalesItem } from "components/molecules";

import { Styles } from "./styles";

const getVerticalLineHeight = ({
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
    return "535";
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
    return "670";
  }

  if (q1600to1680) {
    return "690";
  }

  if (q1680to1920) {
    return "730";
  }

  if (qMin1920) {
    return "775";
  }

  return "0";
};

const getCustomLines = (mediaQueries) =>
  mediaQueries.qMin961 && (
    <div className="line" suppressHydrationWarning={true}>
      <div className="line__circle">
        <svg viewBox="0 0 2 2">
          <circle cx="1" cy="1" r="1" />
        </svg>
      </div>

      {process.browser && (
        <div className="line__vertical-line">
          <svg viewBox={`0 0 1 ${getVerticalLineHeight(mediaQueries)}`}>
            <rect width="1" height={getVerticalLineHeight(mediaQueries)} />
          </svg>
        </div>
      )}
    </div>
  );
const SuggestedItems = () => {
  const mediaQueries = useMediaQuery();

  return (
    <Styles>
      <section className="suggested-items">
        <div className="full-width-container">
          <div className="container">
            <div className="d-flex justify-content-end">
              <div className="suggested-items__header">
                <SectionHeader
                  customLines={getCustomLines(mediaQueries)}
                  className="mb-6 pb-1"
                  title="Suggested Items"
                  subTitle="Check the Suggested Items by Double Beat"
                />
              </div>
            </div>

            <div className="suggested-items__grid">
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
            </div>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default SuggestedItems;
