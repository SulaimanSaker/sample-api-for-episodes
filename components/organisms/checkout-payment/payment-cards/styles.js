import styled from "styled-components";

export const Styles = styled.div`
  .payment-cards {
    display: flex;
    flex-wrap: wrap;
  }

  .payment-cards__card {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    @media (max-width: 700px) {
      margin-top: 0.5rem;
    }
  }
`;
