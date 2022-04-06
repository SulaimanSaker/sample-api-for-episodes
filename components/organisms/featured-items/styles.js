import styled from "styled-components";

export const Styles = styled.div`
  .featured-items {
    padding-top: 4rem;
  }

  .featured-items__header {
    width: 90%;
  }

  .featured-items__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 37rem;
    justify-content: center;
    justify-items: stretch;
    align-content: center;
    align-items: stretch;
    row-gap: 1.75rem;
    column-gap: 1.75rem;
    width: 100%;
  }

  @media (max-width: 1680px) {
    .featured-items__grid {
      grid-auto-rows: 34.5rem;
      row-gap: 1.75rem;
      column-gap: 1.75rem;
    }
  }

  @media (max-width: 1366px) {
    .featured-items__grid {
      grid-auto-rows: 28rem;
      row-gap: 1.75rem;
      column-gap: 1.75rem;
    }
  }

  @media (max-width: 900px) {
    .featured-items__grid {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: 38rem;
    }
  }

  @media (max-width: 800px) {
    .featured-items__grid {
      grid-auto-rows: 35rem;
    }
  }

  @media (max-width: 700px) {
    .featured-items__grid {
      grid-auto-rows: 30rem;
    }
  }

  @media (max-width: 600px) {
    .featured-items__grid {
      grid-auto-rows: 25rem;
    }
  }

  @media (max-width: 500px) {
    .featured-items__grid {
      grid-auto-rows: 22rem;
    }
  }

  @media (max-width: 400px) {
    .featured-items__grid {
      grid-auto-rows: 16rem;
    }
  }

  @media (max-width: 350px) {
    .featured-items__grid {
      grid-auto-rows: 14rem;
    }
  }
`;
