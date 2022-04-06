import styled from "styled-components";

export const Styles = styled.div`
  .new {
    position: absolute;
    top: 9px;
    background: var(--primary);
    padding: 0.5rem 1.25rem;

    color: white;
    border-radius: 5px;
    right: -15px;
  }

  @media (max-width: 1680px) {
    .new {
      padding: 0.5rem 1.2rem;
    }
  }

  @media (max-width: 1600px) {
    .new {
      padding: 0.5rem 1.15rem;
    }
  }

  @media (max-width: 1536px) {
    .new {
      padding: 0.45rem 1.1rem;
    }
  }

  @media (max-width: 1440px) {
    .new {
      padding: 0.45rem 1.05rem;
    }
  }

  @media (max-width: 1366px) {
    .new {
      padding: 0.4rem 1rem;
    }
  }
`;
