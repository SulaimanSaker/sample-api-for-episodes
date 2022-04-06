import styled from "styled-components";

export const Styles = styled.div`
  --first-column-width: 30%;
  --padding-top: 11rem;

  .auth-template__header {
    top: 0;
    width: 100%;
    z-index: 999;
    position: fixed;
  }

  .auth-template__content {
    padding-top: var(--padding-top);
    position: relative;
    overflow: hidden;
  }

  .lock-icon {
    position: fixed;

    top: 45%;
    left: calc(var(--first-column-width) - 60px);
    z-index: 1;

    img {
      width: 90%;
    }
  }

  .first-column {
    height: 100vh;
    position: fixed;
    top: 0;
    overflow: hidden;
    width: var(--first-column-width);
    background-color: #d5b4c8;

    @media (max-width: 900px) {
      display: ${({ sidebar }) => (sidebar ? "block" : "none")};
      position: ${({ sidebar }) => (sidebar ? "fixed" : "none")};
      top: ${({ sidebar }) => (sidebar ? "0" : "none")};
      width: 100%;
      height: auto;
    }
    .background {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: var(--first-column-width);
      background-color: #d5b4c8;
      z-index: -1;
    }

    .text {
      position: relative;
      top: var(--padding-top);

      color: #ae5b8d;
      margin-left: var(--full-width-distance);

      @media (max-width: 1200px) {
        margin-left: 1rem;
      }
      @media (max-width: 900px) {
        display: none;
      }
    }

    .image {
      position: absolute;
      bottom: 0;
      left: calc(var(--full-width-distance) - 42px);

      img {
        width: 90%;
      }
    }

    .menubar {
      margin-top: 14rem;
    }
  }

  .second-column {
    display: flex;
    width: calc(100% - var(--first-column-width));
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: var(--first-column-width);
    margin-bottom: 2rem;

    header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 4rem;

      .title {
        font-weight: bold;
        color: var(--primary);
        font-style: italic;

        margin-bottom: 0.75rem;
      }

      .advice {
        width: 900px;

        color: var(--gray-12);
      }
    }

    @media (max-width: 1600px) {
      header {
        margin-bottom: 2.75rem;

        .title {
          margin-bottom: 0.5rem;
        }
      }
    }

    .arc-lines-container {
      transform: translateY(-22px);
    }
  }

  @media (max-width: 1680px) {
    .auth-template__content {
      --padding-top: 10rem;
    }

    .lock-icon {
      left: calc(var(--first-column-width) - 55px);

      @media (max-width: 900px) {
        display: ${({ sidebar }) => (sidebar ? "block" : "none")};
      }

      img {
        width: 85%;
      }
    }

    .first-column {
      .image {
        img {
          width: 80%;
        }
      }
    }
  }

  @media (max-width: 1600px) {
    .auth-template__content {
      --padding-top: 9.4rem;
    }

    .first-column {
      .image {
        img {
          width: 76%;
        }
      }
    }
  }

  @media (max-width: 1536px) {
    .auth-template__content {
      --padding-top: 9rem;
    }

    .first-column {
      .image {
        img {
          width: 75%;
        }
      }
    }
  }

  @media (max-width: 1440px) {
    .auth-template__content {
      --padding-top: 8.4rem;
    }

    .first-column {
      .image {
        img {
          width: 75%;
        }
      }
    }
  }

  @media (max-width: 1366px) {
    --first-column-width: 26%;

    .auth-template__content {
      --padding-top: 7.9rem;
    }

    .lock-icon {
      left: calc(var(--first-column-width) - 42.5px);

      img {
        width: 60%;
      }
    }

    .first-column {
      .image {
        left: calc(var(--full-width-distance) - 32.5px);

        img {
          width: 77%;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    --first-column-width: 20%;
  }

  @media (max-width: 960px) {
    .auth-template__content {
      --padding-top: 7rem;
    }
  }

  @media (max-width: 900px) {
    --first-column-width: 0%;

    .lock-icon {
      display: none;
    }
    .first-column {
      z-index: 100;
    }
    .first-column .menubar {
      margin-top: 8rem;
    }

    .second-column {
      width: 100%;
      padding: ${({ sidebar }) => (sidebar ? "10rem 1rem 5rem 1rem" : "1rem")};
      margin: 0;
    }

    .arc-lines-container {
      width: 100%;
    }

    .second-column header .advice {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    .second-column {
      padding: ${({ sidebar }) => (sidebar ? "5rem 1rem 5rem 1rem" : "1rem")};
    }
    .first-column .menubar {
      margin-top: 5rem;
    }
  }
`;
