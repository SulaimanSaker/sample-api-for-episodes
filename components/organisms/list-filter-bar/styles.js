import styled from "styled-components";

export const Styles = styled.div`
  .list-filter-bar {
    background-color: var(--gray-0);

    .container > div {
      height: 4.2rem;
      margin-top: 0.75rem;
      margin-bottom: 1.65rem;
      position: relative;
    }

    .list-filter-bar__title {
      text-transform: uppercase;
      font-weight: bold;
      color: var(--gray-15);
      font-size: 1.2rem;
      line-height: 1;
    }

    .list-filter-bar__reset {
      margin-top: 0.4rem;
    }

    .list-filter-bar__checked-filters-popup {
      position: absolute;
      top: -2.1rem;
      left: -16.5px;

      width: 35rem;
      padding: 0 2rem;

      z-index: 1000;

      max-height: 4.2rem;
      overflow: hidden;
      transition: max-height 0.25s ease, background 0.25s ease;

      .header {
        height: 4.2rem;
        display: flex;
        align-items: center;
      }

      .menu-icon {
        cursor: pointer;
      }

      .filters-count {
        font-weight: bold;
        font-size: 1.1rem;
      }

      .reset-filters {
        margin-top: 0.75rem;
      }

      .checked-filters {
        display: none;
      }

      &.menu {
        background: white;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
        max-height: 20rem;

        .checked-filters {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          width: 100%;
        }
      }
    }
  }
`;
