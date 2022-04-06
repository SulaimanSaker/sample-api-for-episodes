import React from "react";

import { Tabs as DefaultTabs, Tab } from "react-bootstrap";

import { Styles } from "./styles";

const Tabs = ({ data }) => {
  return (
    <Styles>
      <DefaultTabs>
        {data.map(({ key, title, content }) => (
          <Tab key={key} eventKey={key} title={title}>
            {content}
          </Tab>
        ))}
      </DefaultTabs>
    </Styles>
  );
};

export default Tabs;
