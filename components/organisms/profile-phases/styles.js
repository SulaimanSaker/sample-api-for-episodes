import styled from "styled-components";

export const Styles = styled.div`
  .register-plan-pregnancy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 13rem 13rem;
      justify-content: center;
      justify-items: stretch;
      align-content: center;
      align-items: stretch;
      width: 70%;
      margin-bottom: 1.5rem;

      position: relative;
      @media (max-width: 1600px) {
        grid-template-rows: 12rem 12rem;
      }

      @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
      }

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
        width: 100%;
        height: 100%;

        border: none;
        background: transparent;

        .text {
          color: var(--gray-12);
          line-height: 1.1;

          text-align: left;
        }

        .option-image {
          img {
            width: 5rem;
            height: 5rem;
            object-fit: contain;

            @media (max-width: 767px) {
              width: 4rem;
              height: 4rem;
            }
          }
        }
      }

      .first-row-item {
      }

      .second-row-item {
        justify-content: flex-end;
      }

      .first-item {
        border-bottom: 1px solid #ebebeb;
        border-right: 1px solid #ebebeb;

        @media (max-width: 576px) {
          border-right: none;
        }
      }

      .second-item {
        border-bottom: 1px solid #ebebeb;
      }

      .third-item {
        border-right: 1px solid #ebebeb;

        @media (max-width: 576px) {
          border-right: none;
          border-bottom: 1px solid #ebebeb;
        }
      }

      .fourth-item {
      }
    }

    .button-container {
      width: 400px;

      margin-bottom: 1.25rem;
    }
  }

  .check-icon {
    margin-bottom: 1rem;

    width: 60px;
    height: 60px;

    @media (max-width: 767px) {
      transform: scale(0.7);
    }

    @media (max-width: 576px) {
      transform: scale(0.6);
    }

    background: ${({ checked }) =>
      checked
        ? `url("/images/register/check.png") 0px -0px`
        : `url("/images/register/check.png") -60px -0px;`};

    display: inline-block;
  }
`;
