import styled from "styled-components";

export const Styles = styled.div`
  .slick-track {
    display: flex;
    justify-content: center;
  }

  .slick-arrow:before {
    color: black;
  }

  .slick-arrow.slick-next:before {
    content: url("images/carousel-arrow-right.png");
  }

  .slick-arrow.slick-prev:before {
    content: url("images/carousel-arrow-left.png");
    width: 13px;
    height: 23px;
  }

  .slick-prev,
  .slick-next {
    top: 44%;
  }

  .slick-prev {
    left: -32px;
  }

  .slick-next {
    right: -32px;
  }

  .btn-outline-dark:not(:disabled):not(.disabled).active {
    background-color: #201d1e;
    color: white;
    box-shadow: none;
  }
`;
