import React from "react";

import { Tabs } from "components/molecules";

import SavedForLater from "./saved-for-later";

import groupItems from "helpers/groupItems";
import { items } from "./items";

import { Styles } from "./styles";

const groupedItems = groupItems(items, 8);

const tabsData = [
  {
    key: "saved-for-later",
    title: "Saved For Later",
    content: <SavedForLater groupedItems={groupedItems} />,
  },
  {
    key: "buy-it-again",
    title: "Buy It Again",
    content: (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem temporibus perspiciatis
          error. Qui laudantium fugit repudiandae ipsa quia neque ipsum labore facere, libero,
          saepe vel aut commodi et voluptate nemo placeat earum quod repellendus quisquam rerum
          recusandae! Illo quia quas, consectetur, neque pariatur incidunt fugit veniam sint,
          expedita ab veritatis.
        </p>
      </div>
    ),
  },
];

const ShoppingCartTabs = () => {
  return (
    <Styles>
      <div className="shopping-cart-tabs">
        <Tabs data={tabsData} />
      </div>
    </Styles>
  );
};

export default ShoppingCartTabs;
