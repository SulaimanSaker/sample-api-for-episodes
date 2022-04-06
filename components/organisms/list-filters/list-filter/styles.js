import styled, { css } from "styled-components";

export const Styles = styled.div`
  .list-filter {
    .list-filter__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;
    }

    .list-filter__title {
      font-size: 1rem;
      font-weight: bold;
      color: var(--gray-15);
      line-height: 1rem;
      text-transform: uppercase;
    }

    .list-filter__arrow {
      padding-right: 17px;
      line-height: 1;
    }

    .list-filter-content {
      max-height: 0;
      overflow: hidden;
      transition: 0.25s ease;

      ${({ collapsed }) =>
        collapsed &&
        css`
          max-height: 100%;

          margin-bottom: 1.65rem;
          border-bottom: 1px solid var(--gray-4);
          padding-bottom: 1.4rem;
        `};
    }

    .list-filter__checkboxs {
      padding: 0;

      .list-filter__checkbox {
        list-style: none;
        margin-bottom: 1.05rem;
        font-size: 0.875rem;
      }

      .list-filter__checkbox:last-child {
        margin-bottom: 0;
      }
    }

    .list-filter__size-checkboxs {
      padding: 0;

      .list-filter__checkbox {
        list-style: none;
        margin-bottom: 1.05rem;
        font-size: 0.875rem;

        display: inline-block;
        width: 40%;
      }

      .list-filter__checkbox:last-child {
        margin-bottom: 0;
      }
    }

    .list-filter__prices {
      padding-right: 17px;
    }
  }
`;
