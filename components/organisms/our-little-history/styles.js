import styled from "styled-components";

export const Styles = styled.div`
  .our-little-history {
    padding-top: 4.5rem;
    padding-bottom: 4.5rem;
  }

  .our-little-history__content-container {
    width: 81.5%;
  }

  .our-little-history__content {
    position: relative;
    width: 90%;
  }

  @media (max-width: 1600px) {
    .our-little-history__content-container {
      width: 81%;
    }

    .our-little-history__content {
      position: relative;
      width: 90%;
    }
  }

  @media (max-width: 1366px) {
    .our-little-history__content-container {
      width: 80%;
    }
  }
`;
