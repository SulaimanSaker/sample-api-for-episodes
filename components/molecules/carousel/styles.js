import styled, { css } from "styled-components";

export const Styles = styled.div`
  --pagination-height: 25px;
  position: relative;
  height: 100%;

  margin-bottom: ${({ pagination, heroPagination }) =>
    pagination && !heroPagination && "var(--pagination-height)"};
  .arc-lines-container {
    /* transform: translateY(-4rem); */
    display: flex;
    justify-content: center;
  }
  .carousel {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    height: ${({ height }) => height};
    min-height: ${({ minHeight }) => minHeight};
    padding-bottom: ${({ padding }) => padding?.bottom};
    padding-top: ${({ padding }) => padding?.top};
  }

  .carousel__wrapper {
    position: relative;
    height: 100%;
  }

  .container {
    ${({ shadowIncluded }) =>
      shadowIncluded &&
      css`
        max-width: calc(var(--container-max-width) + 1.5rem);
      `}
  }

  .carousel__item {
    width: ${({ itemWidth }) => itemWidth || "100%"};
  }

  /* Swiper override */
  .swiper-container {
    position: static;
    height: 100%;
    padding: ${({ shadowIncluded }) => shadowIncluded && "0.75rem"};
  }

  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    ${({ buttonsInTheMiddle }) =>
      buttonsInTheMiddle &&
      css`
        right: calc(50% - 57.5px);
        top: calc(100% + 22.5px);
      `}

    ${({ buttonsInTheMiddle }) =>
      !buttonsInTheMiddle &&
      css`
        right: -51px;
        top: ${({ buttonsHeight }) => buttonsHeight || "50%"};
      `}

    display: ${({ items }) => (items.length !== 1 ? "" : "none")};
  }

  @media (max-width: 1680px) {
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          right: calc(50% - 55px);
        `}
    }
  }

  @media (max-width: 1440px) {
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          right: calc(50% - 50px);
        `}
    }
  }

  @media (max-width: 1366px) {
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          right: calc(50% - 45px);
        `}
    }
  }

  @media (max-width: 700px) {
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          right: calc(50% - 40px);
        `}
    }
  }

  @media (max-width: 500px) {
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          top: calc(100% + 17.5px);
          right: calc(50% - 35px);
        `}
    }
  }

  @media (max-width: 320px) {
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          top: calc(100% + 15px);
          right: calc(50% - 30px);
        `}
    }
  }

  .swiper-button-next:after,
  .swiper-container-rtl .swiper-button-prev:after {
    content: url("/images/carousel-rounded-arrow-right.svg");

    width: 5rem;
    height: 5rem;
  }

  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    ${({ buttonsInTheMiddle }) =>
      buttonsInTheMiddle &&
      css`
        left: calc(50% - 57.5px);
        top: calc(100% + 22.5px);
      `}

    ${({ buttonsInTheMiddle }) =>
      !buttonsInTheMiddle &&
      css`
        left: -51px;
        top: ${({ buttonsHeight }) => buttonsHeight || "50%"};
      `}

    
    display: ${({ items }) => (items.length !== 1 ? "" : "none")};
  }

  @media (max-width: 1680px) {
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          left: calc(50% - 55px);
        `}
    }
  }

  @media (max-width: 1440px) {
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          left: calc(50% - 50px);
        `}
    }
  }

  @media (max-width: 1366px) {
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          left: calc(50% - 45px);
        `}
    }
  }

  @media (max-width: 700px) {
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          left: calc(50% - 40px);
        `}
    }
  }

  @media (max-width: 500px) {
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          top: calc(100% + 17.5px);
          left: calc(50% - 35px);
        `}
    }
  }

  @media (max-width: 320px) {
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      ${({ buttonsInTheMiddle }) =>
        buttonsInTheMiddle &&
        css`
          top: calc(100% + 15px);
          left: calc(50% - 30px);
        `}
    }
  }

  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after {
    content: url("/images/carousel-rounded-arrow-left.svg");

    width: 5rem;
    height: 5rem;
  }

  .swiper-button-next:after,
  .swiper-container-rtl .swiper-button-prev:after,
  .swiper-button-prev:after,
  .swiper-container-rtl .swiper-button-next:after {
    transform: scale(2.5);
  }

  @media (max-width: 1680px) {
    .swiper-button-next:after,
    .swiper-container-rtl .swiper-button-prev:after,
    .swiper-button-prev:after,
    .swiper-container-rtl .swiper-button-next:after {
      transform: scale(2.25);
    }
  }

  @media (max-width: 1440px) {
    .swiper-button-next:after,
    .swiper-container-rtl .swiper-button-prev:after,
    .swiper-button-prev:after,
    .swiper-container-rtl .swiper-button-next:after {
      transform: scale(2);
    }
  }

  @media (max-width: 1366px) {
    .swiper-button-next:after,
    .swiper-container-rtl .swiper-button-prev:after,
    .swiper-button-prev:after,
    .swiper-container-rtl .swiper-button-next:after {
      transform: scale(1.75);
    }
  }

  @media (max-width: 700px) {
    .swiper-button-next:after,
    .swiper-container-rtl .swiper-button-prev:after,
    .swiper-button-prev:after,
    .swiper-container-rtl .swiper-button-next:after {
      transform: scale(1.5);
    }
  }

  @media (max-width: 500px) {
    .swiper-button-next:after,
    .swiper-container-rtl .swiper-button-prev:after,
    .swiper-button-prev:after,
    .swiper-container-rtl .swiper-button-next:after {
      transform: scale(1.25);
    }
  }

  @media (max-width: 320px) {
    .swiper-button-next:after,
    .swiper-container-rtl .swiper-button-prev:after,
    .swiper-button-prev:after,
    .swiper-container-rtl .swiper-button-next:after {
      transform: scale(1);
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    height: 1.8rem;
    width: 1.8rem;
    margin-right: 1.35rem;
    border: 1px solid white;
    background: black;
    opacity: 0.8;
  }

  @media (max-width: 1600px) {
    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 1.25rem;
    }
  }

  @media (max-width: 1366px) {
    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
      height: 1rem;
      width: 1rem;
      margin-right: 0.5rem;
    }
  }

  ${({ pagination, heroPagination }) =>
    pagination &&
    !heroPagination &&
    css`
      .swiper-pagination {
        bottom: calc(0px - var(--pagination-height));
      }
    `}

  ${({ heroPagination }) =>
    heroPagination &&
    css`
      .swiper-pagination {
        text-align: initial !important;
        bottom: 3.5% !important;
        left: var(--full-width-distance) !important;
        width: 50% !important;
      }

      .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
        background: rgba(0, 0, 0, 0);
      }
    `}

    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet-active {
    background: #bf4c92;
    border: none;
    opacity: 1;
  }

  .swiper-button-next.swiper-button-disabled:after,
  .swiper-container-rtl .swiper-button-prev.swiper-button-disabled:after {
    content: url("/images/carousel-rounded-arrow-right-disabled.svg");
  }

  .swiper-button-prev.swiper-button-disabled:after,
  .swiper-container-rtl .swiper-button-next.swiper-button-disabled:after {
    content: url("/images/carousel-rounded-arrow-left-disabled.svg");
  }

  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    opacity: 1;
  }
`;
