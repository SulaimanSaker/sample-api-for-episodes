import styled from "styled-components";

export const Styles = styled.div`
  /* .accordion {
    margin: 0.2rem 0;

    .card {
      border: none;
      margin-bottom: 0.5rem;
      border-radius: 0.5rem;

      .card-header {
        background: none;
        border-radius: none;
        border: none;
        padding: 0rem;

        button {
          width: 100%;
          border: none;
          padding: 1rem 2rem;
          text-align: right;
          background: none;
          background-color: var(--gray-1);
          font-size: 1.5rem;
          color: var(--gray-7);
          .title {
            display: flex;
            flex: 1;
            color: var(--gray--10);
            outline: none;
            font-weight: 600;

            padding: 0.5rem 1rem;
          }

          .title span {
            position: relative;
            overflow-wrap: break-word;
          }
        }
      }

      .card-body {
        background-color: var(--gray-1);
      }
      .header__container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .step {
          width: 20%;
          display: flex;
          align-items: center;
          background-color: var(--gray-1);
          padding: 1rem 0rem 1rem 2rem;
          @media (max-width: 1100px) {
            width: 50%;
          }
          @media (max-width: 600px) {
            width: 100%;
          }
          &__title {
            margin-left: 2rem;
            color: var(--gray-12);
            font-weight: 700;
            margin-top: 0.4rem;
          }
        }
      }
    }
  } */

  .accordion-item {
    background-color: var(--gray-1);
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }
  .accordion-item .accordion__header {
    width: 100%;
    button:first-child {
      border: none;
      outline: none;
      width: 100%;
      background: transparent;
      color: var(--gray-12);
      font-weight: 700;
      padding: 0;

      &:focus {
        box-shadow: none;
      }
      button {
        padding: 0;
      }
    }
    .header__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .accordion-body {
    padding: 0rem 4.5rem 4rem 4.5rem;

    @media (max-width: 576px) {
      padding: 0rem 2rem 2rem 2rem;
    }
  }
  .step {
    width: 20%;
    display: flex;
    align-items: center;
    padding: 1rem 0rem 1rem 1rem;

    @media (max-width: 576px) {
      width: 50%;
    }
    .step__title {
      margin-left: 2rem;
      color: var(--gray-12);
      font-weight: 700;
      margin-top: 0.4rem;
    }
  }
`;
