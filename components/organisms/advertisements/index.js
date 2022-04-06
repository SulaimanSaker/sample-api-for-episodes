import React from "react";

import { Image } from "components/atoms";
import { Carousel } from "components/molecules";

import { items } from "./items";

import { Styles } from "./styles";

const Advertisements = () => {
  return (
    <Styles>
      <section className="advertisements">
        <div className="advertisements__carousel">
          <Carousel navigation buttonsInTheMiddle fullWidth items={items} slidesPerView={1}>
            {({ src }) => <Image className="image" src={src} alt="" />}
          </Carousel>
        </div>
      </section>
    </Styles>
  );
};

export default Advertisements;
