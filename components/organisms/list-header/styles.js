import styled from "styled-components";

export const Styles = styled.div`
  .list-header {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    border-top: 1px solid var(--gray-3);
    border-bottom: 1px solid var(--gray-3);
    color: var(--gray-8);
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.84rem;

    .form-control {
      font-size: 0.84rem;
      margin: 0 1rem;
    }
  }

  .list-header__column-type-chooser {
    display: flex;
    align-items: center;
  }

  .list-header__columns-type {
    margin-right: 0.65rem;
  }

  .list-header__columns-type.active rect,
  .list-header__columns-type.active path {
    fill: var(--gray-15);
  }

  .list-header__sorted-by {
    margin-right: 0.65rem;
  }

  .list-header__vertical-column {
    border-right: 2px solid var(--gray-13);
    height: 1rem;
    margin-right: 0.65rem;
  }

  .list-header__sorted-by-select {
    margin-bottom: 0;
  }

  .list-header__sorted-by-select .form-control {
    border: 0;
    padding: 0;
    height: initial;

    text-transform: uppercase;
    font-weight: bold;
    padding-right: 0.25rem;
  }

  .list-header__sorted-by-select .form-control:focus {
    box-shadow: unset;
    select {
      background-position: right 5px;
    }
  }

  .list-header__search-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--gray-4);
    border-radius: 2px;
    width: 13.5rem;

    .search-icon {
      padding: 0.3rem;
      padding-top: 0.1rem;
    }
  }

  .list-header__search-input {
    outline: none;
    border: none;
    display: inline-block;
    padding-bottom: 0.1rem;
  }
`;
