import React from "react";

import useMediaQuery from "components/particles/hooks/with-media-query";

import { Tabs, ItemsAccordion } from "components/molecules";

import Description from "./description";

import { Styles } from "./styles";

const tabsData = [
  {
    key: "des",
    title: "Description",
    content: <Description />,
  },
  {
    key: "review",
    title: "Review",
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
  {
    key: "payment-and-delivery",
    title: "Payment And Delivery",
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

const ItemTabs = () => {
  const mediaQueries = useMediaQuery();

  return (
    <Styles suppressHydrationWarning>
      <div className="item-tabs">
        {mediaQueries.qMin961 && <Tabs data={tabsData} />}

        {mediaQueries.qMax960 && <ItemsAccordion data={tabsData} />}
      </div>
    </Styles>
  );
};

export default ItemTabs;
