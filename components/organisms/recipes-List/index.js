import React, { useEffect, useState } from "react";

import classNames from "classnames";

import { Button } from "components/atoms";
import { RecipeItem } from "components/molecules";
import { Advertisements } from "components/organisms";

import groupItems from "helpers/groupItems";
import { items } from "./data";

import { Styles } from "./styles";

const groupedItems = groupItems(items, 6, [14]);

const RecipesList = ({ filtersCollapsed }) => {
  const [counter, setCounter] = useState(0);
  console.log("in the recipes lisst:");
  useEffect(() => {
    setCounter((counter) => counter + 1);
  }, [filtersCollapsed]);
  return (
    <Styles filtersCollapsed={filtersCollapsed}>
      {groupedItems.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          <div className="recipes__cards">
            {group.map(
              (
                { id, src, alt, title, rate, userImg, numberOfRaters, name, date },
                itemIndex
              ) => (
                <div
                  key={itemIndex}
                  className={classNames("recipes__card", {
                    advertisement: groupIndex === 0 && itemIndex === 4,
                  })}
                >
                  <RecipeItem
                    id={id}
                    alt={alt}
                    src={src}
                    userImg={userImg}
                    title={title}
                    rate={rate}
                    numberOfRaters={numberOfRaters}
                    name={name}
                    date={date}
                    isNew={itemIndex === 0}
                  />
                </div>
              )
            )}
          </div>

          {groupedItems.length === groupIndex + 1 && (
            <div className="text-center mt-10 mb-9">
              <Button primary rounded big>
                Load More
              </Button>
            </div>
          )}

          {groupedItems.length !== groupIndex + 1 && (
            <div className="recipe__ads mt-8 mb-9">
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

export default RecipesList;
