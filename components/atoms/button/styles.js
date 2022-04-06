import styled from "styled-components";

export const Styles = styled.div`
  line-height: 1;

  .btn {
    min-height: 2.25rem;
    padding: 0 1.25rem;
    border-radius: 7px;
    font-size: 1rem;
    text-transform: uppercase;
    width: ${({ width }) => width};

    transition: min-height 0.5s, padding 0.5s, font-size 0.5s;
  }

  @media (max-width: 1366px) {
    .btn {
      min-height: 1.85rem;
      padding: 0 1rem;
      font-size: 0.8rem;
    }
  }

  .small {
    min-height: 2rem;
    padding: 0 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 1366px) {
    .small {
      min-height: 1.7rem;
      padding: 0 0.9rem;
      font-size: 0.75rem;
    }
  }

  .big {
    font-size: 1.125rem;
    font-weight: bold;
    min-height: 3.4375rem;
    padding: 0 3rem;
  }

  @media (max-width: 1680px) {
    .big {
      font-size: 1rem;
      padding: 0 2rem;
      letter-spacing: 2px;
    }
  }

  @media (max-width: 1600px) {
    .big {
      padding: 0 1.75rem;
      min-height: 3rem;
    }
  }

  @media (max-width: 1536px) {
    .big {
      padding: 0 1.85rem;
      min-height: 3.25rem;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 1440px) {
    .big {
      font-size: 0.85rem;
      font-weight: 600;
      min-height: 3rem;
      padding: 0 1.675rem;
    }
  }

  @media (max-width: 1366px) {
    .big {
      font-size: 0.75rem;
      font-weight: 600;
      min-height: 2.5rem;
      padding: 0 1.5rem;
    }
  }

  @media (max-width: 800px) {
    .big {
      font-size: 0.7rem;
      font-weight: 500;
      min-height: 2.5rem;
      padding: 0 1rem;
    }
  }

  @media (max-width: 600px) {
    .big {
      font-size: 0.65rem;
      font-weight: 500;
      min-height: 2.5rem;
      padding: 0 0.5rem;
    }
  }

  @media (max-width: 500px) {
    .big {
      font-size: 0.5rem;
      font-weight: 400;
      min-height: 1.5rem;
      padding: 0 0.5rem;
    }
  }

  .rounded {
    border-radius: 25px !important;
  }

  .block {
    display: block;
    width: 100%;
  }
`;
