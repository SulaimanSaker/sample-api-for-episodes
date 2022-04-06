import React from "react";

import { Row, Col } from "react-bootstrap";

import { Avatar, CommentImage } from "components/molecules";

import { Styles } from "./styles";

const RepliesList = ({ replies }) => {
  return (
    <Styles>
      <div className="replies">
        {replies?.map(({ id, clientName, clientImage, text, commentImage }) => (
          <Row key={id} className="mt-4 margin-befor-comments">
            <Col className="col-1 mr-2">
              <Avatar alt={clientName} src={clientImage} />
            </Col>
            <Col>
              <Row className="justify-content-between">
                <Col className="col-10  ">
                  <div className="client-name font-size-18">{clientName}</div>
                </Col>
                <Col className="col-xs-11 col-10  ">
                  <div className="text font-size-16">{text}</div>
                </Col>
              </Row>
            </Col>

            {commentImage && (
              <Col xs={12} className="mb-3">
                <CommentImage src={commentImage} />
              </Col>
            )}
          </Row>
        ))}
      </div>
    </Styles>
  );
};

export default RepliesList;
