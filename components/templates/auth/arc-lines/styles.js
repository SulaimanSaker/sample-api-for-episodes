import styled, { keyframes, css } from "styled-components";

const circleLeftAnimation = keyframes`
   0% {
    top: 117.5px;
    opacity: 0;
    }

    12% {
      opacity: 1;
      top: 107.5px;
    }
`;

const verticalLeftLineAnimation = keyframes`
    0% {
      opacity: 0;
      height: 0;
    }

   10% {
      opacity: 1;
      height: 0;
      top: 112.5px;
    }

    25% {
      height: 115px;
      top: 0px;
    }
`;

const horizontalLineAnimation = (horizontalLineWidth) => keyframes`
    0% {
      opacity: 0;
      width: 0;
    }

    25% {
      opacity: 1;
      width: 0;
    }

    75% {
      width: ${horizontalLineWidth}px;
    }
`;

const verticalRightLineAnimation = keyframes`
    0% {
      opacity: 0;
      height: 0;
    }

   75% {
      opacity: 1;
      height: 0;
    }

    90% {
      height: 115px;
    }
`;

const circleRightAnimation = keyframes`
   0% {
    opacity: 0;
    top: 92.5px;
    }

    88% {
      opacity: 0;
      top: 97.5px;
    }

    100% {
      opacity: 1;
      top: 107.5px;
    }
`;

export const Styles = styled.div`
  width: ${({ width }) => width ?? 500}px;

  .lines {
    position: relative;

    height: 100%;
    width: 100%;
  }

  .lines rect,
  .lines circle {
    fill: #dddddd;
  }

  .lines__circle-left {
    position: absolute;
    top: 107.5px;
    width: 15px;
    left: -73px;
    z-index: -1;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  .lines__vertical-line-left {
    position: absolute;
    top: 0;
    left: -66px;
    width: 1px;
    z-index: -1;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  .lines__horizontal-line {
    position: absolute;
    top: -13px;
    left: -66px;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  .lines__circle-right {
    position: absolute;
    top: 107.5px;
    width: 15px;
    right: -73px;
    z-index: -1;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  .lines__vertical-line-right {
    position: absolute;
    top: 0;
    right: -66px;
    width: 1px;
    z-index: -1;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  ${({ scrolled }) =>
    scrolled &&
    css`
      .lines__circle-left {
        animation: ${circleLeftAnimation} 3s linear;
      }

      .lines__vertical-line-left {
        animation: ${verticalLeftLineAnimation} 3s linear;
      }

      .lines__vertical-line-left rect {
        animation: ${verticalLeftLineAnimation} 3s linear;
      }

      .lines__horizontal-line rect {
        animation: ${({ horizontalLineWidth }) =>
          css`
            ${horizontalLineAnimation(horizontalLineWidth)} 3s linear
          `};
      }

      .lines__vertical-line-right {
        animation: ${verticalRightLineAnimation} 3s linear;
      }

      .lines__vertical-line-right rect {
        animation: ${verticalRightLineAnimation} 3s linear;
      }

      .lines__circle-right {
        animation: ${circleRightAnimation} 3s linear;
      }
    `}
`;
