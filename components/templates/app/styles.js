import styled from "styled-components";

export const Styles = styled.div`
  .app-template__header {
    top: 0;
    width: 100%;
    z-index: 999;
    position: fixed;
  }

  .app-template__hero {
  }

  .app-template__nav {
  }

  .app-template__content {
    overflow-x: hidden;

    margin-top: ${({ hero }) => !hero && "11rem"};
  }

  @media (max-width: 1680px) {
    .app-template__content {
      margin-top: ${({ hero }) => !hero && "10rem"};
    }
  }

  @media (max-width: 1600px) {
    .app-template__content {
      margin-top: ${({ hero }) => !hero && "9.4rem"};
    }
  }

  @media (max-width: 1536px) {
    .app-template__content {
      margin-top: ${({ hero }) => !hero && "9rem"};
    }
  }

  @media (max-width: 1440px) {
    .app-template__content {
      margin-top: ${({ hero }) => !hero && "8.4rem"};
    }
  }

  @media (max-width: 1366px) {
    .app-template__content {
      margin-top: ${({ hero }) => !hero && "7.9rem"};
    }
  }

  @media (max-width: 960px) {
    .app-template__content {
      margin-top: ${({ hero }) => !hero && "7rem"};
    }
  }

  .app-template__footer {
  }
`;
