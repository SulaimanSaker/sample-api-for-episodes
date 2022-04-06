import React, { useState } from "react";

import Popup from "components/molecules/popup";

import ReactPlayer from "react-player/lazy";

import { Button } from "components/atoms";

import { Styles } from "./styles";

const ArticleItem = ({ property1, property2, property3, originalAirDate, src }) => {
  const [popupShowed, togglePopup] = useState(false);

  const handleTogglePopup = () => {
    togglePopup((state) => !state);
  };

  return (
    <Styles>
      <div className="article__item">
        <div className="article__info">
          <div className="article__title">{property1}</div>

          <div className="article__summary">{property2}</div>

          <div className="article__des">{property3}</div>

          {originalAirDate}

          <div className="article__actions">
            <div className="button-container">
              <Button primary rounded onClick={handleTogglePopup}>
                Watch the Video
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Popup showed={popupShowed} onTaggle={handleTogglePopup}>
        <ReactPlayer url={src} width="50%" height="21rem" />
      </Popup>
    </Styles>
  );
};

export default ArticleItem;
