import styled from "styled-components";

export const Styles = styled.div`
  .mobile-list {
    .mobile-list__filter-button {
      display: flex;
      justify-content: center;

      margin-bottom: 1.5rem;
    }
  }

  .filter-popup {
    .header {
      width: 100%;
      padding-bottom: 1.2rem;
    }

    .title {
      display: flex;
      flex: 1;
      border-bottom: 0.1rem solid var(--gray-4);
      outline: none;
      font-size: 1.5rem;
      font-weight: 600;

      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .title span {
      position: relative;
      max-width: 90%;
      overflow-wrap: break-word;
    }

    .title span::after {
      content: "";
      position: absolute;
      bottom: -0.6rem;
      left: 0;
      width: 100%;
      height: 0.3rem;
      display: inline-block;
      background-color: var(--primary);
    }

    .checkboxs {
      padding: 0;
      margin-bottom: 2rem;

      .checkbox {
        list-style: none;
        margin-bottom: 1.05rem;
        font-size: 0.875rem;
      }

      .checkbox:last-child {
        margin-bottom: 0;
      }
    }

    .filter-popup__filters {
    }

    .checked-filters {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      width: 100%;

      margin-bottom: 1rem;
    }
  }

  .show-button {
    width: 15rem;

    .content {
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .arrow-right {
      position: absolute;
      right: -7.5px;

      line-height: 0.5;
      margin-bottom: 1px;
    }
  }

  @media (max-width: 300px) {
    .show-button {
      width: 80vw;
    }
  }
`;
