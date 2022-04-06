import React, { useState } from "react";

import Popup from "components/molecules/popup";

import ReactPlayer from "react-player/lazy";

import Button from "components/atoms/button";

import { Styles } from "./styles";

const Episode = ({ title, writers, desc, originalAirDate }) => {
  const [popupShowed, togglePopup] = useState(false);

  const handleTogglePopup = () => {
    togglePopup((state) => !state);
  };

  return (
    <Styles>
      <div className="episode__item">
        <div className="episode__info">
          <div className="episode__title">{title}</div>

          <div className="episode__summary">{writers}</div>

          <div className="episode__des">{desc}...</div>

          <div className="episode__des">{originalAirDate}</div>

          <div className="episode__actions">
            <div className="button-container">
              <Button primary rounded className="mt-2" onClick={handleTogglePopup}>
                Watch the Video
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Popup showed={popupShowed} onTaggle={handleTogglePopup}>
        {popupShowed && (
          <ReactPlayer url="https://youtu.be/ScMzIvxBSi4" width="90%" height="100vh" />
        )}
      </Popup>
    </Styles>
  );
};

export default Episode;
