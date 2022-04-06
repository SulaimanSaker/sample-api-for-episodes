import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  .register-plan-pregnancy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 10rem 10rem;
      justify-content: center;
      justify-items: stretch;
      align-content: center;
      align-items: stretch;
      width: 70%;
      margin-bottom: 1.5rem;

      position: relative;
      @media (max-width: 1600px) {
        grid-template-rows: 9rem 9rem;
      }

      @media (max-width: 550px) {
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
            width: 3.5rem;
            height: 3.5rem;
            object-fit: contain;

            @media (max-width: 750px) {
              width: 2.5rem;
              height: 2.5rem;
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

        @media (max-width: 550px) {
          border-right: none;
        }
      }

      .second-item {
        border-bottom: 1px solid #ebebeb;
      }

      .third-item {
        border-right: 1px solid #ebebeb;

        @media (max-width: 550px) {
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
`;
