import styled from "styled-components";

export const Styles = styled.div`
  .shop-by-category__header {
    width: 90%;
  }

  .line rect {
    fill: #ddd;
  }

  .line__circle {
    position: absolute;
    top: -29px;
    width: 15px;
    left: 0;
    fill: #ddd;
  }

  .line__vertical-line {
    position: absolute;
    bottom: -24px;
    left: 7px;
    width: 1px;
    fill: #ddd;
  }

  .shop-by-category__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 24rem);
    justify-content: center;
    justify-items: stretch;
    align-content: center;
    align-items: stretch;
    row-gap: 1.75rem;
    column-gap: 1.75rem;
  }

  .box-one {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  .box-six {
    grid-column: 2/3;
    grid-row: 3/5;
  }

  @media (max-width: 1680px) {
    .shop-by-category__grid {
      grid-template-rows: repeat(4, 21rem);
    }
  }

  @media (max-width: 1366px) {
    .shop-by-category__grid {
      grid-template-rows: repeat(4, 16rem);
    }
  }

  @media (max-width: 900px) {
    .shop-by-category__grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .box-one {
      grid-column: unset;
      grid-row: unset;
    }

    .box-six {
      grid-column: unset;
      grid-row: unset;
    }
  }
`;
