import styled from "styled-components";

export const Styles = styled.div`
  padding: 2rem 0;
  background-color: var(--gray-2);
  color: var(--gray-12);

  .footer {
    font-size: 1.0625rem;
  }

  @media (max-width: 1680px) {
    .footer {
      font-size: 0.9394rem;
    }
  }

  .info {
    padding-bottom: 1.65rem;
  }

  .divider {
    border-bottom: 1px solid var(--gray-4);
  }

  .contact-us {
    text-align: left;
  }

  @media (max-width: 960px) {
    .contact-us {
      text-align: center;
    }
  }

  .title {
    font-size: 1.1875rem;
    margin-bottom: 0.6rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  @media (max-width: 1680px) {
    .title {
      font-size: 1.05rem;
    }
  }

  .content {
    line-height: 1.6rem;
    a {
      &:hover {
        color: var(--pink);
      }
    }
  }

  .logo {
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
    text-align: center;
  }

  .social-links {
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    line-height: 1rem;
  }

  .google-play {
    padding-bottom: 0.5rem;
  }

  .developers {
    padding-top: 1.5rem;
    color: var(--gray-12);
    text-transform: uppercase;
    font-size: 0.875rem;
    line-height: 1.6rem;
  }

  @media (max-width: 1680px) {
    .developers {
      font-size: 0.773rem;
    }
  }
`;
