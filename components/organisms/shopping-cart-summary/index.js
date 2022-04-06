import React from "react";

import { Button } from "components/atoms";
import { PromoCode, CartItem } from "components/molecules";

import { Styles } from "./styles";

const ShoppingCartSummary = () => {
  return (
    <Styles>
      <div className="shopping-cart-summary">
        <div className="title">Summary</div>

        <div className="shopping-cart-summary__summary-items">
          <div className="shopping-cart-summary__summary-item">
            <CartItem />
          </div>

          <div className="shopping-cart-summary__summary-item">
            <CartItem />
          </div>
        </div>

        <div className="shopping-cart-summary__promo-code">
          <PromoCode onChange={() => null} />
        </div>

        <div className="shopping-cart-summary__info">
          <div className="label-value">
            <div className="label">Subtotal</div>
            <div className="value">
              <sup>$</sup>70.99
            </div>
          </div>

          <div className="label-value">
            <div className="label">Discount</div>
            <div className="value">35%</div>
          </div>

          <div className="label-value free">
            <div className="label">Shipping</div>
            <div className="value">FREE</div>
          </div>

          <div className="label-value">
            <div className="label">Tax</div>
            <div className="value">
              <sup>$</sup>1.2
            </div>
          </div>
        </div>

        <div className="shopping-cart-summary__total">
          <div className="label-value total">
            <div className="label">Total</div>
            <div className="value">
              <sup>$</sup>70.99
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <div className="included">(Import duties not included)</div>
          </div>
        </div>

        <Button primary rounded block big className="shopping__btn">
          Review Order
        </Button>
      </div>
    </Styles>
  );
};

export default ShoppingCartSummary;
