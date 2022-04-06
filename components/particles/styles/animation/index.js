import { css } from "styled-components";

export const animateVisibilityOnHover = css`
  .animate-visibility-on-hover {
    opacity: ${({ hovered }) => (hovered ? "1" : "0")};
    visibility: ${({ hovered }) => (hovered ? "visible" : "hidden")};
    transition: visibility 0.3s, opacity 0.3s linear;
  }
`;

export const animateVisibilityHeightOnHover = css`
  .animate-visibility-height-on-hover {
    opacity: ${({ hovered }) => (hovered ? "1" : "0")};
    visibility: ${({ hovered }) => (hovered ? "visible" : "hidden")};
    max-height: ${({ hovered }) => (hovered ? "500px" : "0")};
    margin-bottom: ${({ hovered }) => !hovered && "0 !important"};
    margin-top: ${({ hovered }) => !hovered && "0 !important"};
    transition: ${({ animationTime, collapsingFactor }) => `
      visibility ${animationTime}s,
      opacity ${animationTime}s linear,
      max-height ${animationTime}s linear,
      margin-bottom ${animationTime / collapsingFactor}s linear,
      margin-top ${animationTime / collapsingFactor}s linear
      `};
  }
`;

export const slideOnHover = css`
  .animate-height-on-hover {
    height: ${({ hovered }) => (hovered ? "100%" : "0")};
    opacity: ${({ hovered }) => (hovered ? "1" : "0")};
    transition: ${({ animationTime }) => `
     opacity ${animationTime}s ease,
      height ${animationTime}s ease
      `};
  }
`;
