import styled from "styled-components";

export const Styles = styled.div`
  .arc-lines-container {
    transform: translateY(-5rem);

    display: flex;
    justify-content: center;
  }
  .wrapper {
    position: relative;

    border-bottom: 1px solid var(--gray-4);
    padding-bottom: 3.5rem;
  }

  .heading {
    font-weight: bold;

    color: var(--gray-15);
    text-transform: uppercase;
  }

  .comments {
    margin: 0;
  }
`;
