import styled from "styled-components";

export const Styles = styled.div`
  .logo-container {
    border-bottom: 1px solid var(--gray-4);

    margin-top: 0.75rem;
    margin-bottom: 1.25rem;
  }

  .logo {
    width: 160px;
    padding-bottom: 1.125rem;
  }

  @media (max-width: 1680px) {
    .logo {
      width: 125px;
    }
  }

  .name-title-rating {
    text-transform: uppercase;
    color: var(--gray-15);
    font-size: 1.25rem;
    line-height: 1.25;
    margin-bottom: 1rem;

    .name {
      margin-bottom: 0.35rem;
    }

    .title-rating {
      line-height: 1;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .title {
        font-weight: bold;
        font-size: 1.375rem;
      }
    }
  }

  @media (max-width: 1680px) {
    .name-title-rating {
      font-size: 1.1rem;

      .title-rating {
        .title {
          font-size: 1.215rem;
        }
      }
    }
  }

  @media (max-width: 1600px) {
    .name-title-rating {
      font-size: 1.05rem;

      .title-rating {
        .title {
          font-size: 1.157rem;
        }
      }
    }
  }

  @media (max-width: 1536px) {
    .name-title-rating {
      font-size: 1rem;

      .title-rating {
        .title {
          font-size: 1.11rem;
        }
      }
    }
  }

  @media (max-width: 375px) {
    .name-title-rating {
      font-size: 1.1rem;

      .title-rating {
        display: block;

        .title {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  .prices {
    display: flex;
    align-items: center;
    margin-bottom: 1.15rem;
    line-height: 1;

    .old-price {
      margin-right: 1rem;
      font-size: 1.125rem;
      color: var(--gray-11);
      text-decoration: line-through;
    }

    .new-price {
      margin-right: 1rem;
      font-size: 1.25rem;
      color: var(--primary);
      font-weight: bold;
    }

    sup {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 1680px) {
    .prices {
      .old-price {
        font-size: 0.994rem;
      }

      .new-price {
        font-size: 1.1rem;
      }

      sup {
        font-size: 0.53rem;
      }
    }
  }

  @media (max-width: 1600px) {
    .prices {
      .old-price {
        font-size: 0.947rem;
      }

      .new-price {
        font-size: 1.05rem;
      }

      sup {
        font-size: 0.5rem;
      }
    }
  }

  @media (max-width: 1536px) {
    .prices {
      .old-price {
        font-size: 0.9rem;
      }

      .new-price {
        font-size: 1.01rem;
      }

      sup {
        font-size: 0.485rem;
      }
    }
  }

  .info {
    margin-bottom: 1.5rem;
  }

  .label-value {
    display: flex;
    align-items: center;

    .label {
      font-weight: bold;
      text-transform: uppercase;
      margin-right: 0.5rem;
      font-size: 1.125rem;
      color: var(--gray-15);
    }

    .value {
      color: var(--gray-8);
    }
  }

  @media (max-width: 1680px) {
    .label-value {
      .label {
        font-size: 0.9947rem;
      }

      .value {
        font-size: 0.884rem;
      }
    }
  }

  @media (max-width: 1600px) {
    .label-value {
      .label {
        font-size: 0.947rem;
      }

      .value {
        font-size: 0.842rem;
      }
    }
  }

  @media (max-width: 1536px) {
    .label-value {
      .label {
        font-size: 0.9rem;
      }

      .value {
        font-size: 0.8rem;
      }
    }
  }

  .color {
    line-height: 1;
    align-items: flex-end;

    margin-bottom: 1rem;
  }

  .color-circles-container {
    margin-bottom: 1.5rem;
  }

  .size {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 1.3rem;

    color: var(--gray-8);

    .label {
      margin-right: 2.5rem;
    }

    .available-sizes {
      span {
        margin-right: 0.75rem;
        cursor: pointer;

        &.selected {
          font-weight: bold;
          color: var(--gray-15);
        }
      }
    }
  }

  @media (max-width: 375px) {
    .size {
      display: block;

      .label-value {
        margin-bottom: 0.5rem;
      }
    }
  }

  @media (max-width: 1680px) {
    .size {
      .available-sizes {
        span {
          font-size: 0.884rem;
        }
      }
    }
  }

  @media (max-width: 1600px) {
    .size {
      .available-sizes {
        span {
          font-size: 0.842rem;
        }
      }
    }
  }

  @media (max-width: 1536px) {
    .size {
      .available-sizes {
        span {
          font-size: 0.8084rem;
        }
      }
    }
  }

  .qty {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.5rem;

    .label {
      margin-right: 1em;
    }

    .left-in-stock {
      color: var(--primary);
    }
  }

  @media (max-width: 375px) {
    .qty {
      display: block;

      .label-value {
        margin-bottom: 0.5rem;
      }
    }
  }

  .share {
    display: flex;
    margin-bottom: 1.5rem;

    .icon-text {
      display: flex;
      margin-right: 2.25rem;
    }

    .icon {
      margin-right: 0.5rem;
    }

    .text {
      color: var(--gray-15);
      font-size: 1.125rem;
    }
  }

  @media (max-width: 1680px) {
    .share {
      .icon-text {
        font-size: 0.884rem;
      }

      .text {
        font-size: 0.9947rem;
      }
    }
  }

  @media (max-width: 1600px) {
    .share {
      .icon-text {
        font-size: 0.842rem;
      }

      .text {
        font-size: 0.947rem;
      }
    }
  }

  @media (max-width: 1536px) {
    .share {
      .icon-text {
        font-size: 0.808rem;
      }

      .text {
        font-size: 0.909rem;
      }
    }
  }

  @media (max-width: 375px) {
    .share {
      display: block;

      .first-icon {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
