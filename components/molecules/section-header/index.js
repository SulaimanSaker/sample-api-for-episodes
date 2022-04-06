import React from "react";

import classNames from "classnames";

import { Row, Col } from "react-bootstrap";

import { AnimatedButton } from "components/atoms";

import { Styles } from "./styles";
import useMediaQuery from "components/particles/hooks/with-media-query";

const SectionHeader = ({
  title,
  subTitle,
  className,
  defaultLines,
  customLines,
  viewAllButton,
  onViewAllClick,
}) => {
  const splitted = title.split(" ");
  const mediaQuery = useMediaQuery();
  return (
    <Styles>
      <header className={classNames("section-header", className)}>
        {defaultLines && mediaQuery.qMin576 && (
          <div className="default-lines">
            <div className="default-lines__circle">
              <svg viewBox="0 0 2 2">
                <circle cx="1" cy="1" r="1" />
              </svg>
            </div>

            <div className="default-lines__vertical-line">
              <svg viewBox="0 0 1 185">
                <rect width="1" height="185" />
              </svg>
            </div>
          </div>
        )}

        {mediaQuery.qMin576 && customLines}

        <div className="section-header__hint text-gray-9 mb-2">{subTitle}</div>

        <Row>
          <Col>
            <h2 className="section-header__title font-size-50">
              <span className="text-gray-13">
                {splitted.slice(0, splitted.length - 1).join(" ")}{" "}
              </span>
              <span className="end-word text-primary">{splitted.pop()}</span>
            </h2>
          </Col>

          {viewAllButton && (
            <Col xs="auto section-header__animated-button">
              <AnimatedButton onClick={onViewAllClick}>View All</AnimatedButton>
            </Col>
          )}
        </Row>
      </header>
    </Styles>
  );
};

export default SectionHeader;
