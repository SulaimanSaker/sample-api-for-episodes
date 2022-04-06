import React, { useEffect, useState } from "react";

import { Button } from "components/atoms";
import { SalesItem } from "components/molecules";
import { Advertisements } from "components/organisms";

import groupItems from "helpers/groupItems";
import { items } from "./data";

import { Styles } from "./styles";

const groupedItems = groupItems(items, 6, [15]);

const ItemsList = ({ filtersCollapsed }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter((counter) => counter + 1);
  }, [filtersCollapsed]);

  return (
    <Styles filtersCollapsed={filtersCollapsed}>
      {groupedItems.map((group, index) => (
        <React.Fragment key={index}>
          <div className="articles__cards">
            {group.map(({ src, alt }, index) => (
              <SalesItem key={index} src={src} alt={alt} />
            ))}
          </div>

          {groupedItems.length === index + 1 && (
            <div className="text-center mt-10 mb-9">
              <Button primary rounded big>
                Load More
              </Button>
            </div>
          )}

          {groupedItems.length !== index + 1 && (
            <div className="articles__advertisements">
              <div className="wrapper">
                <Advertisements key={counter} />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </Styles>
  );
};

export default ItemsList;
