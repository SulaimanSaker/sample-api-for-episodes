import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  .info__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .update__profile {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 1rem;
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;

      @media (max-width: 767px) {
        width: 4rem;
        height: 4rem;
      }
      @media (max-width: 576px) {
        width: 3rem;
        height: 3rem;
      }
    }
    .update__image__btn {
      border: none;
      outline: none;
      color: var(--primary);
      background: transparent;
      margin-left: 1rem;
      font-weight: 700;
    }
  }

  .warning__box {
    display: flex;
    background-color: #efe9ed;
    padding: 1rem 4rem 2rem 1rem;
    color: var(--gray-12);
    border-radius: 0.5rem;
    margin-bottom: 2rem;

    @media (max-width: 576px) {
      padding: 0.5rem;
    }

    span {
      margin-left: 1rem;
    }
  }

  .form-label {
    font-weight: 700;
    color: var(--gray-12);
  }

  .form__error {
    color: red;
  }

  .password__change__section {
    display: flex;

    width: 100%;

    a {
      color: #d88ab3;
      text-decoration: none;
      margin-left: auto;

      font-weight: 700;
    }
  }

  .phone {
    width: 100%;
  }
`;
