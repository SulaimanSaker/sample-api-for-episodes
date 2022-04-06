import React, { useEffect, useRef, useState } from "react";

import classNames from "classnames";

import { Styles } from "./styles";

const VerticalCarousel = ({ items, children }) => {
  const activeSlideIndexRef = useRef(0);
  const verticalSliderRef = useRef();
  const itemsRef = useRef();
  const slidesLengthRef = useRef();

  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);

  useEffect(() => {
    slidesLengthRef.current = itemsRef.current.querySelectorAll(".image").length;
  }, []);

  const changeSlide = (direction) => {
    const sliderHeight = verticalSliderRef.current.clientHeight;

    if (direction === "up") {
      if (activeSlideIndexRef.current < slidesLengthRef.current - 1) {
        activeSlideIndexRef.current++;

        if (prevDisabled) {
          setPrevDisabled(false);
        }
      }

      if (activeSlideIndexRef.current + 1 > slidesLengthRef.current - 1) {
        setNextDisabled(true);
      }
    } else if (direction === "down") {
      if (activeSlideIndexRef.current > 0) {
        activeSlideIndexRef.current--;

        if (nextDisabled) {
          setNextDisabled(false);
        }
      }

      if (activeSlideIndexRef.current - 1 < 0) {
        setPrevDisabled(true);
      }
    }

    itemsRef.current.style.transform = `translateY(-${
      activeSlideIndexRef.current * sliderHeight
    }px)`;
  };

  const handleSlideUp = () => {
    changeSlide("up");
  };

  const handleSlideDown = () => {
    changeSlide("down");
  };

  return (
    <Styles>
      <div className="vertical-slider">
        <div className="items-container" ref={verticalSliderRef}>
          <div className="items-wrapper" ref={itemsRef}>
            {items?.map((item, index) => (
              <React.Fragment key={index}>{children(item, index)}</React.Fragment>
            ))}
          </div>
        </div>

        <div className="action-buttons">
          <div
            role="presentation"
            className={classNames("button-next", { disabled: nextDisabled })}
            onClick={handleSlideUp}
          ></div>

          <div
            className={classNames("button-prev", { disabled: prevDisabled })}
            role="presentation"
            onClick={handleSlideDown}
          ></div>
        </div>
      </div>
    </Styles>
  );
};

export default VerticalCarousel;
