import styled from "styled-components";

export const Styles = styled.div`
  height: 50px;
  width: 50px;
  transform: scale(0.6);

  transform-origin: top;

  .check-icon {
    margin-bottom: 1rem;

    width: 60px;
    height: 60px;

    @media (max-width: 750px) {
      transform: scale(0.7);
    }

    @media (max-width: 550px) {
      transform: scale(0.6);
    }

    background: ${({ checked }) =>
      checked
        ? `url("/images/register/check.png") 0px -0px`
        : `url("/images/register/check.png") -60px -0px;`};

    display: inline-block;
  }
`;
