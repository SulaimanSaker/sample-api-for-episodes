import React, { useCallback, useState } from "react";

import { Accordion, Button } from "react-bootstrap";

import { CallapseArrow } from "components/atoms";

import { Styles } from "./styles";
import RoundedCheckbox from "components/atoms/rounded-checkbox";

const AccordionWithCheck = ({ data }) => {
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
      {data.map(({ key, title, content }) => (
        <Accordion key={key}>
          <Accordion.Item eventKey={key}>
            <Accordion.Header
              as={Button}
              variant="link"
              onClick={onToggle.bind(this, key)}
              className="accordion__header"
            >
              <div className="header__content font-size-18">
                <div className="step">
                  <RoundedCheckbox id={key} />
                  <div className="step__title font-size-18">{title}</div>
                </div>

                <div className="collapse-arrow">
                  <CallapseArrow collapsed={activeKey === key} className="accordion__arrow" />
                </div>
              </div>
            </Accordion.Header>
            <Accordion.Body>{content}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </Styles>
  );
};

export default AccordionWithCheck;
