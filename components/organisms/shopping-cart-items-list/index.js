import React from "react";

import { AnimatedButton } from "components/atoms";
import { ShoppingCartItem } from "components/molecules";

import { Styles } from "./styles";

const ShoppingCartItemsList = () => {
  return (
    <Styles>
      <div className="shopping-cart-items-list container">
        <header className="header">
          <div className="product">Product</div>
          <div className="price">Price</div>
          <div className="quantity">Quantity</div>
        </header>

        <div className="mb-7">
          <ShoppingCartItem />
        </div>

        <div className="mb-7">
          <ShoppingCartItem />
        </div>

        <div className="mb-5">
          <ShoppingCartItem />
        </div>

        <AnimatedButton>Continue Shoipping</AnimatedButton>
      </div>
    </Styles>
  );
};

export default ShoppingCartItemsList;
