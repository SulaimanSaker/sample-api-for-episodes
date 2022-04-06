import styled from "styled-components";

export const Styles = styled.div`
  .client-image {
    width: 6rem;
    height: 6rem;
  }

  .client-name {
    font-weight: bold;

    color: var(--gray-15);
    margin-bottom: 0.5rem;
  }

  .text {
    color: var(--gray-12);
  }

  .likes-replies {
    button {
      border: none;
      background-color: transparent;
      padding: 0;
    }
  }
  .like-icon {
    width: 1.4rem;

    @media (max-width: 700px) {
      width: 1.2rem;
    }

    @media (max-width: 400px) {
      width: 1rem;
    }
  }
  .reply-button {
    text-transform: uppercase;
    font-weight: 600;
    color: var(--gray-15);

    border: 0;
    background: none;
  }

  .margin-befor-comments {
    margin-left: 2rem;

    @media (max-width: 576px) {
      margin-left: 0;
    }
  }
`;
