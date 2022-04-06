import styled from "styled-components";

export const Styles = styled.div`
  .episode__ads {
    width: 100%;
    .wrapper {
      width: 100%;
    }
  }
  .episode__cards {
    display: grid;
    grid-template-columns: ${({ filtersCollapsed }) =>
      filtersCollapsed ? "repeat(3, 1fr)" : "repeat(4, 1fr)"};
    grid-auto-rows: 20rem;
    justify-content: center;
    justify-items: stretch;
    align-content: center;
    align-items: stretch;
    row-gap: 1.75rem;
    column-gap: 1.75rem;
    width: 100%;
  }

  @media (max-width: 960px) {
    .episode__cards {
      grid-template-columns: repeat(4, 1fr);
      row-gap: 1.5rem;
      column-gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    .episode__cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 414px) {
    .episode__cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 375px) {
    .episode__cards {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 1.75rem;
      grid-auto-rows: 22.5rem;
    }
  }

  .advertisement {
    grid-column: 2/4;
  }

  @media (max-width: 960px) {
    .advertisement {
      grid-column: initial;
    }
  }
`;
