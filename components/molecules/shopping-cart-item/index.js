import React, { useState } from "react";

import { FaRegBookmark } from "react-icons/fa";

import { VscGift } from "react-icons/vsc";

import { Image } from "components/atoms";
import { QTYController } from "components/molecules";

import { Styles } from "./styles";

const ShoppingCartItem = () => {
  const [qty, setQty] = useState(1);

  return (
    <Styles>
      <article className="shopping-cart-item">
        <div className="content">
          <div className="first-second">
            <div className="first">
              <div className="image-container">
                <Image
                  src="/images/temp/item/thumbs-carousel/1.png"
                  alt=""
                  className="image"
                />
              </div>
            </div>

            <div className="second">
              <div className="name">Ralph Lauren</div>
              <div className="title font-size-18">Baby Boy Onsie</div>

              <div className="left-in-stock font-size-18">Only 2 Left in Stock</div>

              <div className="label-value color">
                <div className="label font-size-18">Color:</div>
                <div className="value">Black</div>
              </div>

              <div className="label-value size">
                <div className="label">Size:</div>
                <div className="value">M</div>
              </div>
            </div>
          </div>

          <div className="third">
            <div className="prices">
              <div className="old-price font-size-18">
                <sup>$</sup>70.99
              </div>

              <div className="new-price font-size-18">
                <sup>$</sup>29.95
              </div>

              <div className="included font-size-14">(Import duties not included)</div>
            </div>
          </div>

          <div className="fourth">
            <div className="qty-controller-container">
              <QTYController qty={qty} setQty={setQty} />
            </div>

            <div className="exit">
              <svg width="13" height="13" viewBox="0 0 460.775 460.775">
                <path
                  d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55	c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
	c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
	l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"
                />
              </svg>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="icon-text">
            <div className="icon">
              <FaRegBookmark size="1.5em" className="animate__animated animate__pulse" />
            </div>

            <div className="text font-size-20">Save for later</div>
          </div>

          <div className="icon-text">
            <div className="icon">
              <VscGift size="1.5em" />
            </div>

            <div className="text font-size-20">Add to Gift List</div>
          </div>

          <div className="logo-container">
            <Image src="/images/temp/item/logo.png" className="logo" />
          </div>
        </footer>
      </article>
    </Styles>
  );
};

export default ShoppingCartItem;
