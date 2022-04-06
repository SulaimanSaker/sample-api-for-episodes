import styled from "styled-components";

export const Styles = styled.div`
  .latest-articles {
    padding-bottom: 4rem;
  }

  .latest-articles__header {
    padding-top: 4.5rem;
    width: 90%;
  }

  .default-lines__vertical-line {
    top: -72px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 27.2rem 22rem;
    justify-content: center;
    justify-items: stretch;
    align-content: center;
    align-items: stretch;
    row-gap: 2.75rem;
    column-gap: 2.75rem;
  }

  @media (max-width: 1680px) {
    .grid {
      grid-template-rows: 23.8rem 19.25rem;
      row-gap: 2.5rem;
      column-gap: 2.5rem;
    }
  }

  @media (max-width: 1600px) {
    .grid {
      grid-template-rows: 22.52rem 18.2rem;
    }
  }

  @media (max-width: 1440px) {
    .grid {
      grid-template-rows: 21.6rem 17.53rem;
    }
  }

  @media (max-width: 1366px) {
    .grid {
      grid-template-rows: 17rem 13.75rem;
    }
  }

  .box-one {
    grid-column: 1/3;
  }

  .box-four {
    grid-column: 3/4;
    grid-row: 1/3;
  }
`;
