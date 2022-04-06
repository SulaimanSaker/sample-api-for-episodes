import React from "react";

import { Image } from "components/atoms";
import { Carousel } from "components/molecules";

import { Styles } from "./styles";

const Hero = () => {
  return (
    <Styles>
      <section className="hero">
        <div className="hero__clip-path"></div>

        <Carousel
          items={[
            { src: "/images/temp/header-baby.png", alt: "" },
            { src: "/images/temp/header-baby.png", alt: "" },
          ]}
          slidesPerView={1}
          pagination
          fullWidth
          heroPagination
        >
          {({ src, alt }) => (
            <div className="hero__content">
              <div className="hero__text">
                <div className="title">
                  <div className="property1">Welcome to</div>

                  <div className="property2">Double Beat</div>
                </div>

                <div className="property3">Your baby is</div>
                <div className="property4">20 weeks</div>
              </div>

              <div className="hero__image">
                <Image alt={alt} src={src} width="100%" />
              </div>
            </div>
          )}
        </Carousel>
      </section>
    </Styles>
  );
};

export default Hero;
