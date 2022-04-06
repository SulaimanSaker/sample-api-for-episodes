import styled, { css } from "styled-components";

const floatingLabel = css`
  top: -16px;
  font-size: 12px;
  color: var(--primary);
`;

export const Styles = styled.div`
  .input {
    position: relative;
  }

  input,
  textarea {
    background: none;
    color: var(--gray-15);
    font-size: 18px;
    padding: 0 7px 7px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid var(--gray-5);

    resize: none;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  input:focus ~ label,
  textarea:focus ~ label {
    ${({ value }) => !value && floatingLabel}
  }

  input:focus ~ .bar:before,
  textarea:focus ~ .bar:before {
    width: 100%;
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  label {
    color: var(--gray-8);
    font-size: 1rem;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 6px;
    transition: 300ms ease all;
    margin-bottom: 0;

    ${({ value }) => value && floatingLabel}
  }

  .bar {
    position: relative;
    display: block;
    width: 100%;
  }

  .bar:before {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: var(--primary);
    transition: 300ms ease all;
    left: 0%;
  }
`;
