import styled from "styled-components";

export const Styles = styled.div`
  height: 100%;
  width: 100%;
 
  .saved-for-later-item {
    height: 100%;
    position: relative;
    transition: box-shadow 0.25s ease;
    min-width: 10rem;

    &:hover {
      box-shadow: 0 0 1rem rgb(0, 0, 0, 0.2);
    }

    .saved-for-later-item__image {
      background-color: #f0e9ed;
      height: 75%;
    }

    .saved-for-later-item__info {
      text-align: center;
      text-transform: uppercase;
      color: var(--gray-dark);

      position: absolute;
      bottom: 0;
      width: 100%;
      background: white;

      overflow: hidden;

      .saved-for-later-item__name {
        margin-top: 1rem;
        font-size: 0.875rem;
        margin-bottom: 0.1rem;
      }

      .saved-for-later-item__price {
        font-weight: bold;
        display: flex;
        align-items: flex-start;
        justify-content: center;
      }

      @media (max-width: 1680px) {
        .saved-for-later-item__name {
          font-size: 0.773rem;
        }

        .saved-for-later-item__price {
          font-size: 0.884rem;
        }
      }

      @media (max-width: 1600px) {
        .saved-for-later-item__name {
          font-size: 0.736rem;
        }

        .saved-for-later-item__price {
          font-size: 0.84rem;
        }
      }

      @media (max-width: 1536px) {
        .saved-for-later-item__name {
          font-size: 0.707rem;
        }

        .saved-for-later-item__price {
          font-size: 0.8rem;
        }
      }

      .actions {
        max-height: 0;
        overflow: hidden;
        transition: 0.25s ease;
      }

      .icons-container {
        display: flex;
        justify-content: center;
        margin-top: 0.75rem;
        margin-bottom: 1.05rem;

        .heart {
          padding: 0.5rem;
          background-color: white;
          border-radius: 100%;
          margin-right: 0.6rem;
          cursor: pointer;
          width: 2.5rem;
          height: 2.5rem;
          background-color: var(--gray-8);
        }

        .bookmark {
          padding: 0.5rem;
          background-color: white;
          border-radius: 100%;
          cursor: pointer;
          width: 2.5rem;
          height: 2.5rem;
          background-color: var(--gray-8);
        }
      }
    }

    &:hover .actions {
      max-height: 7.5rem;
    }
  }
`;
