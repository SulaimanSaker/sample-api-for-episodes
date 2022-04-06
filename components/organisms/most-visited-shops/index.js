import React from "react";

import useMediaQuery from "components/particles/hooks/with-media-query";

import { Image } from "components/atoms";
import { SectionHeader, Carousel } from "components/molecules";

import { items } from "./items";

import { getHorizontalLineWidth, getCarouselLines, getVerticalLineHeight } from "./helpers";

import { Styles } from "./styles";

const getHeaderCustomLine = (mediaQueries) =>
  mediaQueries.qMin961 && (
    <div className="lines text-gray-9" suppressHydrationWarning>
      <div className="lines__header-circle">
        <svg viewBox="0 0 2 2">
          <circle cx="1" cy="1" r="1" />
        </svg>
      </div>

      {process.browser && (
        <div className="lines__header-vertical-line">
          <svg viewBox={`0 0 1 ${getVerticalLineHeight(mediaQueries)}`}>
            <rect width="1" height={getVerticalLineHeight(mediaQueries)} />
          </svg>
        </div>
      )}
    </div>
  );
const MostVisitedShops = () => {
  const mediaQueries = useMediaQuery();

  return (
    <Styles horizontalLineWidth={getHorizontalLineWidth(mediaQueries)}>
      <section className="most-visited-shops">
        <div className="full-width-container">
          <div className="container">
            <div className="d-flex justify-content-end">
              <div className="most-visited-shops__header">
                <SectionHeader
                  customLines={getHeaderCustomLine(mediaQueries)}
                  className="mb-6 pb-1 "
                  title="Most Visited Shops"
                  subTitle="Here are the most visited shops on our website"
                />
              </div>
            </div>
          </div>

          <div className="most-visited-shops__carousel">
            <Carousel
              items={items}
              slidesPerView={5}
              navigation
              buttonsInTheMiddle
              defaultSlidesPerView={mediaQueries.qMax960}
              absoluteContent={getCarouselLines(mediaQueries)}
            >
              {({ src, alt }) => <Image src={src} alt={alt} />}
            </Carousel>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default MostVisitedShops;
