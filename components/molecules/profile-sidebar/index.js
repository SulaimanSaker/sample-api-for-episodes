import { CallapseArrow } from "components/atoms";
import useMediaQuery from "components/particles/hooks/with-media-query";
import React, { useState, useCallback } from "react";
import { Accordion, Button } from "react-bootstrap";
import { SidebarMenu } from "..";
import { Styles } from "./styles";

function ProfileSideBar({ setCurrentTab }) {
  const [activeKey, setActiveCard] = useState(null);
  const mediaQueries = useMediaQuery();

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
      <div className="profile__Content">
        <div className="profile-menubar">
          {mediaQueries.qMax576 ? (
            <Accordion>
              <Accordion.Item eventKey={1} key={1}>
                <Accordion.Header
                  as={Button}
                  variant="link"
                  onClick={onToggle.bind(this, 1)}
                  className="accordion__header"
                >
                  <div className="header__content  font-size-18">
                    Menu
                    <div className="collapse-arrow">
                      <CallapseArrow
                        collapsed={activeKey === 1}
                        fill="#fff"
                        className="accordion__arrow"
                      />
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  {<SidebarMenu setCurrentTab={setCurrentTab} />}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ) : (
            <SidebarMenu setCurrentTab={setCurrentTab} />
          )}
        </div>
      </div>
    </Styles>
  );
}

export default ProfileSideBar;
