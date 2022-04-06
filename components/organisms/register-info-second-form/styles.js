import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  .register-info-second-form {
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
      form {
        .form-control {
          width: 100%;
        }

        .valid {
          border-color: #28a745;
          padding-right: calc(1.5em + 0.75rem);
          background-image: url(
            data:image/svg + xml,
            %3csvgxmlns="http://www.w3.org/2000/svg"width="8"height="8"viewBox="0 0 8 8"%3e%3cpathfill="%2328a745"d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/%3e%3c/svg%3e
          );
          background-repeat: no-repeat;
          background-position: right calc(0.375em + 0.1875rem) center;
          background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
        }

        .error {
          width: 100%;
          margin-top: 0.25rem;
          font-size: 80%;
          color: #dc3545;
        }
      }

      .button-container {
        margin-top: 1.5rem;
        margin-bottom: 1.25rem;
      }
    }
  }
`;
