import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  .register-predict-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .form {
      width: 80%;

      @media (min-width: 700px) {
        width: 60%;
      }
      @media (min-width: 1500px) {
        width: 50%;
      }

      .button-container {
        margin-top: 1.5rem;
        margin-bottom: 1.25rem;
      }
    }
  }
`;
