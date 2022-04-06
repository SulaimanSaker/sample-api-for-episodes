import styled, { css } from "styled-components";

export const Styles = styled.div`
  .promo-code {
    padding: 0.5rem 1rem 0 1rem;
    border: 1px solid var(--gray-4);

    .promo-code__text {
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .list-header__search-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${({ collapsed }) =>
        collapsed &&
        css`
          max-height: 5rem;
          opacity: 1;
          padding-top: 0.5rem;
          padding-bottom: 1.5rem;
        `}

      ${({ collapsed }) =>
        !collapsed &&
        css`
          max-height: 0;
          opacity: 0;
        `}

      
      overflow: hidden;
      transition: 0.2s ease;

      .list-header__search-input {
        width: 100%;
        border: 1px solid var(--gray-4);
        border-radius: 6px;
        color: var(--gray-12);
        padding: 0.5rem 1rem;
      }
    }
  }
`;
