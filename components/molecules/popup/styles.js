import styled from "styled-components";

export const Styles = styled.div`
  --footer-height: 6rem;

  overflow: hidden;
  height: auto;

  .popup {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100%;

    max-height: 0;
    transition: 0.3s ease;

    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1000;
  }

  .popup.showed {
    max-height: 100vh;
  }

  .popup__container {
    position: relative;
    min-width: 10rem;
    min-height: 10rem;
    overflow: auto;
    background-color: #fff;

    width: 100%;
    max-width: 100vw;
    height: 100%;
    max-height: 100vh;
    border-radius: 0;
  }

  .popup__x-button {
    position: absolute;
    top: calc(var(--top-distance) - 12px);
    right: 7vw;
  }

  .popup__content-container {
  }

  .popup__wrapper {
    height: ${({ withFooter }) => (withFooter ? "calc(100vh - var(--footer-height))" : "100vh")};
    overflow-y: scroll;
  }

  .popup__content {
    padding: var(--top-distance) var(--full-width-distance) 2rem var(--full-width-distance);
  }

  .popup__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1.5rem;

    border-top: 0.1rem solid var(--gray-3);

    height: var(--footer-height);
  }
`;
