import React from "react";

import { StyledButton } from "./styles";

const XButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <svg viewBox="0 0 20 20">
        <path d="M19.778 5.636l-1.414-1.414L12 10.586 5.636 4.222 4.222 5.636 10.586 12l-6.364 6.364 1.414 1.414L12 13.414l6.364 6.364 1.414-1.414L13.414 12z"></path>
      </svg>
    </StyledButton>
  );
};

export default XButton;
