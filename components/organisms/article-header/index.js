import React from "react";

import moment from "moment";

import { VerticalCarousel } from "components/molecules";

import { Styles } from "./styles";

const ArticleHeader = ({ details }) => {
  const images = details?.mediaFiles?.filter((file) => file.typeId === 1);

  return (
    <Styles>
      <header className="article-header full-width-container">
        <div className="article-header__carousel">
          {images.length > 1 && (
            <VerticalCarousel items={images}>
              {({ captionEn, filePath }) => (
                <img alt={captionEn} className="image" src={filePath} />
              )}
            </VerticalCarousel>
          )}
          {images.length === 1 && (
            <img alt={images[0].captionEn} className="image" src={images[0].filePath} />
          )}
        </div>

        <div className="article-header__date">
          Last Updated{" "}
          <date className="last-updated">{moment(details?.publishDate).format()}</date>
        </div>

        <div className="article-header__svgs">
          <svg className="svg1" viewBox="0 0 1000 440">
            <rect width="1000" height="440" />
          </svg>

          <svg className="svg2" width="100%" height="100%">
            <svg x="37.671%" width="1092" height="861.3" viewBox="0 0 1092 861.3">
              <path height="100%" d="M1092,0v861.3H0L385,0L1092,0L1092,0z" />
            </svg>
          </svg>
        </div>
      </header>
    </Styles>
  );
};

export default ArticleHeader;
