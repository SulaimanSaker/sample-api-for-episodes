import React from "react";

import { ColorCircle } from "components/atoms";

import { Styles } from "./styles";

const ColorCircles = ({ colors, onColorClick }) => {
  return (
    <Styles>
      <div className="color-circles">
        {colors.map(({ key, value, selected }, index) => (
          <ColorCircle
            key={index}
            color={value}
            selected={selected}
            onClick={() => onColorClick(key)}
          />
        ))}
      </div>
    </Styles>
  );
};

export default ColorCircles;
