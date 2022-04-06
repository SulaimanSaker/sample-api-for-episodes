import styled from "styled-components";

export const Styles = styled.div`
  .feature-item {
    text-align: center;
    border: 0;
  }

  .feature-item__title {
    font-weight: bold;
    text-transform: uppercase;
    color: var(--gray-10);
    font-size: 1.125rem;
  }

  .feature-item__text {
    line-height: 1.5;
  }

  .png-icon {
    width: 5rem;
    margin: 1rem auto;
  }

  @media (max-width: 1680px) {
    .feature-item__title {
      font-size: 0.994rem;
    }

    .feature-item__text {
      font-size: 0.884rem;
    }
  }

  @media (max-width: 1600px) {
    .feature-item__title {
      font-size: 0.947rem;
    }

    .feature-item__text {
      font-size: 0.84rem;
    }
  }

  @media (max-width: 1536px) {
    .feature-item__title {
      font-size: 0.9rem;
    }

    .feature-item__text {
      font-size: 0.8rem;
    }
  }
`;
