import styled from "styled-components";

export const Styles = styled.div`
  display: inline-block;

  .color-circle {
    cursor: pointer;

    .outer-circle {
      position: relative;

      background-color: white;
      padding: 20px;
      width: 20px;
      border-radius: 50%;
      border: ${({ color, selected }) => (selected ? `1px solid ${color || "black"}` : "none")};
    }

    .inner-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      background-color: ${({ color }) => color || "black"};
      padding: 18px;
      width: 18px;
      border-radius: 50%;
    }

    @media (max-width: 1680px) {
      .outer-circle {
        padding: 19px;
        width: 19px;
      }

      .inner-circle {
        padding: 17px;
        width: 17px;
      }
    }

    @media (max-width: 1600px) {
      .outer-circle {
        padding: 18px;
        width: 18x;
      }

      .inner-circle {
        padding: 16px;
        width: 16px;
      }
    }

    @media (max-width: 1536px) {
      .outer-circle {
        padding: 17px;
        width: 17px;
      }

      .inner-circle {
        padding: 15.5px;
        width: 15.5px;
      }
    }
  }
`;
