import React from "react";

import useMediaQuery from "components/particles/hooks/with-media-query";

import { SectionHeader, ShopItem } from "components/molecules";

import { Styles } from "./styles";

const getVerticalLineHeight = ({
  qMax1366,
  q1366to1440,
  q1440to1536,
  q1536to1600,
  q1600to1680,
  q1680to1920,
  qMin1920,
  qMax1300,
  qMax1250,
  qMax1200,
  qMax1100,
  qMax1000,
  qMax900,
}) => {
  if (qMax900) {
    return "500";
  }
  if (qMax1000) {
    return "520";
  }
  if (qMax1100) {
    return "540";
  }
  if (qMax1200) {
    return "560";
  }
  if (qMax1250) {
    return "580";
  }
  if (qMax1300) {
    return "590";
  }
  if (qMax1366) {
    return "600";
  }

  if (q1366to1440) {
    return "604";
  }

  if (q1440to1536) {
    return "640";
  }

  if (q1536to1600) {
    return "665";
  }

  if (q1600to1680) {
    return "690";
  }

  if (q1680to1920) {
    return "730";
  }

  if (qMin1920) {
    return "760";
  }

  return "0";
};

const getCustomLines = (mediaQueries) =>
  mediaQueries.qMin960 && (
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

const ShopByCategory = () => {
  const mediaQueries = useMediaQuery();

  return (
    <Styles>
      <section className="shop-by-category">
        <div className="full-width-container">
          <div className="container">
            <div className="d-flex justify-content-end">
              <div className="shop-by-category__header">
                <SectionHeader
                  customLines={getCustomLines(mediaQueries)}
                  className="mb-6 pb-1"
                  title="Shop By Category"
                  subTitle="Check the Suggested Items by Double Beat"
                />
              </div>
            </div>

            <div className="shop-by-category__grid">
              <ShopItem src="/images/temp/shop/5.png" alt="" className="box-one" />
              <ShopItem src="/images/temp/shop/6.png" alt="" />
              <ShopItem src="/images/temp/shop/4.png" alt="" />
              <ShopItem src="/images/temp/shop/3.png" alt="" />
              <ShopItem src="/images/temp/shop/2.png" alt="" />
              <ShopItem src="/images/temp/shop/1.png" alt="" className="box-six" />
            </div>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default ShopByCategory;
