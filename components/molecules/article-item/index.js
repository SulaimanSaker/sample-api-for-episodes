import React, { useState } from "react";

import { useRouter } from "next/router";

import { Popup } from "components/molecules";

import ReactPlayer from "react-player/lazy";

import { Button } from "components/atoms";

import { Styles } from "./styles";
import New from "components/atoms/New";

const ArticleItem = ({ id, property1, property2, property3, isNew, originalAirDate, src }) => {
  const router = useRouter();

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

        {isNew && <New />}
      </div>

      <Popup showed={popupShowed} onTaggle={handleTogglePopup}>
        <ReactPlayer url={src} width="50%" height="21rem" />
      </Popup>
    </Styles>
  );
};

export default ArticleItem;
