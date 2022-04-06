import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  height: 100%;

  .vertical-slider {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .action-buttons {
    @media (max-width: 500px) {
      position: absolute;
      top: -40%;
      right: 0;
    }

    @media (max-width: 400px) {
      position: absolute;
      top: -45%;
      right: 0;
    }
  }
  .items-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .items-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-in-out;
  }

  .button-next {
    align-items: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
    cursor: pointer;
    display: flex;
    height: var(--swiper-navigation-size);
    justify-content: center;
    margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
    position: absolute;
    left: calc(100% - 14px);
    top: 90px;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
  }

  .button-next::after {
    content: url("/images/carousel-rounded-arrow-up.svg");
    width: 5rem;
    height: 5rem;
    transform: scale(1.75);

    @media (max-width: 700px) {
      width: 1.8rem;
      height: 1.8rem;
      transform: scale(1.1);
    }

    @media (max-width: 400px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .button-prev {
    position: absolute;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(-1 * var(--swiper-navigation-size) / 2);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
    top: 148px;
    left: calc(100% - 14px);

    @media (max-width: 700px) {
      top: 130px;
    }

    @media (max-width: 400px) {
      top: 120px;
    }
  }

  .button-prev::after {
    content: url("/images/carousel-rounded-arrow-down.svg");
    width: 5rem;
    height: 5rem;
    transform: scale(1.75);

    @media (max-width: 700px) {
      width: 1.8rem;
      height: 1.8rem;
      transform: scale(1.1);
    }

    @media (max-width: 400px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .button-next.disabled {
    cursor: initial;
  }

  .button-next.disabled:after {
    content: url("/images/carousel-rounded-arrow-up-disabled.svg");
  }

  .button-prev.disabled {
    cursor: initial;
  }

  .button-prev.disabled:after {
    content: url("/images/carousel-rounded-arrow-down-disabled.svg");
  }
`;
