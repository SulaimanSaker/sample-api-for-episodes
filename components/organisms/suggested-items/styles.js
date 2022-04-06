import styled from "styled-components";

export const Styles = styled.div`
  .suggested-items__header {
    width: 90%;
  }

  .line rect,
  .line circle {
    fill: #dddddd;
  }

  .line__circle {
    position: absolute;
    top: -29px;
    width: 15px;
    left: 0;
    fill: #dddddd;
  }

  .line__vertical-line {
    position: absolute;
    bottom: -24px;
    left: 7px;
    width: 1px;
    fill: #dddddd;
  }

  .suggested-items__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 18rem);
    justify-content: center;
    justify-items: stretch;
    align-content: center;
    align-items: stretch;
    row-gap: 1.75rem;
    column-gap: 1.75rem;
  }

  .box-three {
    grid-column: 3/5;
  }

  @media (max-width: 960px) {
    .suggested-items__grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 19rem);
      row-gap: 1.75rem;
      column-gap: 1.75rem;
    }

    .box-three {
      grid-column: 1/5;
      grid-row: 2/3;
    }
  }

  @media (max-width: 768px) {
    .suggested-items__grid {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 19rem);
      row-gap: 1.75rem;
      column-gap: 1.75rem;
    }

    .box-three {
      grid-column: 1/4;
      grid-row: 2/3;
    }
  }

  @media (max-width: 576px) {
    .suggested-items__grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 19rem);
      row-gap: 1.75rem;
      column-gap: 1.75rem;
    }

    .box-three {
      grid-column: 1/3;
      grid-row: 2/3;
    }
  }

  @media (max-width: 414px) {
    .suggested-items__grid {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(7, 19rem);
      row-gap: 1.75rem;
      column-gap: 1.75rem;
    }

    .box-three {
      grid-column: unset;
      grid-row: unset;
    }
  }
`;
