import styled from "styled-components";

export const Styles = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ fill }) => fill};
    cursor: ${({ onClick }) => (onClick ? "pointer" : "")};
  }

  a & svg:hover {
    fill: var(--secondary);
  }
`;
