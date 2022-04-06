import styled from "styled-components";

export const Styles = styled.div`
  .hero {
    min-height: 100%;
  }

  .hero__content {
    height: 100%;
    position: relative;
    img {
      object-fit: cover;
    }
  }

  .hero__image {
    height: 83vh;
  }

  @media (max-width: 1680px) {
    .hero__image {
      height: 76vh;
    }
  }

  @media (max-width: 1366px) {
    .hero__image {
      height: 81vh;
    }
  }

  .hero__text {
    text-transform: uppercase;
    position: absolute;
    top: 23.5vh;
    left: 260px;
    color: black;

    .first-line {
      font-weight: bold;
      color: var(--primary);
      letter-spacing: 0.5px;
    }

    .second-line {
      margin-bottom: 0.6rem;

      .sale-percentage {
        font-weight: bold;
      }
    }

    .third-line {
      margin-bottom: 1.4rem;
    }
  }

  @media (max-width: 1680px) {
    .hero__text {
      top: 22vh;
      left: 200px;
    }
  }

  @media (max-width: 1600px) {
    .hero__text {
      top: 22.5vh;
      left: 200px;
    }
  }

  @media (max-width: 1536px) {
    .hero__text {
      top: 22.5vh;
      left: 160px;
    }
  }

  @media (max-width: 1440px) {
    .hero__text {
      top: 23.5vh;
      left: 170px;
    }
  }

  @media (max-width: 1366px) {
    .hero__text {
      top: 21.5vh;
      left: 170px;
    }
  }

  @media (max-width: 768px) {
    .hero__text {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media (max-width: 600px) {
    .hero__text {
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
    }
  }
  @media (max-width: 400px) {
    .hero__text {
      top: 50%;
      left: 40%;
      transform: translate(-50%, -50%);
    }
  }
`;
