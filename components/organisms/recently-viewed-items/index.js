import React from "react";

import { SectionHeader, Carousel, SalesItem } from "components/molecules";

import { items } from "./items";

import { Styles } from "./styles";

const RecentlyViewedItems = () => {
  return (
    <Styles>
      <section className="recently-viewed-items">
        <div className="full-width-container">
          <div className="container">
            <div className="d-flex justify-content-end">
              <div className="recently-viewed-items__header">
                <SectionHeader
                  defaultLines
                  className="mb-2 pb-1"
                  title="Recently Viewed Items"
                  subTitle="Recommended items just for you"
                />
              </div>
            </div>
          </div>

          <div className="recently-viewed-items__carousel">
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

export default RecentlyViewedItems;
