import styled from "styled-components";

export const Styles = styled.div`
  .kids-container {
    display: flex;
    justify-content: end;

    @media (max-width: 960px) {
      justify-content: center;
    }
  }

  .kids-measurements {
    padding-top: 2.5rem;
    padding-bottom: 4.5rem;
  }

  .kids-measurements__content-container {
    width: 81.5%;
    @media (max-width: 960px) {
      width: 100%;
    }
  }

  .kids-measurements__content {
    position: relative;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 960px) {
      width: 100%;
    }
  }

  .choose-kid {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media (max-width: 960px) {
      width: 100%;
    }
  }

  .choose-kid-title {
    color: var(--primary);
    margin-bottom: 2rem;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .form__input {
    width: 60%;
    @media (max-width: 960px) {
      width: 70%;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
  }

  .kid-details {
    width: 100%;
    margin: 5rem 0;
  }

  .kid-details-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
  }

  .card-expected,
  .card-percentile {
    color: var(--gray-8);
  }

  .card-measure-number {
    color: var(--gray-14);
  }

  .ruler-container {
    width: 6rem;
    height: 6rem;
    background-color: var(--primary);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    @media (max-width: 767px) {
      margin: 0 auto;
      width: 4rem;
      height: 4rem;
    }
  }
  .ruler {
    @media (max-width: 767px) {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 1600px) {
    .kids-measurements__content-container {
      width: 81%;
    }

    .kids-measurements__content {
      position: relative;
      width: 100%;
    }
  }

  @media (max-width: 1366px) {
    .kids-measurements__content-container {
      width: 80%;
    }
  }
`;
