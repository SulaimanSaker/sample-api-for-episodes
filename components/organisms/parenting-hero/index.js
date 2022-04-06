import React from "react";

import { Image, Link } from "components/atoms";
import { Carousel } from "components/molecules";

import { Styles } from "./styles";
import { Col, Row } from "react-bootstrap";

const ParentingHero = () => {
  return (
    <Styles>
      <section className="hero">
        <Carousel
          items={[
            { src: "/images/temp/Parenting.png", alt: "" },
            { src: "/images/temp/Parenting.png", alt: "" },
            { src: "/images/temp/Parenting.png", alt: "" },
            { src: "/images/temp/Parenting.png", alt: "" },
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
        <div className="download__buttons">
          <Row className="justify-content-center justify-content-lg-end">
            <Col xs="auto" className="google-play pr-0">
              <div className="logo">
                <Link href="/">
                  <Image src="/images/google-play.png" alt="" height="4em" />
                </Link>
              </div>
            </Col>

            <Col xs="auto" className="app-store">
              <div className="logo">
                <Link href="/">
                  <Image src="/images/app-store.png" alt="" height="4em" />
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Styles>
  );
};

export default ParentingHero;
