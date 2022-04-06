import React from "react";

import { StyledImage } from "./styles";

const Image = ({ src, alt, width, height, className }) => {
  return <StyledImage dimensions={{ width, height }} className={className} src={src} alt={alt} />;
};

export default Image;
