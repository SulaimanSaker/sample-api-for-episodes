import React from "react";

import { Image, Button } from "components/atoms";
import { Carousel } from "components/molecules";

import { Styles } from "./styles";

const SalesHero = () => {
  return (
    <Styles>
      <section className="hero">
        <Carousel
          items={[
            { src: "/images/temp/sales-header.jpg", alt: "" },
            { src: "/images/temp/sales-header.jpg", alt: "" },
          ]}
          pagination
          fullWidth
          heroPagination
          slidesPerView={1}
        >
          {({ src, alt }) => (
            <div className="hero__content">
              <Image alt={alt} src={src} width="100%" className="hero__image" />

              <div className="hero__text font-size-46">
                <div className="first-line font-size-56">Product of the Day</div>
                <div className="second-line">
                  <span className="sale-percentage">30% SALE</span> on 0-3 Monthes
                </div>
                <div className="third-line">Baby Wear</div>
                <Button primary big rounded>
                  Learn More
                </Button>
              </div>
            </div>
          )}
        </Carousel>
      </section>
    </Styles>
  );
};

export default SalesHero;
