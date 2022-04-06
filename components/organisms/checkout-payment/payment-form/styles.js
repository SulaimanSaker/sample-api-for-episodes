import styled from "styled-components";

export const Styles = styled.div`
  .address-form {
    .address-form__header {
      color: var(--gray-15);
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 1.4rem;
    }

    .fields-container {
      border-bottom: 1px solid var(--gray-4);
      margin-bottom: 1.5rem;
    }

    .submit-button-container {
      display: flex;
      justify-content: flex-end;
    }
  }

  .form-group {
    .cvv {
      background-color: #ebebeb;
    }
  }

  .form-footer {
    text-align: center;
    color: var(--gray-15);
  }

  .custom-select {
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='nonzero' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")
      right 1.1rem center/0.75rem 0.85rem no-repeat;
  }

  .form__input {
    margin-bottom: 2rem;

    label {
      font-weight: 600;
      color: #6d6d6d;
    }
  }
`;
