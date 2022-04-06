import React from "react";

import { Image, Button } from "components/atoms";

import { Styles } from "./styles";

const ShopItem = ({ src, alt, className }) => {
  return (
    <Styles className={className}>
      <div className="shop-item">
        <div className="shop-item__image">
          <Image width="100%" height="100%" src={src} alt={alt} />
        </div>

        <div className="shop-item__overlay" />

        <div className="shop-items__info">
          <div className="font-size-30">Most Needed</div>

          <div className="property2 font-size-30">YEEZY SNEAKERS</div>

          <Button primary rounded big>
            Shop Now
          </Button>
        </div>
      </div>
    </Styles>
  );
};

export default ShopItem;
