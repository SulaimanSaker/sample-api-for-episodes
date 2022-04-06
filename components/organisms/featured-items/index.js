import React from "react";

import { SectionHeader, ShopItem } from "components/molecules";

import { items } from "./items";

import { Styles } from "./styles";

const FeaturedItems = () => {
  return (
    <Styles>
      <section className="featured-items">
        <div className="full-width-container">
          <div className="container">
            <div className="d-flex justify-content-end">
              <div className="featured-items__header">
                <SectionHeader
                  defaultLines
                  className="mb-2 pb-4"
                  title="Featured Items"
                  subTitle="Recommended items just for you"
                />
              </div>
            </div>
          </div>

          <div className="featured-items__grid">
            <ShopItem src={items[1].src} alt={items[1].alt} />
            <ShopItem src={items[0].src} alt={items[0].alt} />
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default FeaturedItems;
