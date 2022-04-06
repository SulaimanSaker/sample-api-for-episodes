import styled from "styled-components";

export const Styles = styled.div`
  .avatar {
    margin-right: 1rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      object-fit: cover;

      @media (max-width: 1680px) {
        width: 3.5rem;
        height: 3.5rem;
      }

      @media (max-width: 1600px) {
        width: 3rem;
        height: 3rem;
      }

      @media (max-width: 1536px) {
        width: 2.7rem;
        height: 2.7rem;
      }

      @media (max-width: 1440px) {
        width: 2.5rem;
        height: 2.5rem;
      }

      @media (max-width: 1366px) {
        width: 2.2rem;
        height: 2.2rem;
      }

      @media (max-width: 1000px) {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`;
