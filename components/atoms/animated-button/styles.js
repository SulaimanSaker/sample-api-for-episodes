import styled, { keyframes } from "styled-components";

const shift = keyframes`
   0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(77px);
    }

    100% {
      transform: translateX(0);
    }
`;

export const Styles = styled.div`
  line-height: 0;

  .animated-button {
    text-align: center;
    display: inline-block;
  }

  .animated-button button {
    border: 0;
    background-color: unset;
    font-weight: bold;
    font-size: 0.875rem;
    text-transform: uppercase;
    color: var(--gray-13);
    padding-bottom: 0.5rem;
    line-height: 1.5;
  }

  @media (max-width: 1680px) {
    .animated-button button {
      font-size: 0.773rem;
    }
  }

  @media (max-width: 1600px) {
    .animated-button button {
      font-size: 0.7368rem;
    }
  }

  @media (max-width: 1536px) {
    .animated-button button {
      font-size: 0.707rem;
    }
  }

  .animated-button.small button {
    font-size: 0.75rem;
  }

  .link-border {
    line-height: 0;
  }

  .link-border rect {
    fill: #bd4d94;
    enable-background: new;
  }

  .animated-button:hover .link-border rect {
    animation: ${shift} 2s linear infinite;
  }
`;
