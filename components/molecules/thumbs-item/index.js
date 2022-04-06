import React from "react";

import { Image } from "components/atoms";

import { Styles } from "./styles";

const Thumbnail = ({ src, alt, isActive }) => {
  return (
    <Styles isActive={isActive}>
      <div className="thumbnail">
        <div className="image-container">
          <div className="image-wrapper">
            <Image src={src} alt={alt} className="image" />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Thumbnail;
