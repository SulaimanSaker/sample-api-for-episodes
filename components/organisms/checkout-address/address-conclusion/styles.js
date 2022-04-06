import styled from "styled-components";

export const Styles = styled.div`
  .address-conclustion {
    .address-conclustion__header {
      font-size: 1.125rem;
      color: var(--gray-15);
      text-transform: uppercase;
      font-weight: bold;

      margin-bottom: 1rem;
    }

    .address-conclustion__values {
      position: relative;

      padding: 1rem;
      padding-bottom: 2rem;
      border: 1px solid var(--gray-4);

      font-size: 1.125rem;
      color: var(--gray-15);
    }

    .buttons-container {
      position: absolute;
      top: 1rem;
      right: 1rem;

      display: flex;

      .delete-button-container {
        margin-right: 0.5rem;
        cursor: pointer;
      }

      .edit-button-container {
        cursor: pointer;
      }
    }
  }
`;
