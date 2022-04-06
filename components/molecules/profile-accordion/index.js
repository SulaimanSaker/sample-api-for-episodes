import React, { useState, useCallback } from "react";
import { Styles } from "./styles";

import { Accordion, Button } from "react-bootstrap";

import { CallapseArrow } from "components/atoms";

function ProfileAccordion({ key1, title, content }) {
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
        <Accordion.Item eventKey={key1}>
          <Accordion.Header
            as={Button}
            variant="link"
            onClick={onToggle.bind(this, key1)}
            className="accordion__header"
          >
            <div className="header__content font-size-18">
              {title}

              <div className="collapse-arrow">
                <CallapseArrow collapsed={activeKey === key1} className="accordion__arrow" />
              </div>
            </div>
          </Accordion.Header>
          <Accordion.Body>{content}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Styles>
  );
}

export default ProfileAccordion;
