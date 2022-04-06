import styled from "styled-components";

export const Styles = styled.div`
  line-height: 1;
  width: 100%;

  button {
    padding: 0.75rem 1.25rem;

    min-height: 2.25rem;

    border: none;
    border-radius: 7px;

    font-size: 1rem;

    display: block;
    width: 100%;

    color: white;
    background-color: #2c6ad1;

    transition: background-color 0.5s;
  }

  button:hover {
    background-color: #4385f4;
  }

  @media (max-width: 1366px) {
    button {
      min-height: 1.85rem;
      padding: 0 1rem;
      font-size: 0.8rem;
    }
  }
`;
