import styled from "styled-components";

export const Styles = styled.div`
  .side-nav {
    background-color: white;
    clip-path: polygon(83% 0, 100% 0, 100% 100%, 37% 100%);
    height: 100vh;
    position: absolute;
    width: 0;
    z-index: 3;
    right: 0;
    top: 0;
    transition: 0.5s;
    overflow: hidden;
  }

  .side-nav.show {
    width: 100%;
  }

  @media (max-width: 1366px) {
    .side-nav {
      clip-path: polygon(85% 0, 100% 0, 100% 100%, 39% 100%);
    }
  }

  .side-nav__nav {
    position: absolute;
    top: 13rem;
    right: -500px;
    transition: 0.5s;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .side-nav__nav.show {
    right: var(--full-width-distance);
    width: 37%;
  }

  @media (max-width: 1680px) {
    .side-nav__nav {
      top: 12.25rem;
    }
  }

  @media (max-width: 1366px) {
    .side-nav__nav {
      top: 9rem;
    }
  }

  .side-nav__user {
    margin-bottom: 4vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 57.5%;
    padding-bottom: 2rem;

    border-bottom: 1px solid var(--gray-7);

    .name {
      font-size: 1.5625rem;
      color: var(--gray);
      font-weight: bold;
    }

    .image-container {
      width: 4rem;

      .image {
        height: 4.5rem;
      }
    }

    @media (max-width: 1680px) {
      .name {
        font-size: 1.3rem;
      }

      .image-container {
        width: 3.5rem;

        .image {
          height: 4rem;
        }
      }
    }

    @media (max-width: 1366px) {
      .name {
        font-size: 1rem;
      }

      .image-container {
        width: 2rem;

        .image {
          height: 3rem;
        }
      }
    }
  }

  @media (max-width: 1680px) {
    .side-nav__user {
      width: 55%;
    }
  }

  @media (max-width: 1600px) {
    .side-nav__user {
      padding-bottom: 1.65rem;
      width: 56%;
    }
  }

  @media (max-width: 1536px) {
    .side-nav__user {
      padding-bottom: 1.65rem;
      width: 57%;
    }
  }

  @media (max-width: 1366px) {
    .side-nav__user {
      padding-bottom: 1.45rem;
      width: 53%;
    }
  }

  .side-nav__item {
    margin-bottom: 4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-right: 0.5rem;

    .icon-container {
      width: 4rem;

      .icon {
        height: 2.75rem;
      }
    }

    @media (max-width: 1680px) {
      .icon-container {
        width: 3.5rem;

        .icon {
          height: 2.35rem;
        }
      }
    }

    @media (max-width: 1366px) {
      .icon-container {
        width: 2rem;

        .icon {
          height: 2rem;
        }
      }
    }
  }

  @media (max-width: 1680px) {
    .side-nav__item {
      margin-bottom: 4.7vh;
    }
  }

  @media (max-width: 1366px) {
    .side-nav__item {
      margin-bottom: 4.7vh;
    }
  }

  .side-nav__link {
    font-size: 1.875rem;
    color: var(--gray);
    text-transform: uppercase;
    margin-right: 2rem;
  }

  @media (max-width: 1680px) {
    .side-nav__link {
      font-size: 1.5rem;
      margin-right: 1.85rem;
    }
  }

  @media (max-width: 1366px) {
    .side-nav__link {
      font-size: 1.25rem;
    }
  }

  .side-nav__footer {
    position: absolute;
    bottom: 2.5%;
    right: -500px;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;

    border-top: 1px solid var(--gray-7);
    padding-top: 0.75rem;

    .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .footer__language-switcher {
        display: flex;
        align-items: center;
        position: relative;

        .language-one {
          padding: 16px;
          background-color: white;
          border-radius: 100%;
          margin-right: 1rem;
          cursor: pointer;
          position: absolute;
          left: 20px;
        }

        .language-two {
          padding: 1rem;
          background-color: white;
          border-radius: 100%;
          cursor: pointer;
          position: absolute;
          right: 20px;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0, 0, 1, 1);
        }

        @media (max-width: 1599px) {
          .language-one {
            padding: 7.75px;
            left: 14px;
          }

          .language-two {
            padding: 7.75px;
            right: 14px;
          }
        }

        .language--selected {
          background-color: var(--gray-8);
        }

        :hover .language-two {
          opacity: 1;
        }
      }

      .side-nav__item {
        margin-bottom: 0;
      }
    }
  }

  .side-nav__footer.show {
    width: 50%;
    right: var(--full-width-distance);
  }

  @media (max-width: 1600px) {
    .side-nav__footer.show {
      width: 49%;
    }
  }

  @media (max-width: 1366px) {
    .side-nav__footer.show {
      width: 46%;
    }
  }
`;
