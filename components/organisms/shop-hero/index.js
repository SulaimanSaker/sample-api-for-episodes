import React from "react";

import { Image, Button } from "components/atoms";
import { Carousel } from "components/molecules";

import { Styles } from "./styles";

const ShopHero = () => {
  return (
    <Styles>
      <section className="hero">
        <Carousel
          items={[
            { src: "/images/temp/shop/3.jpg", alt: "" },
            { src: "/images/temp/shop/3.jpg", alt: "" },
          ]}
          pagination
          fullWidth
          heroPagination
          slidesPerView={1}
        >
          {({ src, alt }) => (
            <div className="hero__content">
              <Image alt={alt} src={src} width="100%" className="hero__image" />

              <div className="hero__overlay" />

              <div className="hero__text font-size-56">
                <Image
                  alt="adidas logo"
                  src="/images/temp/shop/logo.png"
                  className="mb-2 hero__logo"
                />

                <div className="first-line font-size-46">Welcome To</div>
                <div className="second-line font-size-56">Addidas Shop</div>
                <Button primary rounded big>
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

export default ShopHero;
