import styled from "styled-components";

export const StyledImage = styled.img`
  font-size: 10px;
  object-fit: cover;
  width: ${({ dimensions }) => dimensions?.width};
  height: ${({ dimensions }) => dimensions?.height};
`;
