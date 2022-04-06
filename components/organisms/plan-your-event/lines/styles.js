import styled from "styled-components";

export const Styles = styled.div`
  .lines rect,
  .lines circle {
    fill: #dddddd;
  }

  .lines__circle {
    position: absolute;
    top: -29px;
    width: 15px;
    left: -39px;
  }

  .lines__vertical-line {
    position: absolute;
    top: -72px;
    left: -32.5px;
    width: 1px;
  }

  @media (max-width: 1680px) {
    .lines__vertical-line {
      top: -70px;
    }
  }

  @media (max-width: 1600px) {
    .lines__vertical-line {
      top: -72px;
    }
  }

  @media (max-width: 1536px) {
    .lines__vertical-line {
      top: -70px;
    }
  }

  @media (max-width: 1440px) {
    .lines__vertical-line {
      top: -71px;
    }
  }

  @media (max-width: 1366px) {
    .lines__vertical-line {
      top: -72px;
    }
  }

  .lines__horizontal-line {
    position: absolute;
    top: 90px;
    right: 0;
  }

  @media (max-width: 1680px) {
    .lines__horizontal-line {
      position: absolute;
      top: 80px;
    }
  }

  @media (max-width: 1600px) {
    .lines__horizontal-line {
      position: absolute;
      top: 75px;
    }
  }

  @media (max-width: 1536px) {
    .lines__horizontal-line {
      position: absolute;
      top: 73px;
    }
  }

  @media (max-width: 1440px) {
    .lines__horizontal-line {
      position: absolute;
      top: 70px;
      right: 0;
    }
  }

  @media (max-width: 1366px) {
    .lines__horizontal-line {
      position: absolute;
      top: 70px;
      right: 0;
    }
  }
`;
