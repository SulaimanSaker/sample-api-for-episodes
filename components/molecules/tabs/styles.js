import styled from "styled-components";

export const Styles = styled.div`
  .nav {
    border-bottom: 1px solid var(--gray-3);
    margin-bottom: 1rem;
  }

  .nav-link {
    font-size: 1.5625rem;
    color: var(--gray-8);
    text-transform: uppercase;
    padding: 0 0.25rem 0.5rem 0.25rem;
    margin: 0 1.35rem;
    border: unset;
    font-weight: bold;
  }

  .nav-link:first-of-type {
    margin-left: 0;
  }

  .nav-link:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 1680px) {
    .nav-link {
      font-size: 1.4rem;
      margin: 0 1.25rem;
    }
  }

  @media (max-width: 1600px) {
    .nav-link {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 1440px) {
    .nav-link {
      font-size: 1.2rem;
      margin: 0 1.15rem;
    }
  }

  @media (max-width: 1366px) {
    .nav-link {
      font-size: 1.1rem;
      margin: 0 1rem;
    }
  }
  @media (max-width: 900px) {
    .nav-link {
      font-size: 1rem;
    }
  }
  @media (max-width: 600px) {
    .nav-link {
      font-size: 0.8rem;
    }
  }
  .nav-link.active {
    color: var(--primary);
    font-weight: bold;

    background-color: unset;
    border-color: unset;

    border-bottom: 3px solid var(--primary);
  }

  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border-color: unset;
  }
`;
