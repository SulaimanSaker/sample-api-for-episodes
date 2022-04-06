import React from "react";

import { Image } from "components/atoms";

import { Styles } from "./styles";

const LatestArticleItem = ({ height, width, src, alt, property1, property2, property3, isNew }) => {
  return (
    <Styles>
      <div className="latest-article-item">
        <Image alt={alt} height={height} width={width} src={src} />

        <div className="overlay" />

        <div className="description">
          <div className="property1">{property2}</div>

          <div className="details">
            <div className="property2">{property1}</div>
            <div className="property3">{property3}</div>
          </div>
        </div>

        {isNew && <div className="new">New</div>}
      </div>
    </Styles>
  );
};

export default LatestArticleItem;
