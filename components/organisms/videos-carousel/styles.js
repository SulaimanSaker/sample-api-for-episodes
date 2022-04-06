import styled from "styled-components";

export const Styles = styled.div`
  .videos-carousel__header {
    width: 90%;
  }

  .videos-carousel__lines {
    position: relative;
    width: 0;
  }

  .lines rect,
  .lines circle {
    fill: #dddddd;
  }

  .lines__circle {
    position: absolute;
    top: 35px;
    width: 15px;
    right: 30px;
  }

  .lines__horizontal-line {
    position: absolute;
    top: 35px;
    right: 40px;
    width: 1000px;
  }
`;
