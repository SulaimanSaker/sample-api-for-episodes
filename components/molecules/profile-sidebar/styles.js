import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d5b4c8;
  position: relative;

  .profile__Content {
    padding: 0 0 0 2rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
      padding: 0;
    }

    @media (max-width: 900px) {
      padding: 0rem 1rem 0 1rem;
    }

    @media (max-width: 576px) {
      padding: 0.5rem 0;
    }

    .profile__Content__logo {
      width: 13rem;

      @media (max-width: 1500px) {
        width: 10rem;
        height: 10rem;
      }

      @media (max-width: 1200px) {
        width: 8rem;
        height: 8rem;
      }

      @media (max-width: 900px) {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  .sidebar__top-section {
    display: flex;
    flex-direction: column;

    @media (max-width: 900px) {
      flex-direction: row;
    }

    @media (max-width: 576px) {
      justify-content: center;
    }
  }

  .sidebar__top-section__desc {
    color: #ae5b8d;
    margin: 3rem 0;

    @media (max-width: 767px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1.5rem 0;

      .desc__second {
        display: flex;

        div {
          margin-right: 4px;
        }
      }
    }

    @media (max-width: 576px) {
      display: none;
    }
  }

  .text {
    color: #ae5b8d;
    margin: 3rem 0;
  }

  .profile-menubar {
    height: 100%;
    overflow: hidden;
  }

  .accordion {
    margin: 0;
  }

  .accordion-item .accordion__header {
    width: 100%;

    button:first-child {
      border: none;
      outline: none;
      width: 100%;
      background: transparent;
      padding: 1rem 2rem;
      color: var(--gray-10);
      font-weight: 700;

      @media (max-width: 576px) {
        padding: 0.5rem;
      }

      &:focus {
        box-shadow: none;
      }

      button {
        padding: 0;
      }
    }

    .header__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #fff;
    }
  }
`;
