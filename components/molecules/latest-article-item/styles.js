import styled from "styled-components";

export const Styles = styled.div`
  height: 100%;
  width: 100%;

  .latest-article-item {
    position: relative;
    cursor: pointer;
    height: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .latest-article-item:hover .overlay {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .description {
    position: absolute;
    bottom: 0;
    padding: 0.75rem 0.9rem 0 0.9rem;
    width: 18rem;
    background-color: var(--gray-0);
  }

  @media (max-width: 1680px) {
    .description {
      width: 16rem;
    }
  }

  @media (max-width: 1600px) {
    .description {
      width: 15.5rem;
    }
  }

  @media (max-width: 1536px) {
    .description {
      width: 14.5rem;
    }
  }

  @media (max-width: 1440px) {
    .description {
      width: 14.5rem;
    }
  }

  @media (max-width: 1366px) {
    .description {
      width: 14.5rem;
    }
  }

  .details {
    max-height: 0;
    overflow: hidden;
    transition: 0.2s ease;
  }

  .latest-article-item:hover .details {
    max-height: 5rem;
  }

  .property1 {
    color: var(--gray-10);
    font-weight: bold;

    text-transform: uppercase;
    line-height: 1.3;
    font-size: 1.125rem;
  }

  .property2 {
    color: black;
    margin-top: 0.5rem;
    text-transform: uppercase;
    font-size: 0.875rem;
  }

  .property3 {
    margin-top: 0.5rem;
    color: var(--gray-11);
  }

  @media (max-width: 1680px) {
    .property1 {
      font-size: 0.994rem;
    }

    .property2 {
      font-size: 0.773rem;
    }

    .property3 {
      font-size: 0.884rem;
    }
  }

  @media (max-width: 1600px) {
    .property1 {
      font-size: 0.947rem;
    }

    .property2 {
      font-size: 0.736rem;
    }

    .property3 {
      font-size: 0.84rem;
    }
  }

  @media (max-width: 1536px) {
    .property1 {
      font-size: 0.9rem;
    }

    .property2 {
      font-size: 0.707rem;
    }

    .property3 {
      font-size: 0.8rem;
    }
  }

  .new {
    position: absolute;
    top: 15px;
    background: var(--primary);
    padding: 0.5rem 1.25rem;
    font-size: 1.125rem;
    color: white;
    border-radius: 5px;
    right: -15px;
  }

  @media (max-width: 1680px) {
    .new {
      font-size: 1.1rem;
      padding: 0.5rem 1.2rem;
    }
  }

  @media (max-width: 1600px) {
    .new {
      font-size: 1.05rem;
      padding: 0.5rem 1.15rem;
    }
  }

  @media (max-width: 1536px) {
    .new {
      font-size: 1rem;
      padding: 0.45rem 1.1rem;
    }
  }

  @media (max-width: 1440px) {
    .new {
      font-size: 0.95rem;
      padding: 0.45rem 1.05rem;
    }
  }

  @media (max-width: 1366px) {
    .new {
      font-size: 0.9rem;
      padding: 0.4rem 1rem;
    }
  }
`;
