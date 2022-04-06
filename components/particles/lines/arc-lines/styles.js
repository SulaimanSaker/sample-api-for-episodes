import styled, { keyframes, css } from "styled-components";

const circleLeftAnimation = keyframes`
   0% {
    top: 55px;
    opacity: 0;
    }

    12% {
      opacity: 1;
      top: 45px;
    }
`;

const verticalLeftLineAnimation = (linesHeight) => keyframes`
    0% {
      opacity: 0;
      height: 0;
      top: 0;
    }

   10% {
      opacity: 1;
      height: 0;
      top: unset;
      bottom: ${linesHeight + 132}px;
    }

    25% {
      height: 115px;
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

    77% {
      opacity: 1;
    }

    90% {
      height: 115px;
    }
`;

const circleRightAnimation = keyframes`
   0% {
    opacity: 0;
    top: 35px;
    }

    88% {
      opacity: 0;
      top: 35px;
    }

    100% {
      opacity: 1;
      top: 45px;
    }
`;

export const Styles = styled.div`
  .lines rect,
  .lines circle {
    fill: #dddddd;
  }

  .lines__circle-left {
    position: absolute;
    top: ${({ linesHeight }) => `${-linesHeight + 102.5}px`};
    width: 15px;
    left: -73px;
    z-index: -1;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  .lines__vertical-line-left {
    position: absolute;
    top: ${({ linesHeight }) => `${-linesHeight - 5}px`};
    left: -66px;
    width: 1px;
    z-index: -1;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  .lines__horizontal-line {
    position: absolute;
    top: ${({ linesHeight }) => `${-linesHeight - 18}px`};
    left: -66px;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  .lines__circle-right {
    position: absolute;
    top: ${({ linesHeight }) => `${-linesHeight + 102.5}px`};
    width: 15px;
    right: -73px;
    z-index: -1;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  .lines__vertical-line-right {
    position: absolute;
    top: ${({ linesHeight }) => `${-linesHeight - 5}px`};
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
        animation: ${({ linesHeight }) =>
          css`
            ${verticalLeftLineAnimation(linesHeight)} 3s linear
          `};
      }

      .lines__vertical-line-left rect {
        animation: ${({ linesHeight }) =>
          css`
            ${verticalLeftLineAnimation(linesHeight)} 3s linear
          `};
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
