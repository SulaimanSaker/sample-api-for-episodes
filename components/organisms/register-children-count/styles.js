import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;

  .register-child-count {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 11rem 11rem;
      justify-content: center;
      justify-items: stretch;
      align-content: center;
      align-items: stretch;
      width: 70%;
      gap: 2rem;

      margin-top: 0.75rem;
      margin-bottom: 1.5rem;

      position: relative;

      @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
      }

      .item {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          width: 250px;

          height: 100%;

          border: none;
          background: transparent;

          padding: 1.75rem;

          box-shadow: 1px 1px 10px rgb(0, 0, 0, 0.1);

          img {
            height: 100%;

            padding: 1rem;
          }

          .text {
            color: var(--gray-12);
          }
        }

        button.selected {
          background-color: var(--gray-1);
        }
      }

      .child-3 {
        grid-column: 1/3;
        grid-row: 2/3;
      }
    }

    .button-container {
      width: 400px;

      margin-bottom: 1.25rem;
    }
  }
`;
