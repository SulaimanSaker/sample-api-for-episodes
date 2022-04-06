import styled from "styled-components";

export const Styles = styled.div`
  height: 100%;
  width: 100%;

  .shop-item {
    width: 100%;
    height: 100%;
    position: relative;
    transition: box-shadow 0.25s ease;

    &:hover {
      box-shadow: 0 0 1rem rgb(0, 0, 0, 0.2);
    }

    .shop-item__image {
      background-color: #f0e9ed;
      height: 100%;
      width: 100%;
    }

    .shop-item__overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: background-color 0.2s ease;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .shop-items__info {
      position: absolute;
      bottom: 2rem;
      left: 3rem;
      color: white;

      @media (max-width: 600px) {
        bottom: 3rem;
      }

      @media (max-width: 400px) {
        bottom: 1rem;
      }

      .property2 {
        font-weight: bold;
        margin-bottom: 1rem;
      }
    }
  }
`;
