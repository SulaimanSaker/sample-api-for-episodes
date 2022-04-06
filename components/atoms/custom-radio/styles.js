import styled from "styled-components";

export const Styles = styled.div`
  .radio-item {
    display: inline-block;
    position: relative;
    padding: 0 6px;
    margin: 10px 0 0;
  }

  .radio-item input[type="radio"] {
    display: none;
  }

  .radio-item label {
    color: var(--gray-12);
    font-weight: normal;
  }

  .radio-item label:before {
    content: " ";
    display: inline-block;
    position: relative;
    top: 5px;
    margin: 0 5px 0 0;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    border: 2px solid var(--gray-12);
    background-color: transparent;
  }

  .radio-item input[type="radio"]:checked + label:after {
    border-radius: 25px;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 25%;
    left: 11px;
    content: " ";
    display: block;
    background: var(--primary);

    @media (min-width: 1670px) {
      top: 37%;
    }
    @media (max-width: 1096px) {
      top: 17%;
      left: 33%;
    }
    @media (max-width: 1096px) {
      top: 25%;
      left: 18%;
    }
  }
  input[type="radio"] {
    -webkit-appearance: none;
  }
`;
