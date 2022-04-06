import styled from "styled-components";

export const Styles = styled.div`
  .nav {
    justify-content: center;
    border-bottom: 1px solid var(--gray-3);
  }

  @media (max-width: 960px) {
    .nav {
      justify-content: flex-start;
    }
  }

  .nav-link {
    font-size: 1.45rem;
    color: var(--gray-8);
    text-transform: uppercase;
    padding: 1rem 1.7rem 0.75rem 1.7rem;
  }

  @media (max-width: 1680px) {
    .nav-link {
      font-size: 1.3rem;
      padding: 1rem 1.6rem 0.7rem 1.6rem;
    }
  }

  @media (max-width: 1600px) {
    .nav-link {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 1440px) {
    .nav-link {
      font-size: 1.1rem;
      padding: 1rem 1.5rem 0.55rem 1.5rem;
    }
  }

  @media (max-width: 1366px) {
    .nav-link {
      font-size: 1rem;
      padding: 1rem 1.36rem 0.5rem 1.25rem;
    }
  }

  @media (max-width: 1000px) {
    .nav-link {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 700px) {
    .nav-link {
      font-size: 0.8rem;
    }
  }

  .nav-link.active {
    color: var(--primary);
    font-weight: bold;
  }
`;
