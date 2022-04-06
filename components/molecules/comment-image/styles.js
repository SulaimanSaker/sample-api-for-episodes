import styled from "styled-components";

export const Styles = styled.div`
  .comment-image {
    width: 200px;
    position: relative;

    img {
      width: 100%;
    }

    .cancel-icon {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;

      cursor: pointer;
      z-index: 1;
    }
  }
`;
