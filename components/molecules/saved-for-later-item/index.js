import React from "react";

import { FaRegHeart } from "react-icons/fa";
import { VscGift } from "react-icons/vsc";

import { Image } from "components/atoms";

import { Styles } from "./styles";

const SavedForLaterItem = ({ src, alt }) => {
  return (
    <Styles>
      <div className="saved-for-later-item">
        <div className="saved-for-later-item__image">
          <Image width="100%" height="100%" src={src} alt={alt} />
        </div>

        <div className="saved-for-later-item__info">
          <div className="saved-for-later-item__name">Baby Coat</div>

          <div className="saved-for-later-item__price">
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
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default SavedForLaterItem;
