import styled from "styled-components";

export const Styles = styled.div`
  display: block;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 1.15rem;
    width: 1.15rem;
    border: 1.2px solid var(--gray-6);
    border-radius: 12px;
  }

  /* On mouse-over, add a grey background color */
  .checkmark:hover {
    cursor: pointer;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */
  .checkmark.checked:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background: var(--gray-8);
    border-radius: 12px;
  }

  .space {
    padding-left: 2.2rem;
  }

  .label.checked {
    color: var(--gray-15);
    font-weight: bold;
  }
`;
