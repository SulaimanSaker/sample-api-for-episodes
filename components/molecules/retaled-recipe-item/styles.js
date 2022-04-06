import styled from "styled-components";

export const Styles = styled.div`
  height: 100%;
  width: 100%;

  .recipe__item {
    height: 100%;
    width: 100%;
    position: relative;
    transition: box-shadow 0.25s ease;

    &:hover {
      box-shadow: 0 0 1rem rgb(0, 0, 0, 0.2);
    }

    .recipe__image {
      height: 100%;
    }

    .recipe__info {
      color: var(--gray-dark);
      position: absolute;
      bottom: 5rem;
      width: 100%;
      background: white;
      padding: 1rem;
      padding-bottom: 0;
      text-align: center;
      overflow: hidden;
      transition: text-align 0.25s ease;

      .recipe__title {
        font-weight: bold;
        margin-bottom: 0.25rem;
        color: var(--gray-10);
        text-transform: uppercase;
      }

      .recipe__by {
        color: var(--gray-8);
        text-transform: uppercase;
        transition: max-height 0.25s ease;
        font-weight: 600;
        span {
          color: var(--primary);
          text-decoration: underline;
        }
      }

      .recipe__actions {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.25s ease;
      }

      .icons-container {
        display: flex;
        justify-content: center;
        margin-top: 0.65rem;
        margin-bottom: 1.05rem;
        text-align: center;

        button {
          border: none;
        }

        .heart {
          padding: 0.5rem;
          background-color: white;
          border-radius: 100%;
          margin-right: 0.6rem;
          cursor: pointer;
          width: 2.5rem;
          height: 2.5rem;
          background-color: var(--gray-11);
        }

        .bookmark {
          padding: 0.5rem;
          background-color: white;
          border-radius: 100%;
          cursor: pointer;
          width: 2.5rem;
          height: 2.5rem;
          background-color: var(--gray-11);
        }
      }

      .button-container {
        text-align: center;
        margin-bottom: 1rem;
      }
    }

    &:hover .recipe__info {
      text-align: center;
    }
    &:hover .recipe__title {
      color: var(--gray-12);
    }

    &:hover .recipe__actions {
      max-height: 7.5rem;
    }
  }

  .new {
    position: absolute;
    top: 9px;
    background: var(--primary);
    padding: 0.5rem 1.25rem;
    font-size: 1.125rem;
    color: white;
    border-radius: 5px;
    right: -15px;
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
`;
