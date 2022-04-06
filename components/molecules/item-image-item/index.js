import React from "react";

import Zoom from "react-img-zoom";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import { Styles } from "./styles";

const ItemImageItem = ({
  id,
  src,
  isNew,
  loved,
  toggleItemLoved,
  width,
  height,
  isMobile,
}) => {
  return (
    <Styles>
      <div className="item-image-item">
        <div suppressHydrationWarning className="image-container">
          {process.browser && (
            <Zoom img={src} zoomScale={isMobile ? 1 : 3} width={width} height={height} />
          )}
        </div>

        {isNew && <div className="new">New</div>}

        <div className="heart-container">
          {loved && (
            <FaHeart
              fill="var(--primary)"
              className="heart animate__animated animate__pulse"
              onClick={() => toggleItemLoved(id)}
            />
          )}

          {!loved && (
            <FaRegHeart
              fill="var(--gray-8)"
              className="heart animate__animated animate__pulse"
              onClick={() => toggleItemLoved(id)}
            />
          )}
        </div>
      </div>
    </Styles>
  );
};

export default ItemImageItem;
