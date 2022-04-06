import styled from "styled-components";

export const Styles = styled.div`
  height: 100%;
  width: 100%;

  .thumbnail {
    width: 100%;
    height: 100%;

    .image-container {
      height: 145px;
      width: calc(100% - 16px);
      padding: 6px;
      border: ${({ isActive }) => isActive && "1px solid var(--gray-15)"};
    }

    @media (max-width: 1680px) {
      .image-container {
        height: 135px;
      }
    }

    @media (max-width: 1600px) {
      .image-container {
        height: 125px;
      }
    }

    @media (max-width: 1536px) {
      .image-container {
        height: 120px;
      }
    }

    @media (max-width: 1440px) {
      .image-container {
        height: 115px;
      }
    }

    @media (max-width: 1366px) {
      .image-container {
        height: 105px;
      }
    }

    .image-wrapper {
      background-color: #f0e9ed;
      width: 100%;
      height: 100%;
    }

    .image {
      width: 100%;
      height: 100%;
    }
  }
`;
