import React, { useState } from "react";

import Popup from "components/molecules/popup";

import ReactPlayer from "react-player/lazy";

import Button from "components/atoms/button";

import { Styles } from "./styles";

const ArticleItem = ({ title, writers, desc, originalAirDate }) => {
  const [popupShowed, togglePopup] = useState(false);

  const handleTogglePopup = () => {
    togglePopup((state) => !state);
  };

  return (
    <Styles>
      <div className="article__item">
        <div className="article__info">
          <div className="article__title">{title}</div>

          <div className="article__summary">{writers}</div>

          <div className="article__des">{desc}...</div>

          <div className="article__des">{originalAirDate}</div>

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
        <ReactPlayer url="https://youtu.be/ScMzIvxBSi4" width="100%" height="100vh" />
      </Popup>
    </Styles>
  );
};

export default ArticleItem;
