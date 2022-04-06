import styled from "styled-components";

export const Styles = styled.div`
  .sales__header {
    width: 90%;
  }

  .sales__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 25rem);
    justify-content: center;
    justify-items: stretch;
    align-content: center;
    align-items: stretch;
    row-gap: 2.75rem;
    column-gap: 2.75rem;
  }

  @media (max-width: 1680px) {
    .sales__grid {
      grid-template-rows: repeat(3, 22rem);
      row-gap: 2.5rem;
      column-gap: 2.5rem;
    }
  }

  @media (max-width: 1600px) {
    .sales__grid {
      grid-template-rows: repeat(3, 20.5rem);
      row-gap: 2.5rem;
      column-gap: 2.5rem;
    }
  }

  @media (max-width: 1536px) {
    .sales__grid {
      grid-template-rows: repeat(3, 19.5rem);
    }
  }

  @media (max-width: 1440px) {
    .sales__grid {
      grid-template-rows: repeat(3, 18rem);
      row-gap: 1.75rem;
      column-gap: 1.75rem;
    }
  }

  .box-three {
    grid-column: 3/5;
  }

  .box-eight {
    grid-column: 1/4;
  }

  .lines rect,
  .lines circle {
    fill: #dddddd;
  }

  .lines__circle {
    position: absolute;
    top: -29px;
    width: 15px;
    left: 0;
    fill: #dddddd;
  }

  .lines__vertical-line {
    position: absolute;
    bottom: -30px;
    left: 7px;
    width: 1px;
    z-index: -1;
    fill: #dddddd;
  }

  .lines__horizontal-line {
    position: absolute;
    top: -320px;
    left: 7px;
    width: 3000px;
    fill: #dddddd;
  }
`;
