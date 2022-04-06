import styled from "styled-components";

export const Styles = styled.div`
  .saved-for-later {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.75rem;
    height: 100%;

    @media (max-width: 600px) {
      justify-content: center;
    }
  }

  .saved-for-later__item-container {
    height: 235px;
    padding-right: 2rem;
    margin-bottom: 2rem;
  }
`;
