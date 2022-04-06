import styled from "styled-components";

export const Styles = styled.div`
  .ovulation-results {
    padding: 5rem;

    @media (max-width: 567px) {
      padding: 1rem;
    }
  }

  .question {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 100%;
  }

  .col {
    border-right: 0.5px solid var(--primary);
  }

  .question-number {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding-bottom: 4px;
    font-weight: bold;
    margin-top: 1rem;

    @media (max-width: 567px) {
      width: 2rem;
      height: 2rem;
    }
  }

  .desc {
    color: var(--primary);
  }

  .row {
    display: flex;
    justify-content: center;
  }

  .get-results-btn {
    margin-top: 3rem;
  }

  .form-group {
    width: 90%;
    margin-bottom: 0;
  }

  .pregnant-radio-group {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  .form-control {
    height: 3rem;
    @media (max-width: 567px) {
      height: 2rem;
    }
  }
`;
