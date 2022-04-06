import styled from "styled-components";

export const Styles = styled.div`
  .menu-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    transition: all 0.5s;
    padding: ${({ collapsed }) => (collapsed ? "1.35rem" : "1.75rem")};
    background-color: var(--gray-6);
    border-radius: 100%;
    box-shadow: 0 0 1rem rgb(0, 0, 0, 0.1);
  }

  @media (max-width: 1680px) {
    .menu-btn {
      padding: ${({ collapsed }) => (collapsed ? "1.35rem" : "1.5rem")};
    }
  }

  @media (max-width: 1600px) {
    .menu-btn {
      padding: ${({ collapsed }) => (collapsed ? "1rem" : "1.5rem")};
    }
  }

  @media (max-width: 1536px) {
    .menu-btn {
      padding: ${({ collapsed }) => (collapsed ? "1rem" : "1.4rem")};
    }
  }

  @media (max-width: 1440px) {
    .menu-btn {
      padding: ${({ collapsed }) => (collapsed ? "1rem" : "1.3rem")};
    }
  }

  @media (max-width: 1366px) {
    .menu-btn {
      padding: ${({ collapsed }) => (collapsed ? "1rem" : "1.15rem")};
    }
  }

  .menu-btn__burger {
    width: ${({ collapsed }) => (collapsed ? "1.2rem" : "1.4rem")};
    height: ${({ collapsed }) => (collapsed ? "1.2rem" : "1.4rem")};
    transition: all 0.5s;
  }

  @media (max-width: 1600px) {
    .menu-btn__burger {
      width: ${({ collapsed }) => (collapsed ? "1rem" : "1.2rem")};
      height: ${({ collapsed }) => (collapsed ? "1rem" : "1.2rem")};
    }
  }

  @media (max-width: 1366px) {
    .menu-btn__burger {
      width: ${({ collapsed }) => (collapsed ? "0.8rem" : "1rem")};
      height: ${({ collapsed }) => (collapsed ? "0.8rem" : "1rem")};
    }
  }

  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: "";
    position: absolute;
    width: ${({ collapsed }) => (collapsed ? "1.2rem" : "1.4rem")};
    height: 2px;
    background: white;
    border-radius: 5px;
    transition: all 0.5s;
    transform-origin: 0 0;
  }

  @media (max-width: 1600px) {
    .menu-btn__burger::before,
    .menu-btn__burger::after {
      width: ${({ collapsed }) => (collapsed ? "1rem" : "1.2rem")};
      height: 2px;
    }
  }

  @media (max-width: 1366px) {
    .menu-btn__burger::before,
    .menu-btn__burger::after {
      width: ${({ collapsed }) => (collapsed ? "0.8rem" : "1rem")};
      height: 2px;
    }
  }

  .menu-btn__burger::after {
    transform-origin: top right;
  }

  .menu-btn__burger::before {
    transform: ${({ collapsed }) => (collapsed ? "translateY(0.25rem)" : "translateY(0.35rem)")};
  }

  .menu-btn__burger::after {
    transform: ${({ collapsed }) => (collapsed ? "translateY(0.9rem)" : "translateY(1.05rem)")};
  }

  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translateX(0.3rem) translateY(-0.05rem);
  }

  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translateX(-0.3rem) translateY(-0.05rem);
  }

  @media (max-width: 1600px) {
    .menu-btn__burger::before {
      transform: ${({ collapsed }) => (collapsed ? "translateY(0.05rem)" : "translateY(0.15rem)")};
    }

    .menu-btn__burger::after {
      transform: ${({ collapsed }) => (collapsed ? "translateY(0.6rem)" : "translateY(0.75rem)")};
    }

    .menu-btn.open .menu-btn__burger::before {
      transform: rotate(45deg) translateX(0.275rem) translateY(-0.05rem);
    }

    .menu-btn.open .menu-btn__burger::after {
      transform: rotate(-45deg) translateX(-0.275rem) translateY(-0.05rem);
    }
  }

  @media (max-width: 1366px) {
    .menu-btn__burger::before {
      transform: ${({ collapsed }) => (collapsed ? "translateY(0.5)" : "translateY(0.15rem)")};
    }

    .menu-btn__burger::after {
      transform: ${({ collapsed }) => (collapsed ? "translateY(0.6rem)" : "translateY(0.75rem)")};
    }

    .menu-btn.open .menu-btn__burger::before {
      transform: rotate(45deg) translateX(0.225rem) translateY(-0.05rem);
    }

    .menu-btn.open .menu-btn__burger::after {
      transform: rotate(-45deg) translateX(-0.225rem) translateY(-0.05rem);
    }
  }
`;
