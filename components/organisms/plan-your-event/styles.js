import styled, { keyframes } from "styled-components";

const shift = keyframes`
    0% {
      transform: translate(-50%, -50%) rotate(0);
    }
    25% {
    transform: translate(-50%, -50%) rotate(7.5deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(0);
    }
    75% {
      transform: translate(-50%, -50%) rotate(-7.5deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0);
    }
`;

export const Styles = styled.div`
  .plan-your-event {
    .plan-your-event__header {
      position: relative;
      width: 81.5%;
    }

    @media (max-width: 1600px) {
      .plan-your-event__header {
        width: 81%;
      }
    }

    @media (max-width: 1366px) {
      .plan-your-event__header {
        width: 80%;
      }
    }

    .images-container {
      margin-top: 2.5rem;
      position: relative;
    }

    .plan-your-event__tabs {
      width: 75%;
      padding-left: 30px;
    }

    .images__carousel {
      height: 100%;
      z-index: 4;
      height: 412px;
      width: 100%;

      .carousel__item {
        display: flex;
        justify-content: center;
      }

      .image {
        height: 100%;
        clip-path: url(#clip1);
        z-index: 3;
        width: 600px;
      }
    }

    .shadow1 {
      position: absolute;
      top: calc(50% + 44px);
      left: calc(50% + 40px);
      transform: translate(-50%, -50%);
      height: 100%;
      width: 580px;
      z-index: 0;
    }

    .shadow1:hover {
      animation: ${shift} 2s linear infinite;
    }

    .shadow2 {
      position: absolute;
      top: calc(50% + 20px);
      left: calc(50% + 10px);
      transform: translate(-50%, -50%);
      height: 500px;
      width: 600px;
      z-index: 0;
    }

    .shadow2:hover {
      animation: ${shift} 2s linear infinite;
    }

    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
      top: calc(50% + 88px);
      left: calc(50% + 326px);
      transform: translate(-50%, -50%);
    }

    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
      top: calc(50% + 88px);
      left: calc(50% + -275px);
      transform: translate(-50%, -50%);
    }
  }
`;
