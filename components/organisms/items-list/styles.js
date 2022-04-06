import styled from "styled-components";

export const Styles = styled.div`
  .articles__cards {
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
    .articles__cards {
      grid-template-columns: repeat(4, 1fr);
      row-gap: 1.5rem;
      column-gap: 1rem;
    }
  }

  @media (max-width: 768px) {
    .articles__cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 414px) {
    .articles__cards {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 1.75rem;
      grid-auto-rows: 22.5rem;
    }
  }

  .articles__advertisements {
    display: flex;
    justify-content: center;

    margin-top: 2.5rem;
    margin-bottom: 3rem;

    .wrapper {
      width: ${({ filtersCollapsed }) => (filtersCollapsed ? "100%" : "74.5%")};
    }
  }

  @media (max-width: 1366px) {
    .articles__advertisements {
      margin-top: 2.5rem;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 960px) {
    .articles__advertisements {
      margin-top: 1.75rem;
      margin-bottom: 3.25rem;

      .wrapper {
        width: 100%;
      }
    }
  }
`;
