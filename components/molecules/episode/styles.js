import styled from "styled-components";

export const Styles = styled.div`
  height: 100%;
  width: 100%;

  .episode__item {
    height: 100%;
    width: 100%;
    position: relative;
    transition: box-shadow 0.25s ease;

    &:hover {
      box-shadow: 0 0 1rem rgb(0, 0, 0, 0.2);
    }

    .episode__image {
      height: 100%;
    }

    .episode__info {
      color: var(--gray-dark);

      position: absolute;
      bottom: 0;
      width: 100%;
      background: white;
      padding: 1rem;
      padding-bottom: 0;

      overflow: hidden;
      transition: text-align 0.25s ease;

      .episode__title {
        font-weight: bold;
        margin-bottom: 0.25rem;
        font-size: 0.875rem;
        color: var(--gray-10);
        text-transform: uppercase;
      }

      .episode__summary {
        font-size: 0.7rem;
        color: var(--gray-15);
        text-transform: uppercase;
        transition: max-height 0.25s ease;
      }

      .episode__des {
        max-height: 0;
        overflow: hidden;
      }

      .episode__actions {
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

    &:hover .episode__info {
      text-align: center;
    }

    &:hover .episode__summary {
      max-height: 0;
      overflow: hidden;
    }

    &:hover .episode__actions {
      max-height: 7.5rem;
    }

    &:hover .episode__des {
      max-height: 2.75rem;
    }
  }
`;