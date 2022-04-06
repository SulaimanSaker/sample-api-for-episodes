import styled from "styled-components";

export const Styles = styled.div`
  .most-visited-shops {
    padding-top: 4rem;
  }

  .most-visited-shops__header {
    position: relative;
    width: 90%;
  }

  .most-visited-shops__carousel {
    margin-top: 3.25rem;
  }

  .lines rect,
  .lines circle {
    fill: #dddddd;
  }

  .lines__header-circle {
    position: absolute;
    bottom: 16px;
    width: 15px;
    left: 0;
    fill: #dddddd;
  }

  .lines__header-vertical-line {
    position: absolute;
    bottom: 26px;
    left: 7px;
    width: 1px;
    fill: #dddddd;
  }

  .lines__carousel-circle-left {
    position: absolute;
    top: 45px;
    width: 15px;
    left: -73px;
    z-index: -1;
  }

  .lines__carousel-vertical-line-left {
    position: absolute;
    top: -65px;
    left: -66px;
    width: 1px;
    z-index: -1;
  }

  .lines__carousel-horizontal-line {
    position: absolute;
    top: -78px;
    left: -66px;
  }

  .lines__carousel-circle-right {
    position: absolute;
    top: 45px;
    width: 15px;
    right: -73px;
    z-index: -1;
  }

  .lines__carousel-vertical-line-right {
    position: absolute;
    top: -65px;
    right: -66px;
    width: 1px;
    z-index: -1;
  }

  .lines__carousel-line-under-buttons {
    position: absolute;
    top: 200px;
    left: calc(50% - 100px);
    width: 200px;
  }

  .carousel__item {
    display: flex;
    justify-content: center;
    margin-bottom: 4rem;
  }
`;
