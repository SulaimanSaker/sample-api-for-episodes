import styled from "styled-components";

export const Styles = styled.div`
  .collapse-arrow {
    cursor: pointer;
  }

  .collapse-arrow svg {
    transition: transform 0.25s ease;
  }

  .collapse-arrow.collapsed svg {
    transform: rotate(-90deg);
  }
`;
