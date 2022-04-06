import styled from "styled-components";

export const Styles = styled.div`
  height: 100%;
  width: 100%;

  .item-image-item {
    display: flex;
    justify-content: flex-end;

    height: 100%;
    width: 100%;

    .image-container {
      position: relative;

      background-color: #f0e9ed;
      height: 100%;
      width: calc(100% - 11px);
    }

    .new {
      position: absolute;
      top: 20px;
      background: var(--primary);
      padding: 0.5rem 1.25rem;
      font-size: 1.125rem;
      color: white;
      border-radius: 5px;
      transform: translateX(-20px);
      left: 21px;
    }

    @media (max-width: 1680px) {
      .new {
        font-size: 1.1rem;
        padding: 0.5rem 1.2rem;
      }
    }

    @media (max-width: 1600px) {
      .new {
        font-size: 1.05rem;
        padding: 0.5rem 1.15rem;
      }
    }

    @media (max-width: 1536px) {
      .new {
        font-size: 1rem;
        padding: 0.45rem 1.1rem;
      }
    }

    @media (max-width: 1440px) {
      .new {
        font-size: 0.95rem;
        padding: 0.45rem 1.05rem;
      }
    }

    @media (max-width: 1366px) {
      .new {
        font-size: 0.9rem;
        padding: 0.4rem 1rem;
      }
    }

    .heart-container {
      position: absolute;
      top: 25px;
      right: 30px;

      .heart {
        height: 2.5em;
        width: 2.5em;
      }

      @media (max-width: 1680px) {
        .heart {
          height: 2.25em;
          width: 2.25em;
        }
      }

      @media (max-width: 1600px) {
        .heart {
          height: 2.1em;
          width: 2.1em;
        }
      }

      @media (max-width: 1536px) {
        .heart {
          height: 2em;
          width: 2em;
        }
      }

      @media (max-width: 1440px) {
        .heart {
          height: 1.8em;
          width: 1.8em;
        }
      }

      @media (max-width: 1366px) {
        .heart {
          height: 1.7em;
          width: 1.7em;
        }
      }
    }
  }
`;
