import styled from "styled-components";

export const Styles = styled.div`
  .shopping-cart-item {
    position: relative;

    border-bottom: 1px solid var(--gray-4);

    .content {
      display: flex;

      @media (max-width: 900px) {
        flex-direction: column;
        margin: 0 3rem;
      }

      .first-second {
        display: flex;
        flex-basis: 46.5%;
        @media (max-width: 450px) {
          flex-direction: column;
        }
        .first {
          display: flex;

          .image-container {
            width: 170px;
            height: 190px;
            background-color: #f0e9ed;

            margin-right: 2.5rem;

            .image {
              width: 100%;
              height: 100%;
            }
          }
        }

        .second {
          color: var(--gray-15);
          line-height: 1.25;
          margin-top: 1rem;
          margin-bottom: 1rem;

          .name {
            text-transform: uppercase;
            margin-bottom: 0.25rem;
          }

          .title {
            text-transform: uppercase;
            line-height: 1;
            font-weight: bold;
            margin-bottom: 0.75rem;
          }

          .left-in-stock {
            color: var(--primary);
            margin-bottom: 1.25rem;
          }

          .label-value {
            display: flex;
            align-items: center;

            .label {
              font-weight: bold;
              text-transform: uppercase;
              margin-right: 0.5rem;
              color: var(--gray-15);
            }

            .value {
              color: var(--gray-8);
            }
          }

          .color {
            margin-bottom: 1rem;
          }
        }
      }

      .third {
        flex-basis: 28.5%;
        margin-top: 1rem;

        .prices {
          margin-bottom: 1.15rem;
          line-height: 1;

          .old-price {
            margin-right: 1rem;
            color: var(--gray-11);
            text-decoration: line-through;
          }

          .new-price {
            margin-right: 1rem;
            color: var(--primary);
            font-weight: bold;
            margin-bottom: 0.25rem;
          }

          sup {
            font-size: 0.6rem;
          }
        }

        .included {
        }
      }

      .fourth {
        display: flex;
        justify-content: space-between;

        flex-basis: 25%;

        .qty-controller-container {
          margin-top: 1rem;
          @media (max-width: 900px) {
            margin-top: 0;
            margin-bottom: 1rem;
          }
        }

        .exit {
          margin-right: 0.5rem;
          cursor: pointer;

          @media (max-width: 900px) {
            position: absolute;
            top: 0;
            right: 0;
            padding: 0 1rem;
          }
        }
      }
    }

    .footer {
      display: flex;
      align-items: center;

      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-left: 210px;

      @media (max-width: 900px) {
        margin: 1rem 3rem;
      }
      @media (max-width: 650px) {
        flex-direction: column;
        align-items: start;
      }
      .icon-text {
        display: flex;
        margin-right: 4rem;
        @media (max-width: 650px) {
          margin: 0.3rem 0;
        }
        .icon {
          margin-right: 0.5rem;
        }

        .text {
          color: var(--gray-15);
        }
      }

      .logo-container {
        position: absolute;
        right: 145px;
      }

      @media (max-width: 1680px) {
        .logo-container {
          right: 120px;
        }
      }

      @media (max-width: 1600px) {
        .logo-container {
          right: 112px;
        }
      }

      @media (max-width: 1536px) {
        .logo-container {
          right: 100px;
        }
      }

      @media (max-width: 1536px) {
        .logo-container {
          right: 75px;
        }
      }

      @media (max-width: 1366px) {
        .logo-container {
          right: 0;
        }
      }
      @media (max-width: 900px) {
        .logo-container {
          right: 3rem;
          bottom: 1rem;
        }
      }
      .logo {
        width: 160px;
        @media (max-width: 900px) {
          width: 120px;
        }
        @media (max-width: 600px) {
          width: 80px;
        }
      }
    }
  }
`;
