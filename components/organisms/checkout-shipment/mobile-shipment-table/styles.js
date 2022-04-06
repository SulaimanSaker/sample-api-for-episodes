import styled from "styled-components";

export const Styles = styled.div`
  .shipment-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 1rem;
  }
  .ship-card {
    margin: 1rem 0;
    padding: 1rem;
    box-shadow: 0rem 1rem 2rem rgba(0, 0, 0, 0.3);
    &-item {
      text-align: center;
      font-weight: bold;
      margin: 1rem 0;

      @media (max-width: 400px) {
        margin: 0.5rem;
      }
    }
  }
`;
