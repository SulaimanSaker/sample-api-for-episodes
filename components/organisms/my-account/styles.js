import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .topbar {
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 8rem;
    right: 0;
  }

  .profile__avatar {
    text-transform: uppercase;
    margin-right: 0.5rem;
    display: flex;
    align-items: center;

    span {
      color: var(--gray-12);
      margin-right: 0.5rem;
      font-weight: 700;
    }
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }

  .personal__information {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    justify-content: center;

    .content {
      width: 80%;
      padding-bottom: 10rem;
      @media (max-width: 1200px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  }
`;
