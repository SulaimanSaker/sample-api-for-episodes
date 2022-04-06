import styled, { keyframes, css } from "styled-components";

const circleShifting = keyframes`
   0% {
      bottom: -65px;
      opacity: 1;
    }

    100% {
      bottom: -55px;
    }
`;

const verticalLineShifting = keyframes`
   0% {
      height: 0;
      opacity: 1;
    }


    100% {
      height: 450px;
    }
`;

const horizontalLineShifting = (horizontalLineWidth) => keyframes`
    0% {
      width: 0;
      opacity: 1;
    }


    100% {
      width: ${horizontalLineWidth}px;
    }

    
`;

export const Styles = styled.div`
  .lines rect,
  .lines circle {
    fill: #dddddd;
  }

  .lines__circle {
    position: absolute;
    bottom: -55px;
    width: 15px;
    left: -39px;
    z-index: -1;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  .lines__vertical-line {
    position: absolute;
    bottom: -40px;
    left: -32.5px;
    width: 1px;
    z-index: -1;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }

  .lines__horizontal-line {
    position: absolute;
    top: 125px;
    left: -150px;
    width: 485px;
    opacity: ${({ scrolled }) => (scrolled ? 1 : 0)};
  }
 

 

  ${({ scrolled }) =>
    scrolled &&
    css`
      .lines__circle {
        animation: ${circleShifting} 0.5s;
      }

      .lines__vertical-line {
        animation: ${verticalLineShifting} 2s;
      }

      .lines__vertical-line rect {
        animation: ${verticalLineShifting} 2s;
      }

      .lines__horizontal-line rect {
        animation: ${({ horizontalLineWidth }) =>
          css`
            ${horizontalLineShifting(horizontalLineWidth)} 2s
          `};
      }
    `}
`;
