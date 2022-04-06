import styled from "styled-components";

export const Styles = styled.div`
  .title {
    font-size: 1.125rem;
    text-transform: uppercase;
    font-weight: bold;

    margin-bottom: 2.75rem;
  }

  .shopping__btn {
    width: 100%;
    margin: 0 auto;
    @media (max-width: 1200px) {
      width: 30%;
    }
    @media (max-width: 700px) {
      width: 50%;
    }
    @media (max-width: 450px) {
      width: 100%;
    }
  }

  .shopping-cart-summary__summary-items {
    margin-bottom: 2.75rem;

    & > .shopping-cart-summary__summary-item:not(:last-of-type) {
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--gray-4);
      margin-bottom: 1.5rem;
    }
  }

  .shopping-cart-summary__promo-code {
    margin-bottom: 1.75rem;
  }

  .shopping-cart-summary__info {
    padding-bottom: 1.25rem;
    border-bottom: 1px solid var(--gray-4);
    margin-bottom: 1.75rem;
  }

  .label-value {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;

    .label {
      font-size: 0.925rem;
      font-weight: bold;
      color: var(--gray-15);
      text-transform: uppercase;
    }

    .value {
      font-size: 1.125rem;
      color: var(--gray-11);
    }
  }

  .free {
    .value {
      color: var(--primary);
    }
  }

  .total {
    .value {
      font-weight: bold;
    }
  }

  .label-value.total {
    line-height: 1;
    margin-bottom: 0;
  }

  .shopping-cart-summary__total {
    margin-bottom: 2rem;

    .included {
      font-size: 0.7875rem;
    }
  }
`;
