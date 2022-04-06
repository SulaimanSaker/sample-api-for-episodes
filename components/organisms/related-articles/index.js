import React from "react";

import { Row, Col } from "react-bootstrap";

import { SectionHeader, Carousel, ArticleItem } from "components/molecules";

import { Styles } from "./styles";
import useMediaQuery from "components/particles/hooks/with-media-query";

const RelatedArticles = ({ details, toggleLiked, toggleReadLater }) => {
  const mediaQuery = useMediaQuery();
  return (
    <Styles>
      <section className="related-articles">
        <div className="container">
          <div className="related-articles__header-container">
            <Row className="justify-content-end">
              <Col xs={11} className="pl-8">
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
                  title="Related Articles"
                  subTitle="Recommended items just for you"
                />
              </Col>
            </Row>
          </div>
        </div>

        <div className="related-articles__carousel">
          <Carousel
            items={details.relatedArticals}
            slidesPerView={4}
            spaceBetween={28}
            navigation
            shadowIncluded
            defaultSlidesPerView
          >
            {({ id, title, secondaryTitle, summary, src, alt, ...props }) => (
              <ArticleItem
                id={id}
                alt={alt}
                src={src}
                property1={title}
                property2={secondaryTitle}
                property3={summary}
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

export default RelatedArticles;
