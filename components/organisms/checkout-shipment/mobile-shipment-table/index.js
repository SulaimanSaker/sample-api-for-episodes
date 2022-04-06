import React from "react";
import { Checkbox, Image } from "components/atoms";
import { Styles } from "./styles";
import { Col, Row } from "react-bootstrap";

const MobileShipmentTable = () => {
  return (
    <Styles>
      <div className="shipment-container">
        <div className="ship-card">
          <Row>
            <Col className="col-12 ship-card-item">
              <Checkbox onChange={() => {}} checked={true} label="" />
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-16 ">Estimated Delivery</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-18 text-primary">5-10 days</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-16 ">Cost</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-18 text-primary">
                <sup>$</sup>200.50
              </div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-16 ">Tracking</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-18 text-primary">5-10 days</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-16 ">Carrier</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-18 text-primary">
                <Image src="/images/icons/dhl-logo.png" alt="dhl-logo.png" className="mr-4" />{" "}
                DHL
              </div>
            </Col>
          </Row>
        </div>
        <div className="ship-card">
          <Row>
            <Col className="col-12 ship-card-item">
              <Checkbox onChange={() => {}} checked={true} label="" />
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-16 ">Estimated Delivery</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-18 text-primary">5-10 days</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-16 ">Cost</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-18 text-primary">
                <sup>$</sup>200.50
              </div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-16 ">Tracking</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-18 text-primary">5-10 days</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-16 ">Carrier</div>
            </Col>
            <Col className="col-12 col-sm-6 ship-card-item">
              <div className="font-size-18 text-primary">
                <Image
                  src="/images/icons/fedex-icon.png"
                  alt="fedex-icon.png"
                  className="mr-4"
                />
                Fedex
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Styles>
  );
};

export default MobileShipmentTable;
