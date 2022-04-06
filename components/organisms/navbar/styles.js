import styled from "styled-components";

export const Styles = styled.div`
  .navbar {
    height: ${({ collapsed }) => (collapsed ? "6rem" : "8.6rem")};
    background-color: ${({ collapsed }) => collapsed && "white"};
    transition: height 0.5s, background-color 0.5s;
  }

  @media (max-width: 1600px) {
    .navbar {
      height: ${({ collapsed }) => (collapsed ? "4.5rem" : "6.25rem")};
    }
  }

  .navbar__logo {
    position: absolute;
    left: var(--full-width-distance);
    z-index: 10;
    transition: top 0.5s;

    .logo {
      height: ${({ collapsed }) => (collapsed ? "6em" : "7.75em")};

      transition: height 0.5s;
    }

    @media (max-width: 1680px) {
      .logo {
        height: ${({ collapsed }) => (collapsed ? "6em" : "7.75em")};
      }
    }

    @media (max-width: 1600px) {
      .logo {
        height: ${({ collapsed }) => (collapsed ? "4.5em" : "6.75em")};
      }
    }

    @media (max-width: 1366px) {
      .logo {
        height: ${({ collapsed }) => (collapsed ? "4.5em" : "5.2em")};
      }
    }
  }

  .navbar__hamburger {
    position: absolute;
    right: var(--full-width-distance);
    z-index: 10;
    transition: top 0.5s;
  }

  .navbar__logo,
  .navbar__hamburger {
    top: ${({ collapsed }) => (collapsed ? "18px" : "var(--top-distance)")};
  }

  .navbar__actions {
    display: flex;
    align-items: center;
    position: absolute;
    right: 14%;
    top: ${({ collapsed }) => (collapsed ? "34px" : "84px")};
    transition: top 0.5s;

    .btn-nav {
      margin-right: 1.5rem;
    }
  }

  @media (max-width: 1680px) {
    .navbar__logo,
    .navbar__hamburger {
      top: ${({ collapsed }) => (collapsed ? "18px" : "var(--top-distance)")};
    }

    .navbar__actions {
      right: 14.5%;
      top: ${({ collapsed }) => (collapsed ? "34px" : "61px")};
    }
  }

  @media (max-width: 1600px) {
    .navbar__logo,
    .navbar__hamburger {
      top: ${({ collapsed }) => (collapsed ? "13px" : "var(--top-distance)")};
    }

    .navbar__actions {
      right: 14.5%;
      top: ${({ collapsed }) => (collapsed ? "21px" : "54px")};
    }
  }

  @media (max-width: 1536px) {
    .navbar__actions {
      right: 14.5%;
      top: ${({ collapsed }) => (collapsed ? "21px" : "51px")};
    }
  }

  @media (max-width: 1440px) {
    .navbar__actions {
      right: 14.25%;
      top: ${({ collapsed }) => (collapsed ? "21px" : "48px")};
    }
  }

  @media (max-width: 1366px) {
    .navbar__actions {
      right: 16%;
      top: ${({ collapsed }) => (collapsed ? "22px" : "48.25px")};
    }
  }

  @media (max-width: 960px) {
    .navbar__actions {
      display: none;
    }
  }

  .search-icon {
    width: ${({ collapsed }) => (collapsed ? "1.8rem" : "2rem")};
    height: ${({ collapsed }) => (collapsed ? "1.8rem" : "2rem")};

    transition: 0.5s;
  }

  @media (max-width: 1366px) {
    .search-icon {
      width: ${({ collapsed }) => (collapsed ? "1.55rem" : "1.75rem")};
      height: ${({ collapsed }) => (collapsed ? "1.55rem" : "1.75rem")};
    }
  }
`;
