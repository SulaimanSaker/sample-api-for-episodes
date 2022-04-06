import React, { useCallback } from "react";

import classNames from "classnames";

import useMediaQuery from "components/particles/hooks/with-media-query";

import SwiperCore, { Navigation, Autoplay, Pagination, Controller, Thumbs } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { getDefaultSlidesPerView } from "./helpers";

import { Styles } from "./styles";

import "swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Autoplay, Pagination, Controller, Thumbs]);

const Carousel = ({
  absoluteContent,
  autoplay,
  buttonsHeight,
  buttonsInTheMiddle,
  children,
  direction,
  fullWidth,
  height,
  items,
  itemWidth,
  minHeight,
  navigation,
  padding,
  pagination,
  heroPagination,
  slidesPerView,
  spaceBetween,
  shadowIncluded,
  defaultSlidesPerView,
  ...props
}) => {
  const mediaQueries = useMediaQuery();

  const handleSwipper = useCallback(
    (swiper) => {
      if (autoplay) {
        swiper.autoplay.start();
      }
    },
    [autoplay]
  );

  const getSlidesPerView = useCallback(() => {
    if (defaultSlidesPerView) {
      return getDefaultSlidesPerView(mediaQueries);
    }

    return slidesPerView || 1;
  }, [defaultSlidesPerView, mediaQueries, slidesPerView]);

  const getNavigation = useCallback(() => {
    if (defaultSlidesPerView && mediaQueries.qMax960) {
      return false;
    }

    if (navigation) {
      return true;
    }

    return false;
  }, [navigation, defaultSlidesPerView, mediaQueries]);

  const getPagination = useCallback(() => {
    if (pagination) {
      return { clickable: true };
    }

    if (defaultSlidesPerView && mediaQueries.qMax960) {
      return { clickable: true };
    }

    return "";
  }, [pagination, defaultSlidesPerView, mediaQueries]);

  return (
    <div className="h-100">
      <Styles
        buttonsHeight={buttonsHeight}
        height={height}
        items={items}
        itemWidth={itemWidth}
        minHeight={minHeight}
        padding={padding}
        pagination={getPagination()}
        shadowIncluded={shadowIncluded}
        heroPagination={heroPagination}
        buttonsInTheMiddle={buttonsInTheMiddle}
      >
        <div className="arc-lines-container">{process.browser && absoluteContent}</div>

        <div className="carousel">
          <div className={classNames({ "w-100": fullWidth, container: !fullWidth })}>
            <div className="carousel__wrapper" suppressHydrationWarning>
              <Swiper
                direction={direction || "horizontal"}
                onSwiper={handleSwipper()}
                spaceBetween={spaceBetween || 0}
                slidesPerView={getSlidesPerView()}
                navigation={getNavigation()}
                pagination={getPagination()}
                {...props}
              >
                {items?.map((item, index) => (
                  <SwiperSlide key={index}>
                    {({ isActive }) => (
                      <div className="carousel__item">
                        {children(item, index, { isActive })}
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Styles>
    </div>
  );
};

export default Carousel;
