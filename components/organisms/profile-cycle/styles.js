import styled from "styled-components";
export const Styles = styled.div`
  margin-bottom: 2rem;

  .cycle__content__container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .cycle__content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
  .profile__cycle__form {
    margin-top: 1rem;
  }
  .cycle__content__header {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: var(--primary);
      font-weight: 700;
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
`;
