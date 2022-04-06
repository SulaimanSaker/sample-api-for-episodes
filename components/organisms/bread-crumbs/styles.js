import styled from "styled-components";

export const Styles = styled.div`
  .bread-crumbs {
    display: flex;
    padding-top: 0.8rem;
    padding-bottom: 1.75rem;
    border-top: 1px solid var(--gray-3);
  }

  @media (max-width: 960px) {
    .bread-crumbs {
      padding-bottom: 1.25rem;
    }
  }

  .link {
    color: var(--gray-8);
    font-size: 0.875rem;
    &:hover {
      color: var(--pink);
    }
  }

  .link.link--last {
    color: var(--gray-15);
    font-weight: 500;
  }

  .vertical-column {
    border-right: 1px solid var(--gray-8);
    height: 1rem;
    margin-left: 0.65rem;
    margin-right: 0.65rem;
  }
`;
