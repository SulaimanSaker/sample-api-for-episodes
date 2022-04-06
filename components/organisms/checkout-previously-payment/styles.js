import styled from "styled-components";

export const Styles = styled.div`
  .checkout-payment__header {
    color: var(--gray-15);
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .checkout-payment__methods {
    .checkout-payment-method {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      padding: 1.25rem 1.5rem;
      border: 1px solid var(--gray-4);

      .left {
        display: flex;
        @media (max-width: 600px) {
          flex-direction: column;
          div {
            margin-bottom: 1rem;
          }
        }
      }

      .right {
        .delete-icon {
          cursor: pointer;
          width: 1rem;
          @media (max-width: 1400px) {
            width: 0.95rem;
          }
          @media (max-width: 1200px) {
            width: 0.9rem;
          }
          @media (max-width: 1000px) {
            width: 0.85rem;
          }
          @media (max-width: 700px) {
            width: 0.8rem;
          }
        }
      }
    }

    .button-container {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
