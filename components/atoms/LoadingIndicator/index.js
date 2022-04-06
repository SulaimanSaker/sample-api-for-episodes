import React from "react";
import { Spinner } from "react-bootstrap";
import { Styles } from "./styles";
function LoadingIndicator() {
  return (
    <Styles>
      <Spinner animation="border" variant="primary" />
    </Styles>
  );
}

export default LoadingIndicator;
