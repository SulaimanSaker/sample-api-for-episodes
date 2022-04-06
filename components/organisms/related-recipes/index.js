import React from "react";

import { Row, Col } from "react-bootstrap";

import { SectionHeader, Carousel, RelatedRecipeItem } from "components/molecules";

import { Styles } from "./styles";
import useMediaQuery from "components/particles/hooks/with-media-query";

const RelatedRecipes = ({ details, toggleLiked, toggleReadLater }) => {
  const mediaQuery = useMediaQuery();
  return (
    <Styles>
      <section className="related-recipes">
        <div className="container">
          <div className="related-recipes__header-container">
            <Row
              className={`${
                mediaQuery.qMax576 ? "justify-content-center" : "justify-content-end"
              }`}
            >
              <Col xs={11} className={`${mediaQuery.qMax576 && "pl-8"}`}>
                {mediaQuery.qMin768 && (
                  <div className="lines">
                    <div className="lines__circle">
                      <svg viewBox="0 0 2 2">
                        <circle cx="1" cy="1" r="1" />
                      </svg>
                    </div>

                    <div className="lines__vertical-line">
                      <svg viewBox="0 0 1 177">
                        <rect width="1" height="177" />
                      </svg>
                    </div>
                  </div>
                )}

                <SectionHeader
                  className="mb-2 pb-1"
                  title="Related Recipes"
                  subTitle="Recommended items just for you"
                />
              </Col>
            </Row>
          </div>
        </div>

        <div className="related-recipes__carousel">
          <Carousel
            items={details.relatedArticals}
            slidesPerView={4}
            spaceBetween={28}
            navigation
            shadowIncluded
            defaultSlidesPerView
          >
            {({ id, title, recipeBy, src, alt, ...props }) => (
              <RelatedRecipeItem
                id={id}
                alt={alt}
                src={src}
                title={title}
                recipeBy={recipeBy}
                toggleLiked={toggleLiked}
                toggleReadLater={toggleReadLater}
                // isNew={itemIndex === 0}
                {...props}
              />
            )}
          </Carousel>
        </div>
      </section>
    </Styles>
  );
};

export default RelatedRecipes;
