import styled from "styled-components";

export const Styles = styled.div`
  .desktop-list__filters {
    flex: 0 0 25%;
    max-width: 25%;

    display: ${({ filtersCollapsed }) => (filtersCollapsed ? "block" : "none")};
  }

  .desktop-list__items-list {
    flex: ${({ filtersCollapsed }) => (filtersCollapsed ? "0 0 75%" : "0 0 100%")};
    max-width: ${({ filtersCollapsed }) => (filtersCollapsed ? "75%" : "100%")};
  }
`;
