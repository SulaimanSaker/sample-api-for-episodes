import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;

  .advertisements {
    display: flex;
    justify-content: center;
  }

  .advertisements__carousel {
    width: 100%;

    .image {
      width: 100%;
    }

    @media (max-width: 375px) {
      .image {
        height: 135px;
      }
    }

    @media (max-width: 320px) {
      .image {
        height: 112.5px;
      }
    }
  }

  .carousel__item {
    background-color: white;
  }

  .swiper-container {
    margin: 0.5rem;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  }
`;
