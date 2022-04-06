import styled from "styled-components";

export const Styles = styled.div`
  .expert {
    position: relative;
  }

  .expert__horizontal-line rect {
    fill: #dddddd;
  }

  .expert__horizontal-line {
    position: absolute;
    position: absolute;
    top: 130px;
    left: 0;
    width: 100%;
    z-index: -1;
    @media (max-width: 600px) {
      display: none;
    }
  }

  .expert__card {
    width: 63.5rem;
    margin: 0 auto;
    min-height: 300px;

    background: white;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
    .expert__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 1032px) {
        flex-direction: column-reverse;
        align-items: stretch;
      }
    }
    .expert__left-column {
      padding: 3rem 0 2.5rem 5rem;
      flex: 0 0 54%;
      max-width: 54%;
      align-self: flex-start;
      @media (max-width: 1032px) {
        flex: 1;
        width: 100vw;
      }
    }
    .expert__right-column {
      flex: 1;
      position: relative;
      @media (max-width: 1032px) {
        width: 100vw;
      }
      @media (max-width: 750px) {
        width: 100vw;
      }
    }
    .expert__title {
      color: var(--gray-15);
      margin-bottom: 0.5rem;
      text-transform: uppercase;
    }

    .expert__name {
      text-transform: uppercase;
      color: var(--gray-15);
      font-weight: bold;

      display: flex;
      align-items: center;

      .true-circle {
        margin-left: 0.75rem;
        @media (max-width: 1400px) {
          width: 1.5rem;
        }
        @media (max-width: 800px) {
          width: 1rem;
        }
      }
    }

    .expert__job {
      color: var(--primary);
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .expert__des {
      color: var(--gray-12);
      margin-bottom: 1.25rem;
    }

    .expert__image {
      position: absolute;
      right: 33%;
      width: 210px;
      bottom: 60px;
      z-index: 1;
      @media (max-width: 1032px) {
        width: 210px;
        right: 42%;
      }
      @media (max-width: 900px) {
        width: 200px;
        right: 41%;
      }
      @media (max-width: 800px) {
        width: 190px;
        bottom: 50px;
      }
      @media (max-width: 700px) {
        width: 170px;
        bottom: 45px;
      }
      @media (max-width: 600px) {
        width: 150px;
        bottom: 50px;
      }
      @media (max-width: 550px) {
        width: 120px;
        bottom: 40px;
        right: 44%;
      }
      @media (max-width: 500px) {
        width: 100px;
        bottom: 30px;
        right: 45%;
      }
      @media (max-width: 400px) {
        width: 75px;
        bottom: 10px;
        right: 45%;
      }
    }

    .expert__image-background {
      position: relative;
      width: 450px;
      right: 35px;
      @media (max-width: 1032px) {
        width: 50%;
      }
    }
  }
`;
