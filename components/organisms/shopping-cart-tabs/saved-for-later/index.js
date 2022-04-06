import React from "react";

import { SavedForLaterItem } from "components/molecules";

import { Styles } from "./styles";

const SavedForLater = ({ groupedItems }) => {
  return (
    <Styles>
      <div className="saved-for-later">
        {groupedItems.map((group, index) =>
          group.map(({ src, alt }, index1) => (
            <div key={index + index1} className="saved-for-later__item-container">
              <SavedForLaterItem src={src} alt={alt} />
            </div>
          ))
        )}
      </div>
    </Styles>
  );
};

export default SavedForLater;
