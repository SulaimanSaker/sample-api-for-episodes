import styled from "styled-components";

export const Styles = styled.div`
  p,
  .right-column {
    color: var(--gray-12);
    line-height: 2;
  }

  .list {
    margin-bottom: 1rem;
  }

  @media (max-width: 1680px) {
    .right-column {
      font-size: 0.884rem;
    }
  }

  @media (max-width: 1600px) {
    .right-column {
      font-size: 0.842rem;
    }
  }

  @media (max-width: 1536px) {
    .right-column {
      font-size: 0.808rem;
    }
  }
`;
