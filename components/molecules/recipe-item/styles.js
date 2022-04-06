import styled from "styled-components";

export const Styles = styled.div`
  height: 100%;
  width: 100%;

  .recipe__item {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.25s ease;
    &:hover {
      box-shadow: 0 0 1rem rgb(0, 0, 0, 0.2);
    }

    .recipe__image {
      height: 100%;
    }

    .recipe__avatar {
      margin-right: 1rem;

      img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        object-fit: cover;

        @media (max-width: 1680px) {
          width: 3.5rem;
          height: 3.5rem;
        }

        @media (max-width: 1600px) {
          width: 3rem;
          height: 3rem;
        }

        @media (max-width: 1536px) {
          width: 2.5rem;
          height: 2.5rem;
        }

        @media (max-width: 1440px) {
          width: 2.2rem;
          height: 2.2rem;
        }

        @media (max-width: 1366px) {
          width: 2rem;
          height: 2rem;
        }

        @media (max-width: 1000px) {
          width: 1.7rem;
          height: 1.7rem;
        }
      }
    }

    .recipe_details {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .recipe__info {
      color: var(--gray-dark);

      position: absolute;
      bottom: 0;
      width: 100%;
      background: white;
      padding: 1rem;
      padding-bottom: 0;

      overflow: hidden;
      transition: text-align 0.25s ease;
      .recipe__title {
        font-weight: bold;
        margin-bottom: 0.25rem;
        color: var(--gray-10);
        text-transform: uppercase;
        display: block;
        padding: 0;
      }

      .rating {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .recipe__By {
        margin-top: 0.3rem;
        color: var(--gray-12);
        text-transform: uppercase;
        span {
          color: var(--primary);
          transition: max-height 0.25s ease;
          text-decoration: underline;
        }
      }

      .recipe__date {
        margin-top: 0.1rem;
        color: var(--gray-8);
        text-transform: uppercase;
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

    &:hover .recipe__summary {
      max-height: 0;
      overflow: hidden;
    }

    &:hover .recipe__actions {
      max-height: 7.5rem;
    }

    &:hover .recipe__des {
      max-height: 2.75rem;
    }
  }

  .numberOfRating {
    margin-left: 0.5rem;
    font-weight: bold;
    color: var(--gray-10);

    @media (max-width: 1680px) {
      margin-left: 1.2rem;
    }

    @media (max-width: 1536px) {
      margin-left: 0.8rem;
    }

    @media (max-width: 1440px) {
      margin-left: 0.75rem;
    }

    @media (max-width: 1366px) {
      margin-left: 0.6rem;
    }

    @media (max-width: 1000px) {
      margin-left: 0.5rem;
    }
  }
`;
