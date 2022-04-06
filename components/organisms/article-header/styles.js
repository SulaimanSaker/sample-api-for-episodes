import styled from "styled-components";

export const Styles = styled.div`
  .article-header {
    position: relative;
    height: calc(69vw * 0.565 + 110px);

    .article-header__carousel {
      /* height: 0.53 of the width */

      width: 69vw;
      height: calc(69vw * 0.565);

      padding-top: 110px;
      padding-left: 5.5rem;
      @media (max-width: 800px) {
        padding-top: 100px;
        padding-left: 5rem;
      }
      @media (max-width: 700px) {
        padding-top: 90px;
        padding-left: 4.5rem;
      }
      @media (max-width: 600px) {
        padding-top: 80px;
        padding-left: 3rem;
      }
      @media (max-width: 400px) {
        padding-top: 70px;
        padding-left: 2rem;
      }
      .image {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .last-updated {
      color: var(--primary);
    }

    @media (max-width: 1366px) {
      .article-header__carousel {
        padding-left: 3.5rem;
      }
    }
    @media (max-width: 800px) {
      .article-header__carousel {
        padding-left: 2.5rem;
      }
    }
    @media (max-width: 600px) {
      .article-header__carousel {
        padding-left: 1.5rem;
      }
    }

    .article-header__date {
      position: absolute;
      left: 71vw;
      top: 33.5vw;
      transform: rotate(-90deg);
      width: 400px;
      font-size: 1rem;
      transform-origin: 0;
      text-transform: uppercase;
      color: var(--gray-8);

      .release-date {
        color: var(--primary);
      }
    }

    @media (max-width: 1680px) {
      .article-header__date {
        font-size: 0.85rem;
        top: 33.5vw;
        left: 71vw;
      }
    }

    @media (max-width: 1536px) {
      .article-header__date {
        font-size: 0.75rem;
        top: 34vw;
        left: 71vw;
      }
    }

    @media (max-width: 1440px) {
      .article-header__date {
        font-size: 0.7rem;
      }
    }

    @media (max-width: 1366px) {
      .article-header__date {
        font-size: 0.65rem;
        left: 70.75vw;
      }
    }
    @media (max-width: 800px) {
      .article-header__date {
        transform: rotate(0deg);
        font-size: 0.65rem;
        left: 0;
        bottom: 0;
        margin-top: 3rem;
      }
    }
    @media (max-width: 600px) {
      .article-header__date {
        transform: rotate(0deg);
        font-size: 0.5rem;
        left: 0;
        bottom: 0;
        margin-top: 2rem;
      }
    }
    .article-header__svgs {
      .svg1 {
        fill: var(--gray-1);
        position: absolute;
        top: 55px;
        left: 0;
        width: 75vw;
        z-index: -1;
      }

      .svg2 {
        fill: var(--gray-00);
        position: absolute;
        top: 0;
        right: 0;
        z-index: -2;
      }

      @media (max-width: 1680px) {
        .svg1 {
          width: 74.5vw;
        }
      }

      @media (max-width: 1536px) {
        .svg1 {
          width: 74.25vw;
        }
      }

      @media (max-width: 1440px) {
        .svg1 {
          width: 74vw;
        }
      }

      @media (max-width: 1366px) {
        .svg1 {
          width: 74vw;
        }
      }
    }
  }

  @media (max-width: 1680px) {
    .article-header {
      height: calc(69vw * 0.565 + 90px);
    }
  }
`;
