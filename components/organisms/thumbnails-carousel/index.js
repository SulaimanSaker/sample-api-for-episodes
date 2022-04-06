import React, { useState } from "react";

import useMediaQuery from "components/particles/hooks/with-media-query";

import { Carousel, ItemImageItem, Thumbnail } from "components/molecules";

import { items as defaultItems } from "./items";

import { getThumbCardWidth, getThumbCardHeight } from "./helpers";

import { Styles } from "./styles";

const ThumbnailsCarousel = () => {
  const mediaQueries = useMediaQuery();

  const [items, setItems] = useState([...defaultItems]);

  const toggleItemLoved = (id) => {
    const newItems = [...items];
    const index = newItems.findIndex((item) => item.id === id);
    newItems[index] = { ...newItems[index], loved: !newItems[index].loved };
    setItems(newItems);
  };

  const [thumbnailsSwiper, setThumbnailsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handeCarouselClick = ({ activeIndex }, event) => {
    if (activeIndex >= 0 && activeIndex <= items.length - 1) {
      if (event.path[0].className === "swiper-button-next") {
        setActiveIndex(activeIndex + 1);
      }

      if (event.path[0].className === "swiper-button-prev") {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  const handeThumbnailClick = ({ clickedIndex }) => {
    setActiveIndex(clickedIndex);
  };

  return (
    <Styles>
      <div className="thumbnails-carousel">
        <div className="thumbnails-carousel__thumbnails">
          <Carousel
            onSwiper={setThumbnailsSwiper}
            direction="vertical"
            items={items}
            slidesPerView={4}
            freeMode
            onClick={handeThumbnailClick}
            watchSlidesVisibility
            watchSlidesProgress
          >
            {({ src, alt }, index) => (
              <Thumbnail src={src} alt={alt} isActive={index === activeIndex} />
            )}
          </Carousel>
        </div>

        <div className="thumbnails-carousel__carousel">
          <Carousel
            buttonsInTheMiddle
            thumbs={{ swiper: thumbnailsSwiper }}
            items={items}
            navigation
            onClick={handeCarouselClick}
            slidesPerView={1}
          >
            {({ id, src, alt, isNew, loved }) => (
              <ItemImageItem
                id={id}
                src={src}
                alt={alt}
                isNew={isNew}
                loved={loved}
                toggleItemLoved={toggleItemLoved}
                width={getThumbCardWidth(mediaQueries)}
                height={getThumbCardHeight(mediaQueries)}
                isMobile={mediaQueries.qMax576}
              />
            )}
          </Carousel>
        </div>
      </div>
    </Styles>
  );
};

export default ThumbnailsCarousel;
