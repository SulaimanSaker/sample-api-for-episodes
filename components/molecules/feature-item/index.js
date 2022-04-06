import React from "react";

import { InlineSVG } from "components/atoms";

import { Styles } from "./styles";

const FeatureItem = ({ src, title, text, pngSrc }) => {
  return (
    <Styles>
      <article>
        <div className="feature-item card">
          {pngSrc ? (
            <img src={pngSrc} alt="icon" className="png-icon" />
          ) : (
            <InlineSVG height="6.5rem" className="mb-7" src={src} />
          )}

          <header className="feature-item__title mb-2">
            <div>{title.first}</div>
            <div>{title.second}</div>
          </header>

          <p className="feature-item__text">{text}</p>
        </div>
      </article>
    </Styles>
  );
};

export default FeatureItem;
