import React, { useEffect } from "react";
import classNames from "classnames";

import XButton from "components/atoms/x-button";

import { Styles } from "./styles";

const Popup = ({ showed, onTaggle, footer, children }) => {
  useEffect(() => {
    if (showed) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "auto";
    }

    if (!showed) {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
  }, [showed]);

  return (
    <Styles withFooter={footer}>
      <div
        className={classNames("popup", {
          showed,
        })}
      >
        <div className="popup__container">
          <div className="popup__wrapper">
            <div className="popup__x-button">
              <XButton onClick={onTaggle} />
            </div>

            <div className="popup__content">{children}</div>
          </div>

          <footer className="popup__footer">{footer}</footer>
        </div>
      </div>
    </Styles>
  );
};

export default Popup;
