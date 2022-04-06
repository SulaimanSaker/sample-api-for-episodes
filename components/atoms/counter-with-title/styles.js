import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;

  .counter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0d5e6;
    border-radius: 7px;
    padding: 0 1rem;

    @media (max-width: 567px) {
      width: 90%;
      margin: 0 auto;
    }
  }

  button {
    color: var(--primary);
    border: none;
    outline: none;
    background-color: #f0d5e6;
  }

  .count {
    color: var(gray-12);
  }
`;
