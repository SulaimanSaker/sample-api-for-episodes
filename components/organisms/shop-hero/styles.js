import styled from "styled-components";

export const Styles = styled.div`
  .hero {
    min-height: 100%;
  }

  .hero__content {
    height: 100%;
    position: relative;
    .hero__logo {
      width: 6rem;

      @media (max-width: 1366px) {
        width: 5rem;
      }

      @media (max-width: 800px) {
        width: 4rem;
      }

      @media (max-width: 400px) {
        width: 3rem;
      }
    }
  }

  .hero__image {
    height: 83vh;
    object-fit: cover;
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
  @media (max-width: 1200px) {
    .hero__image {
      height: 81vh;
    }
  }

  @media (max-width: 700px) {
    .hero__image {
      height: 60vh;
    }
  }

  .hero__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 0.2s ease;
    background-color: rgba(0, 0, 30, 0.25);
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
      font-weight: bold;
      margin-bottom: 1rem;
      @media (max-width: 600px) {
        margin-bottom: 0.2rem;
      }
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
      font-size: 2.235rem;
    }
  }

  @media (max-width: 1366px) {
    .hero__text {
      top: 23.5vh;
      left: 170px;
    }
  }

  @media (max-width: 768px) {
    .hero__text {
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
    }
  }

  @media (max-width: 700px) {
    .hero__text {
      left: 25%;
      transform: translate(-50%, -50%);
      padding: 0.5rem 0;
    }
  }
`;
