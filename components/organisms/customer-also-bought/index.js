import React from "react";

import { SectionHeader, Carousel, SalesItem } from "components/molecules";

import { items } from "./items";

import { Styles } from "./styles";

const CustomerAlsoBought = () => {
  return (
    <Styles>
      <section className="customer-also-bought">
        <div className="full-width-container">
          <div className="container">
            <div className="customer-also-bought__header-container">
              <div className="d-flex justify-content-end">
                <div className="customer-also-bought__header">
                  <SectionHeader
                    defaultLines
                    className="mb-2 pb-1"
                    title="Customer Also Bought"
                    subTitle="Recommended items just for you"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="customer-also-bought__carousel">
            <Carousel
              items={items}
              defaultSlidesPerView
              spaceBetween={28}
              navigation
              shadowIncluded
            >
              {({ src, alt }) => <SalesItem src={src} alt={alt} />}
            </Carousel>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default CustomerAlsoBought;
