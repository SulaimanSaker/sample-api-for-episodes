import React from "react";

import { default as ReactSVG } from "react-inlinesvg";

import { Styles } from "./styles";

const InlineSVG = ({ src, title, fill, className, width, height, onClick }) => {
  return (
    <Styles fill={fill} onClick={onClick}>
      <ReactSVG
        className={className}
        width={width}
        height={height}
        src={src}
        title={title}
        onClick={onClick}
      />
    </Styles>
  );
};

export default InlineSVG;
