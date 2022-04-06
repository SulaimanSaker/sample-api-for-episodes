import React, { useCallback, useState } from "react";

import { Accordion, Button } from "react-bootstrap";

import { CallapseArrow } from "components/atoms";

import { Styles } from "./styles";

const ItemsAccordion = ({ data }) => {
  const [activeKey, setActiveCard] = useState(null);

  const onToggle = useCallback(
    (key) => {
      if (activeKey !== key) {
        setActiveCard(key);
      } else {
        setActiveCard(null);
      }
    },
    [activeKey]
  );

  return (
    <Styles>
      <Accordion>
        {data.map(({ key, title, content }) => (
          <Accordion.Item eventKey={key} key={key}>
            <Accordion.Header
              as={Button}
              variant="link"
              onClick={onToggle.bind(this, key)}
              className="accordion__header"
            >
              <div className="header__content  font-size-18">
                {title}

                <div className="collapse-arrow">
                  <CallapseArrow collapsed={activeKey === key} className="accordion__arrow" />
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>{content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Styles>
  );
};

export default ItemsAccordion;
