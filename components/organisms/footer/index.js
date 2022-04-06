import React from "react";

import { Row, Col } from "react-bootstrap";

import { Image, Link } from "components/atoms";
import { SocialLinks } from "components/molecules";

import { Styles } from "./styles";

const links = [
  { name: "facebook", href: "/" },
  { name: "twitter", href: "/" },
  { name: "instagram", href: "/" },
  { name: "behance", href: "/" },
  { name: "youtube", href: "/" },
];

const Footer = () => {
  return (
    <Styles>
      <div className="full-width-container">
        <div className="container">
          <footer className="footer">
            <Row className="info justify-content-between">
              <Col xs={12} md={12} lg={4} className="contact-us mb-8 mb-lg-0">
                <div className="title">Contact Us</div>
                <div className="content">
                  <div>Beirut, Lebanon</div>
                  <div>Phone: +961 3 000 000</div>
                  <div>E-mail: doublebeat@doublebeat.com</div>
                  <div>Open now: 11AM–10PM</div>
                </div>
              </Col>

              <Col xs={12} md={12} lg={4} className="mb-9 mb-lg-0">
                <div className="logo w-100 mb-6 pb-1">
                  <Image src="/images/logo2.svg" alt="" height="6em" />
                </div>

                <div className="w-100 pl-3">
                  <SocialLinks links={links} />
                </div>
              </Col>

              <Col
                xs={12}
                md={12}
                lg={4}
                className="d-flex justify-content-center justify-content-lg-end"
              >
                <div>
                  <div className="title">Advertise With Us</div>
                  <div className="content">
                    <div>
                      <Link href="/">www.yourlinkhere.com1</Link>
                    </div>
                    <div>
                      <Link href="/">www.yourlinkhere.com2</Link>
                    </div>
                    <div>
                      <Link href="/">www.yourlinkhere.com3</Link>
                    </div>
                    <div>
                      <Link href="/">www.yourlinkhere.com4</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

            <div className="divider"></div>

            <Row className="developers justify-content-center justify-content-lg-between">
              <Col xs={12} md={12} lg={4} className="mb-6 mb-lg-0">
                <div className="d-flex justify-content-center justify-content-lg-start">
                  <div className="text-center text-lg-left">
                    <div>Double Beat 2019 - ALL RIGHT RESERVED.</div>
                    <div>
                      designed by{" "}
                      <span className="text-primary">
                        <Link href="/">TheCodesign</Link>
                      </span>{" "}
                      | developed by{" "}
                      <span className="text-primary">
                        <Link href="/">Cloud Systems</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} md={12} lg={4}>
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
              </Col>
            </Row>
          </footer>
        </div>
      </div>
    </Styles>
  );
};

export default Footer;
