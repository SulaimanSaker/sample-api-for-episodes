import styled from "styled-components";

export const Styles = styled.div`
  .section-header {
    position: relative;
    /* sometimes not render correctly so make it fixed padding value */
    padding-left: 2.5rem;

    @media (max-width: 576px) {
      padding-left: 0;
    }
  }

  .section-header__hint {
  }

  @media (max-width: 1680px) {
    .section-header__hint {
      font-size: 0.884rem;
    }
  }

  @media (max-width: 1600px) {
    .section-header__hint {
      font-size: 0.842rem;
    }
  }

  @media (max-width: 1536px) {
    .section-header__hint {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 1440px) {
    .section-header__hint {
      font-size: 0.757rem;
    }
  }

  @media (max-width: 1366px) {
    .section-header__hint {
      font-size: 0.75rem;
    }
  }

  .section-header__title {
    letter-spacing: 5px;

    .end-word {
      font-style: italic;
    }
  }

  @media (max-width: 1680px) {
    .section-header__title {
      letter-spacing: 4px;
    }
  }

  @media (max-width: 1600px) {
    .section-header__title {
      letter-spacing: 4px;
    }
  }

  @media (max-width: 1536px) {
    .section-header__title {
      letter-spacing: 4px;
    }
  }

  @media (max-width: 1440px) {
    .section-header__title {
      letter-spacing: 4px;
    }
  }

  @media (max-width: 1366px) {
    .section-header__title {
      letter-spacing: 3px;
    }
  }

  @media (max-width: 960px) {
    .section-header__title {
      letter-spacing: 3px;
    }
  }

  @media (max-width: 600px) {
    .section-header__title {
      letter-spacing: 1px;
    }
  }

  .default-lines rect,
  .default-lines circle {
    fill: #ddd;
  }

  .default-lines__circle {
    position: absolute;
    top: -29px;
    width: 15px;
    left: 0;
    fill: #ddd;
  }

  .default-lines__vertical-line {
    position: absolute;
    top: -65px;
    left: 7px;
    width: 1px;
    fill: #ddd;
  }

  .section-header__animated-button {
    padding-top: 12px;
  }

  @media (max-width: 1680px) {
    .section-header__animated-button {
      padding-top: 10px;
    }
  }

  @media (max-width: 1600px) {
    .section-header__animated-button {
      padding-top: 9px;
    }
  }

  @media (max-width: 1536px) {
    .section-header__animated-button {
      padding-top: 8px;
    }
  }

  @media (max-width: 1366px) {
    .section-header__animated-button {
      padding-top: 6px;
    }
  }
`;
