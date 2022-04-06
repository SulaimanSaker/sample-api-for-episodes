import styled from "styled-components";

export const Styles = styled.div`
  .dismissible-buttom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--gray-4);
    border-radius: 2px;

    .text {
      font-size: 0.875rem;
      padding: 0.25rem 0.9rem 0.25rem 0.75rem;
    }

    .close-icon {
      cursor: pointer;
    }
  }
`;
