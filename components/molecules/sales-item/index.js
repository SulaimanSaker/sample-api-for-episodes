import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { VscGift } from "react-icons/vsc";

import { Image, Button } from "components/atoms";

import { Styles } from "./styles";

const SalesItem = ({ src, alt, className }) => {
  return (
    <Styles className={className}>
      <div className="sales-item">
        <div className="sales-item__image">
          <Image width="100%" height="100%" src={src} alt={alt} />
        </div>

        <div className="sales-item__info">
          <div className="sales-item__name">Baby Coat</div>

          <div className="sales-item__title">Baby Boy Onsie</div>

          <div className="sales-item__price">
            <div>
              <sup>$</sup>29.95
            </div>
          </div>

          <div className="actions">
            <div className="icons-container">
              <div className="heart">
                <FaRegHeart fill="white" size="1.25em" />
              </div>

              <div className="bookmark">
                <VscGift fill="white" size="1.25em" />
              </div>
            </div>

            <div className="button-container">
              <Button primary small rounded>
                See Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default SalesItem;
