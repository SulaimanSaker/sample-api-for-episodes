import styled from "styled-components";

export const Styles = styled.div`
  .prices {
    .prices-range {
      margin-bottom: 0.5rem;
      padding: 0 7px;

      .rc-slider-rail {
        background-color: var(--gray-8);
        height: 2px;
      }

      .rc-slider-track {
        background-color: var(--gray-8);
        height: 2px;
      }

      .rc-slider-handle:active {
        border-color: none;
        box-shadow: none;
      }

      .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
        border-color: none;
        box-shadow: none;
      }

      .rc-slider-handle-1 {
        background-color: var(--gray-8);
        border-color: var(--gray-8);
      }

      .rc-slider-handle-2 {
        background-color: var(--primary);
        border-color: var(--primary);
      }
    }

    .prices-value {
      display: flex;
      justify-content: space-between;

      font-size: 0.875rem;
    }
  }
`;
