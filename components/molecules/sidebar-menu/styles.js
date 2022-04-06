import styled from "styled-components";

export const Styles = styled.div`
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    @media (max-width: 900px) {
      display: flex;
      justify-content: center;
    }

    @media (max-width: 576px) {
      flex-direction: column;
    }
  }

  li {
    @media (max-width: 900px) {
      width: 100%;
    }

    button {
      position: relative;
      text-align: left;
      background: transparent;
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      padding: 1.3rem 0 1.3rem 1.1rem;
      color: #fff;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      transition: all 0.5s;
      z-index: 10000;

      @media (max-width: 900px) {
        padding: 0.5rem;
        justify-content: center;
      }

      &:hover {
        cursor: pointer;
        color: #ae5b8d;
        .sidebar__tab__icon {
          filter: invert(46%) sepia(9%) saturate(2723%) hue-rotate(271deg) brightness(90%)
            contrast(81%);
        }
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 1px;
        background-color: #fff;
        transform: scaleY(0);
        transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
          background-color 0.1s;
        z-index: -1;
      }

      &:hover::before {
        transform: scaleY(1);
        width: 100%;
        background-color: #fff;
      }
    }
  }

  .tab-selected {
    background-color: #fff;
  }

  .tab-selected button {
    color: #ae5b8d;

    .sidebar__tab__icon {
      filter: invert(46%) sepia(9%) saturate(2723%) hue-rotate(271deg) brightness(90%)
        contrast(81%);
    }
  }

  .sidebar__tab__icon {
    width: 3rem;
    height: 3rem;
    margin-right: 2rem;
    object-fit: contain;

    @media (max-width: 1200px) {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.7rem;
    }

    @media (max-width: 900px) {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
    }
  }
`;
