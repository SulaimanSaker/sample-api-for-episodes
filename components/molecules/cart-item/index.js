import React from "react";

import { Image } from "components/atoms";

import { Styles } from "./styles";

const CartItem = () => {
  return (
    <Styles>
      <div className="cart-item">
        <div className="card-item-content">
          <div className="cart-item__image">
            <Image src="/images/temp/item/thumbs-carousel/1.png" alt="" />
          </div>

          <div className="cart-item__info">
            <Image src="/images/temp/item/logo.png" className="logo" />

            <div className="name font-size-18">Ralph Laren Baby Onsie</div>

            <div className="price font-size-20">
              <sup>$70.99</sup>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default CartItem;
