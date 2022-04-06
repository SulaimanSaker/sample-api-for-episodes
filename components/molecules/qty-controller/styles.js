import styled from "styled-components";

export const Styles = styled.div`
  .qty-controller {
    display: flex;
    justify-content: space-around;

    border: 1px solid var(--gray-6);
    border-radius: 10px;
    padding: 0 0.75rem;

    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > div:not(:last-of-type) {
        margin-right: 1.75rem;
      }

      .icon {
        cursor: pointer;
      }

      .value {
        color: var(--gray-15);
        font-size: 1.125rem;
      }

      @media (max-width: 1680px) {
        .value {
          font-size: 0.994rem;
        }
      }

      @media (max-width: 1600px) {
        .value {
          font-size: 0.947rem;
        }
      }

      @media (max-width: 1536px) {
        .value {
          font-size: 0.909rem;
        }
      }
    }
  }
`;
