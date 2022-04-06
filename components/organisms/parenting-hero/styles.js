import styled from "styled-components";

export const Styles = styled.div`
  .hero {
    min-height: 100%;
    position: relative;
  }

  .hero__content {
    height: 100%;
    position: relative;
    background: #ebcbde;
    img {
      object-fit: contain;
      object-position: right;
    }
  }

  .download__buttons {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    z-index: 10;
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
      margin-left: 1rem;

      .title {
        padding-bottom: 0.65rem;
        border-bottom: 1px solid white;
        margin-bottom: 1.25rem;
      }
    }

    .property1 {
      font-weight: 300;
      line-height: 1;
    }

    .property2 {
      font-weight: bold;
    }

    .property3 {
      color: white;

      font-weight: 300;
      word-spacing: 4px;
      letter-spacing: 4px;
      margin-bottom: 1.25rem;
    }

    .property4 {
      color: var(--gray-dark);

      font-weight: bold;
      line-height: 0.8;
    }
  }

  .hero__image {
    margin-right: 6rem;
    height: 100%;
    flex-basis: 37.5%;
  }

  @media (max-width: 1680px) {
    .hero__image {
      margin-right: 0;
    }
  }

  @media (max-width: 1366px) {
    .hero__image {
      margin-right: 2rem;
      margin-top: 10rem;
    }
  }
  @media (max-width: 576px) {
    .hero__image {
      flex-basis: 100%;
      margin-top: 10rem;
    }
  }
`;
