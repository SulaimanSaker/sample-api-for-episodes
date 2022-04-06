import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;

  .accordion {
    margin: 2rem 0;
    border: 1px solid var(--gray-7);
    border-radius: 8px;
  }
  .accordion-item {
    border-bottom: 0.1rem solid var(--gray-4);
  }

  .accordion-item .accordion__header {
    width: 100%;
    button:first-child {
      border: none;
      outline: none;
      width: 100%;
      background: transparent;
      padding: 1rem 2rem;
      color: var(--gray-10);
      font-weight: 700;
      @media (max-width: 576px) {
        padding: 0.5rem;
      }
      &:focus {
        box-shadow: none;
      }
      button {
        padding: 0;
      }
    }
    .header__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .accordion-body {
    padding: 1rem 2rem;
  }

  .accordion__arrow svg {
    fill: var(--gray-14);
    stroke-width: 0;
    height: 1.5rem;
    width: 1.5rem;
    @media (max-width: 767px) {
      height: 1rem;
      width: 1rem;
    }
  }
`;
