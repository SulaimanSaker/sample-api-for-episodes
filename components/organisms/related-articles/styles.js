import styled from "styled-components";

export const Styles = styled.div`
  .related-articles {
    margin-bottom: 10rem;

    .related-articles__header-container {
      padding-top: 4rem;
    }
  }

  .related-articles__carousel {
    height: 21rem;

    .item {
      margin: 1rem;
    }
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
  }

  .lines__vertical-line {
    position: absolute;
    top: -65px;
    left: 7px;
    width: 1px;
    z-index: -1;
  }
`;
