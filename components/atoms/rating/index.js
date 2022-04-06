import React from "react";

import ReactStars from "react-rating-stars-component";

import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";

import { Styles } from "./styles";

const ratingProps = {
  count: 5,
  color: "var(--primary)",
  activeColor: "var(--primary)",
  a11y: true,
  isHalf: true,
  emptyIcon: <ImStarEmpty />,
  halfIcon: <ImStarHalf />,
  filledIcon: <ImStarFull />,
};

const Rating = ({ value, size, onRatingChange }) => {
  return (
    <Styles>
      <ReactStars {...ratingProps} size={size || 15} value={value} onChange={onRatingChange} />
    </Styles>
  );
};

export default Rating;
