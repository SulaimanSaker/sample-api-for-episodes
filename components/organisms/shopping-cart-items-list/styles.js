import styled from "styled-components";

export const Styles = styled.div`
  .header {
    display: flex;

    font-size: 0.875rem;
    color: var(--gray-15);
    text-transform: uppercase;
    font-weight: bold;

    padding-bottom: 1rem;
    border-bottom: 1px solid var(--gray-4);
    margin-bottom: 1.5rem;

    @media (max-width: 900px) {
      display: none;
    }

    .product {
      flex-basis: 46.5%;
    }

    .price {
      flex-basis: 28.5%;
    }

    .quantity {
      flex-basis: 25%;
    }
  }
`;
