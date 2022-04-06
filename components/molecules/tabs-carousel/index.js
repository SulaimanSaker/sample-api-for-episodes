import React from "react";

import classNames from "classnames";

import SlickCarousel from "react-slick";

import { Button } from "components/atoms";

import { Styles } from "./styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  slidesToShow: 5,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: false,
  className: "slider variable-width",
};
const Tabs = ({ tabs, activeTab, onClick }) => {
  return (
    <Styles>
      <SlickCarousel {...settings}>
        {tabs?.map(({ id, text }) => (
          <div key={id}>
            <Button
              small
              onClick={() => onClick(id)}
              className={classNames("btn-outline-dark mr-4", { active: id === activeTab })}
            >
              {text}
            </Button>
          </div>
        ))}
      </SlickCarousel>
    </Styles>
  );
};

export default Tabs;
