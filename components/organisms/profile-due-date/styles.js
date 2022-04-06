import styled from "styled-components";

export const Styles = styled.div`
  .profile__due__date__section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .first-row {
    width: 80%;

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 576px) {
      display: flex;
      justify-content: center;
    }
  }

  .form__section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form__section__content {
    width: 60%;
    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    width: 100%;
    height: 100%;

    border: none;
    background: transparent;

    .text {
      color: var(--gray-12);
      line-height: 1.1;
      text-align: left;
    }

    .option-image {
      img {
        width: 3.5rem;
        height: 3.5rem;
        object-fit: contain;

        @media (max-width: 750px) {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
    }
  }

  .I_dont_have_date {
    margin: 1rem 0;
    display: flex;
    justify-content: center;

    a {
      color: var(--primary);
      text-decoration: underline;
      font-weight: 700;
    }
  }

  .form-label {
    font-weight: 700;
    color: var(--gray-12);
  }

  .form__error {
    color: red;
  }
`;
