import React from "react";
import { Image } from "components/atoms";
import { Carousel } from "components/molecules";
import { Styles } from "./styles";

const OvulationHero = () => {
  return (
    <Styles>
      <section className="hero">
        <Carousel
          items={[
            { src: "/images/temp/ovulation.png", alt: "" },
            { src: "/images/temp/ovulation.png", alt: "" },
            { src: "/images/temp/ovulation.png", alt: "" },
            { src: "/images/temp/ovulation.png", alt: "" },
          ]}
          pagination
          fullWidth
          heroPagination
          slidesPerView={1}
        >
          {({ src, alt }) => (
            <div className="hero__content">
              <div className="hero__text">
                <div className="title">
                  <div className="property1 font-size-56">Welcome to</div>

                  <div className="property2 font-size-80">Double Beat</div>
                </div>

                <div className="property3 font-size-56">keep up with</div>
                <div className="property4 font-size-117">your kids</div>
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

export default OvulationHero;
