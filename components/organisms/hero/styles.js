import styled from "styled-components";

export const Styles = styled.div`
  .hero {
    background-color: #d5b4c8;
    min-height: 100vh;
  }

  .hero__clip-path {
    background-color: #ebcbde;
    clip-path: polygon(92% 0, 100% 0%, 100% 100%, 46% 100%);
    height: 100vh;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  @media (max-width: 1366px) {
    .hero__clip-path {
      clip-path: polygon(90% 0, 100% 0%, 100% 100%, 44% 100%);
    }
  }

  .hero__content {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .hero__text {
    text-transform: uppercase;
    margin-right: 1.5rem;
    margin-bottom: 2rem;

    .title {
      color: white;
      padding-bottom: 0.9rem;
      border-bottom: 1px solid white;
      margin-bottom: 1.75rem;
    }

    @media (max-width: 1366px) {
      .title {
        padding-bottom: 0.65rem;
        border-bottom: 1px solid white;
        margin-bottom: 1.25rem;
      }
    }

    .property1 {
      font-size: 3.4375rem;
      font-weight: 300;
      line-height: 1;
    }

    .property2 {
      font-size: 4.75rem;
      font-weight: bold;
    }

    @media (max-width: 1680px) {
      .property1 {
        font-size: 2.8645rem;
      }

      .property2 {
        font-size: 3.9583rem;
        font-weight: bold;
      }
    }

    @media (max-width: 1366px) {
      .property1 {
        font-size: 2.3rem;
      }

      .property2 {
        font-size: 3.17rem;
      }
    }

    .property3 {
      color: white;
      font-size: 3.4375rem;
      font-weight: 300;
      word-spacing: 4px;
      letter-spacing: 4px;
      margin-bottom: 1.25rem;
    }

    @media (max-width: 1680px) {
      .property3 {
        font-size: 2.8645rem;
      }
    }

    @media (max-width: 1366px) {
      .property3 {
        font-size: 2.285rem;
        letter-spacing: 3.5px;
        margin-bottom: 0.8rem;
      }
    }

    .property4 {
      color: var(--gray-dark);
      font-size: 7.3125rem;
      font-weight: bold;
      line-height: 0.8;
    }

    @media (max-width: 1680px) {
      .property4 {
        font-size: 6.1rem;
      }
    }

    @media (max-width: 1366px) {
      .property4 {
        font-size: 4.875rem;
      }
    }
  }

  .hero__image {
    flex-basis: 37.5%;
    margin-right: 6rem;
  }

  @media (max-width: 1680px) {
    .hero__image {
      flex-basis: 37.5%;
      margin-right: 0;
    }
  }

  @media (max-width: 1366px) {
    .hero__image {
      flex-basis: 32.5%;
      margin-right: 6rem;
    }
  }
`;
