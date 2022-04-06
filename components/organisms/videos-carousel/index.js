import React from "react";

import ReactPlayer from "react-player/lazy";

import useMediaQuery from "components/particles/hooks/with-media-query";

import { SectionHeader, Carousel } from "components/molecules";

import { items } from "./items";

import { Styles } from "./styles";

const getVideoHeight = ({
  q1366to1440,
  q1440to1536,
  q1536to1600,
  q1600to1680,
  q1680to1920,
  qMax1920,
}) => {
  if (q1366to1440) {
    return "22.5rem";
  }

  if (q1440to1536) {
    return "22.5rem";
  }

  if (q1536to1600) {
    return "23.04rem";
  }

  if (q1600to1680) {
    return "23.75rem";
  }

  if (q1680to1920) {
    return "25.2rem";
  }

  if (qMax1920) {
    return "28.5rem";
  }

  return "0";
};

const customLines = (
  <div className="lines">
    <div className="lines__circle">
      <svg viewBox="0 0 2 2">
        <circle cx="1" cy="1" r="1" />
      </svg>
    </div>

    <div className="lines__horizontal-line">
      <svg viewBox="0 0 1000 1">
        <rect width="1000" height="1" />
      </svg>
    </div>
  </div>
);

const VideosCarousel = () => {
  const mediaQueries = useMediaQuery();

  return (
    <Styles>
      <section suppressHydrationWarning className="videos-carousel">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="videos-carousel__lines">{customLines}</div>

            <div className="videos-carousel__header">
              <SectionHeader
                viewAllButton
                className="mb-6 pb-1"
                title="Our Videos"
                subTitle="Great begins with small"
              />
            </div>
          </div>
        </div>

        {process.browser && (
          <Carousel navigation items={items} slidesPerView={4} buttonsHeight="11.75rem">
            {({ url }) => (
              <ReactPlayer url={url} width="100%" height={getVideoHeight(mediaQueries)} />
            )}
          </Carousel>
        )}
      </section>
    </Styles>
  );
};

export default VideosCarousel;
