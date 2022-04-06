import styled from "styled-components";

export const Styles = styled.div`
  .cart-item {
    .card-item-content {
      display: flex;
      justify-content: space-between;

      @media (max-width: 450px) {
        flex-direction: column;
      }
    }
    .cart-item__image {
      background-color: #f0e9ed;

      @media (max-width: 450px) {
        width: 74px;
      }
      img {
        width: 75px;
      }
    }

    .cart-item__info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      @media (max-width: 450px) {
        align-items: flex-start;
        margin-top: 0.5rem;
      }
      .logo {
        width: 100px;
        @media (max-width: 900px) {
          width: 80px;
        }
        @media (max-width: 600px) {
          width: 70px;
        }
      }

      .name {
        color: var(--gray-15);
      }

      .price {
        color: var(--gray-11);
      }
    }
  }
`;
